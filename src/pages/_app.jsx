
import { useState } from 'react';
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }) {
  // Next.jsでのpage間での状態を共通化するリフトアップ
  // 講座#16で説明、確認して、感想、その他で使ってみる
  
  
  return <Component {...pageProps} />
}

export default MyApp
