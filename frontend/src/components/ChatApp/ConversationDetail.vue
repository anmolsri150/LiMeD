<template>
  <div>
    <div class="d-flex flex-row chat-heading">
      <div class="d-flex">
        <img
          :alt="otherUser.title"
          :src="otherUser.img"
          class="img-thumbnail border-0 rounded-circle ml-0 mr-4 list-thumbnail align-self-center small"
        />
      </div>
      <div class="d-flex min-width-zero">
        <div
          class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
        >
          <div class="min-width-zero">
            <div>
              <p class="list-item-heading mb-1 truncate">
                {{ otherUser.title }}
              </p>
            </div>
            <p class="mb-0 text-muted text-small">{{ otherUser.date }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="separator mb-5" />
    <vue-perfect-scrollbar
      class="scroll"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      ref="chatArea"
    >
      <div v-for="(message, index) in messages" :key="`message${index}`">
        <b-card
          no-body
          :class="{
            'd-inline-block mb-3': true,
            'float-left': message.sender === otherUser.uid,
            'float-right': message.sender === currentUser.uid
          }"
        >
          <div class="position-absolute pt-1 pr-2 r-0">
            <span class="text-extra-small text-muted">{{ message.time }}</span>
          </div>
          <b-card-body>
            <div
              class="d-flex flex-row pb-1"
              v-if="message.sender === currentUser.uid"
            >
              <img
                :alt="currentUser.title"
                :src="currentUser.img"
                class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
              />
              <div class="d-flex flex-grow-1 min-width-zero">
                <div
                  class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                >
                  <div class="min-width-zero">
                    <p class="mb-0 truncate list-item-heading">
                      {{ currentUser.title }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row pb-1" v-else>
              <img
                :alt="otherUser.title"
                :src="otherUser.img"
                class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
              />
              <div class="d-flex flex-grow-1 min-width-zero">
                <div
                  class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                >
                  <div class="min-width-zero">
                    <p class="mb-0 truncate list-item-heading">
                      {{ otherUser.title }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="chat-text-left">
              <p class="mb-0 text-semi-muted">{{ message.text }}</p>
            </div>
          </b-card-body>
        </b-card>
        <div class="clearfix" />
      </div>
    </vue-perfect-scrollbar>
  </div>
</template>
<script>
export default {
  props: ["currentUser", "otherUser", "messages"],
  methods: {
    scrollToEnd() {
      setTimeout(() => {
        const container = this.$refs.chatArea.$el;
        container.scrollTop = container.scrollHeight;
      }, 0);
    }
  },
  mounted() {
    this.scrollToEnd();
  },
  updated() {
    this.scrollToEnd();
  }
};
</script>
