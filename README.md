# jinyoung.xyz 

After increasing technical frustrations with maintaining [my old blog](https://web.archive.org/web/20220526001917/https://www.jinyoung.xyz/), I decided to abandon the project and start a new blog that does not involve working with its stack (Ruby and Jekyll). 

Maybe I wasn't diligent in troubleshooting the issues I faced along the way; that said, I came to conclude that I was spending an awful lot of time working with its technologies vs writing on the platform (the latter having been the very reason for the former, all along).

This renewed blog, in particular, is actually a fork of Jack Leslie's open source [blog](https://jackleslie.dev/), which I really admired and wanted to extend as the next version of [jinyoung.xyz](https://jinyoung.xyz). I came across Jack's blog through a mutual friend and immediately felt captivated by its simplicity and elegance.

It's built with [Next.js](https://nextjs.org/), a React framework that supports Server Side Rendering (SSR) for optimal performance and SEO. It's deployed on Vercel, following its [compelling documentation](https://nextjs.org/docs/deployment#managed-nextjs-with-vercel).

I'm really excited to take my blogging to this platform, given my growing experience with React and Jack's very clean UI from which I aim to create my own flavour. It should also be mentioned that Jack's [code](https://github.com/jackleslie/dev) was remarkably clean and easy to add to.

## Local Development

### Installation

After cloning the project in a local directory, run:

```sh
npm ci
```

Since Next.js supports Server Side Rendering (SSR), each route needs to be built first:

```sh
npm run build
```

Then run:

```sh
npm run dev
```
