
export interface TabProps{
  index?:number;
  link:string;
  title:string;
  isActive?:boolean;
  onClick?:(e:any)=>false;
}

export interface TabsProps {
  delay:number;
  tabs:TabProps[];
}
