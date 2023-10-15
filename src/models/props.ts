import { News } from "./news";

export type NavigationProps = {
    onTitleFilterChange: (titleFilter: string) => void;
}

export type NewsCarouselProps = {
    news: News[];
}

export type MsgOverlayProps = {
    isLoading: boolean;
    displayMessage?: string;
}