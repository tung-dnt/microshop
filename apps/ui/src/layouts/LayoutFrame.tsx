import { NavBar } from '@/components/modules'

export default function LayoutFrame({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen bg-zinc-50 pt-[69px]">
      <NavBar />
      <section className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </section>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}
