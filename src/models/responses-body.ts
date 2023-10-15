export interface GetLatestNews {
  apikey?: string;
  language?: string; //"en" for english
  qlnTitle?: string; //filter "keyword" from title
  full_content?: number; //1 to return full content,
  size?: number; //1 - 50, control number of news return in payload
  prioritydomain?: string; // top - top 10% source, medium - top 30% source, low - top 50% source
  page?: number; //use this to get data from specific page (from previous request)
}