interface BlogDetailContentProps {
  slug: string;
}

const BlogDetailContent = ({ slug }: BlogDetailContentProps) => {
  return (
    <article className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Design
            </span>
            <span className="text-gray-400 text-sm">
              Chris Black • October 8, 2023
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
            AI Transforming Lives for the Better
          </h1>
        </div>

        <div className="mb-12">
          <img 
            src="https://picsum.photos/id/1515/1000/500"
            alt="Team meeting with screens"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            The CFO is ascending. Earlier this year, Fortune reported that in the first half of 2023, 8.1% of CFOs at Fortune 500 and S&P 500 companies were promoted to CEO up from 5.4% a decade earlier. The jump reflects how business success and financial agility have become inseparable.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            This week we're excited to announce new features that help businesses grow revenue, streamline the back office, and improve insights and decision-making.
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">
            1. More visibility into Metafi-originated emails
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Revenue recovery is a key part of how Stripe Billing maximizes revenue. We use machine learning to retry failed recurring payments at the optimal time, based on hundreds of dynamic signals. Our Smart Retries algorithm continuously gets better, and we've improved the recovery rate by 38% in 2023.
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">
            2. New Revenue Recognition features
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            One of the best ways for businesses to grow revenue is to enter new markets, but they're often stymied by the tax complexity that comes with it. We built Stripe Tax to solve that problem. Businesses can sell cross-border and tax takes care of tax collection for them, automatically. Now, tax just got better, with support for 16 new countries (bringing the total number of countries supported to 50, including all of the EU).
          </p>

          <div className="mb-12">
            <img 
              src="https://picsum.photos/id/1600/1000/600"
              alt="FlexPay Dashboard"
              className="w-full rounded-2xl"
            />
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">
            3. Deeper Salesforce integration
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Revenue recovery is a key part of how Stripe Billing maximizes revenue. We use machine learning to retry failed recurring payments at the optimal time, based on hundreds of dynamic signals. Our Smart Retries algorithm continuously gets better, and we've improved the recovery rate by 38% in 2023.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Deliveroo has recovered more than $100 million in revenue with Billing's revenue recovery features. "The work Stripe has done to improve payment success rates, from the use of Stripe Billing to rapidly enabling Deliveroo Plus, makes it clear why Stripe is embedded in some of our largest initiatives," said Will Shu, cofounder and CEO of Deliveroo.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailContent; 