export default function Item({ id, name, quantity, category }) {
  return (
    <div className="shadow-md border-2 rounded-2xl mb-4 w-60">
      <ul className="p-2  rounded">
        <li className="text-lg font-semibold text-gray-800 text-shadow-lg">Name: {name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </div>
  );
}
