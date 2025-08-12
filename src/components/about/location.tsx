import { Globe } from "../globe";
import { Card } from "../ui/card";

export const Location = () => {
  return (
    <Card className="lg:col-span-1 col-span-2 rounded-xl h-[15rem] relative overflow-hidden p-10">
      <h3 className="font-bold text-muted-foreground text-center text-xl md:text-base">
        Indonesia, Bangkalan
      </h3>
      <Globe className="top-20" />
    </Card>
  );
};
