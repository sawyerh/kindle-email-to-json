/// <reference types="node" />
import { Readable } from "stream";

interface KindleEmailHighlight {
  color?: string;
  content: string;
  location?: string;
  notes?: {
    content: string;
    location?: string;
  };
}

interface KindleEmailData {
  highlights: KindleEmailHighlight[];
  volume: {
    authors: string[];
    title: string;
  };
}

declare function toJSON(
  source: Readable | ReadableStream | Blob
): Promise<KindleEmailData>;

export = toJSON;
