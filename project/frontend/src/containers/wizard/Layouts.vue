<template>
<b-row>
    <b-colxx xxs="12" xl="6" class="mb-5">
        <b-card no-body>
            <b-card-body class="wizard wizard-default">
                <form-wizard nav-class="justify-content-between">
                    <tab :name="$t('wizard.step-name-1')" :desc="$t('wizard.step-desc-1')" :selected="true">
                        <div class="wizard-basic-step">
                            <p>{{$t('wizard.content-1')}}</p>
                        </div>
                    </tab>
                    <tab :name="$t('wizard.step-name-2')" :desc="$t('wizard.step-desc-2')">
                        <div class="wizard-basic-step">
                            <p>{{$t('wizard.content-2')}}</p>
                        </div>
                    </tab>
                    <tab type="done">
                        <div class="wizard-basic-step text-center">
                            <h2 class="mb-2">{{$t('wizard.content-thanks')}}</h2>
                            <p>{{$t('wizard.content-3')}}</p>
                        </div>
                    </tab>
                </form-wizard>
            </b-card-body>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12" xl="6" class="mb-5">
        <b-card no-body>
            <b-card-body class="wizard wizard-default">
                <form-wizard nav-class="justify-content-start">
                    <tab :name="$t('wizard.step-name-1')" :desc="$t('wizard.step-desc-1')" :selected="true">
                        <div class="wizard-basic-step">
                            <p>{{$t('wizard.content-1')}}</p>
                        </div>
                    </tab>
                    <tab :name="$t('wizard.step-name-2')" :desc="$t('wizard.step-desc-2')">
                        <div class="wizard-basic-step">
                            <p>{{$t('wizard.content-2')}}</p>
                        </div>
                    </tab>
                    <tab type="done">
                        <div class="wizard-basic-step text-center">
                            <h2 class="mb-2">{{$t('wizard.content-thanks')}}</h2>
                            <p>{{$t('wizard.content-3')}}</p>
                        </div>
                    </tab>
                </form-wizard>
            </b-card-body>
        </b-card>
    </b-colxx>
</b-row>
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
