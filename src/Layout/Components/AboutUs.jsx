const AboutUs = () => {
    return (
        <div>
        <div className="hero  mb-12 py-4">
            <div className="hero-content p-0 flex-col lg:flex-row">
            <div className="relative w-full md:w-full lg:w-[50%] ">
                <img
                    src="https://i.postimg.cc/CKc09xmg/person.jpg"
                    className=" rounded-lg shadow-2xl w-3/4"
                /> 
                <img src="https://i.postimg.cc/Cxd9ds4W/parts.jpg" alt="" className="absolute w-[50%] -bottom-[30%] right-8 rounded-xl border-white border-8"/>
            </div>
            <div className="mt-10 md:mt-24 lg:mt-0 w-full md:w-full lg:w-[50%] text-center md:text-center lg:text-left">
                <p className="text-[#FF3811] font-bold text-xl">About Us</p>
                <h1 className="text-5xl font-bold py-7">We are qualified & of experience in this field</h1>
                <p className="py-6">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                </p>
                <button className="btn btn-outline btn-error">Get More Info</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
