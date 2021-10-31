<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('form-components.vue-autosuggest')">
        <b-form>
          <b-row>
            <b-colxx xxs="12" md="6">
              <vue-autosuggest
                class="autosuggest"
                :input-props="{id:'autosuggest__input', class:'form-control', placeholder:$t('form-components.type-a-cake')}"
                :suggestions="filteredOptions"
                :render-suggestion="renderSuggestion"
                :get-suggestion-value="getSuggestionValue"
                :limit="6"
                @selected="onAutosuggestSelected"
                @input="onAutoSuggestInputChange"
              ></vue-autosuggest>
            </b-colxx>
          </b-row>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import { VueAutosuggest } from "vue-autosuggest";

export default {
  components: {
    "vue-autosuggest": VueAutosuggest
  },
  data() {
    return {
      filteredOptions: [],
      selected: {},

      suggestions: [
        {
          data: [
            {
              id: 1,
              name: "Marble Cake"
            },
            {
              id: 2,
              name: "Fruitcake"
            },
            {
              id: 3,
              name: "Chocolate Cake"
            },
            {
              id: 4,
              name: "Fat Rascal"
            },
            {
              id: 5,
              name: "Financier"
            },
            {
              id: 6,
              name: "Genoise"
            },
            {
              id: 7,
              name: "Gingerbread"
            },
            {
              id: 8,
              name: "Goose Breast"
            },
            {
              id: 9,
              name: "Parkin"
            },
            {
              id: 10,
              name: "Petit Gâteau"
            },
            {
              id: 11,
              name: "Salzburger Nockerl"
            },
            {
              id: 12,
              name: "Soufflé"
            },
            {
              id: 13,
              name: "Streuselkuchen"
            },
            {
              id: 14,
              name: "Tea Loaf"
            },
            {
              id: 15,
              name: "Napoleonshat"
            },
            {
              id: 16,
              name: "Merveilleux"
            },
            {
              id: 17,
              name: "Magdalena"
            },
            {
              id: 18,
              name: "Cremeschnitte"
            },
            {
              id: 19,
              name: "Cheesecake"
            },
            {
              id: 20,
              name: "Bebinca"
            }
          ]
        }
      ]
    };
  },
  methods: {
    onAutoSuggestInputChange(text, oldText) {
      if (text === null) {
        /* Maybe the text is null but you wanna do
         *  something else, but don't filter by null.
         */
        return;
      }

      const filteredData = this.suggestions[0].data.filter(option => {
        return option.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });

      // Store data in one property, and filtered in another
      this.filteredOptions = [
        {
          data: filteredData
        }
      ];
    },

    onAutosuggestSelected(item) {
      this.selected = item;
    },
    renderSuggestion(suggestion) {
      const character = suggestion.item;
      return character.name; /* renderSuggestion will override the default suggestion template slot. */
    },
    getSuggestionValue(suggestion) {
      return suggestion.item.name;
    }
  }
};
</script>
