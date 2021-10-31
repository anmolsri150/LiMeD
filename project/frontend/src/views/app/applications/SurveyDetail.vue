<template>
  <div class="disable-text-selection">
    <b-row class="app-row survey-app pb-4">
      <b-colxx xxs="12" v-if="isLoadSurveys" key="surveyDetail">
        <div v-if="currentSurvey">
          <h1 >
          <i
            :class="{
              'heading-icon': true,
              'simple-icon-check': currentSurvey.status === 'COMPLETED',
              'simple-icon-refresh': currentSurvey.status !== 'COMPLETED'
            }"
          />
          <span class="align-middle d-inline-block pt-1">{{ currentSurvey.title }}</span>
        </h1>
        <div class="top-right-button-container">
          <b-button-group>
            <b-button
              variant="outline-primary"
              size="lg"
              class="flex-grow-1"
            >{{ $t("survey.save") }}</b-button>
            <b-dropdown right variant="outline-primary" toggle-class="spaced-content xs">
              <b-dropdown-item>{{ $t("survey.delete") }}</b-dropdown-item>
              <b-dropdown-item>{{ $t("survey.edit") }}</b-dropdown-item>
            </b-dropdown>
          </b-button-group>
        </div>
        <piaf-breadcrumb />
        <b-tabs
          nav-class="separator-tabs ml-0 mb-5"
          content-class="tab-content"
          v-model="tabIndex"
          :no-fade="true"
          v-if="isLoadSurveys"
          key="itemList"
        >
          <b-tab :title="$t('survey.details')">
            <b-row>
              <b-colxx xxs="12" lg="4" class="mb-4">
                <b-card class="mb-4" no-body>
                  <survey-detail-card v-if="currentSurvey" :survey="currentSurvey"></survey-detail-card>
                </b-card>
              </b-colxx>
              <b-colxx xxs="12" lg="8">
                <div class="sortable-survey" v-if="currentSurvey">
                  <draggable type="ul" class="list-unstyled mb-4" handle=".drag">
                    <question-builder
                      class="drag"
                      v-for="(question, index) in currentSurvey.questions"
                      :key="`question_${index}`"
                      :data="question"
                      :sort="index + 1"
                    />
                  </draggable>
                </div>
                <div class="text-center">
                  <b-button variant="outline-primary" class="mt-3" @click="addQuestion">
                    <i class="simple-icon-plus btn-group-icon" />
                    {{ $t("survey.add-question") }}
                  </b-button>
                </div>
              </b-colxx>
            </b-row>
          </b-tab>
          <b-tab :title="$t('survey.results')">
            <b-row>
              <b-colxx xxs="12" lg="4">
                <survey-detail-quotas></survey-detail-quotas>
              </b-colxx>
              <b-colxx xxs="12" lg="8">
                <survey-detail-charts :tabIndex="tabIndex"></survey-detail-charts>
              </b-colxx>
            </b-row>
          </b-tab>
        </b-tabs>
        </div>
        <div v-else class="loading" key="itemLoading"></div>
      </b-colxx>
    </b-row>
    <survey-application-menu
      v-if="isLoadSurveys"
      :surveyItems="surveyItems"
      :categories="categories"
      :labels="labels"
    ></survey-application-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Draggable from "vuedraggable";
import QuestionBuilder from "../../../components/SurveyApp/QuestionBuilder";
import SurveyApplicationMenu from "../../../containers/applications/SurveyApplicationMenu";
import SurveyDetailCard from "../../../containers/applications/SurveyDetailCard";
import SurveyDetailQuotas from "../../../containers/applications/SurveyDetailQuotas";
import SurveyDetailCharts from "../../../containers/applications/SurveyDetailCharts";
export default {
  components: {
    draggable: Draggable,
    "survey-detail-card": SurveyDetailCard,
    "survey-detail-quotas": SurveyDetailQuotas,
    "survey-detail-charts": SurveyDetailCharts,
    "survey-application-menu": SurveyApplicationMenu,
    "question-builder": QuestionBuilder
  },
  data() {
    return {
      categories: [
        {
          label: "Development",
          value: "Development"
        },
        {
          label: "Workplace",
          value: "Workplace"
        },
        {
          label: "Hardware",
          value: "Hardware"
        }
      ],
      labels: [
        {
          label: "EDUCATION",
          value: "EDUCATION",
          color: "secondary"
        },
        {
          label: "NEW FRAMEWORK",
          value: "NEW FRAMEWORK",
          color: "primary"
        },
        {
          label: "PERSONAL",
          value: "PERSONAL",
          color: "info"
        }
      ],
      statuses: [
        {
          text: "ACTIVE",
          value: "ACTIVE"
        },
        {
          text: "COMPLETED",
          value: "COMPLETED"
        }
      ],
      currentSurvey: null,
      tabIndex: 0
    };
  },
  computed: {
    ...mapGetters(["isLoadSurveys", "surveyItems", "surveyError"])
  },
  methods: {
    ...mapActions(["getSurveyItems"]),
    ...mapMutations(["addSurveyItem"]),
    addQuestion() {
      this.currentSurvey.questions.push({
        id: this.currentSurvey.questions.length + 1,
        title: "New Question",
        question: "Question",
        answerType: 0,
        answers: []
      });
    }
  },
  mounted() {
    this.getSurveyItems();
  },
  watch: {
    isLoadSurveys(val) {
      if (val === true) {
        this.currentSurvey = this.surveyItems[0];
      }
    }
  }
};
</script>
