import "./index.css";

// returning variable from conditional statement
const ConditionalComponent = (props) => {
  const stock = {
    books: 10,
    pens: 15,
  };

  return (
    <div>
      <h1>Display Stock:</h1>
      <h2>
        {props.item}:{props.item === "books" ? stock.books : stock.pens}
      </h2>
    </div>
  );
};

//returning jsx from condiional statement
const ConditionalComponentTwo = (props) => {
  return (
    <div>
      <h1>Display Stock:</h1>
      <h2>
        {props.item === "books" ? <div>Books: 10</div> : <div>Pens: 15</div>}
      </h2>
    </div>
  );
};

const ConditionalComponentThree = (props) => {
  const getTheSelectedTock = () => {
    console.log("Im here", props);
    if (props.item === "pens") {
      return <div>Pens: 15</div>;
    } else {
      return <div>Books: 10</div>;
    }
  };

  return (
    <div>
      <h1>Display Stock:</h1>
      <h2>{getTheSelectedTock()}</h2>
    </div>
  );
};

const ConditionalComponentFour = (props) => {
  const getTheSelectedTock = () => {
    switch(props.item) {
        case 'books': return <div>Books: 10</div>;
        case 'pens': return <div>Pens: 15</div>
    }
  };

  return (
    <div>
      <h1>Display Stock:</h1>
      <h2>{getTheSelectedTock()}</h2>
    </div>
  );
};

export const ConditionalRenderingExample = () => {
  return (
    <div>
      <ConditionalComponent item="pens"></ConditionalComponent>
      <ConditionalComponentTwo item="pens"></ConditionalComponentTwo>
      <ConditionalComponentThree item="books"></ConditionalComponentThree>
      <ConditionalComponentFour item="pens"></ConditionalComponentFour>
    </div>
  );
};
