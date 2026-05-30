/**
 * Resolves static asset paths (like /images/... or /icons/...) to their raw GitHub URL in the source repository.
 * This guarantees that all images and icons are loaded natively on the preview.
 */
export function resolveAsset(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  let cleanPath = path;
  // If path starts with public/, remove it
  if (cleanPath.startsWith('public/')) {
    cleanPath = cleanPath.substring(7);
  }
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  return cleanPath;
}
