// PAGES
export type ReviewProps = {
    name: string;
    username: string;
    body: string;
    img: any;
};

export type FeatureProps = {
    id: number;
    title?: string;
    desc: string;
};

export interface PropsListFeature {
    id: number;
    title?: string;
    desc: string;
}

export interface PropsListReview {
    name: string;
    username: string;
    body: string;
    img: any;
}

// COMPONENTS
export type SidebarNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
} & (
    | {
          href: string;
          items?: never;
      }
    | {
          href?: string;
          items: MenuItem[];
      }
);

type NavItem = {
    title: string;
    href: string;
    description: string;
    disabled?: boolean;
};

type MenuItem = NavItem & {
    image?: string;
    description?: string;
    launched?: boolean;
    external?: boolean;
    forceReload?: boolean;
};

export type MainNavItem = NavItem;

type NavMenuConfig = {
    pagesNav: SidebarNavItem[];
    examplesNav: SidebarNavItem[];
    links: MenuItem[];
};

export interface ListItemProps {
    title: string;
    description: string;
    href: string;
    disabled?: boolean;
}
