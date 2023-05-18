/* Components > Layouts > Pages > routes */
import { LayoutGeneral } from "../layouts/dashaboard/LayoutGeneral";
import { LayoutUser } from "../layouts/users/LayoutUser";

import { Admin } from "../pages/admin/Admin";
import { SignIn } from "../pages/admin/SignIn";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound/NotFound";

const AdminRoutes = [
  { path: "/admin", component: Admin, layout: LayoutGeneral },
  { path: "/admin/sign-in", component: SignIn, layout: LayoutGeneral },
];

const GeneralRoutes = [
  { path: "/", component: Home, layout: LayoutUser },
  { path: "/contact", component: Contact, layout: LayoutUser },
  { path: "*", component: NotFound, layout: LayoutUser },
];

const allRoutesProject = [...AdminRoutes, ...GeneralRoutes];
export default allRoutesProject;
