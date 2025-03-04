// lib/cms/index.ts
import { CmsAdapter } from './interfaces';
import { FileSystemCmsAdapter } from './file-system-adapter';

// Factory function to get the appropriate CMS adapter
export function getCmsAdapter(): CmsAdapter {
  // For now, default to file system adapter
  // In the future, you could switch based on environment variables
  return new FileSystemCmsAdapter();
}

// Export a singleton instance for use throughout the app
export const cmsAdapter = getCmsAdapter();