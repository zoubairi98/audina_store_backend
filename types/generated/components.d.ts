import type { Attribute, Schema } from '@strapi/strapi';

export interface ComponentsAbout extends Schema.Component {
  collectionName: 'components_components_abouts';
  info: {
    description: '';
    displayName: 'About';
  };
  attributes: {
    aboutImage: Attribute.Media<'images'>;
    heading: Attribute.String;
    SubHeading: Attribute.Text;
  };
}

export interface ComponentsCtaBanner extends Schema.Component {
  collectionName: 'components_components_cta_banners';
  info: {
    displayName: 'cta-banner';
  };
  attributes: {
    backgroundColor: Attribute.Enumeration<['Brown', 'Dark', 'Light']>;
    buttonLink: Attribute.Component<'components.link'>;
    heading: Attribute.String;
    subheading: Attribute.Text;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    heading: Attribute.String;
    productImage: Attribute.Media<'images'>;
    subHeading: Attribute.Text;
  };
}

export interface ComponentsFragranceNote extends Schema.Component {
  collectionName: 'components_components_fragrance_notes';
  info: {
    displayName: 'fragrance-note';
  };
  attributes: {
    noteList: Attribute.RichText;
    noteType: Attribute.Enumeration<['Top', 'Middle', 'Base']>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface ComponentsSpecification extends Schema.Component {
  collectionName: 'components_components_specifications';
  info: {
    displayName: 'specification';
  };
  attributes: {
    concentration: Attribute.String;
    gender: Attribute.Enumeration<['Unisex', 'Male', 'Female']>;
    longevity: Attribute.String;
    sillage: Attribute.String;
    size: Attribute.String;
  };
}

export interface LayoutAboutHeroSection extends Schema.Component {
  collectionName: 'components_layout_about_hero_sections';
  info: {
    description: '';
    displayName: 'about.hero-section';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface LayoutAboutLocationSection extends Schema.Component {
  collectionName: 'components_layout_about_location_sections';
  info: {
    description: '';
    displayName: 'about.location-section';
  };
  attributes: {
    cta: Attribute.Component<'components.link'>;
    email: Attribute.String;
    locationtext: Attribute.String;
    phone: Attribute.String;
    title: Attribute.String;
  };
}

export interface LayoutAboutSection extends Schema.Component {
  collectionName: 'components_layout_about_sections';
  info: {
    description: '';
    displayName: 'About Section';
  };
  attributes: {
    About: Attribute.Component<'components.about'>;
    description: Attribute.Text;
    link: Attribute.Component<'components.link'>;
    title: Attribute.String;
  };
}

export interface LayoutAboutStorySection extends Schema.Component {
  collectionName: 'components_layout_about_story_sections';
  info: {
    description: '';
    displayName: 'about.story-section';
  };
  attributes: {
    content: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

export interface LayoutAboutValuesSection extends Schema.Component {
  collectionName: 'components_layout_about_values_sections';
  info: {
    description: '';
    displayName: 'about.values-section';
    icon: '';
  };
  attributes: {
    description: Attribute.Text;
    icon: Attribute.Media<'images'>;
    title: Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_features_sections';
  info: {
    description: '';
    displayName: 'Features Section';
  };
  attributes: {
    description: Attribute.Text;
    feature: Attribute.Component<'components.feature', true>;
    link: Attribute.Component<'components.link', true>;
    title: Attribute.String;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    description: Attribute.Text;
    logotext: Attribute.Component<'components.link'>;
    navigationslinks: Attribute.Component<'components.link', true>;
    privacypolicylink: Attribute.Component<'components.link'>;
    Sociallinks: Attribute.Component<'components.link', true>;
    termofservicelink: Attribute.Component<'components.link'>;
    text: Attribute.Text;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ctaButton: Attribute.Component<'components.link'>;
    logotext: Attribute.Component<'components.link'>;
    navigationslinks: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero section';
  };
  attributes: {
    heading: Attribute.Text;
    image: Attribute.Media<'images'>;
    link: Attribute.Component<'components.link', true>;
    subHeading: Attribute.Text;
  };
}

export interface LayoutLayoutContactFormSection extends Schema.Component {
  collectionName: 'components_layout_layout_contact_form_sections';
  info: {
    description: '';
    displayName: 'contact-form-section';
  };
  attributes: {};
}

export interface LayoutLayoutContactMapSection extends Schema.Component {
  collectionName: 'components_layout_layout_contact_map_sections';
  info: {
    description: '';
    displayName: 'contact-map-section';
  };
  attributes: {
    mapEmbedHtml: Attribute.Text;
    title: Attribute.String;
  };
}

export interface LayoutSharedContactBanner extends Schema.Component {
  collectionName: 'components_layout_shared_contact_banners';
  info: {
    displayName: 'shared.contact-banner';
  };
  attributes: {
    link: Attribute.Component<'components.link', true>;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface MetaSeo extends Schema.Component {
  collectionName: 'components_meta_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaDescription: Attribute.Text;
    metaTitle: Attribute.String & Attribute.Required;
  };
}

export interface OrderOrderItem extends Schema.Component {
  collectionName: 'components_order_order_items';
  info: {
    description: '';
    displayName: 'OrderItem';
  };
  attributes: {
    productImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    productName: Attribute.String;
    productPrice: Attribute.Decimal;
    productSlug: Attribute.String;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.about': ComponentsAbout;
      'components.cta-banner': ComponentsCtaBanner;
      'components.feature': ComponentsFeature;
      'components.fragrance-note': ComponentsFragranceNote;
      'components.link': ComponentsLink;
      'components.specification': ComponentsSpecification;
      'layout.about-hero-section': LayoutAboutHeroSection;
      'layout.about-location-section': LayoutAboutLocationSection;
      'layout.about-section': LayoutAboutSection;
      'layout.about-story-section': LayoutAboutStorySection;
      'layout.about-values-section': LayoutAboutValuesSection;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.layout-contact-form-section': LayoutLayoutContactFormSection;
      'layout.layout-contact-map-section': LayoutLayoutContactMapSection;
      'layout.shared-contact-banner': LayoutSharedContactBanner;
      'meta.seo': MetaSeo;
      'order.order-item': OrderOrderItem;
    }
  }
}
