
export default function Home(){
    return (
        <div>
            <p className="p-3 mb-10 text-black text-xl">Dashboard</p>

            <div class="grid grid-cols-3">

                <div className="bg-blue-200 w-60 p-10 rounded-[20px] text-center">
                    <p className="text-2xl bold text-black"># Propietarios</p>
                    <p className="text-5xl mt-5 bold text-black">100</p>
                </div>

                <div className="bg-gray-500 w-60 p-10 rounded-[20px] text-white text-center">
                    <p className="text-2xl bold "># Almacenes</p>
                    <p className="text-5xl mt-5 bold">285</p>
                </div>
                
            </div>

        </div>
    )    
}