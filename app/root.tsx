import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { LanguageProvider, useLanguage } from "./LanguageContext";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HiBars3 } from "react-icons/hi2";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
	{
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Elms+Sans:wght@300..700&display=swap",
  },
	{
    rel: "icon",
    href: "/favicon.png", 
    type: "image/png"
  },
];

export const meta = () => {
  const title = "Portfólio | Pedro Guimarães";
  const description = "Engenheiro da Computação e Pesquisador em IA. Descubra meus projetos em Web, Sistemas Embarcados e Machine Learning.";
  const imageUrl = "https://seusite.com/social-preview.png";

  return [
    { title: title },
    { name: "description", content: description },

    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl }, 
    { property: "og:type", content: "website" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
};

function LanguageButton() {
	const { lang, setLang } = useLanguage();

	return (
		<Menu>
			<MenuButton className="flex items-center text-nowrap justify-center h-full md:px-7 lg:px-10 rounded-md hover:cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800">
				<p className="text-center font-bold">{lang === "pt"?"pt-br":"en"}</p>
			</MenuButton>

			<MenuItems anchor="bottom" className="text-center border-1 bg-white dark:bg-gray-800 border border-white rounded-xl">
				<MenuItem>
					<a onClick={() => {setLang('pt');}} className="block data-focus:bg-orange-100 py-2 px-4 cursor-pointer" >
						pt-br
					</a>
				</MenuItem>
				<MenuItem>
					<a onClick={() => {setLang('en');}} className="block data-focus:bg-orange-100 py-2 px-4 cursor-pointer " >
						en
					</a>
				</MenuItem>
			</MenuItems>
		</Menu>  
	);
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<LanguageProvider>
					<header className="flex flex-row h-20 w-full pl-5 md:pl-12 lg:pl-20 shadow-md fixed bg-gray-200 dark:bg-gray-950 top-0 z-10">

						<a onClick={() => sessionStorage.removeItem("lastSection")} href="/" className="flex items-center">
							<h1 className="text-[27px] md:text-[40px] lg:text-[50px] text-nowrap font-bold font-family-sans">Pedro Guimarães</h1>
						</a>

						<div className="flex flex-1 items-center justify-end ">
							<LanguageButton/>			
							<Menu>
								<MenuButton className="items-center justify-center h-full px-2 md:px-7 lg:px-10 rounded-md hover:cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800">
									<HiBars3 className="h-[40px] w-[40px] md:h-[50px] md:w-[50px]" />
								</MenuButton>
								<MenuItems anchor="bottom" className="text-center border-1 bg-white dark:bg-gray-800 border border-white rounded-xl">
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/">
											Início
										</a>
									</MenuItem>
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/sobre-mim">
											Sobre mim
										</a>
									</MenuItem>
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/formacao-academica">
											Formação Acadêmica
										</a>
									</MenuItem>
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/jogos">
											Jogos
										</a>
									</MenuItem>
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/projeto-inesc">
											Projeto P&D Inesc
										</a>
									</MenuItem>
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/estagio">
											Estágio
										</a>
									</MenuItem>
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/oficinas">
											Oficinas de Integração
										</a>
									</MenuItem>	
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/engenharia-sistemas">
											Engenharia de Sistemas
										</a>
									</MenuItem>
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/tcc">
											TCC
										</a>
									</MenuItem>
									<MenuItem>
										<a onClick={() => sessionStorage.removeItem("lastSection")} className="block data-focus:bg-orange-100 py-2 px-4 text-nowrap" href="/certificados">
											Certificados
										</a>
									</MenuItem>
								</MenuItems>
							</Menu>

						</div>

					</header>

					{children}
					<ScrollRestoration />
					<Scripts />
				</LanguageProvider>
			</body>
		</html>
	);
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
