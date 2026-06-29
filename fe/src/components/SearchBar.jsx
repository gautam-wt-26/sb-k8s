export default function SearchBar({ city, setCity, onSubmit, loading, error }) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl rounded-[28px] border border-white/15 bg-slate-900/70 p-3 shadow-[0_15px_60px_rgba(8,15,30,0.35)] backdrop-blur-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">City name</span>
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Search for a city"
            className="w-full rounded-[20px] border border-white/10 bg-slate-950/80 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="rounded-[20px] bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-5 py-3 font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Checking...' : 'Check weather'}
        </button>
      </div>

      {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}
    </form>
  )
}
