const Constants = {
  name: 'Libralytic',
  webname: 'libralytics',
  tld: '.app',
  mobile: '+66 1234567890',
  whatsapp: 'https://api.whatsapp.com/send/?phone=661234567890',
  sales: 'mailto:libralytics.ext@gmail.com',
};

export default Constants;

export const SEOs = {
  website: `https://${Constants.webname}${Constants.tld}`,
  seoTitle: `${Constants.name} — Restaurant & Food Delivery Intelligence`,
  seoDesciption: `Libralytic provides intelligence data for GrabFood, foodpanda, ShopeeFood, and Lineman in Thailand. Get a competitive advantage with our data analytics and AI insights.`,
  seoKeywords:
    'restaurant intelligence, food delivery data, GrabFood analytics, foodpanda insights, ShopeeFood Thailand data, Lineman delivery data, competitive intelligence food delivery, data analytics thailand, Libralytic',
};

export const FAQs = [
  {
    i: 1,
    q: `What is ${Constants.name}?`,
    a: `${Constants.name} provides restaurant and food delivery intelligence data. We help businesses gain competitive advantages by analyzing platform data from GrabFood, foodpanda, ShopeeFood, and Lineman.`,
  },
  {
    i: 2,
    q: 'Where can I find it?',
    a: `Available on WhatsApp currently, send hi to ${Constants.mobile}.`,
  },
  {
    i: 3,
    q: 'How does it work?',
    a: `${Constants.name} uses GPT-3 (davinci/curie) and plans to expand to
    more NLP models available in the market.`,
  },
  {
    i: 4,
    q: 'What to avoid typing?',
    a: `Due to WhatsApp policies, ${Constants.name} will not accept words associated with illegal or offensive content. For more details, please refer to our usage policy.`,
  },
  {
    i: 5,
    q: 'How much does this cost?',
    a: 'We offer 10 free trial image generations, after which we have a pocket-friendly unlimited plan for just $10 per month.',
  },
  {
    i: 6,
    q: 'How to reach you?',
    a: `You can send your queries to ${Constants.sales} to clear your doubts.`,
  },
];
