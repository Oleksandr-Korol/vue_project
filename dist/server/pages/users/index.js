exports.ids = [5];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=template&id=04960bea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.pageTitle))+"</h1> <ul>"+(_vm._ssrList((_vm.users),function(user){return ("<li><a href=\"#\">"+_vm._ssrEscape(_vm._s(user.name))+"</a></li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=template&id=04960bea&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  async fetch({
    store
  }) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch');
    }
  },

  data: () => ({
    pageTitle: 'Users page'
  }),
  computed: {
    users() {
      return this.$store.getters['users/users'];
    }

  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id);
    }

  }
});
// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/users/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fc76f386"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map