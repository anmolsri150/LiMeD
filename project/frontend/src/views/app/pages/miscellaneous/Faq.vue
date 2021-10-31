<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.faq')" />
            <div class="separator mb-5"></div>
        </b-colxx>
        <b-colxx xxs="12" class="mb-4">
            <b-card no-body class="d-flex mb-3" v-for="(item,index) in faqData" :key="`faq_${index}`">
                <div class="d-flex flex-grow-1 min-width-zero" role="tab">
                    <b-button href="#" class="card-body  btn-empty btn-link list-item-heading text-left text-one" v-b-toggle="`faq_${index}`" variant="link">{{item.question}}</b-button>
                </div>
                <b-collapse :id="`faq_${index}`" :visible="index===0" accordion="faq-accordion" role="tabpanel">
                    <div class="card-body accordion-content pt-0" v-html="item.answer" />
                </b-collapse>
            </b-card>
        </b-colxx>
    </b-row>
</div>
</template>

<script>
import faqData from "../../../../data/faq"

export default {
    data() {
        return {
            faqData
        }
    }
}
</script>