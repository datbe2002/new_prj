export type EventValue<DateType> = DateType | null;

export type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;
