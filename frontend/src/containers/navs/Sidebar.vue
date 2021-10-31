<template>
  <div class="sidebar" @click.stop="()=>{}">
    <div class="main-menu">
      <vue-perfect-scrollbar
        class="scroll"
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
      >
        <ul class="list-unstyled">
          <li
            v-for="(item,index) in filteredMenuItems(menuItems)"
            :class="{ 'active' : (selectedParentMenu === item.id && viewingParentMenu === '') || viewingParentMenu === item.id }"
            :key="`parent_${index}`"
            :data-flag="item.id"
          >
            <a v-if="item.newWindow" :href="item.to" rel="noopener noreferrer" target="_blank">
              <i :class="item.icon" />
              {{ item.label }}
            </a>
            <a
              v-else-if="item.subs && item.subs.length>0"
              @click.prevent="openSubMenu($event,item)"
              :href="`#${item.to}`"
            >
              <i :class="item.icon" />
              {{ item.label }}
            </a>
            <router-link
              v-else
              @click.native="changeSelectedParentHasNoSubmenu(item.id)"
              :to="item.to"
            >
              <i :class="item.icon" />
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </vue-perfect-scrollbar>
    </div>

    <div class="sub-menu">
      <vue-perfect-scrollbar
        class="scroll"
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
      >
        <ul
          v-for="(item,itemIndex) in filteredMenuItems(menuItems)"
          :class="{'list-unstyled':true, 'd-block' : (selectedParentMenu === item.id && viewingParentMenu === '') || viewingParentMenu === item.id }"
          :data-parent="item.id"
          :key="`sub_${item.id}`"
        >
          <li
            v-for="(sub,subIndex) in filteredMenuItems(item.subs)"
            :key="`sub_${subIndex}`"
            :class="{'has-sub-item' : sub.subs && sub.subs.length > 0 , 'active' : $route.path.indexOf(sub.to)>-1}"
          >
            <a v-if="sub.newWindow" :href="sub.to" rel="noopener noreferrer" target="_blank">
              <i :class="sub.icon" />
              <span>{{ sub.label }}</span>
            </a>
            <template v-else-if="sub.subs &&  sub.subs.length > 0">
              <b-link
                v-b-toggle="`menu_${itemIndex}_${subIndex}`"
                variant="link"
                class="rotate-arrow-icon opacity-50"
              >
                <i class="simple-icon-arrow-down"></i>
                <span class="d-inline-block">{{sub.label}}</span>
              </b-link>
              <b-collapse visible :id="`menu_${itemIndex}_${subIndex}`">
                <ul class="list-unstyled third-level-menu">
                  <li
                    v-for="(thirdLevelSub, thirdIndex) in filteredMenuItems(sub.subs)"
                    :key="`third_${itemIndex}_${subIndex}_${thirdIndex}`"
                    :class="{'third-level-menu':true , 'active' : $route.path ===thirdLevelSub.to}"
                  >
                    <a
                      v-if="thirdLevelSub.newWindow"
                      :href="thirdLevelSub.to"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i :class="thirdLevelSub.icon" />
                      <span>{{ thirdLevelSub.label }}</span>
                    </a>
                    <router-link v-else :to="thirdLevelSub.to">
                      <i :class="thirdLevelSub.icon" />
                      <span>{{ hirdLevelSub.label }}</span>
                    </router-link>
                  </li>
                </ul>
              </b-collapse>
            </template>
            <router-link v-else :to="sub.to">
              <i :class="sub.icon" />
              <span>{{ sub.label }}</span>
            </router-link>
          </li>
        </ul>
      </vue-perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import {
  adminRoot,
  menuHiddenBreakpoint,
  subHiddenBreakpoint,
} from "../../constants/config";
// import menuItems from "../../constants/menu";
import { UserRole } from "../../utils/auth.roles";

const hospital = [{
  id: "home",
  icon: "iconsminds-home",
  label: "Dashboard",
  to: `${adminRoot}/dashboard`,
},
  {
    id: "pages",
    icon: "iconsminds-digital-drawing",
    label: "Manage Patients",
    to: `${adminRoot}/patients`,
  },
  {
    id: "single",
    icon: "iconsminds-profile",
    label: "Your Profile",
    to: `${adminRoot}/profile/hospital`,
  },
  {
    id: "docs",
    icon: "iconsminds-gear",
    label: "App Settings",
    to: `${adminRoot}/dashboard`,
  }
];

const patient = [{
  id: "home",
  icon: "iconsminds-home",
  label: "Dashboard",
  to: `${adminRoot}/dashboard`,
},
  {
    id: "second-menu",
    icon: "iconsminds-library",
    label: "Documents",
    to: `${adminRoot}/documents`,
  },
  {
    id: "pages",
    icon: "iconsminds-digital-drawing",
    label: "Manage Access",
    to: `${adminRoot}/access`,
  },
  {
    id: "other-pages",
    icon: "iconsminds-digital-drawing",
    label: "Access Other's Documents",
    to: `${adminRoot}/accessDocuments`,
  },
  {
    id: "single",
    icon: "iconsminds-profile",
    label: "Your Profile",
    to: `${adminRoot}/profile/patient`,
  },
  {
    id: "docs",
    icon: "iconsminds-gear",
    label: "App Settings",
    to: `${adminRoot}/dashboard`,
  }
];

export default {
  data() {
    return {
      selectedParentMenu: "",
      menuItems: [],
      viewingParentMenu: "",
    };
  },
  mounted() {
    if (this.$store.getters.userType === 'hospital') {
      this.menuItems = hospital
    } else {
      this.menuItems = patient
    }
    this.selectMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.handleDocumentClick);
    this.handleWindowResize();
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleDocumentClick);
    window.removeEventListener("resize", this.handleWindowResize);
  },

  methods: {
    ...mapMutations([
      "changeSideMenuStatus",
      "addMenuClassname",
      "changeSelectedMenuHasSubItems",
    ]),
    selectMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "")[1];
      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboards";
      }
      this.isCurrentMenuHasSubItem();
    },
    isCurrentMenuHasSubItem() {
      const menuItem = this.menuItems.find(
        (x) => x.id === this.selectedParentMenu
      );
      const isCurrentMenuHasSubItem =
        menuItem && menuItem.subs && menuItem.subs.length > 0 ? true : false;
      if (isCurrentMenuHasSubItem != this.selectedMenuHasSubItems) {
        if (!isCurrentMenuHasSubItem) {
          this.changeSideMenuStatus({
            step: 0,
            classNames: this.menuType,
            selectedMenuHasSubItems: false,
          });
        } else {
          this.changeSideMenuStatus({
            step: 0,
            classNames: this.menuType,
            selectedMenuHasSubItems: true,
          });
        }
      }

      return isCurrentMenuHasSubItem;
    },

    changeSelectedParentHasNoSubmenu(parentMenu) {
      this.selectedParentMenu = parentMenu;
      this.viewingParentMenu = parentMenu;
      this.changeSelectedMenuHasSubItems(false);
      this.changeSideMenuStatus({
        step: 0,
        classNames: this.menuType,
        selectedMenuHasSubItems: false,
      });
    },

    openSubMenu(e, menuItem) {
      const selectedParent = menuItem.id;
      const hasSubMenu = menuItem.subs && menuItem.subs.length > 0;
      this.changeSelectedMenuHasSubItems(hasSubMenu);
      if (!hasSubMenu) {
        this.viewingParentMenu = selectedParent;
        this.selectedParentMenu = selectedParent;
        this.toggle();
      } else {
        const currentClasses = this.menuType
          ? this.menuType.split(" ").filter((x) => x !== "")
          : "";

        if (!currentClasses.includes("menu-mobile")) {
          if (
            currentClasses.includes("menu-sub-hidden") &&
            (this.menuClickCount === 2 || this.menuClickCount === 0)
          ) {
            this.changeSideMenuStatus({
              step: 3,
              classNames: this.menuType,
              selectedMenuHasSubItems: hasSubMenu,
            });
          } else if (
            currentClasses.includes("menu-hidden") &&
            (this.menuClickCount === 1 || this.menuClickCount === 3)
          ) {
            this.changeSideMenuStatus({
              step: 2,
              classNames: this.menuType,
              selectedMenuHasSubItems: hasSubMenu,
            });
          } else if (
            currentClasses.includes("menu-default") &&
            !currentClasses.includes("menu-sub-hidden") &&
            (this.menuClickCount === 1 || this.menuClickCount === 3)
          ) {
            this.changeSideMenuStatus({
              step: 0,
              classNames: this.menuType,
              selectedMenuHasSubItems: hasSubMenu,
            });
          }
        } else {
          this.addMenuClassname({
            classname: "sub-show-temporary",
            currentClasses: this.menuType,
          });
        }
        this.viewingParentMenu = selectedParent;
      }
    },
    handleDocumentClick(e) {
      this.viewingParentMenu = "";
      this.selectMenu();
      this.toggle();
    },
    toggle() {
      const currentClasses = this.menuType.split(" ").filter((x) => x !== "");
      if (
        currentClasses.includes("menu-sub-hidden") &&
        this.menuClickCount === 3
      ) {
        this.changeSideMenuStatus({
          step: 2,
          classNames: this.menuType,
          selectedMenuHasSubItems: this.selectedMenuHasSubItems,
        });
      } else if (
        currentClasses.includes("menu-hidden") ||
        currentClasses.includes("menu-mobile")
      ) {
        if (!(this.menuClickCount === 1 && !this.selectedMenuHasSubItems)) {
          this.changeSideMenuStatus({
            step: 0,
            classNames: this.menuType,
            selectedMenuHasSubItems: this.selectedMenuHasSubItems,
          });
        }
      }
    },

    // Resize
    handleWindowResize(event) {
      if (event && !event.isTrusted) {
        return;
      }
      let nextClasses = this.getMenuClassesForResize(this.menuType);
      this.changeSideMenuStatus({
        step: 0,
        classNames: nextClasses.join(" "),
        selectedMenuHasSubItems: this.selectedMenuHasSubItems,
      });
    },
    getMenuClassesForResize(classes) {
      let nextClasses = classes.split(" ").filter((x) => x !== "");
      const windowWidth = window.innerWidth;

      if (windowWidth < menuHiddenBreakpoint) {
        nextClasses.push("menu-mobile");
      } else if (windowWidth < subHiddenBreakpoint) {
        nextClasses = nextClasses.filter((x) => x !== "menu-mobile");
        if (
          nextClasses.includes("menu-default") &&
          !nextClasses.includes("menu-sub-hidden")
        ) {
          nextClasses.push("menu-sub-hidden");
        }
      } else {
        nextClasses = nextClasses.filter((x) => x !== "menu-mobile");
        if (
          nextClasses.includes("menu-default") &&
          nextClasses.includes("menu-sub-hidden")
        ) {
          nextClasses = nextClasses.filter((x) => x !== "menu-sub-hidden");
        }
      }
      return nextClasses;
    },

    //For UserRole
    filteredMenuItems(menuItems) {
      return menuItems
        ? menuItems.filter(
          (x) =>
            !x.roles || (x.roles && x.roles.includes(this.currentUser.role))
        )
        : [];
    },
  },

  computed: {
    ...mapGetters({
      currentUser: "currentUser",
      menuType: "getMenuType",
      menuClickCount: "getMenuClickCount",
      selectedMenuHasSubItems: "getSelectedMenuHasSubItems",
    }),
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        const toParentUrl = to.path.split("/").filter((x) => x !== "")[1];
        if (toParentUrl !== undefined || toParentUrl !== null) {
          this.selectedParentMenu = toParentUrl.toLowerCase();
        } else {
          this.selectedParentMenu = "dashboards";
        }
        this.selectMenu();
        this.toggle();
        this.changeSideMenuStatus({
          step: 0,
          classNames: this.menuType,
          selectedMenuHasSubItems: this.selectedMenuHasSubItems,
        });

        window.scrollTo(0, top);
      }
    },
  },
};
</script>
