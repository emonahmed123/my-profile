import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='py-[50px]'>

            <div className="flex justify-center mb-20">
                <div className=" h-[1px] w-full  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className='text-[20px] font-semibold  mb-5 bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6]  font-primary hover:from-accent hover:to-[#42A6E3] cursor-pointer'>Emon Ahmed</h2>
                <p className='text-white' >Copyright © {currentYear} -All right reserved by Emon Ahmed</p>
            </div>
        </footer>
    );
};

export default Footer;