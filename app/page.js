import {User, Link} from "@nextui-org/react";
import { getTaskAction } from "./actions";
import TaskList from "@/components/task/TaskList";

export default async function Home() {
  const tasks = await getTaskAction();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-4 bg-slate-200 text-white">
        
        <TaskList data={tasks} />
    
    </main>
  )
}
