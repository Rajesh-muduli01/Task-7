import type { Schema, Attribute } from '@strapi/strapi';

export interface FieldsHomepage extends Schema.Component {
  collectionName: 'components_fields_homepages';
  info: {
    displayName: 'Homepage';
    icon: '';
  };
  attributes: {
    HeroTitle: Attribute.Text;
    HeroDescription: Attribute.Blocks;
    HeroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    AboutUsSection: Attribute.Blocks;
    Property: Attribute.Relation<'fields.homepage', 'oneToMany', 'admin::user'>;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Title: Attribute.String;
    Price: Attribute.Decimal;
  };
}

export interface FieldsBlogPosts extends Schema.Component {
  collectionName: 'components_fields_blog_posts';
  info: {
    displayName: 'Blog Posts';
  };
  attributes: {
    Title: Attribute.String;
    Slug: Attribute.String;
    Content: Attribute.Blocks;
    FeaturedImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Author: Attribute.Relation<'fields.blog-posts', 'oneToOne', 'admin::user'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fields.homepage': FieldsHomepage;
      'fields.blog-posts': FieldsBlogPosts;
    }
  }
}
