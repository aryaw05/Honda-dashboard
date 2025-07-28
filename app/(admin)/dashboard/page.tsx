export default function Dashboard() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcf9f8] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3ebe7] px-10 py-3">
          <div className="flex items-center gap-4 text-[#1b120e]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363..."
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#1b120e] text-lg font-bold leading-tight tracking-[-0.015em]">
              MotoCatalog
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#99674d] flex border-none bg-[#f3ebe7] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06..." />
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b120e] focus:outline-0 focus:ring-0 border-none bg-[#f3ebe7] focus:border-none h-full placeholder:text-[#99674d] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  type="text"
                />
              </div>
            </label>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eb6c28] text-[#fcf9f8] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Add New Motorcycle</span>
            </button>
          </div>
        </header>

        {/* Lanjutkan bagian sidebar & dashboard content */}
        {/* Semua div lainnya bisa di-convert serupa */}
      </div>
    </div>
  );
}
