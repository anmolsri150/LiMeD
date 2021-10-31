<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.input-groups')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('input-groups.basic')" >
            <b-input-group prepend="@" class="mb-3">
                <b-form-input :placeholder="$t('user.username')"></b-form-input>
            </b-input-group>
            <b-input-group append="@example" class="mb-3">
                <b-form-input :placeholder="$t('user.username')"></b-form-input>
            </b-input-group>
            <b-input-group prepend="https://example.com/users/" class="mb-3">
                <b-form-input :placeholder="$t('user.username')"></b-form-input>
            </b-input-group>
            <b-input-group prepend="$" append=".00" class="mb-3">
                <b-form-input type="number"></b-form-input>
            </b-input-group>
              <b-input-group prepend="With textarea" class="mb-3">
                <b-form-textarea rows="2" max-rows="6" v-model="textarea" no-resize></b-form-textarea>
            </b-input-group>
        </b-card>

        <b-card class="mb-4" :title="$t('input-groups.sizing')" >
            <b-input-group prepend="Small" class="mb-3" size="sm">
                <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Default" class="mb-3">
                <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Large" class="mb-3" size="lg">
                <b-form-input></b-form-input>
            </b-input-group>
        </b-card>

        <b-card class="mb-4" :title="$t('input-groups.checkboxes-and-radios')" >
            <b-input-group class="mb-3">
                <b-input-group-prepend is-text>
                    <input type="checkbox" >
                </b-input-group-prepend>
                <b-form-input/>
            </b-input-group>
            <b-input-group class="mb-3">
                <b-input-group-prepend is-text>
                    <input type="radio" >
                </b-input-group-prepend>
                <b-form-input/>
            </b-input-group>
        </b-card>

        <b-card class="mb-4" :title="$t('input-groups.multiple-inputs')" >
            <b-input-group :prepend="$t('input-groups.first-and-last-name')" class="mb-3">
                <b-form-input></b-form-input>
                <b-form-input></b-form-input>
            </b-input-group>
        </b-card>

        <b-card class="mb-4" :title="$t('input-groups.multiple-addons')" >
            <b-input-group class="mb-3" prepend="$">
                <b-input-group-prepend is-text>
                    0.00
                </b-input-group-prepend>
                <b-form-input/>
            </b-input-group>
            <b-input-group class="mb-3" append="$">
                <b-form-input/>
                <b-input-group-append is-text>
                    0.00
                </b-input-group-append>
            </b-input-group>
        </b-card>

        <b-card class="mb-4" :title="$t('input-groups.button-addons')" >
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                </b-input-group-prepend>
                <b-form-input/>
            </b-input-group>
            <b-input-group class="mb-3">
                <b-form-input/>
                <b-input-group-append>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                </b-input-group-append>
            </b-input-group>
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                </b-input-group-prepend>
                <b-form-input/>
            </b-input-group>
            <b-input-group class="mb-3">
                <b-form-input/>
                <b-input-group-append>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-card>

        <b-card class="mb-4" :title="$t('input-groups.buttons-with-dropdowns')" >
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-dropdown :text="$t('input-groups.dropdown')" variant="outline-secondary">
                        <b-dropdown-header>{{ $t('input-groups.header') }}</b-dropdown-header>
                        <b-dropdown-item disabled>{{ $t('input-groups.action') }}</b-dropdown-item>
                        <b-dropdown-item>{{ $t('input-groups.another-action') }}</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>{{ $t('input-groups.another-action') }}</b-dropdown-item>
                    </b-dropdown>
                </b-input-group-prepend>
                <b-form-input/>
            </b-input-group>
            <b-input-group class="mb-3">
                <b-form-input/>
                <b-input-group-append>
                    <b-dropdown :text="$t('input-groups.dropdown')" variant="outline-secondary">
                        <b-dropdown-header>{{ $t('input-groups.header') }}</b-dropdown-header>
                        <b-dropdown-item disabled>{{ $t('input-groups.action') }}</b-dropdown-item>
                        <b-dropdown-item>{{ $t('input-groups.another-action') }}</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>{{ $t('input-groups.another-action') }}</b-dropdown-item>
                    </b-dropdown>
                </b-input-group-append>
            </b-input-group>
        </b-card>

        <b-card class="mb-4" :title="$t('input-groups.segmented-buttons')" >
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-dropdown right split :text="$t('input-groups.action')" variant="outline-secondary">
                        <b-dropdown-header>{{ $t('input-groups.header') }}</b-dropdown-header>
                        <b-dropdown-item disabled>{{ $t('input-groups.action') }}</b-dropdown-item>
                        <b-dropdown-item>{{ $t('input-groups.another-action') }}</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>{{ $t('input-groups.another-action') }}</b-dropdown-item>
                    </b-dropdown>
                </b-input-group-prepend>
                <b-form-input/>
            </b-input-group>
            <b-input-group class="mb-3">
                <b-form-input/>
                <b-input-group-append>
                    <b-dropdown right split :text="$t('input-groups.action')" variant="outline-secondary">
                        <b-dropdown-header>{{ $t('input-groups.header') }}</b-dropdown-header>
                        <b-dropdown-item disabled>{{ $t('input-groups.action') }}</b-dropdown-item>
                        <b-dropdown-item>{{ $t('input-groups.another-action') }}</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>{{ $t('input-groups.another-action') }}</b-dropdown-item>
                    </b-dropdown>
                </b-input-group-append>
            </b-input-group>
        </b-card>

        <b-card class="mb-4" :title="$t('input-groups.custom-select')" >
            <b-input-group :prepend="$t('input-groups.options')" class="mb-3">
                <b-form-select :options="['Option1', 'Option2','Option3','Option4']"  plain  />
            </b-input-group>
            <b-input-group :append="$t('input-groups.options')" class="mb-3">
                <b-form-select :options="['Option1', 'Option2','Option3','Option4']"  plain  />
            </b-input-group>
            <b-input-group  class="mb-3">
                <b-input-group-prepend>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                </b-input-group-prepend>
                <b-form-select :options="['Option1', 'Option2','Option3','Option4']"  plain  />
            </b-input-group>
            <b-input-group  class="mb-3">
                <b-form-select :options="['Option1', 'Option2','Option3','Option4']"  plain  />
                <b-input-group-append>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-card>

        <b-card class="mb-4" :title="$t('input-groups.custom-file-input')" >
            <b-input-group :prepend="$t('input-groups.upload')" class="mb-3">
                <b-form-file v-model="file"  :placeholder="$t('input-groups.choose-file')"></b-form-file>
            </b-input-group>
            <b-input-group :append="$t('input-groups.upload')" class="mb-3">
                <b-form-file v-model="file"  :placeholder="$t('input-groups.choose-file')"></b-form-file>
            </b-input-group>
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                </b-input-group-prepend>
                <b-form-file v-model="file"  :placeholder="$t('input-groups.choose-file')"></b-form-file>
            </b-input-group>
            <b-input-group class="mb-3">
                <b-form-file v-model="file"  :placeholder="$t('input-groups.choose-file')"></b-form-file>
                <b-input-group-append>
                    <b-button variant="outline-secondary">{{ $t('input-groups.button') }}</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-card>

    </b-colxx>
  </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textarea: '',
      file: null
    }
  }
}
</script>
