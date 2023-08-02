const privateRoutes = [
  "/",
  "/leaderboard",
  "/spreadsheets",
  "/administration",
  "/sales",
  "/schedule",
  "/support",
];

export const isPrivateRoute = (route: string) => {
  return privateRoutes.includes(route) || route.startsWith("/sales");
};
