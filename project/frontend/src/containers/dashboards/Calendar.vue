<template>
  <b-card :title="$t('dashboards.calendar')">
    <calendar-view
      style="min-height:500px"
      :events="events"
      :show-date="showDate"
      :time-format-options="{hour: 'numeric', minute:'2-digit'}"
      :enable-drag-drop="true"
      :show-event-times="true"
      display-period-uom="month"
      :starting-day-of-week="1"
      current-period-label="Today"
      @drop-on-date="onDropDate"
      @click-date="onClickDay"
      @click-event="onClickEvent"
    >
      <calendar-view-header
        slot="header"
        slot-scope="t"
        :header-props="t.headerProps"
        @input="setShowDate"
      />
    </calendar-view>
  </b-card>
</template>
<script>
import {
  CalendarView,
  CalendarViewHeader,
  CalendarMathMixin
} from "vue-simple-calendar";

export default {
  components: {
    "calendar-view": CalendarView,
    "calendar-view-header": CalendarViewHeader
  },
  mixins: [CalendarMathMixin],
  data() {
    return {
      showDate: this.thisMonth(1),
      events: [
        {
          id: "e2",
          startDate: this.thisMonth(15),
          title: "Meeting",
          classes: "secondary"
        },
        {
          id: "e3",
          startDate: this.thisMonth(8, 9, 25),
          endDate: this.thisMonth(9, 16, 30),
          title: "Sales",
          classes: "primary"
        },
        {
          id: "e5",
          startDate: this.thisMonth(5),
          endDate: this.thisMonth(12),
          title: "Tax Days",
          classes: "secondary"
        },
        {
          id: "e10",
          startDate: this.thisMonth(27),
          title: "My Birthday!"
        }
      ]
    };
  },
  methods: {
    thisMonth(d, h, m) {
      const t = new Date();
      return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0);
    },
    onClickDay(d) {
      console.log(`You clicked: ${d.toLocaleDateString()}`);
    },
    onClickEvent(e) {
      console.log(`You clicked: ${e.title}`);
    },
    setShowDate(d) {
      this.showDate = d;
    },
    onDropDate(event, date) {
      console.log(`You dropped ${event.id} on ${date.toLocaleDateString()}`);
      const eLength = this.dayDiff(event.startDate, date);
      event.originalEvent.startDate = this.addDays(event.startDate, eLength);
      event.originalEvent.endDate = this.addDays(event.endDate, eLength);
    }
  }
};
</script>
