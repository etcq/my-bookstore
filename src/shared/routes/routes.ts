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

export type TRoutes = typeof ROUTES;
