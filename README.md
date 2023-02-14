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
2. Another Link that has href set to '/target'.

## Expected behavior
Both Link component should redirect user to the same result.

## Actual result:
Both Link will open the correct url upon mouse click. 
But for Link 1, by open the link in the new tab, I am getting the wrong url '/demo/demo/before/target'.

By hovering over Link 1, the url at bottom left corner is incorrect: 

![image](https://github.csnzoo.com/storage/user/9000/files/850871fc-e5b4-4c4b-b4b2-e1b2c174fe39)

