import { useEffect } from "react";
import { SEOMetadata } from "../types";

interface SEOProps {
  metadata: SEOMetadata;
}

export default function SEO({ metadata }: SEOProps) {
  useEffect(() => {
    if (metadata) {
      document.title = metadata.title;
      
      // Update or create meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", metadata.description);

      // Open Graph titles
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute("content", metadata.ogTitle || metadata.title);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement("meta");
        ogDesc.setAttribute("property", "og:description");
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute("content", metadata.ogDescription || metadata.description);
    }
  }, [metadata]);

  return null;
}
