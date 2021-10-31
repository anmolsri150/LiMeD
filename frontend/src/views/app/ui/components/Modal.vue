<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.modal')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('modal.basic')">
            <b-button v-b-modal.modalbasic variant="outline-primary">{{ $t('modal.launch-demo-modal') }}</b-button>
            <b-modal id="modalbasic" ref="modalbasic" :title="$t('modal.modal-title')">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
                <template slot="modal-footer">
                    <b-button variant="primary" @click="somethingModal('modalbasic')" class="mr-1">Do Something</b-button>
                    <b-button variant="secondary" @click="hideModal('modalbasic')">Cancel</b-button>
                </template>
            </b-modal>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('modal.scrolling-long-content')">
            <b-button v-b-modal.modallong variant="outline-primary">{{ $t('modal.launch-demo-modal') }}</b-button>
            <b-modal id="modallong" ref="modallong" :title="$t('modal.modal-title')">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce in ex imperdiet magna dignissim porta in vel ipsum.
                    Cras et lectus vel magna eleifend faucibus. Proin aliquam
                    fermentum lacus, sit amet molestie ante aliquet nec. Nunc
                    interdum, ante non lobortis feugiat, quam quam ornare
                    nunc, tempus dictum neque odio sed augue. Suspendisse
                    tincidunt tristique laoreet. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus.
                    Aenean condimentum est sit amet justo semper molestie.
                    Integer placerat nulla id tortor molestie, sed laoreet est
                    ornare. Morbi non velit nec purus accumsan commodo et sed
                    nisi. Maecenas sit amet purus scelerisque neque luctus
                    congue.
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula
                    vehicula. Fusce hendrerit orci arcu, ut posuere dui
                    volutpat at. Vivamus condimentum porttitor ultricies.
                    Quisque at metus sit amet ipsum convallis lacinia. Nulla
                    elementum ligula eget velit viverra condimentum.
                    Vestibulum pulvinar enim mattis pharetra tristique. Donec
                    hendrerit vitae lorem at malesuada. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nulla a diam eu sem
                    gravida ultrices.
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula
                    vehicula. Fusce hendrerit orci arcu, ut posuere dui
                    volutpat at. Vivamus condimentum porttitor ultricies.
                    Quisque at metus sit amet ipsum convallis lacinia. Nulla
                    elementum ligula eget velit viverra condimentum.
                    Vestibulum pulvinar enim mattis pharetra tristique. Donec
                    hendrerit vitae lorem at malesuada. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nulla a diam eu sem
                    gravida ultrices. <br /> Nam consequat nunc neque, nec
                    bibendum ante mollis nec. Cras porta ante a ex condimentum
                    imperdiet. Cras vehicula velit in erat semper, sed
                    bibendum ligula vehicula. Fusce hendrerit orci arcu, ut
                    posuere dui volutpat at. Vivamus condimentum porttitor
                    ultricies. Quisque at metus sit amet ipsum convallis
                    lacinia. Nulla elementum ligula eget velit viverra
                    condimentum. Vestibulum pulvinar enim mattis pharetra
                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                    diam eu sem gravida ultrices. <br /> Nam consequat nunc
                    neque, nec bibendum ante mollis nec. Cras porta ante a ex
                    condimentum imperdiet. Cras vehicula velit in erat semper,
                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,
                    ut posuere dui volutpat at. Vivamus condimentum porttitor
                    ultricies. Quisque at metus sit amet ipsum convallis
                    lacinia. Nulla elementum ligula eget velit viverra
                    condimentum. Vestibulum pulvinar enim mattis pharetra
                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                    diam eu sem gravida ultrices. <br /> Nam consequat nunc
                    neque, nec bibendum ante mollis nec. Cras porta ante a ex
                    condimentum imperdiet. Cras vehicula velit in erat semper,
                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,
                    ut posuere dui volutpat at. Vivamus condimentum porttitor
                    ultricies. Quisque at metus sit amet ipsum convallis
                    lacinia. Nulla elementum ligula eget velit viverra
                    condimentum. Vestibulum pulvinar enim mattis pharetra
                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                    diam eu sem gravida ultrices. <br /> Nam consequat nunc
                    neque, nec bibendum ante mollis nec. Cras porta ante a ex
                    condimentum imperdiet. Cras vehicula velit in erat semper,
                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,
                    ut posuere dui volutpat at. Vivamus condimentum porttitor
                    ultricies. Quisque at metus sit amet ipsum convallis
                    lacinia. Nulla elementum ligula eget velit viverra
                    condimentum. Vestibulum pulvinar enim mattis pharetra
                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                    diam eu sem gravida ultrices. <br /> Nam consequat nunc
                    neque, nec bibendum ante mollis nec. Cras porta ante a ex
                    condimentum imperdiet. Cras vehicula velit in erat semper,
                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,
                    ut posuere dui volutpat at. Vivamus condimentum porttitor
                    ultricies. Quisque at metus sit amet ipsum convallis
                    lacinia. Nulla elementum ligula eget velit viverra
                    condimentum. Vestibulum pulvinar enim mattis pharetra
                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                    diam eu sem gravida ultrices. <br /> Nam consequat nunc
                    neque, nec bibendum ante mollis nec. Cras porta ante a ex
                    condimentum imperdiet. Cras vehicula velit in erat semper,
                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,
                    ut posuere dui volutpat at. Vivamus condimentum porttitor
                    ultricies. Quisque at metus sit amet ipsum convallis
                    lacinia. Nulla elementum ligula eget velit viverra
                    condimentum. Vestibulum pulvinar enim mattis pharetra
                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                    diam eu sem gravida ultrices. <br /> Nam consequat nunc
                    neque, nec bibendum ante mollis nec. Cras porta ante a ex
                    condimentum imperdiet. Cras vehicula velit in erat semper,
                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,
                    ut posuere dui volutpat at. Vivamus condimentum porttitor
                    ultricies. Quisque at metus sit amet ipsum convallis
                    lacinia. Nulla elementum ligula eget velit viverra
                    condimentum. Vestibulum pulvinar enim mattis pharetra
                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                    diam eu sem gravida ultrices. <br /> Nam consequat nunc
                    neque, nec bibendum ante mollis nec. Cras porta ante a ex
                    condimentum imperdiet. Cras vehicula velit in erat semper,
                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,
                    ut posuere dui volutpat at. Vivamus condimentum porttitor
                    ultricies. Quisque at metus sit amet ipsum convallis
                    lacinia. Nulla elementum ligula eget velit viverra
                    condimentum. Vestibulum pulvinar enim mattis pharetra
                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                    diam eu sem gravida ultrices.
                <template slot="modal-footer">
                    <b-button variant="primary" @click="somethingModal('modallong')" class="mr-1">Do Something</b-button>
                    <b-button variant="secondary" @click="hideModal('modallong')">Cancel</b-button>
                </template>
            </b-modal>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('modal.backdrop')">
            <b-form-select v-model="selectedBackdrop" :options="backdropOptions" class="mb-2 mr-2" plain  />
            <b-button v-b-modal.modalbackdrop variant="outline-primary">{{ $t('modal.launch-demo-modal') }}</b-button>
            <b-modal id="modalbackdrop" ref="modalbackdrop" :title="$t('modal.modal-title')"
                    :hide-backdrop="selectedBackdrop=='false'"
                    :no-close-on-backdrop="selectedBackdrop=='false' || selectedBackdrop=='static'">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
                <template slot="modal-footer">
                    <b-button variant="primary" @click="somethingModal('modalbackdrop')" class="mr-1">Do Something</b-button>
                    <b-button variant="secondary" @click="hideModal('modalbackdrop')">Cancel</b-button>
                </template>
            </b-modal>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('modal.right-modal')">
            <b-button v-b-modal.modalright variant="outline-primary">{{ $t('modal.launch-right-modal') }}</b-button>
            <b-modal id="modalright" ref="modalright" :title="$t('modal.modal-title')" modal-class="modal-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
                <template slot="modal-footer">
                    <b-button variant="primary" @click="somethingModal('modalright')" class="mr-1">Do Something</b-button>
                    <b-button variant="secondary" @click="hideModal('modalright')">Cancel</b-button>
                </template>
            </b-modal>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('modal.nested-modal')">
            <b-button v-b-modal.modalnested variant="outline-primary">{{ $t('modal.launch-demo-modal') }}</b-button>
            <b-modal id="modalnested" ref="modalnested" :title="$t('modal.modal-title')">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.<br/>
                <div class="text-center m-2">
                    <b-btn variant="outline-primary" v-b-modal.modalnestedinline>Show Nested Modal</b-btn>
                </div>
                <template slot="modal-footer">
                    <b-button variant="primary" @click="somethingModal('modalnested')" class="mr-1">Do Something</b-button>
                    <b-button variant="secondary" @click="hideModal('modalnested')">Cancel</b-button>
                </template>
            </b-modal>
            <b-modal id="modalnestedinline" ref="modalnestedinline" title="Nested Modal title">Stuff and things
                <template slot="modal-footer">
                    <b-button variant="primary" @click="somethingModal('modalnestedinline')" class="mr-1">Done</b-button>
                    <b-button variant="secondary" @click="hideModal('modalnestedinline')">All Done</b-button>
                </template>
            </b-modal>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('modal.size')">
            <b-button v-b-modal.modallg  variant="outline-primary" class="mr-2 mb-2">{{ $t('modal.launch-large-modal') }}</b-button>
            <b-button v-b-modal.modalsm  variant="outline-primary" class="mb-2">{{ $t('modal.launch-small-modal') }}</b-button>
            <b-modal id="modallg" size="lg" title="Large Modal" hide-footer>
                Hello Modal!
            </b-modal>
            <b-modal id="modalsm" size="sm" title="Small Modal" hide-footer>
                Hello Modal!
            </b-modal>
        </b-card>
    </b-colxx>

  </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedBackdrop: 'true',
      backdropOptions: ['true', 'false', 'static']
    }
  },
  methods: {
    hideModal (refname) {
      this.$refs[refname].hide()
      console.log('hide modal:: ' + refname)

      if (refname === 'modalnestedinline') {
        this.$refs['modalnested'].show()
      }
    },
    somethingModal (refname) {
      this.$refs[refname].hide()
      console.log('something modal:: ' + refname)

      if (refname === 'modalnestedinline') {
        this.$refs['modalnested'].show()
      }
    }
  }
}
</script>
