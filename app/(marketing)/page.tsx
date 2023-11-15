import { Button } from "@/components/ui/button";
import Headings from "./_components/heading";
import Heros from "./_components/heroes";
import Footer from "./_components/footer";
const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Headings />
        <Heros />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
