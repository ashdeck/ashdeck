export default function Welcome(): JSX.Element {

  return (
    <div className="bg-white h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden absolute left-0 top-0 z-50">
      <div className="max-w-4xl w-full">
        <h3 className="text-3xl font-semibold text-center mb-8 text-black">
          🎉 Congratulations — Ashdeck is now installed
        </h3>

        <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-50 rounded-xl p-8 shadow-sm">
          {/* Text */}
          <div className="text-black flex-1 text-left">
            <h2 className="font-bold text-2xl mb-3">To make Ashdeck active:</h2>
            <p className="text-gray-700 leading-relaxed text-[1.2rem]">
              When you open a new tab, click the{" "}
              <span className="text-red-500 font-semibold text-lg">
                "Keep it"
              </span> button to prevent Chrome from disabling Ashdeck
            </p>
            <p className="text-red-500 mt-6 text-lg font-medium">
              Open Chrome to start (Ctrl + T / ⌘ + T)
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-sm">
            <img
              src="/images/click_guide.png"
              alt="Ashdeck setup guide"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
