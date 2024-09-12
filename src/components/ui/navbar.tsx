import * as React from "react";
{
    /* Shadcn UI Components*/
}
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
    SheetFooter
} from "@/components/ui/sheet";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

{
    /* Icon Lucide React*/
}
import { AlignJustify } from "lucide-react";

{
    /* Config file Navbar*/
}
import { cn } from "@/lib/utils";
import { navMenuConfig } from "../../lib/nav-menu.ts";
import type { MainNavItem, SidebarNavItem, ListItemProps } from "@/types.d.ts";

const links = navMenuConfig.links;
const pages = navMenuConfig.pagesNav[0];
const examples = navMenuConfig.examplesNav[0];

interface SheetMobileProps {
    mainNavItems?: MainNavItem[];
    sidebarNavItems?: SidebarNavItem[];
}

export const SheetMobileNav = ({
    mainNavItems,
    sidebarNavItems
}: SheetMobileProps) => {
    const [open, setOpen] = React.useState(false);

    const mergedMainNavItems = mainNavItems?.filter(
        (item: any, index: number, self: any) =>
            index ===
            self.findIndex(
                (t: any) => t.href === item.href && t.title === item.title
            )
    );
    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button className="sm:hidden" size="icon" variant="ghost">
                        <AlignJustify className="size-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col overflow-y-scroll w-full border-none">
                    <SheetTitle>AstroVerse</SheetTitle>
                    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-5 pl-5">
                        <div className="mt-2 mb-20">
                            {mainNavItems?.length ? (
                                <div className="flex flex-col space-y-3">
                                    {mergedMainNavItems?.map(
                                        item =>
                                            item.href && (
                                                <a
                                                    key={item.href}
                                                    href={item.href}
                                                    className="text-muted-foreground"
                                                    onClick={() =>
                                                        item.href.startsWith(
                                                            "/#"
                                                        )
                                                            ? setOpen(false)
                                                            : undefined
                                                    }
                                                >
                                                    {item.title}
                                                </a>
                                            )
                                    )}
                                </div>
                            ) : null}

                            {sidebarNavItems?.length ? (
                                <div className="flex flex-col space-y-2">
                                    {sidebarNavItems.map((item, index) => {
                                        const activeItems = item?.items?.filter(
                                            subItem => !subItem.disabled
                                        );

                                        if (
                                            !activeItems ||
                                            activeItems.length === 0
                                        )
                                            return null;

                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col space-y-3 pt-6"
                                            >
                                                <h4 className="font-medium">
                                                    {item.title}
                                                </h4>
                                                {activeItems.map(
                                                    (subItem, idx) => (
                                                        <React.Fragment
                                                            key={
                                                                subItem.href +
                                                                idx
                                                            }
                                                        >
                                                            {subItem.href ? (
                                                                <a
                                                                    href={
                                                                        subItem.href
                                                                    }
                                                                    target={
                                                                        subItem?.external
                                                                            ? "_blank"
                                                                            : undefined
                                                                    }
                                                                    className="text-muted-foreground"
                                                                >
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </a>
                                                            ) : (
                                                                subItem.title
                                                            )}
                                                        </React.Fragment>
                                                    )
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : null}
                        </div>
                    </ScrollArea>
                    <SheetFooter className="border-b">
                        <div className="w-full flex flex-col gap-2 mb-2">
                            <Button aria-label="sidebar button" className="w-full font-semibold" asChild>
                                <a href="/">Login</a>
                            </Button>
                            <Button
                                className="bg-orange-500 text-white font-semibold w-full"
                                asChild
                            >
                                <a href="/">Signup</a>
                            </Button>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
};

export const NavDesktop = () => {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent">
                            {pages.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="dark:bg-[#000205]">
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {pages.items?.map(page => (
                                    <ListItem key={page.title} {...page} />
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent">
                            {examples.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="dark:bg-[#000205]">
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {examples.items?.map(example => (
                                    <ListItem
                                        key={example.title}
                                        {...example}
                                    />
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {links ? (
                        <NavigationMenuItem className="flex">
                            {links.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={navigationMenuTriggerStyle()}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </NavigationMenuItem>
                    ) : null}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};

const ListItem = ({ title, description, href, disabled }: ListItemProps) => {
    return (
        <li>
            <a
                href={href}
                className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-foreground",
                    disabled
                        ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
                        : ""
                )}
            >
                <div className="flex items-center text-sm font-semibold leading-none">
                    <span className="mr-2">{title}</span>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-black dark:text-light-gray ">
                    {description}
                </p>
            </a>
        </li>
    );
};

ListItem.displayName = "ListItem";
