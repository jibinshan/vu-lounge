
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

const Menu = ({ }) => {
    return (
        <section className="w-full h-fit py-12 px-4 flex justify-center items-center">
            <div className="w-full max-w-[1300px] flex flex-col-reverse md:flex-row gap-4">
                <div className="w-full md:max-w-[975px] grid grid-cols-1 md:grid-cols-3  gap-3">
                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            STARTERS
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
                            VU SPECIAL ROLLS
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
                            STARTERS
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
                            VU SPECIAL ROLLS
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
                            STARTERS
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
                            VU SPECIAL ROLLS
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

                <div className="w-full md:max-w-[325px] flex flex-col gap-3">

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] border-[2px] border-primary shadow-lg rounded-xl">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            24 CARAT GOLD
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1 items-start justify-start">
                                <p className="text-primary font-opens font-[400] text-lg uppercase">VU KING BURGER</p>
                            </div>
                            <p className="text-primary font-opens text-lg font-[400]">50</p>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1 items-start justify-start">
                                <p className="text-primary font-opens font-[400] text-lg uppercase">VU SPECIAL
                                    TOMAHAWK</p>
                            </div>
                            <p className="text-primary font-opens text-lg font-[400]">180</p>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1 items-start justify-start">
                                <p className="text-primary font-opens font-[400] text-lg uppercase">LAMB CHOPS</p>
                            </div>
                            <p className="text-primary font-opens text-lg font-[400]">60</p>
                        </div>
                    </div>


                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <p className="uppercase text-xl font-inter font-[500] pb-2 border-b-[1px] border-b-primary text-primary w-fit">VU SPECIAL ROLLS</p>
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

export default Menu