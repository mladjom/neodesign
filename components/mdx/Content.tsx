// components/MDXContent.tsx
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import Callout from './Callout';
import CollapsibleCode from './CollapsibleCode';

// Define custom components for MDX
const components = {
  // Override default elements
  img: (props: any) => (
    <div className="my-6">
      <Image 
        {...props} 
        alt={props.alt || 'Blog image'} 
        width={800} 
        height={500} 
        className="rounded-lg mx-auto"
        loading="lazy"
      />
    </div>
  ),
  a: (props: any) => (
    <Link href={props.href}>
      <a className="text-blue-600 hover:underline" {...props} />
    </Link>
  ),
  
  // Custom components
  Callout,
  CollapsibleCode,
};

interface MDXContentProps {
  content: MDXRemoteSerializeResult;
}

export default function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote {...content} components={components} />
    </div>
  );
}