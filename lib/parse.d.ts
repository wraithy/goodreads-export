declare type ParsedReviewIds = {
    reviewIds: number[];
    progress: string;
    isLastPage: boolean;
};
export declare function reviewIds(jsText: string): ParsedReviewIds;
declare type ParsedReview = {
    bookUrl: string;
    updates: {
        [key: string]: string;
    };
};
export declare function review(html: string): ParsedReview;
export {};
