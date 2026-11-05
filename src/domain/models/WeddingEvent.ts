export interface LocationDetails {
  readonly title: string;
  readonly venueName: string;
  readonly address: string;
  readonly time: string;
  readonly dateFormatted: string;
  readonly mapUrl: string;
}

export interface TimelineScheduleItem {
  readonly id: string;
  readonly time: string;
  readonly title: string;
  readonly iconType: "church" | "cocktail" | "dinner" | "music" | "cake";
}

export interface DressCodePaletteColor {
  readonly name: string;
  readonly hex: string;
}

export interface WeddingEvent {
  readonly day: string;
  readonly month: string;
  readonly year: string;
  readonly fullDateDisplay: string;
  readonly ceremony: LocationDetails;
  readonly reception: LocationDetails;
  readonly gratitudeMessage: string;
  readonly timeline: TimelineScheduleItem[];
  readonly dressCode: {
    readonly type: string;
    readonly colors: DressCodePaletteColor[];
  };
}
