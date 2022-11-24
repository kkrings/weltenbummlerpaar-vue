import { rest } from 'msw';
import { setupServer, type SetupServerApi } from 'msw/node';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { findDiaryEntry } from '@/api/findDiaryEntry';
import type { DiaryEntry } from '@/types/DiaryEntry';
import type { Image } from '@/types/Image';

const baseUrl = import.meta.env.WELTENBUMMLERPAAR_FRONTEND_API_BASE_URL;

function mockBackend(diaryEntry: DiaryEntry) {
  const url = `${baseUrl}/diary-entries/${diaryEntry.id}`;

  const handler = rest.get(url, (_req, res, ctx) => {
    return res(ctx.json(diaryEntry));
  });

  const server = setupServer(handler);
  server.listen({ onUnhandledRequest: 'error' });

  return server;
}

describe('findDiaryEntry', () => {
  let diaryEntry: DiaryEntry;
  let backend: SetupServerApi;

  beforeEach(() => {
    diaryEntry = {
      id: '63763144c13af3becf8f95f0',
      title: 'some title',
      location: 'some location',
      body: 'some body',
      searchTags: ['some search tag'],
      images: [],
      createdAt: new Date(2022, 11, 17),
      updatedAt: new Date(2022, 11, 17),
    };
  });

  describe('diary entry', () => {
    beforeEach(() => {
      backend = mockBackend(diaryEntry);
    });

    it('should have been found', async () => {
      expect(await findDiaryEntry(diaryEntry.id)).toEqual(diaryEntry);
    });
  });

  describe('diary entry with date range and preview image', () => {
    beforeEach(() => {
      diaryEntry.dateRange = {
        dateMin: new Date(2022, 11, 16),
        dateMax: new Date(2022, 11, 17),
      };

      const previewImage: Image = {
        id: '637f30223aec94e94d7226e2',
        description: 'some description',
        createdAt: new Date(2022, 11, 17),
        updatedAt: new Date(2022, 11, 17),
      };

      diaryEntry.images.push(previewImage);
      diaryEntry.previewImage = previewImage;
    });

    beforeEach(() => {
      backend = mockBackend(diaryEntry);
    });

    it('should have been found', async () => {
      expect(await findDiaryEntry(diaryEntry.id)).toEqual(diaryEntry);
    });
  });

  afterEach(() => {
    backend.close();
  });
});
