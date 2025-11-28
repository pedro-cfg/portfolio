import {colors} from "./_index"
import { useLanguage } from "~/LanguageContext";

export default function Main() {
	const { t } = useLanguage();

  return (
      <main className="absolute w-full h-full">
        <div className="absolute top-20 bottom-0 w-full opacity-30" style={{ backgroundColor: colors.get("smart") }} ></div>

        <div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">
          <div className="flex flex-col max-w-400 mx-3 md:mx-10 lg:mx-20">
            
            <h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center leading-tight">
              {t('main_smart_title')}
            </h2>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('smart_page_intro_1')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('smart_page_intro_2')}
            </p>

            <div className="bg-white/60 rounded-lg p-4 border-l-4 border-[#2C44AE] mb-8">
              <p className="text-[15px] md:text-[18px] lg:text-[20px] text-justify text-gray-800">
                {t('smart_context_desc')} <strong>{t('smart_context_strong_1')}</strong>{t('smart_context_desc_2')}
              </p>
            </div>

            <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#2C44AE]">
              {t('smart_dev_title')}
            </h3>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('smart_dev_desc_1')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
              {t('smart_dev_desc_2')}<strong>{t('smart_dev_strong_1')}</strong>{t('smart_dev_desc_3')}<strong>{t('smart_dev_strong_2')}</strong>{t('smart_dev_desc_4')}
            </p>

            <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#2C44AE]">
              {t('smart_research_title')}
            </h3>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
              {t('smart_research_desc_1')}<strong>{t('smart_research_strong_1')}</strong>{t('smart_research_desc_2')}
            </p>
            
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify pb-20 flex-shrink-0 italic text-gray-700 dark:text-gray-400">
              {t('smart_footer_desc')}<strong>{t('smart_footer_strong_1')}</strong>{t('smart_footer_desc_2')}<strong>{t('smart_footer_strong_2')}</strong>{t('smart_footer_desc_3')}
            </p>

          </div>
        </div>
      </main>
  );
		
}

