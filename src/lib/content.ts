import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface ContentItem {
  slug: string;
  frontmatter: Record<string, unknown>;
  content: string;
}

export function getContentBySlug(
  type: string,
  slug: string
): ContentItem | null {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}

export function getAllContent(type: string): ContentItem[] {
  const dir = path.join(contentDirectory, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return getContentBySlug(type, slug);
    })
    .filter((item): item is ContentItem => item !== null);
}

export function getAllSlugs(type: string): string[] {
  const dir = path.join(contentDirectory, type);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
