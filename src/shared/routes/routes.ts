export const ROUTES = {
  HOME: '/',
  NEWS: '/news',
  CATALOG: '/catalog',
  ABOUT: '/about',
  LOGIN: '/login',
  REGISTRATION: '/registration',
} as const;

export type TRoutes = typeof ROUTES;
