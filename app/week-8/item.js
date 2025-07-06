export default function Item({ id, name, quantity, category, onSelect }) {
  return (
    <div
      className="shadow-md border-2 rounded-2xl mb-4 w-60
    bg-white hover:bg-blue-100 cursor-pointer transition-colors duration-200"
      onClick={onSelect}
    >
      <ul className="p-2  rounded">
        <li className="text-lg font-semibold text-gray-800 text-shadow-lg">Name: {name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </div>
  );
}
