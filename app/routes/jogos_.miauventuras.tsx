import {colors} from "./_index";
import { useEffect } from "react"; 
import { useLanguage } from "~/LanguageContext";

export default function Miauventuras() {
	const { t } = useLanguage();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ([32, 37, 38, 39, 40].includes(e.keyCode)) {
				e.preventDefault();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
		const iframe = e.target as HTMLIFrameElement;
		try {
			if (iframe.contentWindow) {
				iframe.contentWindow.addEventListener("keydown", (evt) => {
					if ([32, 37, 38, 39, 40].includes(evt.keyCode)) {
						evt.preventDefault();
					}
				});
				iframe.contentWindow.focus();
			}
		} catch (err) {
			console.error("Erro ao injetar script no iframe:", err);
		}
	};

	return (
		<main className="absolute w-full h-full">
			<div className="absolute top-20 bottom-0 w-full opacity-30" style={{ backgroundColor: colors.get("games") }}></div>

			<div className="absolute top-20 bottom-0 flex w-full overflow-y-auto justify-center">
				<div className="flex flex-col max-w-400 mx-3 md:mx-10 lg:mx-20 w-full">

					<h2 className="mt-10 mb-5 text-[27px] md:text-[38px] lg:text-[46px] font-bold text-center">
						{t('miau_page_title')}
					</h2>

					<p className="text-[16px] md:text-[20px] lg:text-[22px] text-center mb-4">
						{t('miau_page_desc')}
					</p>

					<div
						className="w-full flex-shrink-0 aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-300 mb-6 flex items-center justify-center relative mx-auto"
						style={{ maxWidth: 'min(100%, 120vh)' }}
					>
						<iframe
							src="/games/miauventuras/Project1.html"
							className="w-full h-full border-none"
							title="Miauventuras Web"
							allow="autoplay; fullscreen; payment; focus-without-user-activation"
							loading="lazy"
							onLoad={handleIframeLoad}
						></iframe>
					</div>

					<p className="text-xs text-center text-gray-500 mb-6 -mt-4 italic">
						{t('miau_instr_click')}
					</p>

					<p className="text-xs text-center text-gray-500 mb-6 -mt-4 italic">
						{t('miau_instr_menu')}
					</p>

					<p className="text-xs text-center text-gray-500 mb-6 -mt-4 italic">
						{t('miau_instr_controls')}
					</p>

					<div className="border-t border-gray-300 pt-6 mt-6">
						<p className="text-[16px] md:text-[20px] lg:text-[22px] text-justify mb-6">
							{t('miau_credits_title')}
						</p>

						<div className="mb-5 bg-gray-100 p-3 rounded">
							<p className="text-[16px] md:text-[20px] lg:text-[22px] font-bold">Anna Carolina Ravazzi</p>
							<p className="text-[14px] md:text-[18px] text-gray-700">{t('miau_credits_role')}</p>
							<p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anna-carolina-ravazzi-martins-5bb177213/" className="text-[#2CAE9F] underline">LinkedIn</a></p>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/annaravazzi" className="text-[#2CAE9F] underline">GitHub</a>
						</div>
					</div>

					<p className="text-[16px] md:text-[20px] lg:text-[22px] text-center pb-20 flex-shrink-0">
					</p>

				</div>
			</div>
		</main>
	);

}
