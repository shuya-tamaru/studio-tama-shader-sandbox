export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const existsGaId = GA_TRACKING_ID !== "";

export const pageview = (url: string): void => {
  if (!GA_TRACKING_ID) return;
  if (typeof window !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

type GaEventProps = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const event = ({
  action,
  category,
  label,
  value,
}: GaEventProps): void => {
  if (!GA_TRACKING_ID) return;
  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
