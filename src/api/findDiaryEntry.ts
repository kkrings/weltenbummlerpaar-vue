import { asDiaryEntry } from '@/api/internal/parser/asDiaryEntry';
import backend from '@/api/internal/backend';

export async function findDiaryEntry(diaryEntryId: string) {
  const { data } = await backend.get(`/diary-entries/${diaryEntryId}`);
  return asDiaryEntry(data);
}
