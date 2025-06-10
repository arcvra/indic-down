import { ButtonsSection } from "@/features/actionButtons/ButtonsSection";
import { LogsTable } from "@/features/logTable/LogsTable";

export default function Home() {
  return (
    <main className="grid grid-rows-2 md:px-20 lg:px-40">
      <ButtonsSection />
      <LogsTable />
    </main>
  );
}
