import { INamedValues } from "./types";

export const links = [
  {
    label: "HOME",
    icon: "HomeIcon",
    href: "https://pancakeswap.finance",
    items: [
      {
        label: "What is HappySwap",
        href: "https://pancakeswap.finance/#what_is_happy_swap",
      },
      {
        label: "TOKONOMICS",
        href: "https://pancakeswap.finance/#tokonomics",
      },
      {
        label: "Roadmap",
        href: "https://pancakeswap.finance/#roadmap",
      },
      {
        label: "FAQ",
        href: "https://pancakeswap.finance/#faq",
      }

    ]
  },
  {
    label: "TRADE TOKENS",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Provide Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "EARN YIELD",
    icon: "YieldFieldIcon",
    items: [
      {
        label: "Farms",
        href: "https://pancakeswap.finance/farms",
      },
      {
        label: "Pools",
        href: "https://pancakeswap.finance/syrup",
      },
    ],
  },{
    label: "STAKE NFT",
    icon: "NftIcon",
    items: [
      {
        label: "Submit",
        href: "https://pancakeswap.finance/#submit",
      },
      {
        label: "Vote",
        href: "https://pancakeswap.finance/#vote",
      },
      {
        label: "Gallery",
        href: "https://pancakeswap.finance/#gallery",
      },
    ],
  },
  // {
  //   label: "Farms",
  //   icon: "FarmIcon",
  //   href: "/farms",
  // },
  // {
  //   label: "Pools",
  //   icon: "PoolIcon",
  //   href: "/syrup",
  // },
  // {
  //   label: "Certik Audit (In-Progress)",
  //   icon: "ShieldIcon",
  //   href: "https://twitter.com/happyswap/status/1367218225310818308",
  //   target: "_blank",
  // },
  // {
  //   label: "House",
  //   icon: "BushIcon",
  //   href: "/house",
  // },
  // {
  //   label: "Lottery",
  //   icon: "TicketIcon",
  //   href: "/lottery",
  // },
  // {
  //   label: "NFT",
  //   icon: "NftIcon",
  //   href: "/nft",
  // },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/",
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  //   calloutClass: "rainbow",
  // },
  // {
  //   label: "Info",
  //   icon: "InfoIcon",
  //   items: [
  //     {
  //       label: "Overview",
  //       href: "https://pancakeswap.info",
  //     },
  //     {
  //       label: "Tokens",
  //       href: "https://pancakeswap.info/tokens",
  //     },
  //     {
  //       label: "Pairs",
  //       href: "https://pancakeswap.info/pairs",
  //     },
  //     {
  //       label: "Accounts",
  //       href: "https://pancakeswap.info/accounts",
  //     },
  //   ],
  // },
  // {
  //   label: "IFO",
  //   icon: "IfoIcon",
  //   items: [
  //     {
  //       label: "Next",
  //       href: "/ifo",
  //     },
  //     {
  //       label: "History",
  //       href: "/ifo/history",
  //     },
  //   ],
  // },
  // {
  //   label: "More",
  //   icon: "MoreIcon",
  //   items: [
  //     // {
  //     //   label: "Voting",
  //     //   href: "https://voting.pancakeswap.finance",
  //     // },
  //     {
  //       label: "Github",
  //       href: "https://github.com/HappySwapFinance/",
  //       target: '_blank',
  //     },
  //     {
  //       label: "Docs",
  //       href: "https://happyswapfinance.gitbook.io/happyswap//",
  //     },
  //     {
  //       label: "Blog",
  //       href: "https://happyswap.medium.com/",
  //     },
  //   ],
  // },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/happyswapchat",
      },
      {
        label: "Announcements",
        href: "https://t.me/happyswap",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/happyswap",
  },
  {
    label: "Instagram",
    icon: "InstagramIcon",
    href: "https://www.instagram.com/happyswap",
  },
  {
    label: "Discord",
    icon: "DiscordIcon",
    href: "https://discord.gg/VudTtXrZ3W",
  },
];

export const tokenInfo:INamedValues[]  = [
  {
    label: 'Emission Per Block',
    value: '30'
  },{
    label: 'Circulating Supply',
    value: '10,000,000'
  },{
    label: 'Burn Total',
    value: '0'
  },{
    label: 'Maximum Supply',
    value: '800,000,000'
  },{
    label: 'Market Cap',
    value: '$ 10,000,000'
  },

];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 32;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
