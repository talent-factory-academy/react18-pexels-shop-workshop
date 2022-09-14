export interface User {
  id: number;
  name: string;
  url: string;
}

export interface VideoFile {
  id: number;
  quality: string;
  file_type: string;
  width?: number;
  height?: number;
  link: string;
}

export interface VideoPicture {
  id: number;
  picture: string;
  nr: number;
}

export interface Video {
  full_res?: any;
  tags: any[];
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: User;
  video_files: VideoFile[];
  video_pictures: VideoPicture[];
}

export interface PexelsVideoResponse {
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: Video[];
}

