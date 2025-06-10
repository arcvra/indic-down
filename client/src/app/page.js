import { ActionButton } from "@/features/actionButtons/ActionButton";
import { fetchTypes } from "@/services/types";

export default async function Home() {
  const data = await fetchTypes();

  return (
    <main>
      <ActionButton data={data} />
    </main>
  );
}
