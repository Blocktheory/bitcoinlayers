import Link from "next/link";
import React from "react";

const FaqPage: React.FC = () => {
  function FAQItem({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) {
    return (
      <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
        <div className="flex items-center gap-3">
          <div className="rotate-180 flex items-center justify-center w-6 h-6">
            <div className="relative w-6 h-6 rotate-180" />{ /** TODO add toggle for open/close */}
          </div>
          <div className="text-3xl font-light text-zinc-800 leading-9">
            {question}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 w-full">
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <div className="text-base font-normal text-slate-500 leading-normal">
              {answer}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16">
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex justify-start items-center gap-8 w-full">
          <div className="flex-grow flex items-center gap-[30px] h-[156px]">
            <div className="special_header flex-grow h-20">
              Frequently Asked Questions
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-12 w-full rounded-md">
            <div className="flex flex-col gap-8 w-full">
              <FAQItem
                question="What is the Bitcoin Layers site?"
                answer="Bitcoin Layers is an educational tool dedicated to Bitcoin scaling. Currently, we are focusing on a module that outlines the risks associated with various scaling protocols that support Bitcoin and BTC the asset. We are also planning on building modules related to bridges, scaling infrastructure and opcodes that can support new variations of L2s."
              />
              <FAQItem
                question="What is a Bitcoin Layer?"
                answer="We use the term &quot;Bitcoin Layer&quot; to describle protocols that claim to be Bitcoin Layer 2s. There are many definitions that exist for the term &quot;Layer 2&quot;, but the two primary ones are protocols that enable unilateral exit, and/or protocols that add more functionality to BTC the asset and inherit security from Bitcoin. We use the term &quot;Bitcoin Layer&quot; as an agnostic term to describe Layer 2s, sidechains and more. We do not define protcols as Layer 2s, as any offchain scaling protocol presents a different set of trust assumptions to users. We analyze these protocols against a generalized, opinionated framework that we developed to show users the relevant trust assumptions for each system."
              />
              <FAQItem
                question="Are all Bitcoin Layers &quot;L2s&quot;?"
                answer="The overwhelming majority of newer Bitcoin &quot;Layer 2s&quot; are not Layer 2s in the classical defition. Bitcoin Layers is a broad term we use to cover offchain scaling protocols. People typically define L2s as protocols that take transaction execution offchain, but inherit security from its parent blockchain. Most consider unilateral exit as a primary criteria for being a “true L2”, which means that users retain self-custody of their BTC and can exit the L2 unilaterally whenever they choose."
              />
              <FAQItem
                question="Why are newer Bitcoin &quot;L2s&quot; receiving so much attention?"
                answer="Lightning is in production today. Other proposed scaling designs, like BitVM rollups, would rely on a 1-N trust assumption for the custody of user funds."
              />
              <FAQItem
                question="Why are newer Bitcoin &quot;L2s&quot; receiving so much attention?"
                answer="Bitcoin L2s are receiving attention for a number of reasons. Ordinals brought in a new wave of Bitcoin users, BitVM opened up a new design space for scaling protocols, and numerous stakeholders in the Bitcoin community believe that new types of scaling protocols should be implemented and experimented with. However, the majority of these protocols are launching with &quot;progressive decentralization&quot; on their roadmap. This means that the protocols will launch as a federated sidechain, with hopes of adding Bitcoin-native security over time. Our site analyzes protocols against their current implementation, versus future roadmaps."
              />
              <FAQItem
                question="What are modular Bitcoin &quot;L2s&quot;?"
                answer="A number of new projects are launching with modular scaling designs in mind. This means that each aspect of the transaction lifecycle would be managed by an indepedent actor. Roles such as transaction ordering, data availability and settlement would be distributed across a number of systems. These parties can range from single servers, federated commmittees and permissionless consensus protocols, varying in trust assumptions."
              />
              <FAQItem
                question="Are these newer &quot;L2s&quot; similar to projects in Ethereum?"
                answer="A large percentage of these projects are forking popular Ethereum L2s and try to inherit similar designs. The difference between these Bitcoin chains, and L2s on Ethereum, is the trust assumptions related to the two-way peg and security inherited from the base layer. Current Bitcoin &quot;L2&quot; implementations largely do not inherit any security from the Bitcoin network or have a trust-minimized two-way peg."
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FaqPage;
