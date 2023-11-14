export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        Start Adding Some Items To Your Packing List 🚀
      </p>
    );
  const numitems = items.length;
  const packedItems = items.filter(items => items.packed).length;
  const percentage = Math.round((packedItems / numitems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You have EveryThing Ready To Go! ✈'
          : `You have ${numitems} items and you have already packed ${packedItems}
        (${percentage}%) of items`}
      </em>
    </footer>
  );
}
