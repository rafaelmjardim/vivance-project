import { AboutStellFrame } from "./_components/aboutSteelFrame";
import { BenefitsSteelFrame } from "./_components/benefitsSteelFrame";
import { Hero } from "./_components/hero";
import { ProjectCatalog } from "./_components/projectCatalog";

export default function App() {
  return (
    <main>
      <Hero />
      <AboutStellFrame />
      <BenefitsSteelFrame />
      <ProjectCatalog />
    </main>
  );
}
