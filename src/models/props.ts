import { News } from "./news";

export type NavigationProps = {
    onTitleFilterChange: (titleFilter: string) => void; // use to handle filter input value change
}

export type NewsCarouselProps = {
    news: News[]; // newsItem to render
}

export type MsgOverlayProps = {
    isLoading: boolean; // true or false to control the overlay
    displayMessage?: string; // customize display message if needed
}