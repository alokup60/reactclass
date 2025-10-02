import type { Route } from "./+types/home";
import Counter from "../components/Counter.jsx";
import { useState } from "react";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <p>First Page</p>
      <Counter handleClick={handleClick} count={count} />
    </div>
  );
}
