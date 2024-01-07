import { useNavigate } from "react-router-dom"

const Welcome = () => {

    const navigate = useNavigate()

    return (
        <div
            className="flex justify-evenly items-center h-screen flex-col "
        >
            <h1
                className="text-6xl"
            >Kanban Board</h1>

            <div>
                <button
                    className="
                border-2
                rounded-md
                px-4
                py-2
                mr-5
                hover:border-gray-500
                "
                >
                    Join Room
                </button>

                <button
                    className="
                    border-2
                    rounded-md
                    px-4
                    py-2
                    hover:border-gray-500
                "
                    onClick={() => navigate("/createKanban")}
                >
                    Create Room
                </button>
            </div>

            <div>
                <h1>Previous Rooms</h1>
            </div>
        </div>
    )
}

export default Welcome