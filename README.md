# 🥞 HappySwap UIkit

[![Version](https://img.shields.io/npm/v/@happyswapfinance/uikit)](https://www.npmjs.com/package/@happyswapfinance/uikit) [![Size](https://img.shields.io/bundlephobia/min/@happyswapfinance/uikit)](https://www.npmjs.com/package/@happyswapfinance/uikit)

HappySwap UIkit is a set of React components and hooks used to build pages on HappySwap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @happyswapfinance/uikit`

## Setup

### Theme

Before using HappySwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@happyswapfinance/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@happyswapfinance/uikit'
...
<ResetCSS />
```
