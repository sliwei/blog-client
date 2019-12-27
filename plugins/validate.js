import Vue from 'vue'
import VeeValidate from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN'
import en from 'vee-validate/dist/locale/en'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({app, store}) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  console.log(store.state.i18n.locale);
  const i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: 'zh',
  });

  Vue.use(VeeValidate, {
    i18n,
    i18nRootKey: 'validation',
    dictionary: {
      zh: zh,
      en: en,
    }
  });
}
