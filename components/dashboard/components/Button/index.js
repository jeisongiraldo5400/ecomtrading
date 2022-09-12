

export const Button = ({name, color }) => {
    return (
        <button className={`bg-${color} px-2 py-2 rounded-md mt-5 text-white border border-white-300 hover:bg-green-800`}>
            {name}
        </button>
    )
}