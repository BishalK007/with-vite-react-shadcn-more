import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "@workspace/ui/styles/globals.css"
import {ThemeProvider} from "@workspace/ui/components/theme-provider"

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
})