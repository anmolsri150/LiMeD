import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home"),
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/dashboards`,
    meta: { loginRequired: true },
    /*
    define with Authorization :
    meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
    */
    children: [
      {
        path: "dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards/Default"),
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "documents",
        component: () =>
          import(/* webpackChunkName: "product" */ "./views/app/pages/product/ThumbListPatient")
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "patients",
        component: () =>
          import(/* webpackChunkName: "product" */ "./views/app/pages/product/PatientList")
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "patients/:id",
        component: () =>
          import(/* webpackChunkName: "product" */ "./views/app/pages/product/ThumbList")
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "access",
        component: () =>
          import(/* webpackChunkName: "product" */ "./views/app/pages/product/ManageAccess")
          // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "accessDocuments",
        component: () =>
          import(/* webpackChunkName: "product" */ "./views/app/pages/product/PatientListAccess")
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "dashboards",
        component: () =>
          import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards"),
        redirect: `${adminRoot}/dashboards/limed`,
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
        children: [
          {
            path: "limed",
            component: () =>
              import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards/Default"),
            // meta: { roles: [UserRole.Admin] },
          },
          {
            path: "analytics",

            component: () =>
              import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards/Analytics"),
            // meta: { roles: [UserRole.Admin] },
          },
          {
            path: "ecommerce",
            component: () =>
              import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards/Ecommerce"),
            // meta: { roles: [UserRole.Editor] },
          },
          {
            path: "content",
            component: () =>
              import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards/Content"),
            // meta: { roles: [UserRole.Editor] },
          }
        ]
      },
      {
        path: "profile",
        component: () =>
          import(/* webpackChunkName : "profile" */ "./views/app/pages/profile"),
        redirect: `${adminRoot}/pages/profile/hospital`,
        children: [
          {
            path: "hospital",
            component: () =>
              import(/* webpackChunkName: "profile" */ "./views/app/pages/profile/Social")
          },
          {
            path: "patient",
            component: () =>
              import(/* webpackChunkName: "profile" */ "./views/app/pages/profile/Portfolio")
          }
        ]
      },
      {
        path: "pages",
        component: () =>
          import(/* webpackChunkName: "pages" */ "./views/app/pages"),
        redirect: `${adminRoot}/pages/product`,
        children: [
          {
            path: "product",
            component: () =>
              import(/* webpackChunkName : "product" */ "./views/app/pages/product"),
            redirect: `${adminRoot}/pages/product/data-list`,
            children: [
              {
                path: "data-list",
                component: () =>
                  import(/* webpackChunkName: "product" */ "./views/app/pages/product/DataList")
              },
              {
                path: "thumb-list",
                component: () =>
                  import(/* webpackChunkName: "product" */ "./views/app/pages/product/ThumbList")
              },
              {
                path: "image-list",
                component: () =>
                  import(/* webpackChunkName: "product" */ "./views/app/pages/product/ImageList")
              },
              {
                path: "details",
                component: () =>
                  import(/* webpackChunkName: "product" */ "./views/app/pages/product/Details")
              },
              {
                path: "details-alt",
                component: () =>
                  import(/* webpackChunkName: "product" */ "./views/app/pages/product/DetailsAlt")
              }
            ]
          },
          {
            path: "profile",
            component: () =>
              import(/* webpackChunkName : "profile" */ "./views/app/pages/profile"),
            redirect: `${adminRoot}/pages/profile/hospital`,
            children: [
              {
                path: "hospital",
                component: () =>
                  import(/* webpackChunkName: "profile" */ "./views/app/pages/profile/Social")
              },
              {
                path: "patient",
                component: () =>
                  import(/* webpackChunkName: "profile" */ "./views/app/pages/profile/Portfolio")
              }
            ]
          },
          {
            path: "blog",
            component: () =>
              import(/* webpackChunkName : "blog" */ "./views/app/pages/blog"),
            redirect: `${adminRoot}/pages/blog/blog-list`,
            children: [
              {
                path: "blog-list",
                component: () =>
                  import(/* webpackChunkName: "blog" */ "./views/app/pages/blog/BlogList")
              },
              {
                path: "blog-detail",
                component: () =>
                  import(/* webpackChunkName: "blog" */ "./views/app/pages/blog/BlogDetail")
              }
            ]
          },
          {
            path: "miscellaneous",
            component: () =>
              import(/* webpackChunkName : "miscellaneous" */ "./views/app/pages/miscellaneous"),
            redirect: `${adminRoot}/pages/miscellaneous/faq`,
            children: [
              {
                path: "faq",
                component: () =>
                  import(/* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Faq")
              },
              {
                path: "knowledge-base",
                component: () =>
                  import(/* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/KnowledgeBase")
              },
              {
                path: "search",
                component: () =>
                  import(/* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Search")
              },
              {
                path: "prices",
                component: () =>
                  import(/* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Prices")
              },
              {
                path: "mailing",
                component: () =>
                  import(/* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Mailing")
              },
              {
                path: "invoice",
                component: () =>
                  import(/* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Invoice")
              }
            ]
          }
        ]
      },
      {
        path: "applications",
        component: () =>
          import(/* webpackChunkName: "applications" */ "./views/app/applications"),
        redirect: `${adminRoot}/applications/todo`,
        children: [
          {
            path: "todo",
            component: () =>
              import(/* webpackChunkName: "applications" */ "./views/app/applications/Todo")
          },
          {
            path: "survey",
            component: () =>
              import(/* webpackChunkName: "applications" */ "./views/app/applications/Survey")
          },
          {
            path: "survey/:id",
            component: () =>
              import(/* webpackChunkName: "applications" */ "./views/app/applications/SurveyDetail"),
            props: true
          },
          {
            path: "chat",
            component: () =>
              import(/* webpackChunkName: "applications" */ "./views/app/applications/Chat")
          }
        ]
      },
      {
        path: "ui",
        component: () => import(/* webpackChunkName: "ui" */ "./views/app/ui"),
        redirect: `${adminRoot}/ui/forms`,
        children: [
          {
            path: "forms",
            component: () =>
              import(/* webpackChunkName : "forms" */ "./views/app/ui/forms"),
            redirect: `${adminRoot}/ui/forms/layouts`,
            children: [
              {
                path: "layouts",
                component: () =>
                  import(/* webpackChunkName: "forms" */ "./views/app/ui/forms/Layouts")
              },
              {
                path: "components",
                component: () =>
                  import(/* webpackChunkName: "forms" */ "./views/app/ui/forms/Components")
              },
              {
                path: "validations",
                component: () =>
                  import(/* webpackChunkName: "forms" */ "./views/app/ui/forms/Validations")
              },
              {
                path: "wizard",
                component: () =>
                  import(/* webpackChunkName: "forms" */ "./views/app/ui/forms/Wizard")
              },
            ]
          },
          {
            path: "datatables",
            component: () =>
              import(/* webpackChunkName : "datatables" */ "./views/app/ui/datatables"),
            redirect: `${adminRoot}/ui/datatables/divided-table`,
            children: [
              {
                path: "divided-table",
                component: () =>
                  import(/* webpackChunkName: "datatables" */ "./views/app/ui/datatables/DividedTable")
              },
              {
                path: "scrollable",
                component: () =>
                  import(/* webpackChunkName: "datatables" */ "./views/app/ui/datatables/Scrollable")
              },
              {
                path: "default",
                component: () =>
                  import(/* webpackChunkName: "datatables" */ "./views/app/ui/datatables/Default")
              }
            ]
          },
          {
            path: "components",
            component: () =>
              import(/* webpackChunkName : "components" */ "./views/app/ui/components"),
            redirect: `${adminRoot}/ui/components/alerts`,
            children: [
              {
                path: "alerts",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Alerts")
              },
              {
                path: "badges",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Badges")
              },
              {
                path: "buttons",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Buttons")
              },
              {
                path: "cards",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Cards")
              },
              {
                path: "carousel",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Carousel")
              },
              {
                path: "charts",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Charts")
              },
              {
                path: "collapse",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Collapse")
              },
              {
                path: "dropdowns",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Dropdowns")
              },
              {
                path: "editors",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Editors")
              },
              {
                path: "icons",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Icons")
              },
              {
                path: "input-groups",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/InputGroups")
              },
              {
                path: "jumbotron",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Jumbotron")
              },
              {
                path: "maps",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Maps")
              },
              {
                path: "modal",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Modal")
              },
              {
                path: "navigation",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Navigation")
              },
              {
                path: "popover-tooltip",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/PopoverTooltip")
              },
              {
                path: "sortable",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Sortable")
              },
              {
                path: "tables",
                component: () =>
                  import(/* webpackChunkName: "components" */ "./views/app/ui/components/Tables")
              }
            ]
          }
        ]
      },
      {
        path: "menu",
        component: () =>
          import(/* webpackChunkName: "menu" */ "./views/app/menu"),
        redirect: `${adminRoot}/menu/types`,
        children: [
          {
            path: "types",
            component: () =>
              import(/* webpackChunkName : "menu-types" */ "./views/app/menu/Types")
          },
          {
            path: "levels",
            component: () =>
              import(/* webpackChunkName : "menu-levels" */ "./views/app/menu/levels"),
            redirect: `${adminRoot}/menu/levels/third-level-1`,
            children: [
              {
                path: "third-level-1",
                component: () =>
                  import(/* webpackChunkName: "menu-levels" */ "./views/app/menu/levels/Third-level-1")
              },
              {
                path: "third-level-2",
                component: () =>
                  import(/* webpackChunkName: "menu-levels" */ "./views/app/menu/levels/Third-level-2")
              },
              {
                path: "third-level-3",
                component: () =>
                  import(/* webpackChunkName: "menu-levels" */ "./views/app/menu/levels/Third-level-3")
              }
            ]
          }
        ]
      },
      {
        path: "blank-page",
        component: () =>
          import(/* webpackChunkName: "blank-page" */ "./views/app/blank-page")
      }
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/unauthorized",
    component: () => import(/* webpackChunkName: "error" */ "./views/Unauthorized")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      },

    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});
router.beforeEach(AuthGuard);
export default router;
