

import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";

const PricingPlans = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 border-t border-neutral-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {PLANS_CONTENT.sectionTitle}
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={childVariants}
              className={`p-8 rounded-xl shadow-lg bg-neutral-950 ${
                plan.popular
                  ? "border border-blue-900/80"
                  : "border border-neutral-800"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-blue-600 text-white text-xs py-1 px-3 rounded-full uppercase">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </div>
              )}

              {/* Plan Title */}
              <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase">
                {plan.name}
              </h3>
             <h4
             className=" text-neutral-400 mb-6">
             {plan.description}
             </h4>

              {/* Plan Price */}
              <p className="text-4xl font-bold mb-6 text-blue-400">
                {plan.price}
              </p>

              {/* Plan Features */}
              <ul className="mb-8 space-y-2 text-neutral-400">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-neutral-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium">
                {PLANS_CONTENT.ctaText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;