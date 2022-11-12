import { useBreakpoints as _useBreakpoints } from '@vueuse/core';
import { breakpoints } from '@/theme/breakpoints';

export const useBreakpoints = () => _useBreakpoints(breakpoints);
