import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import fs from 'fs';

const code = fs.readFileSync('src/data/bases.ts', 'utf8');

const App = () => React.createElement(ReactMarkdown, {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeRaw],
  children: code
});

try {
  const result = renderToString(React.createElement(App));
  console.log("SUCCESS length:", result.length);
} catch (e) {
  console.error("ERROR", e.message);
}
