# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Folder Structure

```
eslint.config.js
index.html
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
  vite.svg
  locales/
    en/
      common.json
      translation.json
    fr/
      common.json
      translation.json
src/
  main.tsx
  setupTests.ts
  vite-env.d.ts
  app/
    index.tsx
    router.tsx
    routes/
      HomePage.tsx
  assets/
    react.svg
  components/
    errors/
      MainErrorFallback.tsx
    ui/
      FullScreenLoader.tsx
  config/
    env.ts
    paths.ts
  lib/
    i18n.ts
  providers/
    AppProvider.tsx
```

- `public/`: Static assets and localization files
- `src/`: Main source code
  - `app/`: App entry and routing
  - `assets/`: Images and static assets
  - `components/`: Reusable UI and error components
  - `config/`: Configuration files
  - `lib/`: Library utilities (e.g., i18n)
  - `providers/`: Context and providers

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
