# `Turborepo` Vite starter with `Shadcn`, `Tanstack Router`, `Devcontainer`, `Tailwind CSS`


## Using this example

Run the following command:

```sh
pnpm dlx create-turbo@latest -e with-vite-react
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `web`: react [vite](https://vitejs.dev) ts app
- `@workspace/ui`: a stub component library shared by `web` application
- `@workspace/eslint-config`: shared `eslint` configurations
- `@workspace/typescript-config`: `tsconfig.json`'s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Shadcn](https://ui.shadcn.com/) to install a component go the the app (e.g. `cd app/web`) then do:
    ```bash
    pnpm dlx shadcn@canary add [COMPONENT]
    ```
- [Tanstack Router](https://tanstack.com/router/)
- [Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) 
  - Run the devcontainer using `Ctrl + Shift + P` select: `Dev containers: rebuild and reopen in container`
  - To connect to the running container from terminal: `make connect`

