import type { DateRangeDto } from '@/api/internal/types/DateRangeDto';
import type { DateRange } from '@/types/DateRange';

export const asDateRange = (dateRange: DateRangeDto): DateRange => ({
  dateMin: new Date(dateRange.dateMin),
  dateMax: new Date(dateRange.dateMax),
});

export const asDateRangeOrUndefined = (dateRange?: DateRangeDto) =>
  dateRange ? asDateRange(dateRange) : undefined;
