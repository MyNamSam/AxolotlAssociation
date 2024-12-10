import React from "react";

export default function About() {
  return (
    <div className="bg-slate-200">
      <h2 className="text-2xl font-semibold ml-1">About Axolotl Association</h2>
      <section>
        <h3 className="text-xl underline ml-1">Introduction</h3>
        <p className="text-gray-800 mb-2">
          Axolotl Association&apos;s is a website dedicated to the conservation and
          education about Axolotls. Originally located in lakes that were
          indigenous to Mexico City, these charming and interesting amphibians
          have lost most of their natural environment as a result of Spanish
          immigrants emptying these lakes following the Aztec Empire&apos;s invasion,
          leaving them critically endangered.
        </p>
      </section>
      <section>
        <h3 className="text-xl underline ml-1">Our Mission</h3>
        <p className="text-gray-800 mb-2">
          Our goal as Axolotl Association is to preserve, protect, and educate
          people about these remarkable animals. We aim to raise awareness, aid
          in conservation initiatives, and encourage ethical axolotl care for
          both researchers and fans.
        </p>
      </section>
      <section>
        <h3 className="text-xl underline ml-1">What We Do</h3>
        <ul className="text-gray-800 mb-2">
          <li>
            <strong>- Education:</strong> We educate people about axolotl
            conservation and care through events, webinars, and seminars.
          </li>
          <li>
            <strong>- Conservation:</strong> Collaborating with groups to save
            Mexico&apos;s axolotls&apos; native habitats.
          </li>
          <li>
            <strong>- Research Support:</strong> Supplying funds and resources
            for research on the ecological requirements and regenerative
            capacities of axolotls.
          </li>
          <li>
            <strong>- Community Building:</strong> Establishing a network of
            axolotl supporters to exchange information and insights.
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl underline ml-1">How Can You Help</h3>
        <p className="text-gray-800">
          We need your help in protecting axolotls! Whether it&apos;s volunteering,
          making a donation, or raising awareness, every action counts.
        </p>
      </section>
    </div>
  );
}
