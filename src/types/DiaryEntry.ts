import type { DateRange } from '@/types/DateRange';
import type { Image } from '@/types/Image';

export interface DiaryEntry {
  id: string;
  title: string;
  location: string;
  dateRange?: DateRange;
  body: string;
  searchTags: string[];
  images: Image[];
  previewImage?: Image;
  createdAt: Date;
  updatedAt: Date;
}
