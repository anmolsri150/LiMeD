<template>
  <div
    :class="{'theme-colors':true, 'shown' : isOpen}"
    @mouseenter="isMenuOver=true"
    @mouseleave="isMenuOver=false"
  >
    <div class="p-4">
      <p class="text-muted mb-2">Light Theme</p>
      <div class="d-flex flex-row justify-content-between mb-3">
        <a
          href="#"
          v-for="(color,index) in colors.slice(0,5)"
          :key="`light_${index}`"
          :class="getIconClass(color,'light')"
          @click.prevent="changeThemeColor('light.'+color)"
        ></a>
      </div>
      <div class="d-flex flex-row justify-content-between mb-4">
        <a
          href="#"
          v-for="(color,index) in colors.slice(5,10)"
          :key="`light_${index}`"
          :class="getIconClass(color,'light')"
          @click.prevent="changeThemeColor('light.'+color)"
        ></a>
      </div>

      <p class="text-muted mb-2">Dark Theme</p>
      <div class="d-flex flex-row justify-content-between mb-3">
        <a
          href="#"
          v-for="(color,index) in colors.slice(0,5)"
          :key="`dark_${index}`"
          :class="getIconClass(color,'dark')"
          @click.prevent="changeThemeColor('dark.'+color)"
        ></a>
      </div>

      <div class="d-flex flex-row justify-content-between">
        <a
          href="#"
          v-for="(color,index) in colors.slice(5,10)"
          :key="`dark_${index}`"
          :class="getIconClass(color,'dark')"
          @click.prevent="changeThemeColor('dark.'+color)"
        ></a>
      </div>
    </div>
    <div class="pb-0 pl-4 pt-4">
      <b-form-group label="Border Radius">
        <b-form-radio-group name="radius" v-model="radius">
          <b-form-radio value="rounded" @change="changeRadius('rounded')">Rounded</b-form-radio>
          <b-form-radio value="flat" @change="changeRadius('flat')">Flat</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
    </div>
    <a href="#" class="theme-button" @click.prevent="toggle">
      <i class="simple-icon-magic-wand"></i>
    </a>
  </div>
</template>

<script>
import { colors } from "../../constants/config";
import {
  getThemeRadius,
  setThemeRadius,
  setThemeColor,
  getThemeColor
} from "../../utils";
export default {
  data() {
    return {
      isOpen: false,
      isMenuOver: false,
      selectedColor: "",
      colors,
      radius: getThemeRadius()
    };
  },
  methods: {
    getIconClass(color, type) {
      var classes = ["theme-color", "theme-color-" + color];
      if (this.selectedColor === type + "." + color) {
        classes.push("active");
      }
      return classes.join(" ");
    },

    addEvents() {
      document.addEventListener("click", this.handleDocumentClick);
      document.addEventListener("touchstart", this.handleDocumentClick);
    },
    removeEvents() {
      document.removeEventListener("click", this.handleDocumentClick);
      document.removeEventListener("touchstart", this.handleDocumentClick);
    },
    handleDocumentClick(e) {
      if (!this.isMenuOver) {
        this.toggle();
      }
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    changeThemeColor(color) {
      setThemeColor(color);
      this.toggle();
      setTimeout(() => {
        window.location.reload();
      }, 500);
    },
    changeRadius(radius) {
      if (radius === "flat") {
        document.body.classList.remove("rounded");
      } else {
        document.body.classList.add("rounded");
      }
      setThemeRadius(radius);
    }
  },
  watch: {
    isOpen(val) {
      if (val) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  },
  beforeDestroy() {
    this.removeEvents();
  },
  mounted() {
    const color = getThemeColor();
    if (color != null && colors.includes(color.split(".")[1]))
      this.selectedColor = color;
    else this.selectedColor = getThemeColor();
    this.changeRadius(this.radius);
  }
};
</script>
