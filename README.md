# Poll App

A lightweight polling application built with React.js and enhanced with Web Components for seamless integration into any HTML file. This versatile component simplifies the creation and customization of polls, providing a user-friendly configuration for questions and options. Simple, effective, and ready to engage your audience!

## Features

- **React Integration:** Utilizes the power of React.js for a dynamic and responsive user interface.
  
- **Web Component Compatibility:** Easily embeddable into any HTML file, facilitating seamless integration with existing projects.
  
- **Configurable Poll Creation:** Tailor polls to your needs by providing questions and options, making the creation process a breeze.

## Getting Started

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```

2. **Run in Development Mode:**
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

   The page will reload if you make edits, and lint errors will be displayed in the console.

3. **Run Tests:**
   ```bash
   pnpm run test
   ```
   Launches the test runner in interactive watch mode.

4. **Build for Production:**
   ```bash
   pnpm run build
   ```
   Builds the app for production in the `dist` folder, bundling React in production mode for optimal performance.

## Test Folders

There are two mock folders for testing, each containing a built version of the application. Configuration is implemented in these folders.

1. Modify the `index.html` file in each folder, containing the `x-poll` application with a script tag pointing to the built version.

   ```html
   <x-poll question="Is this the best poll app?">
     <x-option option="yes"></x-option>
     <x-option option="no"></x-option>
     <x-option option="maybe"></x-option>
   </x-poll>
   ```

2. Add a reference to the built application file in your script tag.

   ```html
   <script src="path-to/my-lib.js"></script>
   ```

3. Run the built example in the test folders with:
   ```bash
   cd __test__example/ProjectOne
   serve .
   ```
   or
   ```bash
   cd __test__example/ProjectTwo
   serve .
   ```

   then go to http://localhost:3000 and enjoy!

### Implementation Decisions

I chose to use `React.js` for this application due to my familiarity with it. While I acknowledge that other frameworks like `Svelte` might result in a smaller bundle size, my comfort with React led to this decision. For development and production-ready builds, I utilized `Vite` in `lib` mode to create a single JS file for easy inclusion in HTML files.