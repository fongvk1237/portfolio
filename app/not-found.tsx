import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6">
      <p className="font-mono text-sm text-brand">404</p>
      <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
      <Link href="/" className="mt-6 text-sm underline underline-offset-4">
        Back to portfolio
      </Link>
    </main>
  )
}
