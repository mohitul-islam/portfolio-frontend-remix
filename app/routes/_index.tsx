import type { MetaFunction } from "@remix-run/node";
import About from "./pages+/about";

export const meta: MetaFunction = () => {
  return [
    { title: "Mohitul Islam | Frontend Engineer" },
    {
      name: "description",
      content:
        "React, NextJs, Vite, TypeScript, NodeJs, ExpressJs, SpringBoot, MySql, Postgres, MongoDB",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>This is the main page</h1>

      {/* test page */}
      <About />
    </div>
  );
}
