export const ROUTES = {
  HOME: '/',
  NEWS: '/news',
  CATALOG: '/catalog',
  SHELF: '/shelf',
  CART: '/cart',
  ABOUT: '/about',
  LOGIN: '/login',
  REGISTRATION: '/registration',
} as const;

export const publicRoutes: string[] = [ROUTES.HOME, ROUTES.NEWS, ROUTES.ABOUT];
export const authRoutes: string[] = [ROUTES.CART, ROUTES.SHELF];
export const unAuthRoutes: string[] = [ROUTES.LOGIN, ROUTES.REGISTRATION];

export type TRoutes = typeof ROUTES;
