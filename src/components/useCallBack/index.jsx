import WithHook from "./withHook";
import WithoutHook from "./withoutHook";

export const UseCallbackExample = () => {
  return (
    <div className="store-container">
      <WithoutHook></WithoutHook>
      <WithHook></WithHook>
    </div>
  );
};
