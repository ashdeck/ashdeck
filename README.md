<div align="center">

# ðŸ§˜ Ashdeck

### A free, open-source Pomodoro timer, site blocker & focus dashboard â€” built right into your browser's New Tab

Stop fighting your browser. Make it work *for* your focus instead of against it.

[![GitHub stars](https://img.shields.io/github/stars/ashdeck/ashdeck?style=social)](https://github.com/ashdeck/ashdeck/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ashdeck/ashdeck?style=social)](https://github.com/ashdeck/ashdeck/network/members)
[![License: AGPL-3.0](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](LICENSE)
[![Contributors](https://img.shields.io/github/contributors/ashdeck/ashdeck)](https://github.com/ashdeck/ashdeck/graphs/contributors)
[![Open Issues](https://img.shields.io/github/issues/ashdeck/ashdeck)](https://github.com/ashdeck/ashdeck/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[**Install on Chrome**](https://chromewebstore.google.com/detail/new-tab-pomodoro-timer-si/ahdbmagpbepplcdlfodgilcljafooimc) Â· [Website](https://ashdeck.com) Â· [Report a Bug](https://github.com/ashdeck/ashdeck/issues/new) Â· [Request a Feature](https://github.com/ashdeck/ashdeck/issues/new) Â· [Contributing](#-contributing)

<!--
ðŸ–¼ï¸ ADD A PRODUCT DEMO HERE â€” this is the single highest-impact addition to this README.
A 5â€“10 second GIF showing: opening a new tab â†’ the focus dashboard appears â†’
starting the Pomodoro timer â†’ blocking a distracting site.
Recommended size: ~800px wide, hosted in /docs/assets or via GitHub's
user-images CDN (drag-and-drop into a PR/issue comment to get a hosted URL).

<p align="center">
  <img src=".github/assets/ashdeck-demo.gif" alt="Ashdeck Pomodoro timer and site blocker running on the Chrome new tab page" width="800" />
</p>
-->

</div>

---

## âœ¨ What is Ashdeck?

**Ashdeck turns every new tab into a calm, distraction-free focus space.** Instead of opening a blank page (or your last open tab), every new tab becomes a personal dashboard with a built-in **Pomodoro timer**, a **site blocker** for distracting websites, a simple task list, and ambient focus soundscapes â€” all in one place, all free, all open source.

No separate app to switch to. No browser extension you forget exists. Just open a **new tab**, and your focus tools are already there, waiting.

- ðŸ†“ **100% free** â€” no premium tier, no paywalled features
- ðŸ”“ **Fully open source** under AGPL-3.0 â€” inspect it, fork it, self-host it
- âš¡ **Lightweight** â€” built with React, TypeScript, and Vite
- ðŸ§© **Zero setup** â€” install from the Chrome Web Store and it just works

---

## ðŸ“‹ Table of Contents

- [Features](#-features)
- [Install Ashdeck (for users)](#-install-ashdeck-for-users)
- [Run Ashdeck locally (for developers)](#-run-ashdeck-locally-for-developers)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Community & Support](#-community--support)
- [License](#-license)

---

## ðŸš€ Features

| | |
|---|---|
| â±ï¸ **Pomodoro Timer** | A built-in Pomodoro timer that starts the moment you open a new tab â€” no app-switching required to begin a focus session. |
| ðŸš« **Site Blocker** | Block distracting websites (social media, news, anything you choose) during focus sessions, directly from your new tab. |
| ðŸ†• **New Tab Dashboard** | Replaces your browser's default new tab page with a calm, purpose-built environment designed around what you're working on right now. |
| âœ… **Task List** | A lightweight task list built into the dashboard â€” capture what you're working on without leaving your new tab. |
| ðŸŽµ **Focus Soundscapes** | Ambient sound profiles to help you settle into deep work â€” rain, white noise, and more. |
| ðŸŒ“ **Clean, Minimal UI** | No clutter, no ads, no "upgrade to premium" prompts â€” just the tools you need to focus. |

---

## ðŸ“¥ Install Ashdeck (for users)

The easiest way to use Ashdeck is to install it directly from the Chrome Web Store:

### [âž¡ï¸ Install Ashdeck â€” New Tab Pomodoro Timer & Site Blocker](https://chromewebstore.google.com/detail/new-tab-pomodoro-timer-si/ahdbmagpbepplcdlfodgilcljafooimc)

1. Click **Add to Chrome**
2. Open a **new tab**
3. Your Pomodoro timer, site blocker, task list, and focus dashboard are ready to go â€” no account, no setup

> Currently available for **Chrome** and Chromium-based browsers (Brave, Edge, etc. via the Chrome Web Store).

---

## ðŸ›  Run Ashdeck Locally (for developers)

Want to contribute, customize, or self-host Ashdeck? Here's how to get a local development environment running.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/ashdeck/ashdeck.git
cd ashdeck

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available locally â€” open it in your browser to start developing.

### Loading the extension in Chrome (unpacked)

1. Run `npm run build` to generate a production build
2. Open `chrome://extensions` in Chrome
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the build output folder
5. Open a new tab to see your local build of the Ashdeck new tab dashboard

> ðŸ’¡ New here? Check out our [`CONTRIBUTING.md`](CONTRIBUTING.md) for a full walkthrough of the codebase and how to make your first contribution.

---

## ðŸ§° Tech Stack

Ashdeck is built with a modern, lightweight frontend stack:

- **React** + **TypeScript** + **Vite** â€” core framework and build tooling
- **Zustand** â€” lightweight state management
- **TanStack Query** â€” data fetching and caching
- **React Hook Form** â€” form handling
- **Axios** â€” HTTP requests
- **React Hot Toast** â€” notifications/toasts
- **IconSax** â€” icon set
- **Generouted** â€” file-based routing (Next.js-style routing for React + Vite)

---

## ðŸ“ Project Structure

Ashdeck uses a **file-based router** (via [Generouted](https://github.com/oedotme/generouted)) to keep the codebase organized in a way that should feel familiar if you've worked with Next.js.

```
src/
â”œâ”€â”€ components/     # Reusable UI components (CustomButton, FormInput, etc.)
â”œâ”€â”€ store/          # Zustand stores for global state
â”œâ”€â”€ pages/          # File-based routes (Generouted)
â”œâ”€â”€ hooks/          # Custom React hooks
â””â”€â”€ ...
```

A few things worth knowing before you dive in:

- **`CustomButton`** and **`FormInput`** are ready-made components â€” `FormInput` is designed to work with React Hook Form out of the box.
- Global state lives in `store/` using **Zustand** â€” check there before adding new state management.
- Routing follows the [Generouted](https://github.com/oedotme/generouted) convention â€” new pages just need to be added to the `pages/` directory.

---

## ðŸ—º Roadmap

- [ ] Firefox / Edge add-on store listings
- [ ] Customizable focus soundscape mixing
- [ ] Site blocker scheduling (recurring focus hours)
- [ ] Sync settings across devices
- [ ] Dark mode themes

Have an idea? [Open a feature request](https://github.com/ashdeck/ashdeck/issues/new) â€” we'd love to hear it.

---

## ðŸ¤ Contributing

Ashdeck is built in the open, and contributions of all sizes are welcome â€” from fixing a typo to building a whole new feature.

- ðŸŸ¢ New to the project? Look for issues labeled [`good first issue`](https://github.com/ashdeck/ashdeck/labels/good%20first%20issue)
- ðŸ› Found a bug? [Open an issue](https://github.com/ashdeck/ashdeck/issues/new)
- ðŸ’¡ Have a feature idea? [Open a feature request](https://github.com/ashdeck/ashdeck/issues/new)
- ðŸ“– Read [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup details and our PR process
- ðŸ¤ Please follow our [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)

Every star, issue, and pull request helps Ashdeck grow â€” thank you for being part of it. â­

---

## ðŸ’¬ Community & Support

- ðŸŒ [ashdeck.com](https://ashdeck.com)
- ðŸ¦ Follow updates and share what you're building with Ashdeck
- ðŸ—³ï¸ [GitHub Discussions](https://github.com/ashdeck/ashdeck/discussions) â€” introduce yourself, request features, or show off your setup

---

## ðŸ“„ License

Ashdeck is open source under the [AGPL-3.0 License](LICENSE).

---

<div align="center">

**If Ashdeck helps you focus, consider giving it a â­ â€” it helps others find this project.**

</div>
