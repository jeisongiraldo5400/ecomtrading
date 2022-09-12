

export const Button = ({name, color, disabled }) => {
    return (
        <button disabled={disabled} className={`bg-${color} px-2 py-2 rounded-md mt-5 cursor-pointer text-white border border-white-300 hover:bg-green-800`}>
            {name}
        </button>
    )
}