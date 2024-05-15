import { useMemo, useState } from "react";

const UseMemoExampleWithMemo = (props) => {
  const [random, setRandom] = useState(0);

  const [store, setStore] = useState([
    {
      name: "books",
      count: 10,
    },
    {
      name: "pens",
      count: 20,
    },
  ]);

  const total = useMemo(() => {
    return store.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
  }, [store]);

  return (
    <div>
      <div>{random}</div>
      <button onClick={() => setRandom(Math.random())}>
        Random prop generator
      </button>
      <button
        onClick={() =>
          setStore((prvStore) => {
            const newStore = [...prvStore];
            newStore[1].count = 40;
            return newStore;
          })
        }
      >
        Update Store
      </button>

      <h1>Total Count: {total}</h1>
    </div>
  );
};

const UseMemoExampleTwoWithoutMemo = (props) => {
  const [random, setRandom] = useState(0);

  const [store, setStore] = useState([
    {
      name: "books",
      count: 10,
    },
    {
      name: "pens",
      count: 20,
    },
  ]);

  const total = store.reduce((acc, curr) => {
    console.log("callculating............");
    return acc + curr.count;
  }, 0);

  const updateStore = () => {
    const newStore = [...store];
    newStore[1].count = 40;
    setStore(newStore)
  }

  return (
    <div>
      <div> {random}</div>
      <button onClick={() => setRandom(Math.random())}>
        Random state generator
      </button>
      <button
        onClick={() =>
          setStore((prvStore) => {
            const newStore = [...prvStore];
            newStore[1].count = 40;
            return newStore;
          })
        }
      >
        Update Store
      </button>

      <h1>Total Count: {total}</h1>
    </div>
  );
};

export default () => {
  return (
    <div className="store-container">
      <div>
        <UseMemoExampleTwoWithoutMemo></UseMemoExampleTwoWithoutMemo>
      </div>
      <div>
        <UseMemoExampleWithMemo></UseMemoExampleWithMemo>
      </div>
    </div>
  );
};
