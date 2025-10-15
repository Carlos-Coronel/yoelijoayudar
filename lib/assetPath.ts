export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  // ensure single slash between base and path
  if (!path) return base
  if (base && path.startsWith('/')) return `${base}${path}`
  if (base && !path.startsWith('/')) return `${base}/${path}`
  return path
}
