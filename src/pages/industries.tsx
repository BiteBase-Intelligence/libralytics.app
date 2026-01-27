import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Industries = () => {
  // const { t } = useTranslation('common'); // Using common for now to save time on specific locales unless needed

  const industries = [
    {
      name: 'Food & Restaurant (BiteBase)',
      icon: <img src="/images/usecase1.svg" alt="Food" className="h-16 w-16" />,
      desc: 'Optimize menus and inventory with AI.',
    },
    {
      name: 'Retail & E-commerce',
      icon: (
        <img src="/images/usecase2.svg" alt="Retail" className="h-16 w-16" />
      ),
      desc: 'Predict trends and personalize customer experiences.',
    },
    {
      name: 'Property & Investment',
      icon: (
        <img src="/images/usecase3.svg" alt="Property" className="h-16 w-16" />
      ),
      desc: 'Analyze location data for smarter investments.',
    },
    {
      name: 'Finance & Procurement',
      icon: (
        <img src="/images/usecase4.svg" alt="Finance" className="h-16 w-16" />
      ),
      desc: 'Automate risk assessment and procurement.',
    },
    {
      name: 'Healthcare & Public Sector',
      icon: (
        <img
          src="/images/usecase5.svg"
          alt="Healthcare"
          className="h-16 w-16"
        />
      ),
      desc: 'Enhance service delivery with data insights.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Industries - Libralytics</title>
        <meta name="description" content="AI Solutions for every industry." />
      </Head>
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 py-12 md:px-10">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600">
              Tailored AI solutions for your specific sector.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{ind.icon}</div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {ind.name}
                </h3>
                <p className="text-gray-600">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
