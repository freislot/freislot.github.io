import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="app">
          <div class="wrapper">
            <h1>Тестовое задание #3</h1>
            <a class="task-link" href="https://drive.google.com/file/d/1y_dllM8yuWGTlEsqL_4zbVEexbJgelwt/view"
              target="_blank">Описание задания</a>
            <Main />
            <NextScript />
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="716" height="508" viewBox="0 0 716 508" fill="none">
            <g opacity="0.4" filter="url(#filter0_f_741_22000)">
              <circle cx="90.5" cy="625.5" r="325.5" fill="#1e60fc" />
            </g>
            <defs>
              <filter id="filter0_f_741_22000" x="-535" y="0" width="1251" height="1251" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_741_22000" />
              </filter>
            </defs>
          </svg>
        </div>
      </body>
    </Html>
  );
}
