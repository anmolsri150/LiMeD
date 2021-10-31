<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.cards')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <icon-cards></icon-cards>
    <image-cards></image-cards>
    <image-overlay-card></image-overlay-card>
    <image-card-list></image-card-list>
    <tab-card-examples></tab-card-examples>
    <user-card-examples></user-card-examples>
  </div>
</template>

<script>
import IconCards from "../../../../containers/ui/IconCards";
import ImageCards from "../../../../containers/ui/ImageCards";
import ImageCardList from "../../../../containers/ui/ImageCardList";
import ImageOverlayCard from "../../../../containers/ui/ImageOverlayCard";
import TabCardExamples from "../../../../containers/ui/TabCardExamples";
import UserCardExamples from "../../../../containers/ui/UserCardExamples";

export default {
  components: {
    "icon-cards": IconCards,
    "image-cards": ImageCards,
    "image-overlay-card": ImageOverlayCard,
    "image-card-list": ImageCardList,
    "tab-card-examples": TabCardExamples,
    "user-card-examples": UserCardExamples
  }
};
</script>
