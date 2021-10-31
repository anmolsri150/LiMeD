<template>
  <b-card class="mb-4" no-body>
    <b-card-body>
      <p class="list-item-heading mb-4">{{ $t("survey.quota") }}</p>
      <div class="mb-4">
        <p class="mb-2">Gender</p>
        <b-progress class="mb-3">
          <b-progress-bar :value="60" variant="theme-1"></b-progress-bar>
          <b-progress-bar :value="40" variant="theme-2"></b-progress-bar>
        </b-progress>
        <table class="table table-sm table-borderless">
          <tbody>
            <tr>
              <td class="p-0 pb-1 w-10">
                <span class="log-indicator border-theme-1 align-middle"></span>
              </td>
              <td class="p-0 pb-1">
                <span class="font-weight-medium text-muted text-small">105/125 Male</span>
              </td>
            </tr>
            <tr>
              <td class="p-0 pb-1 w-10">
                <span class="log-indicator border-theme-2 align-middle"></span>
              </td>
              <td class="p-0 pb-1">
                <span class="font-weight-medium text-muted text-small">90/125 Female</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mb-4">
        <p class="mb-2">Education</p>
        <b-progress class="mb-3">
          <b-progress-bar :value="80" variant="theme-1"></b-progress-bar>
          <b-progress-bar :value="20" variant="theme-2"></b-progress-bar>
        </b-progress>
        <table class="table table-sm table-borderless">
          <tbody>
            <tr>
              <td class="p-0 pb-1 w-10">
                <span class="log-indicator border-theme-1 align-middle" />
              </td>
              <td class="p-0 pb-1">
                <span class="font-weight-medium text-muted text-small">139/125 College</span>
              </td>
            </tr>
            <tr>
              <td class="p-0 pb-1 w-10">
                <span class="log-indicator border-theme-2 align-middle" />
              </td>
              <td class="p-0 pb-1">
                <span class="font-weight-medium text-muted text-small">95/125 High School</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mb-4">
        <p class="mb-2">Age</p>
        <b-progress class="mb-3">
          <b-progress-bar :value="35" variant="theme-1"></b-progress-bar>
          <b-progress-bar :value="25" variant="theme-2"></b-progress-bar>
          <b-progress-bar :value="40" variant="theme-3"></b-progress-bar>
        </b-progress>
        <table class="table table-sm table-borderless">
          <tbody>
            <tr>
              <td class="p-0 pb-1 w-10">
                <span class="log-indicator border-theme-1 align-middle" />
              </td>
              <td class="p-0 pb-1">
                <span class="font-weight-medium text-muted text-small">50/75 18-24</span>
              </td>
            </tr>
            <tr>
              <td class="p-0 pb-1 w-10">
                <span class="log-indicator border-theme-2 align-middle" />
              </td>
              <td class="p-0 pb-1">
                <span class="font-weight-medium text-muted text-small">40/75 24-30</span>
              </td>
            </tr>
            <tr>
              <td class="p-0 pb-1 w-10">
                <span class="log-indicator border-theme-3 align-middle" />
              </td>
              <td class="p-0 pb-1">
                <span class="font-weight-medium text-muted text-small">60/75 30-40</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {};
</script>
