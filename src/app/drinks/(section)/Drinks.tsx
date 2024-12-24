
const drinks = [
    {
        name: "BEEF SLIDERS",
        des: "THREE SLIDERS, MELTED CHEESE AND TRUFFLE MAYONNAISE",
        price: "18"
    },
    {
        name: "BEEF SLIDERS",
        des: "THREE SLIDERS, MELTED CHEESE AND TRUFFLE MAYONNAISE",
        price: "18"
    },
    {
        name: "BEEF SLIDERS",
        des: "THREE SLIDERS, MELTED CHEESE AND TRUFFLE MAYONNAISE",
        price: "18"
    },
    {
        name: "BEEF SLIDERS",
        des: "THREE SLIDERS, MELTED CHEESE AND TRUFFLE MAYONNAISE",
        price: "18"
    },
    {
        name: "BEEF SLIDERS",
        des: "THREE SLIDERS, MELTED CHEESE AND TRUFFLE MAYONNAISE",
        price: "18"
    },
]

const Drinks = ({ }) => {
    return (
        <section className="w-full h-fit py-12 px-4 flex justify-center items-center">
            <div className="w-full max-w-[1300px] flex flex-col gap-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-3">
                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Cocktails
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {drinks.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Cocktails
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {drinks.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Cocktails
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {drinks.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Cocktails
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {drinks.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Cocktails
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {drinks.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Drinks