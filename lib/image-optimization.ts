import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs/promises';
import path from 'path';

interface OptimizedImage {
  src: string;
  blurDataURL: string;
  width: number;
  height: number;
}

export async function getOptimizedImage(src: string): Promise<OptimizedImage> {
  try {
    // Handle remote images
    if (src.startsWith('http')) {
      const response = await fetch(src);
      const buffer = await response.arrayBuffer();
      
      const { base64, metadata } = await getPlaiceholder(Buffer.from(buffer));
      
      return {
        src,
        blurDataURL: base64,
        width: metadata.width || 1200,
        height: metadata.height || 630
      };
    }
    
    // Handle local images
    const fullPath = path.join(process.cwd(), 'public', src);
    const buffer = await fs.readFile(fullPath);
    
    const { base64, metadata } = await getPlaiceholder(buffer);
    
    return {
      src,
      blurDataURL: base64,
      width: metadata.width || 1200,
      height: metadata.height || 630
    };
  } catch (error) {
    console.error(`Error optimizing image ${src}:`, error);
    
    // Return fallback data
    return {
      src,
      blurDataURL: '',
      width: 1200,
      height: 630
    };
  }
}