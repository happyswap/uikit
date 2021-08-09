export interface TabProps {
    index?: number;
    link: string;
    title: string;
    isActive?: boolean;
    onClick?: (e: any) => false;
}
export interface TabsProps {
    delay: number;
    tabs: TabProps[];
}
export interface AccordeonProps {
    label: string;
    index: number;
    content: string;
    isOpen: boolean;
    handleClick: (e: any) => false;
}
export interface FaqProps {
    items: AccordeonProps[];
}
