import { init, register, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

init({
  fallbackLocale: 'es',
  initialLocale: getLocaleFromNavigator(),
});