import { TPost } from "./types";

const baseUrl = process.env.WORDPRESS_API_URL;

export async function fetchHelper(endpoint: string) {
    const res = await fetch(`${baseUrl}/${endpoint}`);
    const data = await res.json();
    return data;
}

export async function fetchBlogs(): Promise<TPost[]> {
    return fetchHelper("wp/v2/posts");
}

export async function fetchBlog(slug: string) {
    const blog = await fetchHelper(`wp/v2/posts?slug=${slug}&_embed`);
    return blog[0];
}
