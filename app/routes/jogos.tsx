import {colors} from "./_index"
import { Link } from "react-router";
import { useLanguage } from "~/LanguageContext";

export default function Main() {
	const { t } = useLanguage();

  return (
    <main className="absolute w-full h-full">
      <div className="absolute top-20 bottom-0 w-full opacity-30" style={{ backgroundColor: colors.get("games") }} ></div>

      <div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">
        <div className="flex flex-col w-full max-w-400 mx-3 md:mx-10 lg:mx-20 pb-20">
          
          <h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center leading-tight">
            {t('games_title')}
          </h2>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('games_intro_1')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('games_intro_2')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-8">
            {t('games_intro_3')}
          </p>

          <div className="bg-white/60 rounded-xl p-5 mb-8 border-l-4 border-[#2CAE9F] shadow-sm">
            <h3 className="mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#2CAE9F]">
              {t('games_miau_title')}
            </h3>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-center mb-6">
              {t('games_miau_desc_1')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-center mb-6">
              {t('games_miau_desc_2')}<strong>{t('games_miau_strong_1')}</strong>{t('games_miau_desc_3')}<strong>{t('games_miau_strong_2')}</strong>{t('games_miau_desc_4')}
            </p>
            <div className="flex w-full items-center justify-center">
              <Link to="/jogos/miauventuras" className="flex justify-center items-center bg-gray-800 rounded-xl px-6 py-2 hover:bg-gray-700 transition-colors shadow-md">
                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('games_play_btn')}</p>
              </Link>
            </div>
          </div>

          <div className="bg-white/60 rounded-xl p-5 mb-8 border-l-4 border-[#2CAE9F] shadow-sm">
            <h3 className="mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#2CAE9F]">
              {t('games_unity_title')}
            </h3>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-center mb-6">
              {t('games_unity_desc_1')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-center mb-6">
              {t('games_unity_desc_2')}
            </p>
            <div className="flex w-full items-center justify-center">
              <Link to="/jogos/projeto-pessoal" className="flex justify-center items-center bg-gray-800 rounded-xl px-6 py-2 hover:bg-gray-700 transition-colors shadow-md">
                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('games_play_btn')}</p>
              </Link>
            </div>
          </div>

          {/*
          <div className="bg-white/60 rounded-xl p-5 mb-8 border-l-4 border-[#2CAE9F] shadow-sm flex-shrink-0">
            <h3 className="mb-3 text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#2CAE9F]">
              {t('games_tcw_title')}
            </h3>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-center mb-6">
              {t('games_tcw_desc_1')}<em>{t('games_tcw_em')}</em>{t('games_tcw_desc_2')}<strong>{t('games_tcw_strong')}</strong>{t('games_tcw_desc_3')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-center mb-6">
              {t('games_tcw_desc_4')}
            </p>
            <div className="flex w-full items-center justify-center">
              <Link to="/jogos/tcw" className="flex justify-center items-center bg-gray-800 rounded-xl px-6 py-2 hover:bg-gray-700 transition-colors shadow-md">
                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
              </Link>
            </div>
          </div>
          */}

          <span className="pb-20 flex-shrink-0"></span>
        </div>
      </div>
    </main>
  );
}

