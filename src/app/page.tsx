const partnerLogos = ["Luma", "Pulse", "Helio", "Synthex"];

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M21.8 12.23c0-.71-.06-1.24-.19-1.8H12v3.68h5.64c-.11.91-.73 2.27-2.1 3.19l-.02.12 3.06 2.32.21.02c1.93-1.74 3.01-4.3 3.01-7.53Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.76 0 5.08-.89 6.77-2.42l-3.23-2.46c-.86.59-2 1.01-3.54 1.01-2.7 0-4.99-1.74-5.81-4.14l-.12.01-3.18 2.41-.04.11A10.24 10.24 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.19 13.99A6.03 6.03 0 0 1 5.85 12c0-.69.13-1.35.34-1.99l-.01-.13-3.22-2.45-.1.04A9.84 9.84 0 0 0 1.8 12c0 1.59.38 3.1 1.06 4.46l3.33-2.47Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.87c1.94 0 3.24.82 3.98 1.5l2.9-2.77C17.07 2.95 14.76 2 12 2a10.24 10.24 0 0 0-9.14 5.54l3.33 2.54C7.01 7.61 9.3 5.87 12 5.87Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid w-full overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.14)] lg:min-h-[720px] lg:grid-cols-[1.08fr_0.92fr]">
          <section className="relative hidden overflow-hidden bg-surface-strong px-10 py-10 text-white lg:flex lg:flex-col lg:justify-between xl:px-14 xl:py-12">
            <div className="absolute inset-0">
              <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-blue-500/18 blur-3xl" />
              <div className="absolute bottom-12 right-8 h-64 w-64 rounded-full bg-cyan-400/16 blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_45%,transparent)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-[0_10px_30px_rgba(15,23,42,0.25)]">
                <div className="grid h-5 w-5 grid-cols-2 gap-1">
                  <span className="rounded-sm bg-white" />
                  <span className="rounded-sm bg-blue-300" />
                  <span className="rounded-sm bg-cyan-300" />
                  <span className="rounded-sm bg-white/70" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">Northstar</p>
                <p className="text-sm text-blue-100/70">Workspace access portal</p>
              </div>
            </div>

            <div className="relative z-10 max-w-lg">
              <p className="max-w-md text-5xl font-semibold leading-[1.05] tracking-[-0.04em]">
                Secure access for teams shipping fast.
              </p>
              <p className="mt-5 max-w-md text-base leading-7 text-blue-100/72">
                Keep sign-in simple while protecting product, customer, and
                billing workflows behind a single trusted workspace.
              </p>

              <div className="mt-10 rounded-[28px] border border-white/12 bg-white/8 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-blue-100/70">Team visibility</p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight">
                      98.4%
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-300/30 bg-emerald-300/12 px-3 py-1 text-xs font-medium text-emerald-200">
                    Session healthy
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/24 p-4">
                    <div className="flex items-center justify-between text-sm text-blue-100/74">
                      <span>Member authentication</span>
                      <span>6.2s avg</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 to-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {partnerLogos.map((logo) => (
                      <div
                        key={logo}
                        className="rounded-2xl border border-white/10 bg-white/7 px-3 py-4 text-center text-sm font-medium text-blue-50/86"
                      >
                        {logo}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 max-w-sm rounded-[24px] border border-white/12 bg-white/7 p-5 text-sm leading-6 text-blue-100/74 backdrop-blur-sm">
              “One screen, clear trust signals, and no wasted motion. That’s
              the whole point of a good login flow.”
            </div>
          </section>

          <section className="flex items-center justify-center px-5 py-8 sm:px-8 lg:px-12">
            <div className="w-full max-w-md">
              <div className="mb-8 lg:hidden">
                <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <div className="grid h-4 w-4 grid-cols-2 gap-0.5">
                      <span className="rounded-[2px] bg-white" />
                      <span className="rounded-[2px] bg-blue-300" />
                      <span className="rounded-[2px] bg-cyan-300" />
                      <span className="rounded-[2px] bg-white/70" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Northstar
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Workspace access portal
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-border bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
                <div>
                  <h1 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                    Welcome back
                  </h1>
                  <p className="mt-3 text-[15px] leading-6 text-muted-foreground">
                    Sign in to manage projects, review activity, and keep your
                    team moving.
                  </p>
                </div>

                <form className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-[15px] text-slate-950 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-ring"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-slate-700"
                      >
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary transition hover:text-primary-strong"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-[15px] text-slate-950 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-ring"
                    />
                  </div>

                  <label className="flex items-center gap-3 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                      defaultChecked
                    />
                    Remember me on this device
                  </label>

                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Sign in
                  </button>
                </form>

                <div className="my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                    Or continue with
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <GoogleIcon />
                  Sign in with Google
                </button>

                <p className="mt-8 text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <a
                    href="#"
                    className="font-semibold text-slate-950 transition hover:text-primary"
                  >
                    Create one
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
