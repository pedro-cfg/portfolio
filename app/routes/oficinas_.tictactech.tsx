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
              {t('ttt_title')}
            </h2>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('ttt_intro')}
            </p>

            <div className="w-full mb-6 bg-gray-200 rounded-xl max-w-4xl mx-auto shadow-md border border-gray-300">
                <img 
                    src="/braco.png" 
                    alt={t('ttt_img_alt')} 
                    className="w-full h-auto object-cover min-h-[200px]"
                    onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/A12CAE/white?text=Foto+do+Braço+Robótico"}}
                />
                <p className="text-xs text-center text-gray-500 py-1 italic">{t('ttt_img_caption')}</p>
            </div>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('ttt_desc_1')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('ttt_desc_2')}
            </p>

            <div className="w-full mb-6 aspect-video bg-black rounded-xl max-w-4xl mx-auto shadow-lg border border-gray-300">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dilOX3GYaEg" 
                    title={t('ttt_video_title')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('ttt_desc_3')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('ttt_desc_4')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('ttt_desc_5')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('ttt_desc_6')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('ttt_desc_7')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
							{t('ttt_blog_pre_link')}{" "} 
							<a href="https://annacaroline3.wixsite.com/my-blog/about-3" target="_blank" rel="noopener noreferrer" className="font-bold text-[#A12CAE] cursor-pointer hover:underline" >
                https://annacaroline3.wixsite.com/my-blog/about-3
              </a>
            </p>

						<div className="border-t border-gray-300 pt-6 mt-6 pb-20 flex-shrink-0">
              <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
								{t('participants_title')}
              </p>

							<div className="mb-5 bg-gray-100 p-3 rounded">
                <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold dark:text-gray-800">Anna Caroline Sousa</p>
                <p className="text-[14px] md:text-[18px] text-gray-700">{t('ttt_part_1_role')}</p>
								<p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anna-caroline-de-oliveira-sousa/" className="text-[#A12CAE] underline">https://www.linkedin.com/in/anna-caroline-de-oliveira-sousa/</a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="mailto:annacaroline@alunos.utfpr.edu.br" className="text-[#A12CAE] underline">annacaroline@alunos.utfpr.edu.br</a></p>
              </div>

              <div className="mb-5 bg-gray-100 p-3 rounded">
                <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold dark:text-gray-800">Thiago Medeiros</p>
                <p className="text-[14px] md:text-[18px] text-gray-700">{t('ttt_part_2_role')}</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/thiago-hx-medeiros/" className="text-[#A12CAE] underline">https://www.linkedin.com/in/thiago-hx-medeiros/</a>
              </div>
              
            </div>

          </div>
        </div>
      </main>
	);
}
