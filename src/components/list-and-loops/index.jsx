const SimpleList = () => {
  return (
    <div>
      <ol>
        <li>Books</li>
        <li>Pens</li>
        <li>Sharpner</li>
        <li>Pencile</li>
      </ol>
    </div>
  );
};

const SimpleListWithLoop = () => {
  const list = [
    {
      id: 1,
      name: "Books",
    },
    {
      id: 2,
      name: "Pens",
    },
  ];

  const getItems = () => {
    return list.map((item, index) => <li key={item.id}>{item.name}</li>);
  };
  
  return (
    <div>
      <ol>{getItems()}</ol>
    </div>
  );
};

export const ListAndLoopExample = () => {
  return (
    <div>
      <SimpleListWithLoop></SimpleListWithLoop>
    </div>
  );
};
