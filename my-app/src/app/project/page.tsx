'use client'
import { useRouter } from "next/router";

function ProjectPage() {

// const router = useRouter()

const handlemyProject=()=>{
// router.push("/project/myProject")
}
const handleTeamProject=()=>{
  // router.push("/project/teamProject")
  }
  return (
    <div className="flex justify-center space-x-4 mt-[10%]">
            
                <button onClick={()=>{handlemyProject()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">My Project</button>

                <button onClick={()=>{handleTeamProject()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Team Project</button>
        </div>
  )
}
export default ProjectPage;
