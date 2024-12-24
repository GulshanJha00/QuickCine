import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="">
      <h1 >First Project First Layout</h1>
      <Link href={`/sign-in`}><Button>Button</Button></Link>
      <UserButton/>
      <Link href={"/dashboard"}>dashboard</Link>
      </div>
    </>
  );
}
