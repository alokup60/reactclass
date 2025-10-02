import type { Route } from "./+types/home";
import Counter from "../components/Counter.jsx";
import { useEffect, useState } from "react";

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

  function checkFunction() {
    console.log("function called while mounting the page:!");
  }

  const checkCountFunction = () => {
    console.log("count function called", count);
  };

  // checkFunction();

  useEffect(() => {
    checkFunction();
  }, []);

  useEffect(() => {
    checkCountFunction();
  }, [count]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <p>First Page</p>
      <Counter handleClick={handleClick} count={count} />
    </div>
  );
}
