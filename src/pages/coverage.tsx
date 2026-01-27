import Head from 'next/head';

import CoverageMap from '@/components/CoverageMap';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Coverage = () => {
  // const { t } = useTranslation('common');

  const countries = [
    {
      name: 'Thailand',
      code: 'th',
      status: 'Primary Market',
      type: 'Full Coverage',
    },
    {
      name: 'Singapore',
      code: 'sg',
      status: 'Active Node',
      type: 'Enterprise Data',
    },
    {
      name: 'Japan',
      code: 'jp',
      status: 'Active Node',
      type: 'Consumer Insights',
    },
    {
      name: 'Taiwan',
      code: 'tw',
      status: 'Active Node',
      type: 'Market Trends',
    },
    {
      name: 'Philippines',
      code: 'ph',
      status: 'Emerging',
      type: 'Growth Data',
    },
    {
      name: 'Malaysia',
      code: 'my',
      status: 'Active Node',
      type: 'Full Coverage',
    },
    {
      name: 'Vietnam',
      code: 'vn',
      status: 'High Growth',
      type: 'Consumer Data',
    },
    { name: 'Cambodia', code: 'kh', status: 'Emerging', type: 'Market Entry' },
    {
      name: 'Bangladesh',
      code: 'bd',
      status: 'Emerging',
      type: 'Sector Specific',
    },
    {
      name: 'Pakistan',
      code: 'pk',
      status: 'Emerging',
      type: 'Sector Specific',
    },
    {
      name: 'Hong Kong',
      code: 'hk',
      status: 'Active Node',
      type: 'Financial Data',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>APEC Coverage - Libralytics</title>
        <meta
          name="description"
          content="Our data and AI services cover key markets across APEC."
        />
      </Head>
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 py-12 md:px-10">
          <div className="mb-16 text-center">
            <span className="font-bold uppercase tracking-wider text-indigo-600">
              Regional Presence
            </span>
            <h1 className="mt-2 mb-4 text-4xl font-bold text-gray-900">
              Coverage (APEC)
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              We provide localized market intelligence across key Asian markets,
              ensuring relevance and compliance.
            </p>
          </div>

          {/* Interactive World Map */}
          <div className="mb-16 w-full">
            <CoverageMap />
          </div>

          {/* Country List Grid */}
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">
                    {country.name}
                  </span>
                  <span className="rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium uppercase text-indigo-700">
                    {country.code}
                  </span>
                </div>
                <div className="mt-2 text-xs">
                  <span className="block font-medium text-indigo-600">
                    {country.status}
                  </span>
                  <span className="text-gray-500">{country.type}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Info */}
          <div className="mt-20 grid gap-8 text-center md:grid-cols-3">
            <div className="p-6">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Compliance First
              </h3>
              <p className="text-gray-600">
                Strict adherence to PDPA (Thailand) and GDPR standards for data
                protection.
              </p>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Ethical Sourcing
              </h3>
              <p className="text-gray-600">
                Data collected via public APIs, partnerships, and consensual
                channels only.
              </p>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Data Freshness
              </h3>
              <p className="text-gray-600">
                Pipelines update daily to ensure decision-making is based on
                current reality.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Coverage;
