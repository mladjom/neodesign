"use client";

import { CoreComponents } from './Core';
import { Callout } from './Callout';
import { ImageWithCaption } from './Image';
import { CodeBlock } from './CodeBlock';
import { CustomLink } from './Link';

export const MDXComponents = {
  ...CoreComponents,
  Callout,
  Image: ImageWithCaption,
  pre: CodeBlock,
  CodeBlock,
  a: CustomLink, 
  CustomLink,
};