import { rest } from 'msw';
import { setupServer, type SetupServerApi } from 'msw/node';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { findDiaryEntry } from '@/api/findDiaryEntry';
import type { DiaryEntry } from '@/types/DiaryEntry';

const baseUrl = import.meta.env.WELTENBUMMLERPAAR_FRONTEND_API_BASE_URL;

describe('findDiaryEntry', () => {
  let diaryEntry: DiaryEntry;
  let url: string;

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

  beforeEach(() => {
    url = `${baseUrl}/diary-entries/${diaryEntry.id}`;
  });

  describe('diary entry', () => {
    let server: SetupServerApi;

    beforeEach(() => {
      const handler = rest.get(url, (_req, res, ctx) => {
        return res(ctx.json(diaryEntry));
      });

      server = setupServer(handler);
    });

    beforeEach(() => {
      server.listen({ onUnhandledRequest: 'error' });
    });

    it('should have been found', async () => {
      expect(await findDiaryEntry(diaryEntry.id)).toEqual(diaryEntry);
    });

    afterEach(() => {
      server.close();
    });
  });
});
