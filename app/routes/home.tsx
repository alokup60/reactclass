import type { Route } from "./+types/home";
import Counter from "../components/Counter.jsx";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <p>First Page</p>
      <Counter />
    </div>
  );
}
