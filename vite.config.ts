import { defineConfig, type HtmlTagDescriptor } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import viteTagger from "vite-tagger";
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig(({ mode }) => {
  // prepare environment variables
  const WB_SCRIPT_URL = process.env.WB_SCRIPT_URL;

  const injectWBScript: HtmlTagDescriptor | null = WB_SCRIPT_URL ? 
    {
      tag: 'script',
      attrs: {
        src: WB_SCRIPT_URL,
      },
      injectTo: "head",
    }: null;

    const HTML_INJECTION_TAGS: HtmlTagDescriptor[] = []
    if (injectWBScript) {
      HTML_INJECTION_TAGS.push(injectWBScript);
    }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      viteTagger({  enabled: true, prefixName: "wb" }),
        simpleHtmlPlugin({
          inject: {
            tags: HTML_INJECTION_TAGS,
          }
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
});
