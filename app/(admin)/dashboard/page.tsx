import {
  DocumentPlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export default function Dashboard() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcf9f8] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3ebe7] px-10 py-6">
          <h2 className="text-[#1b120e] text-2xl font-bold leading-tight tracking-[-0.015em] ">
            Honda Dashboard
          </h2>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#99674d] flex border-none bg-[#f3ebe7] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0  resize-none overflow-hidden rounded-xl text-[#1b120e] focus:outline-0 focus:ring-0 px-4 border-none bg-[#f3ebe7] focus:border-none h-full placeholder:text-[#99674d] rounded-l-none border-l-0  text-base font-normal leading-normal"
                  type="text"
                />
              </div>
            </label>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eb6c28] text-[#fcf9f8] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">
                <DocumentPlusIcon className="h-5 w-5" />
              </span>
            </button>
          </div>
        </header>

        {/* Lanjutkan bagian sidebar & dashboard content */}
        {/* Semua div lainnya bisa di-convert serupa */}
      </div>
    </div>
  );
}
