'use client';

import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

export default function BlogSection() {
  return (
    <article className="grid grid-cols-8 gap-2 bg-lightBlueBase px-6 py-32 lg:grid-cols-12 lg:gap-4">
      <section className="col-span-full flex flex-row justify-between">
        <SectionTitle title="Blog" />
        <Button text="View all" variant="text" onClick={() => {}} />
      </section>
    </article>
  );
}
