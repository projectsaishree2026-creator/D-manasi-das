export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-sky-100" />
          <div className="absolute inset-0 rounded-full border-4 border-sky-500 border-t-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full bg-sky-50 flex items-center justify-center">
            <span className="text-[#0EA5E9] font-bold text-sm font-outfit">M</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-neutral-700 font-semibold text-sm font-outfit">Dr. Manasi Das</p>
          <p className="text-neutral-400 text-xs mt-0.5">Loading...</p>
        </div>
      </div>
    </div>
  )
}
