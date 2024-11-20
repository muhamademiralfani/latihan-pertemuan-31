export const LANG_CHANGE = 'CHANGE_LANGUAGE';

export const setLang = (lang) => ({
  type: LANG_CHANGE,
  payload: lang,
});
