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

export interface RentPostData {
    clerk_user_id: string;
    clerk_username: string;
    heading: string;
    location: string;
    type: string;
    size: string;
    price: number;
    date: string;
    utilities?: string;
    environment?: string;
    expectation?: string;
    about_roommate?: string;
    contact: string;
}

export interface RoommatePostData {
    type: string;
    size: string;
    location: string;
    price: number;
    post_id?: number; // Optional since it will be added after inserting into Post
}