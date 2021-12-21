import SuperAdmin from "../../components/pages/SuperAdmin";
const router = [
  { path: "/users", exact: true, name: "Users" },
  { path: "/users/super-admin", exact: true, name: "SuperAdmin", element: SuperAdmin },
  // { path: "customer", exact: true, name: "Customer" },
];

export default router;
