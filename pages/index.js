import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "tailwindcss/tailwind.css";
// tal-labs'in bellefair font'unu cagirmamiz lazim.
import Link from 'next/link'


<style>
@import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');
</style>


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Websiteme hosgeldiniz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Hakan Can Gunerli 
        </h1>

<div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        heyo, benim adim Hakan Can Gunerli. 
      

</p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      3 senedir eğitim tecrübesi olan 6 senedir yazılım dünyasında bulunan bir mühendislik öğrencisiyim.
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">
 
            <h1 className="title">
  
  <Link href="/direksiyon/hakkimda">
    <a>Hakkimda </a>
  </Link>
 </h1>
              </dt>
            <dd class="mt-2 text-base text-gray-500">
    Is tecrubelerim ve hakkimdaki bilgilere buradan ulasabilirsiniz
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">

            <h1 className="title">
  
  <Link href="https://drive.google.com/drive/folders/1oGVqzsSogTQFBSXsNNQk5X5MIUXGjVvI?usp=sharing">
    <a>CV </a>
  </Link>
</h1>

              
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              CV'me buradan ulasabilirsiniz
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">

            <h1 className="title">
  
  <Link href="/direksiyon/arastirmalar">
    <a>Arastirma raporlarim </a>
  </Link>
</h1>

              
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Pek cok sirkette bulundugum yonetim/liderlik pozisyonlarindan dolayi, startup konularinda kendi gordugum eksiklikleri raporlamaktayim, bu raporlara buradan ulasabilirsiniz.
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 01 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">
             
            <h1 className="title">
  
  <Link href="/direksiyon/tal-labs">
    <a>tal-labs</a>
  </Link>
</h1>


            </dt>


            <dd class="mt-2 text-base text-gray-500">
tal-labs, 6 muhendislik ogrencisinin ortak kurdugu, benim de kuruculuk ve yonetim poziyonuna sahip oldugum bir girisim sirketidir. 




            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</div>

    

        

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
