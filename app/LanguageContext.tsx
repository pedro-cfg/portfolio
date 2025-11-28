import { createContext, useState, useContext, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pt"); 

	useEffect(() => {
		const browserLang = navigator.language.toLowerCase();
		if(!(browserLang === 'pt-br' || browserLang === 'pt'))
			setLang('en');
	},[]);

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
