import { Button } from "ui";

import { add } from "math-helper-rolling-thunder";
 

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <h2>{add(1, 2)}</h2>
      <Button />
    </div>
  );
}
