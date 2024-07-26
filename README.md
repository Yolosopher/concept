This is Vite Vanila JS project for TBC-concept website cloning

# To run the development server, first install dependencies:

**(If you're trying to start/build website on Windows OS, it is recommended to delete package-lock.json file in root and then run npm install)**

```
npm install
```

Then comment out this line `base: "/concept"` inside vite.config.cjs and then run in dev mode:

```
npm run dev
```

Then run:

```
npm run sass // starts watching sass(scss) files
```

# Use build script to generate dist folder:

```
npm run build
```

# To preview whatever is built, you can use vite's built-in "preview" command:

```
npm run preview
```

## the only JS library used:

- [swiperJS](https://swiperjs.com/)

## CSS Preprocessor

- SASS(SCSS)
