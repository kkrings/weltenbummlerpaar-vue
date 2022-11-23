import type { DateRangeDto } from '@/api/internal/types/DateRangeDto';
import type { ImageDto } from '@/api/internal/types/ImageDto';

export interface DiaryEntryDto {
  id: string;
  title: string;
  location: string;
  dateRange?: DateRangeDto;
  body: string;
  searchTags: string[];
  images: ImageDto[];
  previewImage?: ImageDto;
  createdAt: string;
  updatedAt: string;
}
