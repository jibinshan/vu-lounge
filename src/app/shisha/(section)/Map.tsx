import Image from "next/image"

const Map = ({ }) => {
    return (
        <section className="w-full h-fit">
            <div className="w-full  flex flex-col">
                <div className="w-full py-6 bg-[#0a1315] flex justify-center items-center px-4">
                    <div className="pr-2 md:pr-6 border-r-[1px] border-r-primary">
                        <Image
                            src='/images/tripadvisor.png'
                            width={272}
                            height={57}
                            alt="tripadvisor"
                        />
                    </div>
                    <div className="pl-2 md:pl-6">
                        <Image
                            src='/images/tripadvisor.png'
                            width={272}
                            height={57}
                            alt="tripadvisor"
                        />
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.8982009132355!2d-0.3649722239962183!3d51.643389371844535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876156c4ad8af4b%3A0xc70fe1d6707238c0!2sVu%20Lounge!5e0!3m2!1sen!2sin!4v1733298204427!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[300px] invert grayscale"
                ></iframe>
            </div>
        </section>
    )
}

export default Map