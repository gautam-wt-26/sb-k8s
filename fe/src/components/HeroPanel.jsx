export default function HeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-8 shadow-[0_20px_80px_rgba(2,8,23,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.2),_transparent_40%)]" />
      <div className="relative">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/90">Atmospheric insight</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Discover the sky over any city in seconds.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-300">
          A crafted weather experience built around live city data, expressive visuals, and calm, modern interactions.
        </p>
      </div>
    </div>
  )
}
