import {colors} from "./_index"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useLanguage } from "~/LanguageContext";
import { HiChevronDown } from "react-icons/hi2";

export default function Main() {
	const { t } = useLanguage();

  return (
    <main className="absolute w-full h-full">
      <div 
        className="absolute top-20 bottom-0 w-full opacity-30" 
        style={{backgroundColor: colors.get("utfpr")}}
      ></div>

      <div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">
        <div className="flex flex-col max-w-400 mx-3 md:mx-10 lg:mx-20 pb-20">
          
          <h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center leading-tight">
            {t('academic_title')}
          </h2>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('academic_intro_1')}
          </p>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('academic_intro_2')}
          </p>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
            {t('academic_intro_3')}
          </p>

          <div className="w-full mb-6 rounded-xl max-w-4xl shadow-md mx-auto">
            <img 
              src="/utfpr-entrada.jpg" 
              alt="Campus da UTFPR Curitiba" 
              className="w-full h-auto object-cover"
              onError={(e) => {e.currentTarget.src = "https://placehold.co/600x300/AE9B2C/white?text=Foto+UTFPR"}}
            />
            <p className="text-xs text-center text-gray-500 mt-1 italic">{t('academic_photo_caption')}</p>
          </div>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('academic_intro_4')}
          </p>
          
          <p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-4">
            {t('academic_intro_5')}
          </p>

          <div className="mx-auto w-full max-w-lg rounded-xl bg-black/5 mt-6 border border-gray-200 dark:border-gray-600">
            
            <Disclosure as="div" className="p-2 border-b border-gray-300 dark:border-gray-800" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between py-2">
                <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-gray-200">
                  {t('academic_area_prog')}
                </span>
                <HiChevronDown className="size-6 fill-gray-600 group-hover:fill-black group-data-[open]:rotate-180 transition-transform" />
              </DisclosureButton>
              <DisclosurePanel className="my-2 flex flex-col gap-2 pl-2 border-l-2 border-[#AE9B2C]">
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_prog_1')}</span>
                  <span className="font-bold">9.8</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_prog_2')}</span>
                  <span className="font-bold">8.4</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_prog_3')}</span>
                  <span className="font-bold">10.0</span>
                </div>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="p-2 border-b border-gray-300 dark:border-gray-800" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between py-2">
                <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-gray-200">
                  {t('academic_area_algo')}
                </span>
                <HiChevronDown className="size-6 fill-gray-600 group-hover:fill-black group-data-[open]:rotate-180 transition-transform" />
              </DisclosureButton>
              <DisclosurePanel className="my-2 flex flex-col gap-2 pl-2 border-l-2 border-[#AE9B2C]">
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_algo_1')}</span>
                  <span className="font-bold">9.1</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_algo_2')}</span>
                  <span className="font-bold">9.0</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_algo_3')}</span>
                  <span className="font-bold">9.4</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_algo_4')}</span>
                  <span className="font-bold">8.4</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_algo_5')}</span>
                  <span className="font-bold">8.2</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_algo_6')}</span>
                  <span className="font-bold">8.9</span>
                </div>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="p-2 border-b border-gray-300 dark:border-gray-800" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between py-2">
                <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-gray-200">
                  {t('academic_area_analog')}  
                </span>
                <HiChevronDown className="size-6 fill-gray-600 group-hover:fill-black group-data-[open]:rotate-180 transition-transform" />
              </DisclosureButton>
              <DisclosurePanel className="my-2 flex flex-col gap-2 pl-2 border-l-2 border-[#AE9B2C]">
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_analog_1')}</span>
                  <span className="font-bold">8.7</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_analog_2')}</span>
                  <span className="font-bold">8.2</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_analog_3')}</span>
                  <span className="font-bold">9.6</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_analog_4')}</span>
                  <span className="font-bold">8.6</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_analog_5')}</span>
                  <span className="font-bold">9.9</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_analog_6')}</span>
                  <span className="font-bold">9.5</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_analog_7')}</span>
                  <span className="font-bold">7.0</span>
                </div>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="p-2 border-b border-gray-300 dark:border-gray-800" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between py-2">
                <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-gray-200">
                  {t('academic_area_digital')}
                </span>
                <HiChevronDown className="size-6 fill-gray-600 group-hover:fill-black group-data-[open]:rotate-180 transition-transform" />
              </DisclosureButton>
              <DisclosurePanel className="my-2 flex flex-col gap-2 pl-2 border-l-2 border-[#AE9B2C]">
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_digital_1')}</span>
                  <span className="font-bold">8.2</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_digital_2')}</span>
                  <span className="font-bold">9.4</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_digital_3')}</span>
                  <span className="font-bold">7.1</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_digital_4')}</span>
                  <span className="font-bold">8.0</span>
                </div>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="p-2 border-b border-gray-300 dark:border-gray-800" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between py-2">
                <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-gray-200">
                  {t('academic_area_micro')}
                </span>
                <HiChevronDown className="size-6 fill-gray-600 group-hover:fill-black group-data-[open]:rotate-180 transition-transform" />
              </DisclosureButton>
              <DisclosurePanel className="my-2 flex flex-col gap-2 pl-2 border-l-2 border-[#AE9B2C]">
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_micro_1')}</span>
                  <span className="font-bold">8.6</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_micro_2')}</span>
                  <span className="font-bold">10.0</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_micro_3')}</span>
                  <span className="font-bold">9.4</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_micro_4')}</span>
                  <span className="font-bold">7.7</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_micro_5')}</span>
                  <span className="font-bold">7.8</span>
                </div>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="p-2 border-b border-gray-300 dark:border-gray-800" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between py-2">
                <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-gray-200">
                  {t('academic_area_applied')}
                </span>
                <HiChevronDown className="size-6 fill-gray-600 group-hover:fill-black group-data-[open]:rotate-180 transition-transform" />
              </DisclosureButton>
              <DisclosurePanel className="my-2 flex flex-col gap-2 pl-2 border-l-2 border-[#AE9B2C]">
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_applied_1')}</span>
                  <span className="font-bold">8.1</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_applied_2')}</span>
                  <span className="font-bold">8.0</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_applied_3')}</span>
                  <span className="font-bold">9.6</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_applied_4')}</span>
                  <span className="font-bold">8.6</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_applied_5')}</span>
                  <span className="font-bold">9.1</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_applied_6')}</span>
                  <span className="font-bold">9.7</span>
                </div>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="p-2" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between py-2">
                <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-gray-200">
                  {t('academic_area_network')}
                </span>
                <HiChevronDown className="size-6 fill-gray-600 group-hover:fill-black group-data-[open]:rotate-180 transition-transform" />
              </DisclosureButton>
              <DisclosurePanel className="my-2 flex flex-col gap-2 pl-2 border-l-2 border-[#AE9B2C]">
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_network_1')}</span>
                  <span className="font-bold">8.2</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_network_2')}</span>
                  <span className="font-bold">9.9</span>
                </div>
                <div className="text-gray-700 flex justify-between text-[14px] md:text-[18px] dark:text-gray-300">
                  <span>{t('academic_subj_network_3')}</span>
                  <span className="font-bold">10.0</span>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </div>

          <div className="basis-20 w-full flex-shrink-0"></div>
        </div>
      </div>
    </main>
  );
}

