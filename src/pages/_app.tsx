import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className="w-100 p-3 mb-4 space-x-2">
        <a href="/">
          <span className="m-0 hover:bg-gray-100 p-2 text-md text-black rounded inline-block">
            Home
          </span>
        </a>
        <a href="/our-story">
          <span className="m-0 hover:bg-gray-100 p-2 text-md text-black rounded inline-block">
            Our Story
          </span>
        </a>
        <a href="/our-food">
          <span className="m-0 hover:bg-gray-100 p-2 text-md text-black rounded inline-block">
            Our Food
          </span>
        </a>
        <a href="/recipes">
          <span className="m-0 hover:bg-gray-100 p-2 text-md text-black rounded inline-block">
            Recipes
          </span>
        </a>
        <a href="/contact">
          <span className="m-0 hover:bg-gray-100 p-2 text-md text-black rounded inline-block">
            Contact Us
          </span>
        </a>
      </nav>
      <div className="mx-1/2">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
