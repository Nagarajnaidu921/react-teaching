import { forwardRef } from "react";
import { useEffect, useRef, useState } from "react";

export const UseRefExampleDomMenuplation = () => {
  const statusRef = useRef();

  const addBorderToText = () => {
    console.log((statusRef.current.style.border = "1px solid red"));
  };

  return (
    <div>
      <div ref={statusRef}>Status</div>
      <button onClick={addBorderToText}>Add Border</button>
    </div>
  );
};

export const UseRefExample = () => {
  const [total, setTotal] = useState(0);

  const countRef = useRef([]);

  const handleClick = () => {
    countRef.current.push(1);
  };

  const calculateTheTotal = () => {
    const total = countRef.current.reduce((a, c) => a + c, 0);
    setTotal(total);
  };

  return (
    <div>
      {total}
      <button onClick={handleClick}>Click</button>
      <button onClick={calculateTheTotal}>Show latest Total</button>
    </div>
  );
};

//Forward ref example

const SimpleForm = forwardRef((props, ref) => {
  return (
    <form ref={ref}>
      <input type="text" placeholder="Firstname" />
      <input type="text" placeholder="lastName" />
    </form>
  );
});

export const ForwardRefExample = () => {
  const formRef = useRef();

  const formReset = () => {
    formRef.current.reset()
  };

  const submitForm = () => {
    formRef.current.submit()
  };

  return (
    <div>
      <SimpleForm ref={formRef}></SimpleForm>
      <button onClick={formReset}>Reset Form</button>
      <button onClick={submitForm}>Submit Form</button>
    </div>
  );
};
