// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Insights = () => {
  // const { t } = useTranslation('common');

  const posts = [
    {
      title: 'Maximizing ROI with Agentic Workflows',
      category: 'Strategy',
      date: 'Jan 26, 2026',
      desc: 'Move beyond simple automation. Learn how autonomous agents can plan, execute, and optimize complex business processes to deliver 3x efficiency gains.',
      image: '/images/blog_agentic_roi.png',
    },
    {
      title: 'Hyper-Local Intelligence: Winning in SEA',
      category: 'Market Expansion',
      date: 'Jan 24, 2026',
      desc: 'Southeast Asia is not a monolith. Our deep-dive into granular data for Thailand, Indonesia, and Vietnam reveals the hidden patterns driving consumer behavior.',
      image: '/images/blog_market_intel.png',
    },
    {
      title: 'Ethical AI: Navigating the 2026 Compliance Landscape',
      category: 'Compliance',
      date: 'Jan 22, 2026',
      desc: 'With PDPA and GDPR tightening, understand how to leverage privacy-preserving AI architectures (like Federated Learning) to innovate safely.',
      image: '/images/blog_compliance.png',
    },
    {
      title: 'The Future of Agentic AI in Enterprise',
      category: 'Market Updates',
      date: 'Jan 25, 2026',
      desc: 'From customer support to supply chain logic, we explore the top 5 use cases where Agentic AI is replacing static scripts in the Fortune 500.',
      image: '/images/blog_agentic_roi.png',
    },
    {
      title: 'Data Sovereignty in the Lakehouse Era',
      category: 'Research',
      date: 'Jan 20, 2026',
      desc: 'Best practices for managing enterprise data lakes securely. Why keeping data local is no longer just a legal requirement but a strategic advantage.',
      image: '/images/blog_data_lake.png',
    },
    {
      title: 'Libralytics Launches Thailand Node',
      category: 'Company News',
      date: 'Jan 15, 2026',
      desc: 'We are live in Bangkok! Our new dedicated infrastructure ensures sub-10ms latency for real-time market signals across the Mekong region.',
      image: '/images/blog_th_launch.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Insights - Libralytics</title>
        <meta
          name="description"
          content="Latest news, research, and AI market updates."
        />
      </Head>
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 py-12 md:px-10">
          <div className="mb-12 flex flex-col items-end justify-between border-b border-gray-200 pb-8 md:flex-row">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-gray-900">
                Insights
              </h1>
              <p className="text-xl text-gray-600">
                Strategic Intelligence for the AI Era.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex grow flex-col p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded bg-indigo-50 px-2 py-1 text-xs font-bold uppercase tracking-widest text-indigo-600">
                      {post.category}
                    </span>
                    <span className="font-mono text-xs text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-indigo-600">
                    {post.title}
                  </h3>
                  <p className="mb-4 grow text-sm leading-relaxed text-gray-600">
                    {post.desc}
                  </p>
                  <div className="mt-auto flex items-center border-t border-gray-100 pt-4 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-1">
                    Read Article <span className="ml-2">&rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
