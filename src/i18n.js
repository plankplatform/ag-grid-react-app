import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import it from "./locales/it.json"

i18n
  .use(initReactI18next)
  .init({
    lng: "it",
    fallbackLng: "it",
    resources: {
      it: { translation: it }
    }
  })

export default i18n
