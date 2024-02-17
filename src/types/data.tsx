export type Post = {
    id: number;
    heading: string;
    price: string;
    date: string;
};

export type PageProps = {
posts: Post[];
totalPages: number;
};

export type PageParams = {
    page: string;
}