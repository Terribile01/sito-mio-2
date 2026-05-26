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

export interface PaletteAccents {
  khaki_beige: string;
  khaki_beige_2: string;
  olive_wood: string;
  charcoal_brown: string;
}

export interface ThemePalette {
  rules: string;
  background_60: string;
  text_and_structure_30: string;
  accents_10: PaletteAccents;
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

export interface ComuneFooter {
  tagline: string;
  copyright: string;
  legal_links_title: string;
}

export interface ComponentsConfig {
  navbar: {
    brand_name: string;
    logo_text: string;
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
  comune_footer: ComuneFooter;
}

export interface SiteConfig {
  theme: ThemeConfig;
  sitemap: SitemapItem[];
  assets_manifest: AssetsManifest;
  components: ComponentsConfig;
}
