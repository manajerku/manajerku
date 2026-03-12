"use client";

import { useState } from "react";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { faqs } from "@/data/Faq";

function AccordionItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-4 border-black -mt-1 first:mt-0">
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-white hover:bg-(--color-accent) transition-colors duration-150 cursor-pointer">
        <span className="font-heading text-base uppercase text-left">
          {faq.question}
        </span>
        <span
          className="font-heading text-2xl shrink-0 leading-none transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
          +
        </span>
      </button>

      {/* Answer - grid trick */}
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <div className="px-6 py-5 bg-(--color-accent) border-t-4 border-black">
            <p className="font-body text-base leading-relaxed text-black">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="border-t-4 border-black bg-(--color-primary) px-6 md:px-16 py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <Badge>FAQ</Badge>
          <Heading level="h2" isInverse>
            Pertanyaan Yang Sering Ditanya
          </Heading>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
