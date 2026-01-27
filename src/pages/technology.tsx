import Head from 'next/head';
// import { useTranslation } from 'next-i18next';
import { useTranslation } from 'react-i18next';

import AgentAnimation from '@/components/AgentAnimation';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Technology = () => {
  const { t } = useTranslation('technology');

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{t('title')} - Libralytics</title>
        <meta name="description" content={t('subTitle') as string} />
      </Head>
      <Header />

      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 py-12 md:px-10">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-indigo-600">
              Infrastructure
            </span>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              {t('title')}
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              {t('subTitle')}
            </p>
          </div>

          {/* Pipeline Visualization */}
          <div className="relative mb-16 overflow-hidden rounded-3xl bg-indigo-900 p-8 text-white shadow-2xl md:p-12">
            <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  {t('pipelineTitle')}
                </h2>
                <p className="mb-6 text-lg text-indigo-200">
                  {t('pipelineDesc')}
                </p>
                <ul className="space-y-3">
                  {(t('stackItems', { returnObjects: true }) as string[]).map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 shrink-0 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* Animated Agent Visual */}
              <div className="w-full">
                <AgentAnimation />
                <p className="mt-4 text-center text-xs text-indigo-300 opacity-60">
                  Powered by Model Context Protocol (MCP) Architecture
                </p>
              </div>
            </div>
          </div>

          {/* Data Sources Grid */}
          <div className="grid gap-8 text-center text-gray-900 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 p-6">
              <img
                src="/images/source_food.svg"
                alt="Cuisine"
                className="mb-4 h-20 w-20"
              />
              <h3 className="mb-2 font-bold text-gray-900">Cuisine & Food</h3>
              <p className="text-sm text-gray-500">
                Menus, reviews, sales data
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 p-6">
              <img
                src="/images/source_geo.svg"
                alt="Geo"
                className="mb-4 h-20 w-20"
              />
              <h3 className="mb-2 font-bold text-gray-900">
                Geo & Demographics
              </h3>
              <p className="text-sm text-gray-500">
                Population, traffic, weather
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 p-6">
              <img
                src="/images/source_digital.svg"
                alt="Digital"
                className="mb-4 h-20 w-20"
              />
              <h3 className="mb-2 font-bold text-gray-900">
                Digital Footprint
              </h3>
              <p className="text-sm text-gray-500">
                Social trends, E-commerce, Sentiment
              </p>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="border-t border-gray-100 bg-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Enterprise-Grade Security
            </h2>
            <div className="mx-auto grid max-w-4xl gap-8 text-left md:grid-cols-3">
              <div>
                <h4 className="mb-2 font-bold text-indigo-600">
                  End-to-End Encryption
                </h4>
                <p className="text-sm text-gray-600">
                  All data is encrypted in transit (TLS 1.3) and at rest
                  (AES-256) to ensure maximum privacy.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-indigo-600">
                  Access Control
                </h4>
                <p className="text-sm text-gray-600">
                  Role-based access control (RBAC) ensures your team sees only
                  what they need to see.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-indigo-600">
                  Data Sovereignty
                </h4>
                <p className="text-sm text-gray-600">
                  Local node deployment options available to meet specific
                  country regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
