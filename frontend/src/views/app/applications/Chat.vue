<template>
<div>
    <b-row class="app-row">
        <b-colxx xxs="12" class="chat-app">
            <conversation-detail v-if="isLoadContacts && isLoadConversations && otherUser!=null" key="conversation" :current-user="currentUser" :other-user="otherUser" :messages="conversationMessages" />
            <div v-else class="loading" key="conversationLoading"></div>
          {{this.$store.state.conversations}}
        </b-colxx>
    </b-row>
    <div class="chat-input-container d-flex justify-content-between align-items-center">
        <b-input class="flex-grow-1" type="text" :placeholder="$t('chat.saysomething')" v-model="message" @keyup.native.enter="sendMessage" />
        <div>
            <b-button variant="outline-primary" class="icon-button large ml-1">
                <i class="simple-icon-paper-clip" />
            </b-button>
            <b-button variant="primary" class="icon-button large ml-1" @click="sendMessage">
                <i class="simple-icon-arrow-right" />
            </b-button>
        </div>
    </div>
    <application-menu>
        <b-tabs no-fade class="pl-0 pr-0 h-100" content-class="chat-app-tab-content" nav-class="card-header-tabs ml-0 mr-0" v-model="tabIndex">
            <b-tab :title="$t('chat.messages')" active title-item-class="w-50 text-center" no-body class="chat-app-tab-pane">
                <div class="pt-4 spaced-content pb-0 mt-2">

                </div>
                <conversation-list v-if="isLoadContacts && isLoadConversations" key="conversationList" :current-user="currentUser" :conversations="conversations" :contacts="contacts" @select-conversation="selectConversation" />
                <div v-else class="loading" key="conversationListLoading"></div>
            </b-tab>
            <b-tab :title="$t('chat.contacts')" title-item-class="w-50 text-center" no-body class="chat-app-tab-pane">
                <div class="pt-4 spaced-content pb-0 mt-2">
                    <div class="form-group">
                        <b-input type="text" class="rounded" :placeholder="$t('menu.search')" v-model="searchKey" />
                    </div>
                </div>
                <contact-list v-if="isLoadContacts" key="contactList" :data="contactsSearchResult" @select-contact="selectContact" />
                <div v-else class="loading" key="contactListLoading"></div>
            </b-tab>
        </b-tabs>
    </application-menu>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import ApplicationMenu from '../../../components/Common/ApplicationMenu'
import ContactList from '../../../components/ChatApp/ContactList'
import ConversationList from '../../../components/ChatApp/ConversationList'
import ConversationDetail from '../../../components/ChatApp/ConversationDetail'

export default {
    components: {
        'application-menu': ApplicationMenu,
        'contact-list': ContactList,
        'conversation-list': ConversationList,
        'conversation-detail': ConversationDetail
    },
    data() {
        return {
            tabIndex: 0,
            message: '',
            searchKey: '',
            isLoadCurrentConversation: false,
            otherUser: null,
            conversationMessages: null
        }
    },
    computed: {
        ...mapGetters(['currentUser', 'isLoadContacts', 'isLoadConversations', 'error', 'contacts', 'contactsSearchResult', 'conversations'])
    },
    methods: {
        ...mapActions(['getContacts', 'searchContacts', 'getConversations']),
        selectConversation(otherUser, messages) {
            this.otherUser = otherUser
            this.conversationMessages = messages
        },
        selectContact(userId) {
            this.otherUser = this.contacts.find(x => x.uid === userId)
            const conversation = this.conversations.find(x => x.users.includes(userId) && x.users.includes(this.currentUser.uid))
            if (conversation) {
                console.log('change selected conversation')
                this.conversationMessages = conversation.messages
            } else {
                console.log('create new conversation')
                const date = new Date()
                this.conversations.splice(0, 0, {
                    users: [userId, this.currentUser.uid],
                    messages: [],
                    lastMessageTime: date.getHours() + ':' + date.getMinutes()
                })
                this.conversationMessages = []
            }
            this.tabIndex = 0
            this.message = ''
            this.searchKey = ''
        },
        sendMessage() {
            console.log('add message to conversation')
            const date = new Date()
            this.conversationMessages.push({
                sender: this.currentUser.uid,
                text: this.message,
                time: date.getHours() + ':' + date.getMinutes()
            })
            this.message = ''
        }
    },
    mounted() {
        this.getContacts({
            userId: this.currentUser.uid,
            searchKey: ''
        })
        this.getConversations(this.currentUser.uid)
        document.body.classList.add("no-footer");
    },
    beforeDestroy() {
        document.body.classList.remove("no-footer");
    },
    watch: {
        searchKey(val, oldVal) {
            this.searchContacts({
                userId: this.currentUser.uid,
                searchKey: val
            })
        }
    }
}
</script>
