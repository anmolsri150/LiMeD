<script>
/* eslint-disable */
const validators = {
    email: new RegExp(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
    url: new RegExp(
        /^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i
    ),
    text: new RegExp(/^[a-zA-Z]+$/),
    digits: new RegExp(/^[\d() \.\:\-\+#]+$/),
    isodate: new RegExp(
        /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
    )
};
/* eslint-enable */
export default {
    name: 'InputTag',
    props: {
        value: {
            type: Array,
            default: () => []
        },
        placeholder: {
            type: String,
            default: ''
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        validate: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String | Function | Object,
            default: ''
        },
        addTagOnKeys: {
            type: Array,
            default: function () {
                return [
                    13, // Return
                    188, // Comma ','
                    9 // Tab
                ]
            }
        },
        addTagOnBlur: {
            type: Boolean,
            default: false
        },
        limit: {
            type: Number,
            default: -1
        },
        allowDuplicates: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            newTag: '',
            innerTags: [...this.value],
            isInputActive: false
        }
    },
    computed: {
        isLimit: function () {
            return this.limit > 0 && Number(this.limit) === this.innerTags.length
        }
    },
    methods: {
        focusNewTag() {
            if (this.readOnly || !this.$el.querySelector('.vue-tagsinput-input')) {
                return
            }
            this.$el.querySelector('.vue-tagsinput-input').focus()
        },
        handleInputFocus() {
            this.isInputActive = true
        },
        handleInputBlur(e) {
            this.isInputActive = false
            this.addNew(e)
        },
        addNew(e) {
            const keyShouldAddTag = e ?
                this.addTagOnKeys.indexOf(e.keyCode) !== -1 :
                true
            const typeIsNotBlur = e && e.type !== 'blur'
            if (
                (!keyShouldAddTag && (typeIsNotBlur || !this.addTagOnBlur)) ||
                this.isLimit
            ) {
                return
            }
            if (
                this.newTag &&
                (this.allowDuplicates || this.innerTags.indexOf(this.newTag) === -1) &&
                this.validateIfNeeded(this.newTag)
            ) {
                this.innerTags.push(this.newTag)
                this.newTag = ''
                this.tagChange()
                e && e.preventDefault()
            }
        },
        validateIfNeeded(tagValue) {
            if (this.validate === '' || this.validate === undefined) {
                return true
            }
            if (typeof this.validate === 'function') {
                return this.validate(tagValue)
            }
            if (
                typeof this.validate === 'string' &&
                Object.keys(validators).indexOf(this.validate) > -1
            ) {
                return validators[this.validate].test(tagValue)
            }
            if (
                typeof this.validate === 'object' &&
                this.validate.test !== undefined
            ) {
                return this.validate.test(tagValue)
            }
            return true
        },
        remove(index) {
            this.innerTags.splice(index, 1)
            this.tagChange()
        },
        removeLastTag() {
            if (this.newTag) {
                return
            }
            this.innerTags.pop()
            this.tagChange()
        },
        tagChange() {
            this.$emit('update:tags', this.innerTags)
            this.$emit('input', this.innerTags)
        }
    }
}
</script>

<template>
<div @click="focusNewTag()" :class="{
      'read-only': readOnly,
      'vue-tagsinput--focused': isInputActive,
    }" class="vue-tagsinput">
    <span v-for="(tag, index) in innerTags" :key="index" class="vue-tagsinput-tag">
        <span>{{ tag }}</span>
        <a v-if="!readOnly" @click.prevent.stop="remove(index)" class="vue-tagsinput-remove"></a>
    </span>
    <input v-if="!readOnly && !isLimit" ref="inputtag" :placeholder="placeholder" type="text" v-model="newTag" @keydown.delete.stop="removeLastTag" @keydown.enter="addNew" @blur="handleInputBlur" @focus="handleInputFocus" class="vue-tagsinput-input" />
</div>
</template>

<style>
.vue-tagsinput {
    overflow: hidden;
    padding-left: 5px;
    padding-top: 5px;
}

.vue-tagsinput-tag {
    border-radius: 2px;
    display: inline-block;
    font-weight: 400;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 5px;
}

.vue-tagsinput-remove {
    cursor: pointer;
    font-weight: bold;
}

.vue-tagsinput-tag a::before {
    content: " ×";
}

.vue-tagsinput-input {
    background: transparent;
    border: 0;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 6px;
    margin-top: 1px;
    outline: none;
    padding: 5px;
    width: 80px;
}
</style>
