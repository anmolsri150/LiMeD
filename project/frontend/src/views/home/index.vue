<template>
  <home-layout>
    <div :class="{'landing-page': true,'show-mobile-menu': showMobileMenu}">
      <div class="mobile-menu" @click="$event.stopPropagation()">
        <a @click="scrollTo('#home')" href="javascript:;" class="logo-mobile">
          <span></span>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a @click="scrollTo('#features')" href="javascript:;">FEATURES</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#layouts')" href="javascript:;">LAYOUTS</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#components')" href="javascript:;">COMPONENTS</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#apps')" href="javascript:;">APPS</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#themes')" href="javascript:;">THEMES</a>
          </li>
          <li class="nav-item">
            <div class="separator"></div>
          </li>
          <li class="nav-item text-center">
            <a
              class="btn btn-outline-primary btn-sm mobile-menu-cta"
              target="_blank"
              :href="buyUrl"
            >BUY</a>
          </li>
        </ul>
      </div>

      <div class="main-container">
        <div class="landing-page-nav">
          <headroom style="height:initial;">
            <nav>
              <div class="container d-flex align-items-center justify-content-between">
                <a class="navbar-logo pull-left" @click="scrollTo('#home')" href="javascript:;">
                  <span class="white"></span>
                  <span class="dark"></span>
                </a>
                <ul class="navbar-nav d-none d-lg-flex flex-row">
                  <li class="nav-item">
                    <a @click="scrollTo('#features')" href="javascript:;">FEATURES</a>
                  </li>
                  <li class="nav-item">
                    <a @click="scrollTo('#layouts')" href="javascript:;">LAYOUTS</a>
                  </li>
                  <li class="nav-item">
                    <a @click="scrollTo('#components')" href="javascript:;">COMPONENTS</a>
                  </li>
                  <li class="nav-item">
                    <a @click="scrollTo('#apps')" href="javascript:;">APPS</a>
                  </li>
                  <li class="nav-item">
                    <a @click="scrollTo('#themes')" href="javascript:;">THEMES</a>
                  </li>
                  <li class="nav-item pl-4">
                    <a
                      class="btn btn-outline-semi-light btn-sm pr-4 pl-4"
                      target="_blank"
                      :href="buyUrl"
                    >BUY</a>
                  </li>
                </ul>
                <span
                  class="mobile-menu-button"
                  @click="showMobileMenu=!showMobileMenu; $event.stopPropagation()"
                >
                  <i class="simple-icon-menu"></i>
                </span>
              </div>
            </nav>
          </headroom>
        </div>

        <div class="content-container" id="home">
          <div class="section home" id="sectionHome">
            <div class="container">
              <div class="row home-row" id="homeRow">
                <div class="col-12 d-block d-md-none">
                  <a :href="adminRoot" target="_blank">
                    <img
                      alt="mobile hero"
                      class="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </a>
                </div>

                <div class="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div class="home-text">
                    <div class="display-1">
                      MAGIC IS IN
                      <br />THE DETAILS
                    </div>
                    <p class="white mb-5">
                      Piaf is the combination of good design, quality code and attention for
                      details.
                      <br />
                      <br />We used same design language for components, layouts, apps
                      and other parts of the template.
                      <br />
                      <br />Hope you enjoy it!
                    </p>
                    <a class="btn btn-light btn-xl mr-2 mb-2" :href="adminRoot" target="_blank">
                      VIEW NOW
                      <i class="simple-icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6 d-none d-md-block">
                  <a :href="adminRoot" target="_blank">
                    <img alt="hero" src="/assets/img/landing-page/home-hero.png" />
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-12 p-0">
                  <div class="home-carousel">
                    <glide-component :settings="slideSettings">
                      <div class="card" v-for="(f,index) in slideItems" :key="`slide_${index}`">
                        <div class="card-body text-center">
                          <div>
                            <i :class="f.icon+ ' large-icon'"></i>
                            <h5 class="mb-3 font-weight-semibold">{{f.title}}</h5>
                          </div>
                          <div>
                            <p class="detail-text">{{f.detail}}</p>
                          </div>
                        </div>
                      </div>
                    </glide-component>
                  </div>
                </div>
              </div>

              <div class="row">
                <a
                  class="btn btn-circle btn-outline-semi-light hero-circle-button"
                  @click="scrollTo('#features')"
                >
                  <i class="simple-icon-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="container" id="features">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Features At a Glance</h1>
                  <p>
                    We tried to create an admin theme that we would like to use ourselves so we listed our
                    priorities. We
                    would like to have a theme that is not over complicated to use, does the job well,
                    contains must have
                    components and looks really nice.
                  </p>
                </div>
              </div>

              <div v-for="(feature,i) in features" :key="`feature_${i}`">
                <div v-if="i%2==0" class="row feature-row">
                  <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                    <div class="feature-text-container">
                      <h2>{{feature.title}}</h2>
                      <p v-html="feature.detail"></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
                    <img
                      :alt="feature.title"
                      :src="feature.img"
                      class="feature-image-right feature-image-charts position-relative"
                    />
                  </div>
                </div>
                <div v-if="i%2==1" class="row feature-row">
                  <div class="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                    <img
                      :alt="feature.title"
                      :src="feature.img"
                      class="feature-image-left feature-image-charts"
                    />
                  </div>
                  <div
                    class="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2"
                  >
                    <div class="feature-text-container">
                      <h2>{{feature.title}}</h2>
                      <p v-html="feature.detail"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section background">
            <div class="container" id="layouts">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Structures &amp; Layouts</h1>
                  <p>
                    We did our best to create layouts for various needs that developers might have and best
                    experience
                    for users.
                    <br />They are clean and slick. They function well and look good at the same time.
                  </p>
                </div>
              </div>

              <div class="row pt-5">
                <div
                  class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5"
                  v-for="(l,index) in layouts"
                  :key="`layout_${index}`"
                >
                  <img class="img-fluid border-radius depth-2 mb-3 semi-rounded" :src="l.img" />
                  <h4 class="text-center">{{l.title}}</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="section mb-0">
            <div class="container" id="components">
              <div class="row mb-5">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Components</h1>
                  <p>
                    We used most popular and well managed open source components with bootstrap components.
                    Combined them into even more useful ones. Themed them with same design principles and
                    created a design harmony between components and layouts.
                    <br />
                    <br />From carousels to charts, switches to list we tried to provide components that we like
                    to use on our development processes.
                  </p>
                </div>
              </div>
            </div>
            <img class="components-image mb-5 pb-5" src="/assets/img/landing-page/components.jpg" />
          </div>

          <div class="section background">
            <div class="container" id="apps">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center mb-4">
                  <h1>Applications</h1>
                  <p class="section-text">
                    With the help of components and layouts, we created four different applications.
                    They
                    are a good way to get you started
                    if you want to build something similar.
                  </p>
                </div>
              </div>
              <div class="row screenshots">
                <div class="col-12 text-center mb-4">
                  <b-tabs
                    nav-class="justify-content-center"
                    content-class="card-body pt-0"
                    :no-fade="true"
                  >
                    <b-tab
                      v-for="(app,index) in applications"
                      :key="`app_${index}`"
                      :title="app.title"
                    >
                      <router-link :to="app.path">
                        <img :alt="app.title" :src="app.img" class="app-image" />
                      </router-link>
                    </b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
          </div>

          <div class="section mb-0">
            <div class="container" id="themes">
              <div class="row mb-5">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Themes</h1>
                  <p>
                    We carefully choosed colors and created 10 different themes with dark and light
                    versions. You may also
                    create your own themes easily since all the theme related styling is managed by Sass
                    variables.
                  </p>
                </div>
              </div>
              <div class="row mb-5" v-for="(t,index) in themes" :key="`themes_${index}`">
                <div class="col-12 text-center mb-3">
                  <h4 class="text-center">{{t.title}}</h4>
                </div>
                <div class="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                  <div class="depth-2 color-container">
                    <div
                      v-for="(align,i) in ['left','center','right']"
                      :key="`align_light_${index}_${i}`"
                      :class="t.class + '-light-'+(i+1)+' color-' + align"
                    ></div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                  <div class="depth-2 color-container">
                    <div
                      v-for="(align,i) in ['left','center','right']"
                      :key="`align_dark_${index}_${i}`"
                      :class="t.class + '-dark-'+(i+1)+' color-' + align"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section background background-no-bottom mb-0 pb-0">
            <div class="container">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Enjoying so Far?</h1>
                  <p>Purchase Piaf to get a fresh start with your new project.</p>
                </div>
                <div class="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                  <div class="text-center mb-3">
                    <a class="btn btn-secondary btn-xl" target="_blank" :href="buyUrl">BUY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section footer mb-0" id="sectionFooter">
            <div class="container">
              <div class="row footer-row">
                <div class="col-12 text-right">
                  <a
                    class="btn btn-circle btn-outline-semi-light footer-circle-button"
                    @click="scrollTo('#home')"
                    href="javascript:;"
                  >
                    <i class="simple-icon-arrow-up"></i>
                  </a>
                </div>
                <div class="col-12 text-center footer-content">
                  <a @click="scrollTo('#home')" href="javascript:;">
                    <img class="footer-logo" alt="footer logo" src="/assets/logos/white-full.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div class="container copyright pt-5 pb-5">
              <div class="row">
                <div class="col-12"></div>
                <div class="col-12 text-center">
                  <p class="mb-0">2020 © ColoredStrategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </home-layout>
</template>

<script>
import { headroom } from "vue-headroom";
import VueScrollTo from "vue-scrollto";
import HomeLayout from "../../layouts/HomeLayout";
import GlideComponent from "../../components/Carousel/GlideComponent";
import { adminRoot, buyUrl } from "../../constants/config";
const slideSettings = {
  type: "carousel",
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    "600": { perView: 1 },
    "992": { perView: 2 },
    "1200": { perView: 3 }
  }
};

const slideItems = [
  {
    icon: "iconsminds-mouse-3",
    title: "Right Click Menu",
    detail:
      "Increases overall usability of the project by providing additional actions menu."
  },
  {
    icon: "iconsminds-electric-guitar",
    title: "Video Player",
    detail:
      "Carefully themed multimedia players powered by Video.js library with Youtube support."
  },
  {
    icon: "iconsminds-keyboard",
    title: "Keyboard Shortcuts",
    detail:
      "Easily configurable keyboard shortcuts plugin that highly improves user experience."
  },
  {
    icon: "iconsminds-three-arrow-fork ",
    title: "Two Panels Menu",
    detail:
      "Three states two panels icon menu that looks good, auto resizes and does the job well."
  },
  {
    icon: "iconsminds-deer",
    title: "Icons Mind",
    detail:
      "1040 icons in 53 different categories, designed pixel perfect and ready for your project."
  },
  {
    icon: "iconsminds-palette",
    title: "20 Color Schemes",
    detail:
      "Colors, icons and design harmony that creates excellent themes to cover entire project."
  },
  {
    icon: "iconsminds-air-balloon-1",
    title: "3 Applications",
    detail:
      "Applications that mostly made of components are the way to get started to create something similar."
  },
  {
    icon: "iconsminds-resize",
    title: "Extra Responsive",
    detail:
      "Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens."
  }
];

const features = [
  {
    title: "Pleasant Design",
    img: "/assets/img/landing-page/features/pleasant-design.png",
    detail:
      "As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view. <br /><br />So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language. <br /><br />We kept user experience principles always at the heart of the design process."
  },
  {
    title: "Extra Responsive",
    img: "/assets/img/landing-page/features/extra-responsive.png",
    detail:
      "Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that has a resolution higher than 1440px. Xl works between 1200px and 1440px.<br><br>With this approach we were able to create better experiences for smaller and larger screens."
  },
  {
    title: "Superfine Charts",
    img: "/assets/img/landing-page/features/superfine-charts.png",
    detail:
      "Using charts is a good way to visualize data but they often look ugly and break the rhythm of design. <br /><br />We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow. <br /><br />Used certain plugins and created some to make charts even more useful and beautiful."
  },
  {
    title: "Layouts for the Job",
    img: "/assets/img/landing-page/features/layouts-for-the-job.png",
    detail:
      "Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer. <br /><br />We created lots of different layouts for different jobs.<br /><br />Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components."
  },
  {
    title: "Smart Menu",
    img: "/assets/img/landing-page/features/smart-menu.png",
    detail:
      "Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.<br><br>The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only."
  }
];

const layouts = [
  {
    title: "Menu Default",
    img: "/assets/img/landing-page/layouts/menu-default.jpg"
  },
  {
    title: "Menu Subhidden",
    img: "/assets/img/landing-page/layouts/menu-subhidden.jpg"
  },
  {
    title: "Menu Hidden",
    img: "/assets/img/landing-page/layouts/menu-hidden.jpg"
  },
  {
    title: "Image List",
    img: "/assets/img/landing-page/layouts/image-list.jpg"
  },
  {
    title: "Thumb List",
    img: "/assets/img/landing-page/layouts/thumb-list.jpg"
  },
  { title: "Data List", img: "/assets/img/landing-page/layouts/data-list.jpg" },
  { title: "Details", img: "/assets/img/landing-page/layouts/details.jpg" },
  {
    title: "Authentication",
    img: "/assets/img/landing-page/layouts/authentication.jpg"
  },
  {
    title: "Search Results",
    img: "/assets/img/landing-page/layouts/search-results.jpg"
  },
  {
    title: "Single Page Application",
    img: "/assets/img/landing-page/layouts/spa.jpg"
  },
  {
    title: "Data List App Menu Hidden",
    img: "/assets/img/landing-page/layouts/data-list-app-menu-hidden.jpg"
  },
  { title: "Tabs", img: "/assets/img/landing-page/layouts/tabs.jpg" }
];

const applications = [
  {
    title: "Survey",
    path: `${adminRoot}/applications/survey`,
    img: "/assets/img/landing-page/applications/survey.jpg"
  },
  {
    title: "Chat",
    path: `${adminRoot}/applications/chat`,
    img: "/assets/img/landing-page/applications/chat.jpg"
  },
  {
    title: "Todo",
    path: `${adminRoot}/applications/todo`,
    img: "/assets/img/landing-page/applications/todo.jpg"
  }
];

const themes = [
  { title: "Navy Blue", class: "bluenavy" },
  { title: "Olympic Blue", class: "blueolympic" },
  { title: "Yale Blue", class: "blueyale" },
  { title: "Moss Green", class: "greenmoss" },
  { title: "Lime Green", class: "greenlime" },
  { title: "Carrot Orange", class: "carrotorange" },
  { title: "Ruby Red", class: "rubyred" },
  { title: "Monster Purple", class: "monsterpurple" },
  { title: "Steel Grey", class: "steelgrey" },
  { title: "Granola Yellow", class: "granolayellow" }
];
const scrollOptions = {
  container: "body",
  easing: "ease-in",
  offset: -120,
  force: true,
  x: false,
  y: true
};

export default {
  components: {
    "home-layout": HomeLayout,
    "glide-component": GlideComponent,
    headroom: headroom
  },
  data() {
    return {
      showMobileMenu: false,
      adminRoot,
      buyUrl,
      slideSettings,
      slideItems,
      features,
      layouts,
      applications,
      themes
    };
  },
  methods: {
    onWindowResize() {
      const homeRect = document
        .getElementById("homeRow")
        .getBoundingClientRect();
      const homeSection = document.getElementById("sectionHome");
      homeSection.style.backgroundPositionX = homeRect.x - 580 + "px";

      const footerSection = document.getElementById("sectionFooter");
      footerSection.style.backgroundPositionX =
        event.target.innerWidth - homeRect.x - 2000 + "px";

      if (event.target.innerWidth >= 992) {
        this.showMobileMenu = false;
      }
    },
    onWindowScroll() {
      this.showMobileMenu = false;
    },
    onWindowClick() {
      this.showMobileMenu = false;
    },

    scrollTo(target) {
      VueScrollTo.scrollTo(target, 200, scrollOptions);
    }
  },
  mounted() {
    document.body.classList.add("no-footer");
    window.addEventListener("scroll", this.onWindowScroll);
    window.addEventListener("resize", this.onWindowResize);
    window.addEventListener("click", this.onWindowClick);
  },
  beforeDestroy() {
    document.body.classList.remove("no-footer");
    window.removeEventListener("scroll", this.onWindowScroll);
    window.removeEventListener("resize", this.onWindowResize);
    window.removeEventListener("click", this.onWindowClick);
  }
};
</script>
