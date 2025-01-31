import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { prisma } from "./db";

export default async function Home() {
  //await prisma.todo.create({ data: { title: "test" } });
  const todos = await prisma.todo.findMany();
  console.log(todos);
  return (
    <>
      <h1>Hello Next.js</h1>
      <Link href="/news">Go to News</Link>
      {todos.map((todo) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
    </>
  );
}
