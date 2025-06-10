import { ActionButton } from "@/features/actionButtons/ActionButton";
import { LogsTable } from "@/features/logTable/LogsTable";
import { fetchTypes } from "@/services/types";

export default async function Home() {
  const data = await fetchTypes();

  return (
    <main>
      <ActionButton data={data} />
      <LogsTable />
    </main>
  );
}
