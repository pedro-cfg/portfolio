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
              {t('safe_title')}
            </h2>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('safe_intro')}
            </p>

            <div className="w-full mb-6 bg-gray-200 rounded-xl max-w-4xl mx-auto shadow-md border border-gray-300">
                <img 
                    src="/safeclimb.jpeg" 
                    alt={t('safe_img_alt')} 
                    className="w-full h-auto object-cover min-h-[200px]"
                    onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/A12CAE/white?text=Foto+da+Torre+Safeclimb"}}
                />
                <p className="text-xs text-center text-gray-500 py-1 italic">{t('safe_img_caption')}</p>
            </div>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('safe_desc_1_pre_strong')} <strong>{t('safe_desc_1_strong')}</strong>{t('safe_desc_1_end')}
            </p>

            <div className="w-full mb-6 aspect-video bg-black rounded-xl max-w-4xl mx-auto shadow-lg border border-gray-300">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ATkXTrlEhvU" 
                    title={t('safe_video_title')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('safe_desc_2')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('safe_desc_3')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('safe_desc_4')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('safe_desc_5_pre_strong')} <strong>{t('safe_desc_5_strong')}</strong>{t('safe_desc_5_end')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('safe_desc_6')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('safe_desc_7')}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
              {t('safe_desc_8')}
            </p>
						<p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
							{t('safe_blog_pre_link')}{" "} 
							<a href="https://horse-couch-11f.notion.site/SafeClimb-1d0f3d708b22440ab98bae903a1b1748" target="_blank" rel="noopener noreferrer" className="font-bold text-[#A12CAE] cursor-pointer hover:underline" >
								https://horse-couch-11f.notion.site/SafeClimb-1d0f3d708b22440ab98bae903a1b1748
              </a>
            </p>

						<div className="border-t border-gray-300 pt-6 mt-6 pb-20 flex-shrink-0">
              <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
								{t('participants_title')}
              </p>

							<div className="mb-5 bg-gray-100 p-3 rounded">
                <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold">Anna Caroline Sousa</p>
                <p className="text-[14px] md:text-[18px] text-gray-700">{t('safe_part_1_role')}</p>
								<p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anna-caroline-de-oliveira-sousa/" className="text-[#A12CAE] underline">https://www.linkedin.com/in/anna-caroline-de-oliveira-sousa/</a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="mailto:annacaroline@alunos.utfpr.edu.br" className="text-[#A12CAE] underline">annacaroline@alunos.utfpr.edu.br</a></p>
              </div>

 							<div className="mb-5 bg-gray-100 p-3 rounded">
                <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold">Caio Andrade</p>
                <p className="text-[14px] md:text-[18px] text-gray-700">{t('safe_part_2_role')}</p>
								<p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/caio-andrade98/" className="text-[#A12CAE] underline">https://www.linkedin.com/in/caio-andrade98/</a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="mailto:caiorocha@alunos.utfpr.edu.br" className="text-[#A12CAE] underline">caiorocha@alunos.utfpr.edu.br</a></p>
              </div>             
              
							<div className="mb-5 bg-gray-100 p-3 rounded">
                <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold">Eduardo Soviersovski</p>
                <p className="text-[14px] md:text-[18px] text-gray-700">{t('safe_part_3_role')}</p>
								<p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eduardo-soviersovski/" className="text-[#A12CAE] underline">https://www.linkedin.com/in/eduardo-soviersovski/</a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="mailto:edusov@alunos.edu.com.br" className="text-[#A12CAE] underline">edusov@alunos.edu.com.br</a></p>
              </div>

							<div className="mb-5 bg-gray-100 p-3 rounded">
                <p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold">Mateus Marodim</p>
                <p className="text-[14px] md:text-[18px] text-gray-700">{t('safe_part_4_role')}</p>
								<p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mateusmarodim/" className="text-[#A12CAE] underline">https://www.linkedin.com/in/mateusmarodim/</a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="mailto:marodim@alunos.utfpr.edu.br" className="text-[#A12CAE] underline">marodim@alunos.utfpr.edu.br</a></p>
              </div>


            </div>

          </div>
        </div>
      </main>
	);
}
