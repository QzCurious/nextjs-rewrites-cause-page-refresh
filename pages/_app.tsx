import type { AppProps } from "next/app";
import "@/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="text-xl font-bold text-[#a855f7]">Pages router</div>
      <Component {...pageProps} />
    </div>
  );
}
