<template>
<b-card no-body>
    <b-card-body class="wizard wizard-default">
        <form-wizard :top-nav-disabled="true">
            <tab :name="$t('wizard.step-name-1')" :desc="$t('wizard.step-desc-1')" :selected="true">
                <div class="wizard-basic-step">
                    <b-form>
                        <b-form-group :label="$t('forms.name')">
                            <b-form-input type="text" :placeholder="$t('forms.name')" />
                        </b-form-group>
                    </b-form>
                </div>
            </tab>
            <tab :name="$t('wizard.step-name-2')" :desc="$t('wizard.step-desc-2')">
                <div class="wizard-basic-step">
                    <b-form>
                        <b-form-group :label="$t('forms.email')">
                            <b-form-input type="email" :placeholder="$t('forms.email')" />
                        </b-form-group>
                    </b-form>
                </div>
            </tab>
            <tab :name="$t('wizard.step-name-3')" :desc="$t('wizard.step-desc-3')">
                <div class="wizard-basic-step">
                    <b-form>
                        <b-form-group :label="$t('forms.password')">
                            <b-form-input type="password" :placeholder="$t('forms.password')" />
                        </b-form-group>
                    </b-form>
                </div>
            </tab>
            <tab type="done">
                <div class="wizard-basic-step text-center">
                    <h2 class="mb-2">{{$t('wizard.content-thanks')}}</h2>
                    <p>{{$t('wizard.registered')}}</p>
                </div>
            </tab>
        </form-wizard>
    </b-card-body>
</b-card>
</template>

<script>
import FormWizard from "../../components/Form/Wizard/FormWizard";
import Tab from "../../components/Form/Wizard/Tab";

export default {
    components: {
        "form-wizard": FormWizard,
        "tab": Tab
    }
};
</script>
