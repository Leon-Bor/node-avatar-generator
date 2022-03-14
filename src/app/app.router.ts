import { Route } from "@angular/router";

export const routes: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "generator" },
  {
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((x) => x.DashboardModule),
    path: "generator",
  },
];
