import { asImage } from '@/api/internal/parser/asImage';
import type { ImageDto } from '@/api/internal/types/ImageDto';
import type { Image } from '@/types/Image';

export const asImages = (images: ImageDto[]): Image[] =>
  images.map((image) => asImage(image));
