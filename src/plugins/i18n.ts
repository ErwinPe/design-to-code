import { createI18n } from "vue-i18n";
import fr from "../locales/fr.json";

export const i18n = createI18n({
  legacy: false,
  locale: "fr",
  fallbackLocale: "fr",
  warnHtmlMessage: false,
  messages: {
    fr: fr
  },
});
