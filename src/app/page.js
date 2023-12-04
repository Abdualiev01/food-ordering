import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl  mx-auto mt-4 flex flex-col gap-4">
          <p>
            Magna velit nostrud incididunt in do anim quis irure elit nostrud
            anim. Nisi culpa tempor et est aliqua do nulla aute enim ut proident
            mollit. Anim ad officia voluptate est amet commodo ad magna dolor
            sit cillum laborum consectetur esse.
          </p>
          <p>
            Nisi culpa tempor et est aliqua do nulla aute enim ut proident
            mollit. Anim ad officia voluptate est amet commodo ad magna dolor
            sit cillum laborum consectetur esse.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+48577561130"
          >
            +48 577 561 130
          </a>
        </div>
      </section>
    </>
  );
}
