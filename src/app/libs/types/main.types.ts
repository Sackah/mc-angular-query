export type User = {
    email: string;
    token: string;
    username: string;
    bio: string | null;
    image: string | null;
};

export type PaginationParams = {
    limit: number;
    offset: number;
};
