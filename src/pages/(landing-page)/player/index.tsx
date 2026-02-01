'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type PendingLoad = {
  videoId: string;
  volume?: number;
};

export default function OfflinePlayerPage() {
  const playerRef = useRef<any>(null);
  const ytReadyRef = useRef(false);
  const pendingLoadRef = useRef<PendingLoad | null>(null);
  const commandQueueRef = useRef<Array<{ func: string; args: any[] }>>([]);

  useEffect(() => {
    // ------------------------------------
    // LOAD YOUTUBE IFRAME API
    // ------------------------------------
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);

    // ------------------------------------
    // YOUTUBE API READY
    // ------------------------------------
    window.onYouTubeIframeAPIReady = () => {
      ytReadyRef.current = true;

      window.parent?.postMessage({ type: 'playerReady' }, '*');

      // Handle pending load
      if (pendingLoadRef.current) {
        loadAndPlay(pendingLoadRef.current);
        pendingLoadRef.current = null;
      }

      // Flush queued commands
      while (commandQueueRef.current.length) {
        const { func, args } = commandQueueRef.current.shift()!;
        executeYouTubeCommand(func, args);
      }
    };

    // ------------------------------------
    // MESSAGE HANDLER
    // ------------------------------------
    const onMessage = (event: MessageEvent) => {
      const data = event.data || {};

      if (data.type === 'load') {
        const { videoId, volume } = data;

        if (!ytReadyRef.current) {
          pendingLoadRef.current = { videoId, volume };
        } else {
          loadAndPlay({ videoId, volume });
        }
        return;
      }

      if (data.type === 'play' && playerRef.current) {
        playerRef.current.unMute();
        playerRef.current.playVideo();
        return;
      }

      if (data.type === 'pause' && playerRef.current) {
        playerRef.current.pauseVideo();
        return;
      }

      if (data.type === 'setVolume' && playerRef.current) {
        const volume = data.volume;
        playerRef.current.setVolume(volume);
        if (volume === 0) playerRef.current.mute();
        else playerRef.current.unMute();
        return;
      }

      if (data.type === 'offscreen-youtube-command') {
        const { func, args = [], videoId } = data;

        // Special case: load by videoId
        if (func === 'loadVideoById' && videoId) {
          console.log('<<<<<<<<<<<<<<<<< Loaded here always >>>>>>>>>>>>>');
          loadAndPlay({
            videoId,
            volume: args?.[0] ?? 80,
          });
          return;
        }

        // Queue if player not ready
        if (!playerRef.current) {
          commandQueueRef.current.push({ func, args });
          console.log('Queued command:', func, args);
          return;
        }

        executeYouTubeCommand(func, args);
      }
    };

    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
    };
  }, []);

  // ------------------------------------
  // LOAD + PLAY
  // ------------------------------------
  const loadAndPlay = ({ videoId, volume }: PendingLoad) => {
    if (!playerRef.current) {
      playerRef.current = new window.YT.Player('player', {
        height: '0',
        width: '0',
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          playsinline: 1,
        },
        events: {
          onReady: (e: any) => {
            e.target.setVolume(volume ?? 80);
            e.target.unMute();
            // e.target.playVideo();
          },
        },
      });
    } else {
      playerRef.current.loadVideoById(videoId);
      playerRef.current.setVolume(volume ?? 80);
      playerRef.current.unMute();
      // playerRef.current.playVideo();
    }
  };

  // ------------------------------------
  // COMMAND EXECUTOR
  // ------------------------------------
  const executeYouTubeCommand = (func: string, args: any[] = []) => {
    const player = playerRef.current;

    if (!player) {
      console.warn('Player not ready');
      return;
    }

    if (typeof player[func] !== 'function') {
      console.warn('⚠️ Invalid YT command:', func);
      return;
    }

    console.log('🎬 Executing YT command:', func, args);
    player[func](...args);
  };

  return (
    <div>
      ..
      <div id="player" />
    </div>
  );
}
