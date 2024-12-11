"use client";

import { useMemo } from 'react';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { remark } from 'remark';

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export function Mdx({ code }: MdxProps) {
  const content = useMemo(() => {
    const processedContent = remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .processSync(code);
    
    return processedContent.toString();
  }, [code]);

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none
      prose-headings:scroll-mt-20
      prose-h1:text-4xl prose-h1:font-bold
      prose-h2:text-3xl prose-h2:font-semibold
      prose-h3:text-2xl prose-h3:font-medium
      prose-p:text-base prose-p:leading-7
      prose-li:text-base prose-li:leading-7
      prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
      prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg
      prose-img:rounded-lg
      prose-a:text-primary hover:prose-a:opacity-80
    ">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}