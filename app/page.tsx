export default function Page() {
  const buildId = process.env["PLOYDOK_BUILD_ID"] ?? "unknown"
  return (
    <main>
      <h1>hello from ploydok (nextjs)</h1>
      <p data-testid="build-id">build: {buildId}</p>
    </main>
  )
}
