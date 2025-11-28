import {colors} from "./_index"
import { useLanguage } from "~/LanguageContext";

export default function Main() {
  const { t } = useLanguage();

  return (
    <main className="absolute w-full h-full">
      <div className="absolute top-20 bottom-0 w-full opacity-30" style={{ backgroundColor: colors.get("inesc") }} ></div>

      <div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">
        <div className="flex flex-col max-w-400 mx-3 md:mx-10 lg:mx-20">
          
          <h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center leading-tight">
            {t('main_inesc_title')}
          </h2>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('inesc_desc_1')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-8 italic text-gray-700">
            {t('inesc_desc_2')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#2CAE3B]">
            {t('inesc_backend_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('inesc_backend_desc')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#2CAE3B]">
            {t('inesc_frontend_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('inesc_frontend_desc')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#2CAE3B]">
            {t('inesc_firmware_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('inesc_firmware_desc')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#2CAE3B]">
            {t('inesc_ml_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('inesc_ml_desc')}
          </p>

          <div className="bg-white/60 rounded-lg p-4 border-l-4 border-[#2CAE3B] mb-4">
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify">
              {t('inesc_article_desc')}
            </p>
            <a href="https://ieeexplore.ieee.org/document/10990186" target="_blank" rel="noopener noreferrer" className="block mt-3 text-[#2CAE3B] font-bold underline text-center hover:text-[#1e802a]"
            >
							{t('inesc_article_link')}
            </a>
          </div>

          <div className="border-t border-gray-300 pt-6 mt-6 pb-20 flex-shrink-0">
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
              {t('inesc_credits_intro')}
            </p>

            <div className="mb-5 bg-gray-100 p-3 rounded">
              <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold">Marcos Eduardo Pivaro Monteiro</p>
              <p className="text-[14px] md:text-[18px] text-gray-700">{t('inesc_role_1')}</p>
              <a target="_blank" rel="noopener noreferrer" href="mailto:marcose@utfpr.edu.br" className="text-[#2CAE3B] underline">marcose@utfpr.edu.br</a>
            </div>

            <div className="mb-5 bg-gray-100 p-3 rounded">
              <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold">Leonardo Braga de Cristo</p>
              <p className="text-[14px] md:text-[18px] text-gray-700">{t('inesc_role_2')}</p>
              <a target="_blank" rel="noopener noreferrer" href="mailto:cristo@alunos.utfpr.edu.br" className="text-[#2CAE3B] underline">cristo@alunos.utfpr.edu.br</a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
