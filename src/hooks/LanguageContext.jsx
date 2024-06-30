import { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChange = (lang) => {
            setCurrentLanguage(lang);
        };
        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === "pt" ? "en" : "pt";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

