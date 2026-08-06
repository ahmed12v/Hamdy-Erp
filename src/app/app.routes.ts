import { AddMatrial } from './pages/Materials/add-matrial/add-matrial';

import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    loadComponent: () =>
      import("./pages/dashboard/dashboard-view/dashboard-view").then(
        (c) => c.DashboardView
      ),
  },
  {
    path: "Customers",
    loadComponent: () =>
      import('./pages/customers/all-customers/all-customers').then(
        (c) => c.AllCustomers
      ),
  },
  {
    path: "addCustomers",
    loadComponent: () =>
      import('./pages/customers/add-customer/add-customer').then(
        (c) => c.AddCustomer
      ),
  },
  {
    path: "Suppliers",
    loadComponent: () =>
      import('./pages/Supplier/all-suppliers/all-suppliers').then(
        (c) => c.AllSuppliers
      ),
  },
  {
    path: "addSupplier",
    loadComponent: () =>
      import('./pages/Supplier/add-supplier/add-supplier').then(
        (c) => c.AddSupplier
      ),
  },
  {
    path: "Materials",
    loadComponent: () =>
      import('./pages/Materials/all-matrials/all-matrials').then(
        (c) => c.AllMatrials
      ),
  },
  {
    path: "addMaterials",
    loadComponent: () =>
      import('./pages/Materials/add-matrial/add-matrial').then(
        (c) => c.AddMatrial
      ),
  },
  {
    path: "rating",
    loadComponent: () =>
      import('./pages/rating/rate/rate').then(
        (c) => c.Rate
      ),
  },
  {
    path: "Orders",
    loadComponent: () =>
      import('./pages/order/allorder/allorder').then(
        (c) => c.Allorder
      ),
  },
  {
    path: "Purchases",
    loadComponent: () =>
      import('./pages/Purcheses/all-purches/all-purches').then(
        (c) => c.AllPurches
      ),
  },
  {
    path: "Inventory",
    loadComponent: () =>
      import('./pages/Inventory/inventory-view/inventory-view').then(
        (c) => c.InventoryView
      ),
  },

];
