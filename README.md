# Revolut Demo is built with React + Vite + TailwindCSS

## Develop
1. `pnpm install`
2. `pnpm dev`
3. open `localhost:5173`


## Build & Deploy
1. just create a pr to  main branch, once it been merged,then will be built and deployed to Vercel automatically
2. open [vercel link](https://revolut-demo-tmeq.vercel.app/) to see the website

## Project Structure
```
revolut-ui/
├── public/                  #Static Assets
│   └── vite.svg             # 
├── src/                     # Code base
│   ├── components/          # All Components
│   │   ├── Button.tsx       # Button
│   │   ├── Card.tsx         # Card
│   │   ├── Carousel.tsx     # Carousel
│   │   └── Header.tsx       # Header
│   ├── App.tsx              # App
│   ├── main.tsx             # App Entrance
│   ├── index.css            # Global styles

```

## Development introduction
1. Using Vite as the dev and package tool, because it's fast and popular, as there was no SSR requirements,we don't need Next.js cause it's a little complex to deploy than vite. 
2. Using Typescript & React to implement the js logic.
3. As for style,I choose tailwindcss,it's convenient and easy to use.
4. I have to write css for modifying Swiper's css, further more, I imported SASS to deal with it.




