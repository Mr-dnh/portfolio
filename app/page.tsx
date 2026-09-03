import { IntroReveal } from "@/components/intro/IntroReveal";
import { InfiniteScroll } from "@/components/scroll/InfiniteScroll";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Experiment } from "@/components/experiment/Experiment";
import { Contact } from "@/components/contact/Contact";
import { End } from "@/components/end/End";

export default function Home() {
  return (
    <>
      <IntroReveal />
      <InfiniteScroll>
        <main className="portfolio-shell">
          <Hero />
          <About />
          <Projects />
          <Experiment />
          <Contact />
          <End />
        </main>
      </InfiniteScroll>
    </>
  );
}
