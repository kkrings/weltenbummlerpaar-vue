import type { ImageDto } from '@/api/internal/types/ImageDto';
import type { Image } from '@/types/Image';

export const asImage = (image: ImageDto): Image => ({
  id: image.id,
  description: image.description,
  createdAt: new Date(image.createdAt),
  updatedAt: new Date(image.updatedAt),
});

export const asImageOrUndefined = (image: ImageDto | undefined) =>
  image ? asImage(image) : undefined;
