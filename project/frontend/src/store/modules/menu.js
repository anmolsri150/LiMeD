import { defaultMenuType } from '../../constants/config'
const state = {
  menuType: defaultMenuType,
  clickCount: 0,
  selectedMenuHasSubItems: defaultMenuType === 'menu-default'
}

const getters = {
  getMenuType(state) {
    return state.menuType
  },
  getSelectedMenuHasSubItems(state) {
    return state.selectedMenuHasSubItems
  },
  getMenuClickCount(state) {
    return state.clickCount % 4
  }
}

const mutations = {
  changeSideMenuStatus(state, payload) {
    let { classNames, step: clickIndex, selectedMenuHasSubItems } = payload;
    const currentClasses = classNames ? classNames.split(' ').filter(x => x !== '') : '';
    let nextClasses = '';
    if (!selectedMenuHasSubItems) {
      if (currentClasses.includes("menu-default") && (clickIndex % 4 === 0 || clickIndex % 4 === 3))
        clickIndex = 1;

      if (currentClasses.includes("menu-sub-hidden") && (clickIndex % 4 === 2))
        clickIndex = 0;

      if (currentClasses.includes("menu-hidden") && (clickIndex % 4 === 2 || clickIndex % 4 === 3))
        clickIndex = 0;
    }

    if (clickIndex % 4 === 0) {
      if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-default menu-sub-hidden';
      } else if (currentClasses.includes('menu-default')) {
        nextClasses = 'menu-default';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-sub-hidden';
      } else if (currentClasses.includes('menu-hidden')) {
        nextClasses = 'menu-hidden';
      }
      clickIndex = 0;
    } else if (clickIndex % 4 === 1) {
      if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-default menu-sub-hidden main-hidden sub-hidden';
      } else if (currentClasses.includes('menu-default')) {
        nextClasses = 'menu-default sub-hidden';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-sub-hidden main-hidden sub-hidden';
      } else if (currentClasses.includes('menu-hidden')) {
        nextClasses = 'menu-hidden main-show-temporary';
      }
    } else if (clickIndex % 4 === 2) {
      if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-default menu-sub-hidden sub-hidden';
      } else if (currentClasses.includes('menu-default')) {
        nextClasses = 'menu-default main-hidden sub-hidden';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-sub-hidden sub-hidden';
      } else if (currentClasses.includes('menu-hidden')) {
        nextClasses = 'menu-hidden main-show-temporary sub-show-temporary';
      }
    } else if (clickIndex % 4 === 3) {
      if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-default menu-sub-hidden sub-show-temporary';
      } else if (currentClasses.includes('menu-default')) {
        nextClasses = 'menu-default sub-hidden';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-sub-hidden sub-show-temporary';
      } else if (currentClasses.includes('menu-hidden')) {
        nextClasses = 'menu-hidden main-show-temporary';
      }
    }
    if (currentClasses.includes('menu-mobile')) {
      nextClasses += ' menu-mobile';
    }
    state.menuType = nextClasses
    state.clickCount = clickIndex
    state.selectedMenuHasSubItems=selectedMenuHasSubItems
  },

  changeSelectedMenuHasSubItems(state, payload) {
    state.selectedMenuHasSubItems = payload
  },
  addMenuClassname(state, payload) {
    const { classname, currentClasses } = payload

    const nextClasses =
      !currentClasses.indexOf(classname) > -1
        ? currentClasses + ' ' + classname
        : currentClasses
    state.menuType = nextClasses
  },
  changeSideMenuForMobile(state, strCurrentClasses) {

    const currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(x => x !== '' && x !== 'sub-show-temporary') : '';
    let nextClasses = '';
    if (currentClasses.includes('main-show-temporary')) {
      nextClasses = (currentClasses.filter(x => x !== 'main-show-temporary')).join(' ');
    } else {
      nextClasses = currentClasses.join(' ') + ' main-show-temporary';
    }
    
    state.menuType = nextClasses
    state.clickCount = 0
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
