import Head from 'next/head';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
// import { useTranslation } from 'next-i18next';
import { useTranslation } from 'react-i18next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
// Assuming Images.tsx helps with loading images or valid paths

const About = () => {
  const { t } = useTranslation('about');

  return (
    <div className="bg-white">
      <Head>
        <title>{t('title')} - Libralytics</title>
        <meta name="description" content={t('missionDesc') as string} />
      </Head>
      <Header />

      <main className="pt-24 pb-16">
        {/* Mission & Vision Section */}
        <section className="container mx-auto px-4 py-12 md:px-10">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              {t('title')}
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              {t('missionDesc')}
            </p>
          </div>

          <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
            {/* Left Column: Origin + Image */}
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-indigo-600">
                  {t('nameOriginTitle')}
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {t('nameOriginSubtitle1')}
                    </p>
                    <p className="text-gray-600">{t('nameOriginSubtitle2')}</p>
                  </div>
                  <blockquote className="rounded-r-lg border-l-4 border-indigo-500 bg-white py-2 pl-4 text-xl italic text-gray-700">
                    &quot;{t('nameOriginSubtitle2')}&quot;
                  </blockquote>
                  <p className="text-gray-600">{t('nameOriginDesc')}</p>
                </div>
              </div>
              {/* Tech Enthusiasm Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/assets/ceo_tech.jpg"
                  alt="Tech Enthusiasm"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm font-medium text-white">
                    Innovating at the edge of AI Technology
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {t('missionTitle')}
                </h3>
                <p className="text-gray-600">{t('missionDesc')}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {t('visionTitle')}
                </h3>
                <p className="text-gray-600">{t('visionDesc')}</p>
              </div>
              {/* Partners */}
              <div className="flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-gray-900">
                  Strategic Partners
                </h3>
                <div className="flex w-full flex-col items-center gap-8">
                  {/* NIA */}
                  <div className="flex w-full flex-col items-center">
                    <div className="relative mb-2 flex h-20 w-full items-center justify-center">
                      <img
                        src="/assets/nia_logo.jpg"
                        alt="National Innovation Agency"
                        className="h-full object-contain"
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-500">
                      National Innovation Agency (NIA)
                    </p>
                  </div>

                  {/* AIEAT */}
                  <a
                    href="https://aieat.or.th/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full flex-col items-center rounded-lg p-2 transition-colors hover:bg-gray-50"
                  >
                    <div className="relative mb-2 flex h-24 w-full items-center justify-center">
                      <img
                        src="/assets/aieat_logo.png"
                        alt="AIEAT"
                        className="h-full object-contain"
                      />
                    </div>
                    <p className="mb-1 max-w-[250px] text-xs font-bold leading-tight text-gray-800">
                      สมาคมผู้ประกอบการปัญญาประดิษฐ์ประเทศไทย
                    </p>
                    <p className="max-w-[250px] text-[10px] uppercase leading-tight tracking-wide text-gray-500">
                      Artificial Intelligence Entrepreneur Association of
                      Thailand
                    </p>
                  </a>

                  {/* depa */}
                  <a
                    href="https://www.depa.or.th/th/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full flex-col items-center rounded-lg p-2 transition-colors hover:bg-gray-50"
                  >
                    <div className="relative mb-2 flex h-24 w-full items-center justify-center">
                      <img
                        src="/assets/depa_logo.png"
                        alt="depa"
                        className="h-full object-contain"
                      />
                    </div>
                    <p className="mb-1 max-w-[250px] text-xs font-bold leading-tight text-gray-800">
                      สำนักงานส่งเสริมเศรษฐกิจดิจิทัล
                    </p>
                    <p className="max-w-[250px] text-[10px] uppercase leading-tight tracking-wide text-gray-500">
                      Digital Economy Promotion Agency
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                {t('leadershipTitle')}
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                {t('leadershipDesc')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Team Members */}
              {(t('team', { returnObjects: true }) as any[]).map(
                (member, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-indigo-50 shadow-lg">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                          style={{
                            objectPosition: member.position || 'center',
                          }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-indigo-100 text-4xl font-bold text-indigo-500">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <div className="mb-3 font-medium text-indigo-600">
                      {member.role}
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-500">
                      {member.desc}
                    </p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 transition-colors hover:text-[#0077b5]"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
