import ItemList from "./item-list";
import items from "./items.json";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold  mx-auto w-fit mb-4 ">Shopping List</h1>
      <ItemList items={items} />
    </main>
  );
}
