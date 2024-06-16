import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

const ButtonGroup = () => {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return <Button key={text}>{text}</Button>;
      })}
    </section>
  );
};

export default ButtonGroup;
