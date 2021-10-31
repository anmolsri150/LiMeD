<template>
  <application-menu>
    <vue-perfect-scrollbar :settings="{ suppressScrollX: true, wheelPropagation: false }">
      <div class="p-4">
        <p class="text-muted text-small mb-3">{{$t('survey.status')}}</p>
        <ul class="list-unstyled mb-4">
          <li class="nav-item">
            <a href="#">
              <i class="simple-icon-reload" />
              <span class="d-inline-block">{{$t('survey.all-surveys')}}</span>
              <span class="float-right">{{items ? items.length : 0}}</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <i class="simple-icon-refresh" />
              <span class="d-inline-block">{{$t('survey.active-surveys')}}</span>
              <span class="float-right">{{items ? items.filter(x => x.status === "PENDING").length : 0}}</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <i class="simple-icon-check" />
              <span class="d-inline-block">{{$t('survey.completed-surveys')}}</span>
              <span class="float-right">{{items ? items.filter(x => x.status === "COMPLETED").length : 0}}</span>
            </a>
          </li>
        </ul>
        <p class="text-muted text-small mb-1">{{$t('survey.categories')}}</p>
        <ul class="list-unstyled mb-4">
          <b-form-radio-group
            stacked
            class="pt-2"
            :options="categories.map((c)=> {return {text:c.label,value:c.value}})"
          />
        </ul>
        <p class="text-muted text-small mb-3">{{$t('survey.labels')}}</p>
        <div>
          <p class="d-sm-inline-block mb-1" v-for="(l,index) in labels" :key="index">
            <a href="#">
              <b-badge pill :variant="`outline-${l.color}`" class="mb-1 mr-1">{{l.label}}</b-badge>
            </a>
          </p>
        </div>
      </div>
    </vue-perfect-scrollbar>
  </application-menu>
</template>


<script>
import ApplicationMenu from "../../components/Common/ApplicationMenu";
export default {
  components: {
    "application-menu": ApplicationMenu
  },
  props: ["categories", "labels", "items"],
  mounted() {
    document.body.classList.add("right-menu");
  },
  beforeDestroy() {
    document.body.classList.remove("right-menu");
  }
};
</script>
