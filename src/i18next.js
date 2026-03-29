import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "Home": "Home",
                    "Login": "Login",
                    "Register": "Register",
                    "Store": "Store",
                    "Cart": "Cart",
                    "Logout": "Logout",
                    "Products": "Products",
                    "Browse By Category": "Browse By Category",
                    "Show More": "Show More",
                    "Discounts up to -50%": "Discounts up to -50%",
                    "Buy Now": "Buy Now",
                }
            },
            ar: {
                translation: {
                    "Home": "الرئيسية",
                    "Login": "تسجيل الدخول",
                    "Register": "انشاء حساب ",
                    "Store": "المتجر",
                    "Cart": "السلة",
                    "Logout": "تسجيل الخروج",
                    "Products": "المنتجات",
                    "Browse By Category": "تصفح حسب الفئة",
                    "Show More": "عرض المزيد",
                    "Discounts up to -50%": "خصومات تصل إلى %50",
                    "Buy Now": "اشتري الان",
                }
            }
        },
        fallbackLng: "en",
    });

export default i18n;