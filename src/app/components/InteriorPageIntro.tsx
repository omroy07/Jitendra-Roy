import React from 'react';

export default function InteriorPageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-primary py-16 text-white sm:py-20">
      <div className="site-container">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">{description}</p>
      </div>
    </section>
  );
}
