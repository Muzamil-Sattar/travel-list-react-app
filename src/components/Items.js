export default function Items({ item, ondeleteItems, ontoggle }) {
  return (
    <li>
      <input
        className='bg-orange-400'
        type='checkbox'
        onChange={() => ontoggle(item.id)}
      ></input>
      <span
        style={item.packed ? { textDecoration: 'line-through' } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => ondeleteItems(item.id)}>❌</button>
    </li>
  );
}
