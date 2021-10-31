<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.collapse')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('collapse.basic')">
            <b-button v-b-toggle.collapse1 variant="primary">{{ $t('collapse.toggle') }}</b-button>
            <b-collapse id="collapse1">
               <div class="p-4 border mt-4">
                      <p class="mb-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Anim pariatur cliche
                        reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid.
                      </p>
                </div>
            </b-collapse>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('collapse.accordion')">
            <div class="border">
                <b-button v-b-toggle.collapseAccordion1 variant="link">Collapsible Group Item #1</b-button>
                <b-collapse id="collapseAccordion1" accordion="my-accordion">
                    <div class="p-4">
                        1. Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                        lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </div>
                </b-collapse>
            </div>
            <div class="border">
                <b-button v-b-toggle.collapseAccordion2 variant="link">Collapsible Group Item #2</b-button>
                <b-collapse id="collapseAccordion2" accordion="my-accordion">
                    <div class="p-4">
                       2. Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                        lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </div>
                </b-collapse>
            </div>
            <div class="border">
                <b-button v-b-toggle.collapseAccordion3 variant="link">Collapsible Group Item #3</b-button>
                <b-collapse id="collapseAccordion3" accordion="my-accordion">
                    <div class="p-4">
                        3. Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                        lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </div>
                </b-collapse>
            </div>

        </b-card>
    </b-colxx>

  </b-row>
  </div>
</template>
