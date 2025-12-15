export type ContentArea = 'ims' | 'saas';

export interface AreaConfig {
  id: ContentArea;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  href: string;
  color: {
    bg: string;
    border: string;
    text: string;
    accent: string;
  };
}

export interface AreaContext {
  area: ContentArea;
  config: AreaConfig;
}
