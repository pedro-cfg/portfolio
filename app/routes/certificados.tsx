import {colors} from "./_index"
import { useLanguage } from "~/LanguageContext";

export default function Main() {
  const { t } = useLanguage();

  return (
		<main className="absolute w-full h-full">
      <div className="absolute top-20 bottom-0 w-full opacity-30" style={{ backgroundColor: colors.get("certif") }} ></div>

      <div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">
        <div className="flex flex-col max-w-400 mx-3 md:mx-10 lg:mx-20">
          
          <h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center leading-tight">
            {t('cert_page_title')}
          </h2>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-8">
            {t('cert_intro')}
          </p>

          <div className="mb-12">
            <div className="w-full bg-gray-200 max-w-4xl mx-auto rounded-lg mb-4 overflow-hidden shadow-lg">
                <img 
                    src="/ccna.png" 
                    alt={t('cert_ccna_alt')} 
                    className="w-full h-auto object-cover min-h-[200px]" 
                    onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/AE2C64/white?text=Imagem+Certificado+CCNA"}}
                />
            </div>

            <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-bold mb-2 leading-tight">
              {t('cert_ccna_title')}
            </h3>
            <p className="text-sm text-gray-600 font-semibold mb-3">{t('cert_ccna_inst')}</p>
            
            <p className="text-[15px] md:text-[18px] text-justify mb-3">
              {t('cert_ccna_desc')}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[14px] md:text-[17px] text-justify">
              <li>{t('cert_ccna_li1')}</li>
              <li>{t('cert_ccna_li2')}</li>
              <li>{t('cert_ccna_li3')}</li>
              <li>{t('cert_ccna_li4')}</li>
              <li>{t('cert_ccna_li5')}</li>
              <li>{t('cert_ccna_li6')}</li>
            </ul>
          </div>

          <div className="mb-12 border-t border-gray-300 pt-8">
            <div className="w-full bg-gray-200 rounded-lg max-w-4xl mx-auto mb-4 overflow-hidden shadow-lg">
                <img 
                    src="/dynamics.png" 
                    alt={t('cert_dyn_alt')} 
                    className="w-full h-auto object-cover min-h-[200px]"
                    onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/2C44AE/white?text=Imagem+Certificado+Dynamics"}}
                />
            </div>

            <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-bold mb-2 leading-tight">
              {t('cert_dyn_title')}
            </h3>
            <p className="text-sm text-gray-600 font-semibold mb-1">{t('cert_dyn_inst')}</p>
            <p className="text-xs text-gray-500 mb-3">{t('cert_dyn_hours')}</p>
            
            <p className="text-[15px] md:text-[18px] text-justify mb-3">
              {t('cert_dyn_desc')}
            </p>
            <div className="rounded p-3">
                <ul className="list-disc pl-5 space-y-1 text-[14px] md:text-[17px]">
                  <li>{t('cert_dyn_li1')}</li>
                  <li>{t('cert_dyn_li2')}</li>
                  <li>{t('cert_dyn_li3')}</li>
                  <li>{t('cert_dyn_li4')}</li>
                  <li>{t('cert_dyn_li5')}</li>
                  <li>{t('cert_dyn_li6')}</li>
                </ul>
            </div>
          </div>

          <div className="mb-12 border-t border-gray-300 pt-8">
            <div className="w-full bg-gray-200 rounded-lg mb-4 max-w-4xl mx-auto overflow-hidden shadow-lg">
                <img 
                    src="/cyber-ops.png" 
                    alt={t('cert_cyberops_alt')} 
                    className="w-full h-auto object-cover min-h-[200px]"
                    onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/AE2C64/white?text=Imagem+Certificado+CyberOps"}}
                />
            </div>

            <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-bold mb-2 leading-tight">
              {t('cert_cyberops_title')}
            </h3>
            <p className="text-sm text-gray-600 font-semibold mb-1">{t('cert_cyberops_inst')}</p>
            <p className="text-xs text-gray-500 mb-3">{t('cert_cyberops_date')}</p>
            
            <p className="text-[15px] md:text-[18px] text-justify mb-3">
              {t('cert_cyberops_desc')}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[14px] md:text-[17px] text-justify">
              <li>{t('cert_cyberops_li1')}</li>
              <li>{t('cert_cyberops_li2')}</li>
              <li>{t('cert_cyberops_li3')}</li>
              <li>{t('cert_cyberops_li4')}</li>
              <li>{t('cert_cyberops_li5')}</li>
              <li>{t('cert_cyberops_li6')}</li>
            </ul>
          </div>

          <div className="mb-12 border-t border-gray-300 pt-8">
            <div className="w-full bg-gray-200 rounded-lg mb-4 max-w-4xl mx-auto overflow-hidden shadow-lg">
                <img 
                    src="/fundamentos_cyber.png" 
                    alt={t('cert_fund_alt')} 
                    className="w-full h-auto object-cover min-h-[200px]"
                    onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/AE2C64/white?text=Imagem+Certificado+Fundamentos"}}
                />
            </div>

            <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-bold mb-2 leading-tight">
              {t('cert_fund_title')}
            </h3>
            <p className="text-sm text-gray-600 font-semibold mb-1">{t('cert_fund_inst')}</p>
            <p className="text-xs text-gray-500 mb-3">{t('cert_fund_hours')}</p>
            
            <ul className="list-disc pl-5 space-y-2 text-[14px] md:text-[17px] text-justify">
              <li>{t('cert_fund_li1')}</li>
              <li>{t('cert_fund_li2')}</li>
              <li>{t('cert_fund_li3')}</li>
            </ul>
          </div>

          <div className="mb-8 border-t border-gray-300 pt-8 pb-20 flex-shrink-0">
            <div className="w-full bg-gray-200 rounded-lg mb-4 max-w-4xl mx-auto overflow-hidden shadow-lg">
                <img 
                    src="/introducao_cyber.png" 
                    alt={t('cert_intro_alt')} 
                    className="w-full h-auto object-cover min-h-[200px]"
                    onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/AE2C64/white?text=Imagem+Certificado+Intro"}}
                />
            </div>

            <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-bold mb-2 leading-tight">
              {t('cert_intro_title')}
            </h3>
            <p className="text-sm text-gray-600 font-semibold mb-1">{t('cert_intro_inst')}</p>
            <p className="text-xs text-gray-500 mb-3">{t('cert_intro_hours')}</p>
            
            <ul className="list-disc pl-5 space-y-2 text-[14px] md:text-[17px] text-justify">
              <li>{t('cert_intro_li1')}</li>
              <li>{t('cert_intro_li2')}</li>
              <li>{t('cert_intro_li3')}</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
	);
}
