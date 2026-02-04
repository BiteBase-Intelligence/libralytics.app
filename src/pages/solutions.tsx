import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Solutions = () => {
  const { t } = useTranslation('solutions');

  const features = [
    {
      title: t('leadGenTitle'),
      desc: t('leadGenDesc'),
      icon: (
        <img src="/images/feature1.svg" alt="Lead Gen" className="h-16 w-16" />
      ),
    },
    {
      title: t('smartPosTitle'),
      desc: t('smartPosDesc'),
      icon: (
        <img src="/images/feature2.svg" alt="Smart POS" className="h-16 w-16" />
      ),
    },
    {
      title: t('agentTitle'),
      desc: t('agentDesc'),
      icon: (
        <img
          src="/images/feature3.svg"
          alt="Agentic AI"
          className="h-16 w-16"
        />
      ),
    },
    {
      title: t('customTitle'),
      desc: t('customDesc'),
      icon: (
        <img
          src="/images/feature4.svg"
          alt="Custom Solutions"
          className="h-16 w-16"
        />
      ),
    },
    {
      title: t('libotTitle'),
      desc: t('libotDesc'),
      icon: (
        <img
          src="/images/logo_libot.jpg"
          alt="LIBOT Dashboard"
          className="h-16 w-auto object-contain"
        />
      ),
      link: 'https://libot-th.vercel.app/',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('title')} - Libralytics</title>
        <meta name="description" content={t('subTitle') as string} />
      </Head>
      <Header />

      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 py-12 md:px-10">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              {t('title')}
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              {t('subTitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  {feature.desc}
                </p>
                {(feature as any).link && (
                  <a
                    href={(feature as any).link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
                  >
                    View Dashboard <span className="ml-2">&rarr;</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Implementation Methodology */}
          <div className="my-20 border-y border-gray-100 py-12">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Our Approach
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 font-bold text-indigo-600">
                  1
                </div>
                <h3 className="mb-2 font-bold">Consultation</h3>
                <p className="text-sm text-gray-600">
                  We analyze your current data stack and identify value gaps.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 font-bold text-indigo-600">
                  2
                </div>
                <h3 className="mb-2 font-bold">Integration</h3>
                <p className="text-sm text-gray-600">
                  Seamless connection via API or secure batch upload.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 font-bold text-indigo-600">
                  3
                </div>
                <h3 className="mb-2 font-bold">Deployment</h3>
                <p className="text-sm text-gray-600">
                  Agents go live, monitoring and optimizing in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative mt-20 overflow-hidden rounded-3xl bg-indigo-600 p-10 text-center text-white shadow-xl md:p-16">
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                {t('ctaTitle')}
              </h2>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-white py-3 px-8 font-bold text-indigo-600 shadow-md transition-colors hover:bg-gray-100"
              >
                {t('ctaButton')}
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 -mt-10 -ml-10 h-40 w-40 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-0 right-0 -mb-10 -mr-10 h-40 w-40 rounded-full bg-white opacity-10"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
