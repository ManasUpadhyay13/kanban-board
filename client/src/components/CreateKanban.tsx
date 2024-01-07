import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateKanban = () => {

    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleCreateKanbanBoard = async () => {
        try {
            setLoading(true)
            const response = await axios.post("http://localhost:5500/createKanban", {
                "name": name
            })
            response.data.id
            navigate(`/kanban?id=${response.data.id}`)
        } catch (error: any) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            className="flex justify-evenly items-center h-screen flex-col">

            <h1 className="text-6xl">
                Create Kanban Board
            </h1>

            <div className="flex flex-col gap-9">

                <input
                    type="text"
                    placeholder="Type a unique name"
                    className="bg-transparent border-b-2 px-4 py-2 outline-none bg-columnBackgroundColor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                <button
                    className="
                border-2
                    rounded-md
                    px-4
                    py-2
                    hover:border-gray-500
                "
                    onClick={handleCreateKanbanBoard}
                    disabled={loading}
                >Create</button>
            </div>

        </div>
    )
}

export default CreateKanban