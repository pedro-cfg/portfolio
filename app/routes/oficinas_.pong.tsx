import {colors} from "./_index"
import { useLanguage } from "~/LanguageContext";

export default function Main() {
  const { t } = useLanguage();

  return (
			<main className="absolute w-full h-full">
        <div className="absolute top-20 bottom-0 w-full opacity-30" style={{ backgroundColor: colors.get("workshop") }} ></div>

        <div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">
          <div className="flex flex-col w-full max-w-400 mx-3 md:mx-10 lg:mx-20 pb-20">
            
            <h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center leading-tight">
              {t('pong_title')}
            </h2>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('pong_intro')}
            </p>

            <div className="w-full mb-6 bg-gray-200 rounded-xl max-w-4xl mx-auto shadow-md border border-gray-300">
                <img 
                    src="/kingpong.jpg" 
                    alt={t('pong_img_alt')} 
                    className="w-full h-auto object-cover min-h-[200px]"
                    onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/A12CAE/white?text=Foto+do+Fliperama"}}
                />
                <p className="text-xs text-center text-gray-500 py-1 italic">{t('pong_img_caption')}</p>
            </div>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('pong_desc_1')}
            </p>

            <div className="w-full mb-6 aspect-video bg-black rounded-xl max-w-4xl mx-auto shadow-lg border border-gray-300">
							<iframe
								className="w-full h-full"
								src="https://youtube.com/embed/nNQhugPsYJA"
								title={t('pong_video_title')}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
            </div>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('pong_desc_2_pre_strong')} <strong>{t('pong_desc_2_strong')}</strong>{t('pong_desc_2_mid')} <strong>{t('pong_desc_2_strong_2')}</strong>{t('pong_desc_2_end')}
            </p>

						<div className="border-t border-gray-300 pt-6 mt-6 pb-20 flex-shrink-0">
              <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
								{t('participants_title')}
              </p>

              <div className="mb-5 bg-gray-100 p-3 rounded">
                <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold">Camila Santos</p>
                <p className="text-[14px] md:text-[18px] text-gray-700">{t('pong_part_1_role')}</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/camilasantos17/" className="text-[#A12CAE] underline">https://www.linkedin.com/in/camilasantos17/</a>
              </div>

              <div className="mb-5 bg-gray-100 p-3 rounded">
                <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold">Lucas Targa</p>
                <p className="text-[14px] md:text-[18px] text-gray-700">{t('pong_part_2_role')}</p>
								<p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucasltarga/" className="text-[#A12CAE] underline">https://www.linkedin.com/in/lucasltarga/</a></p>
              </div>
            </div>

          </div>
        </div>
      </main>
	);
}
