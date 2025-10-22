export interface ListItem {
  text: string;
  icon?: string;
}

export interface ContentSection {
  title: string;
  paragraphs: string[];
  listItems?: ListItem[];
  className?: string;
}

export interface ServicePage {
  id: string;
  title: string;
  description: string;
  slug: string;
  heroImage?: string;
  sections: ContentSection[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  cta?: {
    text: string;
    buttonText: string;
    link: string;
  };
}

export interface ServicesData {
  [key: string]: ServicePage;
}