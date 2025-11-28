import {colors} from "./_index"
import { useLanguage } from "~/LanguageContext";

export default function Main() {
  const { t } = useLanguage();

  return (
		<main className="absolute w-full h-full">
      <div className="absolute top-20 bottom-0 w-full opacity-30" style={{ backgroundColor: colors.get("systems") }} ></div>
      <div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">

        <div className="flex flex-col max-w-400 mx-3 md:mx-10 lg:mx-20">

					<h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center">
          	{t('main_systems_title')}
          </h2>

          <h3 className="mb-5 text-[22px] md:text-[30px] lg:text-[34px] font-bold text-center">
            {t('sys_portfolio_subtitle')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_intro')}
          </p>

          <h3 className="mt-10 mb-5 text-[22px] md:text-[30px] lg:text-[34px] font-bold">
            {t('sys_1_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_1_desc')}
          </p>

          <h4 className="my-5 text-[18px] md:text-[24px] lg:text-[28px] font-bold">
            {t('sys_1_1_title')}
          </h4>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_1_1_desc')}
          </p>

          <h5 className="my-3 text-[16px] md:text-[22px] lg:text-[24px] font-bold">
            {t('sys_1_1_1_title')}
          </h5>

          <ul className="list-disc pl-5 space-y-4 mb-6 text-[16px] md:text-[20px] lg:text-[22px] text-justify">
            <li>
              <strong>{t('sys_stk_1_label')}</strong> {t('sys_stk_1_desc')}
              <br /><span className="italic text-sm md:text-base">{t('sys_stk_1_note')}</span>
            </li>
            <li>
              <strong>{t('sys_stk_2_label')}</strong> {t('sys_stk_2_desc')}
            </li>
            <li>
              <strong>{t('sys_stk_3_label')}</strong> {t('sys_stk_3_desc')}
            </li>
          </ul>

          <h5 className="my-3 text-[16px] md:text-[22px] lg:text-[24px] font-bold">
            {t('sys_1_1_2_title')}
          </h5>
          <ul className="list-none space-y-2 mb-6 text-[16px] md:text-[20px] lg:text-[22px] text-justify">
            <li><strong>ShN1:</strong> {t('sys_shn_1')}</li>
            <li><strong>ShN2:</strong> {t('sys_shn_2')}</li>
            <li><strong>ShN3:</strong> {t('sys_shn_3')}</li>
            <li><strong>ShN4:</strong> {t('sys_shn_4')}</li>
            <li><strong>ShN5:</strong> {t('sys_shn_5')}</li>
            <li><strong>ShN6:</strong> {t('sys_shn_6')}</li>
            <li><strong>ShN7:</strong> {t('sys_shn_7')}</li>
          </ul>

          <h5 className="my-3 text-[16px] md:text-[22px] lg:text-[24px] font-bold">
            {t('sys_1_1_3_title')}
          </h5>
          <ul className="list-none space-y-2 mb-6 text-[16px] md:text-[20px] lg:text-[22px] text-justify">
            <li><strong>ShC1:</strong> {t('sys_shc_1')}</li>
            <li><strong>ShC2:</strong> {t('sys_shc_2')}</li>
            <li><strong>ShC3:</strong> {t('sys_shc_3')}</li>
            <li><strong>ShC4:</strong> {t('sys_shc_4')}</li>
          </ul>

          <h4 className="my-5 text-[18px] md:text-[24px] lg:text-[28px] font-bold">
            {t('sys_1_2_title')}
          </h4>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_1_2_desc')}
          </p>
          <ul className="list-disc pl-5 mb-4 text-[16px] md:text-[20px] lg:text-[22px] text-justify">
            <li>{t('sys_opt_1')}</li>
            <li>{t('sys_opt_2')}</li>
            <li>{t('sys_opt_3')}</li>
          </ul>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_1_2_analysis')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4 font-semibold">
            {t('sys_decision_prefix')}{t('sys_decision_text')}
          </p>

          <h3 className="mt-10 mb-5 text-[22px] md:text-[30px] lg:text-[34px] font-bold">
            {t('sys_2_title')}
          </h3>

          <h4 className="my-5 text-[18px] md:text-[24px] lg:text-[28px] font-bold">
            {t('sys_2_1_title')}
          </h4>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_2_1_desc')}
          </p>

          <div className="flex flex-col items-center my-8">
            <img src="/eap.png" alt="Estrutura Analítica do Projeto" className="w-full max-w-3xl border border-gray-300 rounded-lg shadow-md" />
            <span className="text-sm text-gray-600 mt-2">{t('sys_fig_1')}</span>
          </div>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_schedule_intro')}
          </p>
          <ul className="list-disc pl-5 mb-6 text-[16px] md:text-[20px] lg:text-[22px]">
            <li><strong>{t('sys_task_concept')}</strong> {t('sys_task_concept_date')}</li>
            <li><strong>{t('sys_task_design')}</strong> {t('sys_task_design_date')}</li>
            <li><strong>{t('sys_task_exec')}</strong> {t('sys_task_exec_date')}</li>
            <li><strong>{t('sys_task_test')}</strong> {t('sys_task_test_date')}</li>
            <li><strong>{t('sys_task_ops')}</strong> {t('sys_task_ops_date')}</li>
          </ul>

          <h3 className="mt-10 mb-5 text-[22px] md:text-[30px] lg:text-[34px] font-bold">
            {t('sys_3_title')}
          </h3>
          <h4 className="my-5 text-[18px] md:text-[24px] lg:text-[28px] font-bold">
            {t('sys_3_1_title')}
          </h4>
          <ul className="list-none space-y-3 mb-6 text-[16px] md:text-[20px] lg:text-[22px] text-justify">
            <li><strong>{t('sys_prob_label')}</strong> {t('sys_prob_desc')}</li>
            <li><strong>{t('sys_purp_label')}</strong> {t('sys_purp_desc')}</li>
            <li><strong>{t('sys_miss_label')}</strong> {t('sys_miss_desc')}</li>
            <li><strong>{t('sys_vis_label')}</strong> {t('sys_vis_desc')}</li>
          </ul>

          <h4 className="my-5 text-[18px] md:text-[24px] lg:text-[28px] font-bold">
            {t('sys_3_2_title')}
          </h4>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_3_2_p1')}
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_3_2_p2')}
          </p>

          <h3 className="mt-10 mb-5 text-[22px] md:text-[30px] lg:text-[34px] font-bold">
            {t('sys_4_title')}
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
             {t('sys_4_desc')}
          </p>

          <h4 className="my-5 text-[18px] md:text-[24px] lg:text-[28px] font-bold">
            {t('sys_4_1_title')}
          </h4>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-gray-800 pl-4 bg-white/50 p-4 rounded">
              <h5 className="font-bold text-lg">{t('sys_rf1_title')}</h5>
              <p className="text-justify">{t('sys_rf1_desc')}</p>
              <ul className="list-disc pl-5 mt-2">
                <li>{t('sys_rf1_1')}</li>
                <li>{t('sys_rf1_2')}</li>
                <li>{t('sys_rf1_3')}</li>
              </ul>
              <p className="text-sm mt-2 italic">{t('sys_justification')} ShN2, ShN3, ShN4, ShC1</p>
            </div>

            <div className="border-l-4 border-gray-800 pl-4 bg-white/50 p-4 rounded">
              <h5 className="font-bold text-lg">{t('sys_rf2_title')}</h5>
              <p className="text-justify">{t('sys_rf2_desc')}</p>
              <ul className="list-disc pl-5 mt-2">
                <li>{t('sys_rf2_1')}</li>
                <li>{t('sys_rf2_2')}</li>
              </ul>
              <p className="text-sm mt-2 italic">{t('sys_justification')} ShN4, ShC1</p>
            </div>

            <div className="border-l-4 border-gray-800 pl-4 bg-white/50 p-4 rounded">
              <h5 className="font-bold text-lg">{t('sys_rf3_title')}</h5>
              <ul className="list-disc pl-5 mt-2">
                <li>{t('sys_rf3_1')}</li>
                <li>{t('sys_rf3_2')}</li>
                <li>{t('sys_rf3_3')}</li>
                <li>{t('sys_rf3_4')}</li>
                <li>{t('sys_rf3_5')}</li>
                <li>{t('sys_rf3_6')}</li>
              </ul>
              <p className="text-sm mt-2 italic">{t('sys_justification')} ShN1, ShN3, ShN5</p>
            </div>

            <div className="border-l-4 border-gray-800 pl-4 bg-white/50 p-4 rounded">
              <h5 className="font-bold text-lg">{t('sys_rf4_title')}</h5>
              <ul className="list-disc pl-5 mt-2">
                <li>{t('sys_rf4_1')}</li>
                <li>{t('sys_rf4_2')}</li>
                <li>{t('sys_rf4_3')}</li>
                <li>{t('sys_rf4_4')}</li>
              </ul>
              <p className="text-sm mt-2 italic">{t('sys_justification')} ShN1, ShN6, ShN7, ShC1</p>
            </div>
          </div>

          <h4 className="my-5 text-[18px] md:text-[24px] lg:text-[28px] font-bold">
            {t('sys_4_2_title')}
          </h4>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-gray-600 pl-4 bg-white/50 p-4 rounded">
              <h5 className="font-bold text-lg">{t('sys_rnf1_title')}</h5>
              <ul className="list-disc pl-5 mt-2">
                <li>{t('sys_rnf1_1')}</li>
                <li>{t('sys_rnf1_2')}</li>
                <li>{t('sys_rnf1_3')}</li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-600 pl-4 bg-white/50 p-4 rounded">
              <h5 className="font-bold text-lg">{t('sys_rnf2_title')}</h5>
              <ul className="list-disc pl-5 mt-2">
                <li>{t('sys_rnf2_1')}</li>
                <li>{t('sys_rnf2_2')}</li>
              </ul>
            </div>
          </div>

          <h4 className="my-5 text-[18px] md:text-[24px] lg:text-[28px] font-bold">
            {t('sys_4_3_title')}
          </h4>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('sys_4_3_desc')}
          </p>

          <h5 className="my-3 text-[16px] md:text-[22px] lg:text-[24px] font-bold">{t('sys_tech_title')}</h5>
          <ul className="list-disc pl-5 mb-6 text-[16px] md:text-[20px] lg:text-[22px] text-justify">
            <li><strong>{t('sys_tech_front_label')}</strong> {t('sys_tech_front_desc')}</li>
            <li><strong>{t('sys_tech_server_label')}</strong> {t('sys_tech_server_desc')}</li>
            <li><strong>{t('sys_tech_ver_label')}</strong> {t('sys_tech_ver_desc')}</li>
          </ul>

          <h4 className="my-5 text-[18px] md:text-[24px] lg:text-[28px] font-bold">
            {t('sys_4_4_title')}
          </h4>
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4 pb-20 flex-shrink-0">
            {t('sys_4_4_desc')}
          </p>

        </div>
      </div>
    </main>
	);
}
