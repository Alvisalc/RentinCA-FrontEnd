import { ReactNode } from "react";

export type Post = {
    location: ReactNode;
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
    id?: string;
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
    id?: string;
    clerk_user_id: string;
    clerk_username: string;
    heading: string;
    sex: string;
    preferred_location: string;
    preferred_date: string;
    budget: number;
    about_me: string;
    about_roommate: string;
    contact: string;
}