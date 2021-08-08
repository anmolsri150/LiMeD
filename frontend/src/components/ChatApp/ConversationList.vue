<template>
  <vue-perfect-scrollbar
    class="scroll"
    :settings="{ suppressScrollX: true, wheelPropagation: false }"
  >
    <div class="pt-0 spaced-content pb-0">
      <div
        class="d-flex flex-row mb-1 border-bottom pb-3"
        v-for="(conversation,index) in conversations"
        :key="`conversation${index}`"
      >
        <a class="d-flex" href="#" @click.prevent="selectConversation(conversation)">
          <img
            :src="otherUser(conversation.users).img"
            class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
          >
          <div class="d-flex flex-grow-1 min-width-zero">
            <div
              class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
            >
              <div class="min-width-zero">
<!--                <p class="mb-0 truncate">{{otherUser(conversation.users).title}}</p>-->
                <p class="mb-0 truncate">TT</p>
                <p class="mb-1 text-muted text-small">{{conversation.lastMessageTime}}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </vue-perfect-scrollbar>
</template>

<script>
export default {
  props: ['conversations', 'contacts', 'currentUser'],
  methods: {
    selectConversation (conversation) {
      const otherUser = this.otherUser(conversation.users)
      this.$emit('select-conversation', otherUser, conversation.messages)
    },
    otherUser (users) {
      var otherUserId = users.find(x => x !== this.currentUser.uid)
      return this.contacts.find(x => x.uid === otherUserId)
    }
  },
  computed: {},
  mounted () {
    this.selectConversation(this.conversations[0])
  }
}
</script>
