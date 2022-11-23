import { asDateRangeOrUndefined } from '@/api/internal/parser/asDateRange';
import { asImageOrUndefined } from '@/api/internal/parser/asImage';
import { asImages } from '@/api/internal/parser/asImages';
import { removeUndefined } from '@/utils/removeUndefined';
import type { DiaryEntryDto } from '@/api/internal/types/DiaryEntryDto';
import type { DiaryEntry } from '@/types/DiaryEntry';

export const asDiaryEntry = (diaryEntry: DiaryEntryDto): DiaryEntry =>
  removeUndefined({
    id: diaryEntry.id,
    title: diaryEntry.title,
    location: diaryEntry.location,
    dateRange: asDateRangeOrUndefined(diaryEntry.dateRange),
    body: diaryEntry.body,
    searchTags: diaryEntry.searchTags,
    images: asImages(diaryEntry.images),
    previewImage: asImageOrUndefined(diaryEntry.previewImage),
    createdAt: new Date(diaryEntry.createdAt),
    updatedAt: new Date(diaryEntry.updatedAt),
  });
