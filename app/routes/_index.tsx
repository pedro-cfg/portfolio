import { HiChevronDoubleDown } from "react-icons/hi2";
import profile from '/perfil.jpeg';
import code from '/computacao.jpg';
import paper from '/folhas.jpg';
import utfpr from '/utfpr.png';
import inesc from '/inesc.png';
import microsoft from '/microsoft.jpg';
import arm from '/braco.jpg';
import games from '/games.jpg';
import laptop from '/pc.jpg';
import irrigation from '/irrigacao.jpg';
import certificate from '/medalha.jpg';
import last from '/final.jpg';
import { Link } from "react-router";
import { useEffect } from "react";
import { useLanguage } from "~/LanguageContext";

export const colors: Map<string, string> = new Map([
  ["first", "#4C2CAE"],
  ["me", "#AE2C2C"],
  ["utfpr", "#AE9B2C"],
  ["inesc", "#2CAE3B"],
  ["smart", "#2C44AE"],
  ["workshop", "#A12CAE"],
  ["games", "#2CAE9F"],
  ["systems", "#AE592C"],
  ["tcc", "#2CAE71"],
  ["certif", "#AE2C64"],
  ["other", "#2C6FAE"]
]);

export default function Main() {
    const { t } = useLanguage();

    useEffect(() => {
        const lastSection = sessionStorage.getItem("lastSection");

        if (lastSection) {
            const element = document.getElementById(lastSection);
            if (element) {
                element.scrollIntoView({ block: "center" });
            }
            sessionStorage.removeItem("lastSection");
        }

    }, []);

    return (
        <main className="absolute w-full h-full">

            <div className="absolute top-20 bottom-0 flex flex-col w-full snap-y snap-mandatory overflow-y-auto">

                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("first")}} id="first">

                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={paper} alt="Papers" className="h-full w-full object-cover opacity-20 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <div className="flex flex-1 flex-col w-full justify-center px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_greeting_1')}</h2>
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_greeting_2')}</h2>
                        </div>
                        <div className="flex flex-2 flex-row w-full justify-center px-5 md:px-12 lg:px-25 gap-5 md:gap-12 lg:gap-20">
                            <div className="flex basis-30 md:basis-40 lg:basis-50 grow-0 items-center justify-center ">
                                <img src={profile} alt="Perfil" className="rounded-[100px] border-4 border-gray-800 border-double"/>
                            </div>
                            <div className="flex flex-3 flex-col w-full justify-center ">
                                <div className="flex flex-1 items-center">
                                    <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_greeting_3')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-[0.8] flex-col w-full justify-center px-2">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center font-bold text-white">{t('main_contact_title')}</p>
                            </div>
                            <div className="flex flex-1 items-center justify-center gap-2 md:gap-5 lg:gap-20">
                                <a target="_blank" rel="noopener noreferrer" href={"mailto:pedroguimaraes@alunos.utfpr.edu.br"} className="flex justify-center items-center bg-gray-800 basis-40 rounded-xl p-2 hover:bg-gray-700 hover:cursor-pointer">
                                    <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_email')}</p>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={"http://www.linkedin.com/in/pedro-guimarães-82407b1a5"} className="flex justify-center items-center bg-gray-800 basis-40 rounded-xl p-2 hover:bg-gray-700 hover:cursor-pointer">
                                    <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_linkedin')}</p>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={"https://github.com/pedro-cfg"}  className="flex justify-center items-center bg-gray-800 basis-40 rounded-xl p-2 hover:bg-gray-700 hover:cursor-pointer">
                                    <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_github')}</p>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={"curriculo.pdf"} className="flex justify-center items-center bg-gray-800 basis-40 rounded-xl p-2 hover:bg-gray-700 hover:cursor-pointer">
                                    <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_curriculum')}</p>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-[0.5] w-full items-end justify-center">
                            <h3 className="text-[14px] md:text-[20px] lg:text-[25px] text-center font-bold text-white">{t('main_scroll_hint')}</h3>
                        </div>
                        <div className="flex basis-15 w-full items-center justify-center">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("me");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>
                    </div>
                </div>


                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("me")}} id="me">

                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={code} alt="Code" className="h-full w-full object-cover opacity-5 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <div className="flex basis-20 flex-col w-full justify-end px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_about_title')}</h2>
                        </div>
                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_about_desc')}</p>
                            </div>
                        </div>

                        <div className="flex flex-[1] w-full items-start justify-center px-2">
                            <Link onClick={() => sessionStorage.setItem("lastSection", "me")} to="/sobre-mim" className="flex justify-center items-center bg-gray-800 rounded-xl px-4 py-2">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
                            </Link>
                        </div>
                        
                        <div className="flex basis-50 flex-col justify-center gap-1">

                            <div className="">
                                <p className="text-[11px] md:text-[14px] lg:text-[20px] text-white font-bold text-center">{t('main_skills_languages')}</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 flex-wrap mb-2">
                                
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">C</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">C++</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">C#</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">Python</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">Java</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">Javascript</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">Kotlin</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">Assembly</p>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-[11px] md:text-[14px] lg:text-[20px] py-1 text-white font-bold text-center">{t('main_skills_tech')}</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 flex-wrap mb-2">
                                
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">React</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">Next.js</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">Git</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">Docker</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">gRPC</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">FreeRTOS</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">SQL</p>
                                </div>
                            </div>

                            <div className="">
                                <p className="text-[11px] md:text-[14px] lg:text-[20px] py-1 text-white font-bold text-center">{t('main_skills_spoken')}</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 flex-wrap">
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">{t('main_lang_pt')}</p>
                                </div>
                                <div className="flex justify-center items-center bg-gray-800 py-1 rounded-xl px-2">
                                    <p className="text-[11px] md:text-[14px] lg:text-[20px]  text-white text-center">{t('main_lang_en')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex basis-15 w-full items-center justify-center mt-10">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("utfpr");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>

                    </div>
                </div>
        
                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("utfpr")}} id="utfpr" >

                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={utfpr} alt="UTFPR" className="h-full w-full object-cover opacity-10 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">

                        <div className="flex basis-20 flex-col w-full justify-end px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_academic_title')}</h2>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-end justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_academic_desc_1')}</p>
                            </div>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_academic_desc_2')}</p>
                            </div>
                        </div>

                        <div className="flex flex-[0.5] w-full items-center justify-center px-2">
                            <Link onClick={() => sessionStorage.setItem("lastSection", "utfpr")} to="/formacao-academica" className="flex justify-center items-center bg-gray-800 rounded-xl px-4 py-2">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
                            </Link>
                        </div>
                        
                        <div className="flex basis-25 w-full items-center justify-center">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("inesc");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>

                    </div>
                </div>

                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("games")}} id="games">
                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={games} alt="Games Room" className="h-full w-full object-cover opacity-10 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">

                        <div className="flex basis-20 flex-col w-full justify-end px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_games_title')}</h2>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-end justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_games_desc_1')}</p>
                            </div>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_games_desc_2')}</p>
                            </div>
                        </div>

                        <div className="flex flex-[0.5] w-full items-center justify-center px-2">
                            <Link onClick={() => sessionStorage.setItem("lastSection", "games")} to="/jogos" className="flex justify-center items-center bg-gray-800 rounded-xl px-4 py-2">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
                            </Link>
                        </div>
                        
                        <div className="flex basis-25 w-full items-center justify-center">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("systems");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>
                    </div>

                </div>
                
                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("inesc")}} id="inesc">

                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={inesc} alt="INESC" className="h-full w-full object-cover opacity-10 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">

                        <div className="flex basis-20 flex-col w-full justify-end px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_inesc_title')}</h2>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-end justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_inesc_desc_1')}</p>
                            </div>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_inesc_desc_2')}</p>
                            </div>
                        </div>

                        <div className="flex flex-[0.5] w-full items-center justify-center px-2">
                            <Link onClick={() => sessionStorage.setItem("lastSection", "inesc")} to="/projeto-inesc" className="flex justify-center items-center bg-gray-800 rounded-xl px-4 py-2">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
                            </Link>
                        </div>
                        
                        <div className="flex basis-25 w-full items-center justify-center">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("smart");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>

                    </div>
                </div>

                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("smart")}} id="smart">
                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={microsoft} alt="Cube" className="h-full w-full object-cover opacity-10 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">

                        <div className="flex basis-20 flex-col w-full justify-end px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_smart_title')}</h2>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-end justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_smart_desc_1')}</p>
                            </div>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_smart_desc_2')}</p>
                            </div>
                        </div>

                        <div className="flex flex-[0.5] w-full items-center justify-center px-2">
                            <Link onClick={() => sessionStorage.setItem("lastSection", "smart")} to="/estagio" className="flex justify-center items-center bg-gray-800 rounded-xl px-4 py-2">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
                            </Link>
                        </div>
                        
                        <div className="flex basis-25 w-full items-center justify-center">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("workshop");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>

                    </div>
                </div>

                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("workshop")}} id="workshop">

                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={arm} alt="Robotic Arm" className="h-full w-full object-cover opacity-10 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">

                        <div className="flex basis-20 flex-col w-full justify-end px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_workshop_title')}</h2>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-end justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_workshop_desc_1')}</p>
                            </div>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_workshop_desc_2')}</p>
                            </div>
                        </div>

                        <div className="flex flex-[0.5] w-full items-center justify-center px-2">
                            <Link onClick={() => sessionStorage.setItem("lastSection", "workshop")} to="/oficinas" className="flex justify-center items-center bg-gray-800 rounded-xl px-4 py-2">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
                            </Link>
                        </div>
                        
                        <div className="flex basis-25 w-full items-center justify-center">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("systems");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>
                    </div>

                </div>
                
                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("systems")}} id="systems">

                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={laptop} alt="Laptop" className="h-full w-full object-cover opacity-10 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">

                        <div className="flex basis-20 flex-col w-full justify-end px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_systems_title')}</h2>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-end justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_systems_desc_1')}</p>
                            </div>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_systems_desc_2')}</p>
                            </div>
                        </div>

                        <div className="flex flex-[0.5] w-full items-center justify-center px-2">
                            <Link onClick={() => sessionStorage.setItem("lastSection", "systems")} to="/engenharia-sistemas" className="flex justify-center items-center bg-gray-800 rounded-xl px-4 py-2">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
                            </Link>
                        </div>
                        
                        <div className="flex basis-25 w-full items-center justify-center">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("tcc");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>
                    </div>

                </div>

                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("tcc")}} id="tcc">

                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={irrigation} alt="Irrigation" className="h-full w-full object-cover opacity-10 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">

                        <div className="flex basis-20 flex-col w-full justify-end px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_tcc_title')}</h2>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-end justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_tcc_desc_1')}</p>
                            </div>
                        </div>

                        <div className="flex flex-1 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_tcc_desc_2')}</p>
                            </div>
                        </div>

                        <div className="flex flex-[0.5] w-full items-center justify-center px-2">
                            <Link onClick={() => sessionStorage.setItem("lastSection", "tcc")} to="/tcc" className="flex justify-center items-center bg-gray-800 rounded-xl px-4 py-2">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
                            </Link>
                        </div>
                        
                        <div className="flex basis-25 w-full items-center justify-center">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("certif");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>
                    </div>

                </div>

                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("certif")}} id="certif">

                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={certificate} alt="Certificate" className="h-full w-full object-cover opacity-10 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">

                        <div className="flex basis-20 flex-col w-full justify-end px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center text-shadow-md text-white">{t('main_certif_title')}</h2>
                        </div>

                        <div className="flex flex-2 w-full justify-center px-5 md:px-12 lg:px-25 ">
                            <div className="flex flex-1 items-center justify-center">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-center text-white">{t('main_certif_desc')}</p>
                            </div>
                        </div>

                        <div className="flex flex-[0.5] w-full items-center justify-center px-2">
                            <Link onClick={() => sessionStorage.setItem("lastSection", "certif")} to="/certificados" className="flex justify-center items-center bg-gray-800 rounded-xl px-4 py-2">
                                <p className="text-[14px] md:text-[20px] lg:text-[25px] text-white font-bold text-center">{t('btn_know_more')}</p>
                            </Link>
                        </div>
                        
                        <div className="flex basis-25 w-full items-center justify-center">
                            <HiChevronDoubleDown color={'white'} className="w-8 h-8 md:w-11 md:h-11 lg:w-15 lg:h-15 animate-pulse hover:cursor-pointer" 
                                onClick={() => {
                                    const element = document.getElementById("other");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth",block: "center" });
                                }}}/>
                        </div>
                    </div>

                </div>

                <div className="snap-center w-full basis-[100%] flex-shrink-0 min-w-80 min-h-110 md:min-h-130 lg:min-h-160" style={{backgroundColor: colors.get("other")}} id="other">

                    <div className="absolute w-full h-full min-w-80 min-h-110 md:min-h-130 lg:min-h-160">
                        <img src={last} alt="Tiles" className="h-full w-full object-cover opacity-30 grayscale"/>
                    </div>

                    <div className="absolute w-full h-full flex flex-col min-w-80 min-h-110 md:min-h-130 lg:min-h-160">

                        <div className="flex flex-1 flex-col w-full justify-center px-5 md:px-12 lg:px-20 mt-7">
                            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-center text-shadow-md text-white">{t('main_thanks_title')}</h2>
                        </div>
                    </div>

                </div>

            </div>
    </main>
  );
}
