import {colors} from "./_index"
import { useLanguage } from "~/LanguageContext";

export default function Main() {
  const { t } = useLanguage();

  return (
		<main className="absolute w-full h-full">
      <div className="absolute top-20 bottom-0 w-full opacity-30" style={{ backgroundColor: colors.get("tcc") }} ></div>
      <div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">

        <div className="flex flex-col max-w-400 mx-3 md:mx-10 lg:mx-20">
          <h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center leading-tight">
            {t('tcc_page_title')}
          </h2>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-8">
            {t('tcc_intro_pre_strong')} <strong>{t('tcc_intro_strong')}</strong>{t('tcc_intro_end')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold">
            {t('tcc_s1_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('tcc_s1_p1_pre_strong')} <strong>{t('tcc_s1_p1_strong')}</strong>{t('tcc_s1_p1_end')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('tcc_s1_p2_pre_strong')} <strong>{t('tcc_s1_p2_strong')}</strong>{t('tcc_s1_p2_end')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
            {t('tcc_s1_p3_pre_strong')} <strong>{t('tcc_s1_p3_strong')}</strong>{t('tcc_s1_p3_end')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold">
            {t('tcc_s2_title')} 
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
            {t('tcc_s2_p1_pre_strong')} <strong>{t('tcc_s2_p1_strong')}</strong>{t('tcc_s2_p1_end')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold">
            {t('tcc_s3_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('tcc_s3_intro')}
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-[#2CAE71] pl-4 bg-white/60 p-3 rounded">
              <h4 className="font-bold text-[18px] md:text-[22px]">{t('tcc_app1_title')}</h4>
              <p className="text-justify text-[15px] md:text-[18px] mt-2">
                {t('tcc_app1_desc_pre_strong')} <strong>{t('tcc_app1_desc_strong')}</strong>{t('tcc_app1_desc_end')}
              </p>
            </div>

            <div className="border-l-4 border-[#2CAE71] pl-4 bg-white/60 p-3 rounded">
              <h4 className="font-bold text-[18px] md:text-[22px]">{t('tcc_app2_title')}</h4>
              <p className="text-justify text-[15px] md:text-[18px] mt-2">
                {t('tcc_app2_desc')}
              </p>
            </div>
          </div>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold">
            {t('tcc_s4_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('tcc_s4_p1')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('tcc_s4_p2_pre_strong')} <strong>{t('tcc_s4_p2_strong')}</strong>{t('tcc_s4_p2_end')}
          </p>
          <ul className="list-disc pl-5 mb-6 text-[16px] md:text-[20px] lg:text-[22px] text-justify">
            <li>{t('tcc_s4_li1')}</li>
            <li>{t('tcc_s4_li2')}</li>
          </ul>

						<div className="border-t border-gray-300 pt-6 mt-6 pb-20 flex-shrink-0">
              <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
								{t('tcc_partners_intro')}
              </p>

							<div className="mb-5 bg-gray-100 p-3 rounded">
                <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold dark:text-gray-800">Anna Caroline Sousa</p>
                <p className="text-[14px] md:text-[18px] text-gray-700">{t('tcc_partner_1_role')}</p>
								<p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anna-caroline-de-oliveira-sousa/" className="text-[#2CAE71] underline">https://www.linkedin.com/in/anna-caroline-de-oliveira-sousa/</a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="mailto:annacaroline@alunos.utfpr.edu.br" className="text-[#2CAE71] underline">annacaroline@alunos.utfpr.edu.br</a></p>
              </div>
              
            </div>

        </div>
      </div>
    </main>
	);
}
