import { useState } from 'react';
import Items from './Items';
export default function PackingList({
  items,
  ondeleteItems,
  ontoggle,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => (
          <Items
            item={item}
            ondeleteItems={ondeleteItems}
            ontoggle={ontoggle}
            key={item.id}
          />
        ))}
      </ul>
      <div className='actions'>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value='input'>sort by input</option>
          <option value='description'>sort by description</option>
          <option value='packed'>sort by packed</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
