<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.editors')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('editors.quill-standart')">
          <quill-editor ref="myTextEditor"
                        v-model="content"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)">
        </quill-editor>
        </b-card>
        <b-card class="mb-4" :title="$t('editors.quill-bubble')">
          <quill-editor class="bubble"
                        ref="myTextEditorBubble"
                        v-model="contentBubble"
                        :options="editorOptionBubble"
                        @change="onEditorChange($event)">
        </quill-editor>
        </b-card>

    </b-colxx>
  </b-row>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    'quill-editor' : quillEditor
  },
  data () {
    return {
      content: '',
      editorOption: {
        placeholder: '',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' }
            ],
            ['link', 'image'],
            ['clean']
          ]
        }
      },
      contentBubble: '',
      editorOptionBubble: {
        theme: 'bubble',
        placeholder: '',
        modules: {
          toolbar: [
            [
              'bold',
              'italic',
              'link',
              { header: 1 },
              { header: 2 },
              'blockquote'
            ]
          ]
        }
      }
    }
  },
  methods: {
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.contentBubble = html
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quill
    }
  }
}
</script>
