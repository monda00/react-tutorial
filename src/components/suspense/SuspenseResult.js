import { Suspense } from "react";
import ThrowResult from "./ThrowResult";

export default function SuspenseResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThrowResult />
    </Suspense>
  );
}
