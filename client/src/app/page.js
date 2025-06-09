import { ActionButton } from "@/features/actionButtons/ActionButton";
import { fetchTypes } from "@/utils/types";

export default async function Home() {
  const data = await fetchTypes();

  return (
    <main>
      <ActionButton data={data} />
    </main>
  );
}
