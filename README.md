This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
# or
yarn
yarn dev
```

Open [http://localhost:3000/before](http://localhost:3000/before) with your browser to see the page with two redirection link. Those two link are next/link components. 

## Describe the bug
next/link has a different href URL than what it routes to via client side routing to when clicked. This behaviour is broken when you basePath set in your next config.

Given a configured basePath of "/demo"

From location /demo/before, I have:
1. Link that redirects to /demo/before/target. The href is specified as '/demo/before/target'. 
2. Another Link that has href set to '/before/target'.

## Expected behavior
Both Link component should redirect user to the same result.

## Actual result: 
Link 1: Click to redirect works, but open in a new tab landed on wrong url: 'http://localhost:3000/demo/demo/before/target'.
Link 2: Click to redirect landed on wrong url: 'http://localhost:3000/before/target', open in a new tab works.

By hovering over Link 1, the url at bottom left corner is incorrect: 

![image](https://user-images.githubusercontent.com/5519735/218768301-4ad844bf-1f7b-4432-b520-466a9cfc523c.png)


