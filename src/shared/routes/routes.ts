export const ROUTES = {
  HOME: '/',
  NEWS: '/news',
  CATALOG: '/catalog',
  SHELF: '/shelf',
  CART: '/cart',
  PROFILE: '/profile',
  ABOUT: '/about',
  LOGIN: '/login',
  REGISTRATION: '/registration',
} as const;

export const publicRoutes: string[] = [ROUTES.HOME, ROUTES.NEWS, ROUTES.ABOUT];
export const authRoutes: string[] = [ROUTES.CART, ROUTES.SHELF, ROUTES.PROFILE];
export const unAuthRoutes: string[] = [ROUTES.LOGIN, ROUTES.REGISTRATION];

export type TRoutes = typeof ROUTES;
