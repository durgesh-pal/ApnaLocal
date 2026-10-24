import { ArrowRight, Bell, BriefcaseBusiness, Building2, CheckCircle2, ChevronRight, CircleUserRound, Clock3, HeartHandshake, House, LayoutDashboard, MapPin, MessageSquareText, NotebookPen, ShieldCheck, Sparkles, Star, UserRoundCog, Wrench } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const primaryNav = [
  { label: 'Home', to: '/', icon: House },
  { label: 'Customer', to: '/customer', icon: UserRoundCog },
  { label: 'Providers', to: '/providers', icon: BriefcaseBusiness },
  { label: 'AI Assistant', to: '/ai-assistant', icon: Sparkles },
  { label: 'Community', to: '/community', icon: HeartHandshake },
  { label: 'Admin', to: '/admin', icon: ShieldCheck }
]

const mobileNav = [
  { label: 'Home', to: '/', icon: House },
  { label: 'Bookings', to: '/bookings', icon: NotebookPen },
  { label: 'Chat', to: '/chat', icon: MessageSquareText },
  { label: 'Profile', to: '/profile', icon: CircleUserRound } 
]

export function AppLayout() {
  const location = useLocation()
  const { notifications, currentUser } = useAppContext()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 font-bold text-brand-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg">ApnaLocal</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Jaunpur, UP</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full bg-slate-100 p-1 md:flex">
            {primaryNav.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-600 hover:bg-slate-200'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600">
              Demo mode • {currentUser?.locality ?? 'Jaunpur'}
            </div>
            <button className="relative rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm">
              <Bell className="h-4 w-4" />
              {notifications.filter((n) => !n.read).length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">
                  {notifications.filter((n) => !n.read).length}
                </span>
              )}
            </button>
            <Link to="/login" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
              Sign in
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <aside className="hidden w-64 shrink-0 pr-6 lg:block">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-500">Quick access</p>
            <div className="space-y-2">
              <Link to="/service-request/new" className="flex items-center justify-between rounded-2xl bg-brand-50 p-3 text-sm font-medium text-brand-700">
                Post a service request <ChevronRight className="h-4 w-4" />
              </Link>
              <Link to="/provider-register" className="flex items-center justify-between rounded-2xl border border-slate-200 p-3 text-sm font-medium text-slate-700">
                Join as provider <ChevronRight className="h-4 w-4" />
              </Link>
              <Link to="/privacy" className="flex items-center justify-between rounded-2xl border border-slate-200 p-3 text-sm font-medium text-slate-700">
                Safety & privacy <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white/95 p-2 backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
          {mobileNav.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[11px] font-medium ${
                  isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-500'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="pb-24" />
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 ApnaLocal. Built for Jaunpur, Uttar Pradesh.</div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-brand-700">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-700">Terms</Link>
            <Link to="/safety" className="hover:text-brand-700">Safety</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function LandingPage() {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[32px] bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-6 text-white shadow-soft sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-brand-100">
              <Sparkles className="h-3.5 w-3.5" /> AI-powered local help
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Har Zaroorat Ka Local Solution.</h1>
            <p className="text-base text-brand-50">Find verified local professionals, post service needs, and get fast community support across Jaunpur.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/signup" className="rounded-full bg-white px-5 py-3 font-semibold text-brand-700">Get started</Link>
              <Link to="/providers" className="rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white">Browse services</Link>
            </div>
          </div>
          <div className="w-full max-w-md rounded-[28px] bg-white/10 p-4 backdrop-blur-sm">
            <div className="rounded-[24px] bg-white p-5 text-slate-700 shadow-soft">
              <p className="mb-3 text-sm text-slate-500">Quick local needs</p>
              <div className="space-y-3">
                {['Plumber', 'Electrician', 'Tutor', 'Cleaning'].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                        {['🔧', '💡', '📚', '🧼'][index]}
                      </div>
                      <div>
                        <div className="font-semibold">{item}</div>
                        <div className="text-xs text-slate-500">Available today</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-brand-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: 'Verified local providers', value: '1,240+' },
          { title: 'Jobs resolved this week', value: '2,340' },
          { title: 'Average response time', value: '< 20 min' }
        ].map((card) => (
          <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="text-3xl font-bold text-brand-700">{card.value}</div>
            <div className="mt-2 text-slate-600">{card.title}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Popular categories</h2>
            <Link to="/categories" className="text-sm font-medium text-brand-700">View all</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Plumbing', 'Electrical', 'Cleaning', 'Tutoring'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 p-4">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-xl">{item === 'Plumbing' ? '🔧' : item === 'Electrical' ? '💡' : item === 'Cleaning' ? '🧼' : '📚'}</div>
                <div className="font-semibold">{item}</div>
                <div className="mt-1 text-sm text-slate-500">Trusted local professionals</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Why families choose ApnaLocal</h3>
          <div className="mt-5 space-y-4">
            {[
              'Verified and nearby professionals',
              'Simple request and booking flow',
              'Hindi and English friendly experience',
              'Community support with local aid'
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
