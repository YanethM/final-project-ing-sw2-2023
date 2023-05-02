/* Components > Layouts > Pages > routes */
import { LayoutGeneral } from "../layouts/LayoutGeneral";
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
  { path: "/", component: Home, layout: LayoutGeneral },
  { path: "/contact", component: Contact, layout: LayoutGeneral },
  { path: "*", component: NotFound, layout: LayoutGeneral },
];

const allRoutesProject = [...AdminRoutes, ...GeneralRoutes];
export default allRoutesProject;
