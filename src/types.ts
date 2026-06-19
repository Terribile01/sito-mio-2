export interface SEOMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface SitemapItem {
  id: string;
  name: string;
  path: string;
  excludeFromNavbar: boolean;
  seo: SEOMetadata;
}

export interface ThemePalette {
  text_primary: string;
  text_secondary: string;
  text_tertiary: string;
  bg_main: string;
  bg_dark: string;
  btn_primary_bg: string;
  btn_primary_text: string;
  btn_secondary_bg: string;
  btn_secondary_text: string;
  btn_tertiary_bg: string;
  btn_tertiary_text: string;
  accent_primary: string;
  accent_secondary: string;
  hover_primary: string;
  hover_secondary: string;
  border_main: string;
  border_accent: string;
}

export interface NavbarTheme {
  background: string;
  blur: string;
  border: string;
}

export interface CTAButton {
  bg: string;
  text: string;
  hover: string;
  shadow: string;
}

export interface CTASecondary {
  border: string;
  text: string;
  hover_bg: string;
}

export interface CTATheme {
  primary: CTAButton;
  secondary: CTASecondary;
}

export interface ThemeConfig {
  palette: ThemePalette;
  navbar: NavbarTheme;
  cta: CTATheme;
}

export interface AssetInfo {
  path: string;
  alt: string;
}

export interface AssetsManifest {
  logo: AssetInfo;
  profile_photo: AssetInfo;
  web_wordpress_illustration: AssetInfo;
  web_custom_illustration: AssetInfo;
  social_lead_illustration: AssetInfo;
  home_hero_image: AssetInfo;
  chi_sono_hero_image: AssetInfo;
  servizi_hero_image: AssetInfo;
  social_hero_image: AssetInfo;
  pnrr_badge: AssetInfo;
  pnrr_hero: AssetInfo;
}

export interface ServiceOption {
  id: string;
  name?: string;
  title?: string;
  focus?: string;
  objective?: string;
  detail?: string;
}

export interface HeroSectionDetail {
  title: string;
  subtitle: string;
  description: string;
  cta_primary: {
    label: string;
    action_path: string;
  };
  cta_secondary?: {
    label: string;
    action_path: string;
  };
}

export interface PillarDetail {
  index: string;
  title: string;
  description: string;
}

export interface SezioneStrategieSocial {
  title: string;
  subtitle: string;
  description: string;
  pillars: PillarDetail[];
  footer_claim: string;
  cta: {
    label: string;
    action_path: string;
  };
}

export interface DetailOption {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface SezioneServiziDettaglio {
  option_wordpress: DetailOption;
  option_custom_code: DetailOption;
}

export interface BloccoPNN1 {
  title: string;
  subtitle: string;
  description: string;
  claim: string;
  cta: {
    label: string;
    action_path: string;
  };
}

export interface ComuneFooter {
  tagline: string;
  copyright: string;
  legal_links_title: string;
}

export interface ComponentsConfig {
  navbar: {
    brand_name: string;
    logo_text: string;
    logo_domain: string;
    tagline: string;
  };
  hero: {
    home_hero: HeroSectionDetail;
    chi_sono_hero: HeroSectionDetail;
    servizi_hero: HeroSectionDetail;
    social_hero: HeroSectionDetail;
    contatti_hero: HeroSectionDetail;
  };
  sezione_strategie_social: SezioneStrategieSocial;
  sezione_servizi_dettaglio: SezioneServiziDettaglio;
  bloccopnn1: BloccoPNN1;
  service_options: {
    wordpress: ServiceOption[];
    custom: ServiceOption[];
    social: ServiceOption[];
  };
  comune_footer: ComuneFooter;
}

export type ServiceType = "wordpress" | "custom" | "social";

export interface SiteConfig {
  theme: ThemeConfig;
  sitemap: SitemapItem[];
  assets_manifest: AssetsManifest;
  components: ComponentsConfig;
  service_options: {
    wordpress: ServiceOption[];
    custom: ServiceOption[];
    social: ServiceOption[];
  };
}
