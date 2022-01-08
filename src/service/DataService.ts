import { Dispatch, SetStateAction } from "react";
import iconSet from "../assets/selection.json";
import { iconList } from 'icomoon-react';
import Category from "../model/Category";
import Page from "../model/Page";
import Post from "../model/Post";

export default class DataService {
    private posts: Map<number, Post> = new Map();
    private categories: Map<number, Category> = new Map();
    private pages: Map<number, Page> = new Map();

    private readonly url: string = 'https://ddev-wordpress.ddev.site';

    async loadDataFromServer(setIsLoading: Dispatch<SetStateAction<boolean>>, setData: Dispatch<SetStateAction<DataService>>) {
        setIsLoading(true);

        const [rawCategories, rawPosts, rawPages] = await Promise.all([
            fetch(`${this.url}/wp-json/wp/v2/categories`).then(rawData => rawData.json()),
            fetch(`${this.url}/wp-json/wp/v2/posts?per_page=100`).then(rawData => rawData.json()),
            fetch(`${this.url}/wp-json/wp/v2/pages`).then(rawData => rawData.json()),
        ]);

        this.handleCategories(rawCategories);
        this.handlePosts(rawPosts);
        this.handlePages(rawPages);

        setData(this);
        setIsLoading(false);
    }

    handleCategories(data: any): void {
        // console.log(data);
        for (const dataEntry of data) {
            if (dataEntry.count > 0) {
                let category = new Category();
                category.id = dataEntry.id;
                category.name = dataEntry.name;
                category.description = dataEntry.description;
                category.count = dataEntry.count;
                category.parent = dataEntry.parent;
                category.slug = dataEntry.slug;
                category.color = dataEntry.acf.iconcolor;
                this.categories.set(category.id, category);
            }
        }
    }

    handlePosts(data: any): void {
        // console.log(data);
        console.log(iconList(iconSet));
        
        
        for (const dataEntry of data) {
            let post = new Post();
            post.id = dataEntry.id;
            post.title = dataEntry.title.rendered;
            post.content = dataEntry.content.rendered;
            post.excerpt = dataEntry.excerpt.rendered;
            post.date = dataEntry.date;
            post.slug = dataEntry.slug;
            post.categories = dataEntry.categories;
            post.icon = dataEntry.acf.iconname && iconList(iconSet).indexOf(dataEntry.acf.iconname) > -1 ? dataEntry.acf.iconname : 'potenz';

            let currentPostCategory = this.categories.get(post.categories[0]);
            if (currentPostCategory) {
                currentPostCategory.posts.push(post);
                this.categories.set(post.categories[0], currentPostCategory);
            }

            this.posts.set(post.id, post);
        }
    }

    handlePages(data: any): void {
        for (const dataEntry of data) {
            let page = new Post();
            page.id = dataEntry.id;
            page.title = dataEntry.title.rendered;
            page.content = dataEntry.content.rendered;
            page.excerpt = dataEntry.excerpt.rendered;
            page.date = dataEntry.date;
            page.slug = dataEntry.slug;
            this.pages.set(page.id, page);
        }
    }

    getAllPosts(): Post[] {
        const it = this.posts.values();
        return Array.from(it);
    }

    getFromPosts(slug: string): Post | undefined {
        return this.getAllPosts().find((post: Post) => post.slug === slug);
    }

    getAllCategories(): Category[] {
        const it = this.categories.values();
        return Array.from(it);
    }

    getFromCategories(slug: string): Category | undefined {
        return this.getAllCategories().find((category: Category) => category.slug === slug);
    }

    getFromCategoriesViaId(id: number): Category | undefined {
        return this.categories.get(id);
    }

    getFromPages(slug: string): Page | undefined {
        return Array.from(this.pages.values()).find((page: Page) => page.slug === slug);
    }

}