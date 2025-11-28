import {colors} from "./_index"
import { Link } from "react-router";
import { useLanguage } from "~/LanguageContext";

export default function SobreMim() {
  const { t } = useLanguage();

  return (
    <main className="absolute w-full h-full"> 
      <div className="absolute top-20 bottom-0 w-full opacity-30" style={{ backgroundColor: colors.get("me") }} ></div>

      <div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">
        <div className="flex flex-col max-w-400 mx-3 md:mx-10 lg:mx-20">
          
          <h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center leading-tight">
            {t('about_title')}
          </h2>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('about_intro_1')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('about_intro_2')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('about_intro_3')}
          </p>

          <div className="bg-white/50 rounded-lg p-4 mb-8 border-l-4 border-[#AE2C2C]">
            <p className="text-[15px] md:text-[18px] lg:text-[20px] text-justify italic text-gray-800">
              {t('about_hobbies')}
            </p>
          </div>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#AE2C2C]">
            {t('about_ai_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('about_ai_desc_1')}            
            <Link to="/projeto-inesc" className="font-bold text-[#AE2C2C] cursor-pointer hover:underline">
              {t('about_ai_link')}
            </Link>
            {t('about_ai_desc_2')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
            {t('about_ai_desc_3')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#AE2C2C]">
            {t('about_backend_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
            {t('about_backend_desc_1')}<strong>{t('about_backend_strong_1')}</strong>{t('about_backend_desc_2')}<strong>{t('about_backend_strong_2')}</strong>{t('about_backend_desc_3')}
            <Link to="/estagio" className="font-bold text-[#AE2C2C] cursor-pointer hover:underline">
              {t('about_backend_link')}
            </Link>{t('about_backend_desc_4')}<strong>{t('about_backend_strong_3')}</strong>{t('about_backend_desc_5')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#AE2C2C]">
            {t('about_frontend_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
            {t('about_frontend_desc_1')}<strong>{t('about_frontend_strong_1')}</strong>{t('about_frontend_desc_2')}<strong>{t('about_frontend_strong_2')}</strong>{t('about_frontend_desc_3')}<strong>{t('about_frontend_strong_3')}</strong>{t('about_frontend_desc_4')}
            <Link to="/tcc" className="font-bold text-[#AE2C2C] cursor-pointer hover:underline">
              {t('about_frontend_link')}
            </Link>{t('about_frontend_desc_5')}
          </p>

          <h3 className="mt-5 mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#AE2C2C]">
            {t('about_embedded_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
            {t('about_embedded_desc_1')} 
            <Link to="/oficinas" className="font-bold text-[#AE2C2C] cursor-pointer hover:underline">
              {t('about_embedded_link')}
            </Link>
          </p>

          <div className="mt-8 mb-10 p-4 border-t border-gray-300 text-center pb-20 flex-shrink-0">
            <p className="text-[16px] md:text-[20px] lg:text-[22px]">
              {t('about_nav_1')}
              <Link to="/" className="font-bold text-[#AE2C2C] cursor-pointer hover:underline">
                {t('about_nav_link_home')}
              </Link>{t('about_nav_2')}
              <Link to="/formacao-academica" className="font-bold text-[#AE2C2C] cursor-pointer hover:underline">
                {t('about_nav_link_academic')}
              </Link>{t('about_nav_3')}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

