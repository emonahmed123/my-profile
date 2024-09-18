/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Input, Textarea } from "@nextui-org/react"
import { useState } from "react"
import Swal from "sweetalert2"

const Contact = () => {

    const [email, setEmail] = useState('')
    console.log(email)

    const handlesubmit = (e: any) => {
        e.preventDefault()
        const bal = e.target.value
        console.log(bal)
        if (email !== '') {
            Swal.fire({
                title: "Message sent Successfully",
                text: "You clicked the button!",
                icon: "success",
                showCloseButton: false
            });
        }

    }


    return (
        <section id="Contact" className="py-[60px] lg:py-[80px]">
            <div className=" max-w-[1170px] mx-auto px-5 xl:px-0">
                <div className='heading text-center font-bold mb-10'>
                    <h2 className='text-3xl text-white mb-2'>CONTACT</h2>
                    <h1 className="text-white" >Contact <span className=' bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6]  font-primary hover:from-accent hover:to-[#42A6E3]'>With Me</span> </h1>
                </div>


                <div className="flex gap-10 justify-center flex-col  md:flex-row" >

                    <div className="w-full lg:min-w-[500px] h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                        <div className="flex flex-row">
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                        </div>
                        <div className="px-4 lg:px-8 py-5">
                            <div className="flex flex-row space-x-2">
                                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                            </div>
                        </div>
                        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                            <code className="font-mono text-xs md:text-sm lg:text-base">
                                <div className="blink">
                                    <span className="mr-2 text-pink-400">const</span>
                                    <span className="mr-2 text-violet-400">coder</span>
                                    <span className="mr-2 text-pink-400">=</span>
                                    <span className="text-gray-400">{'{'}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">Name:</span>
                                    <span className="text-gray-400">{`'`}</span>
                                    <span className="text-green-400">Emon Ahmed</span>
                                    <span className="text-gray-400">{`',`}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">Email:</span>
                                    <span className="text-gray-400">{`'`}</span>
                                    <span className="text-green-400">imonhsomon@gmail.com</span>
                                    <span className="text-gray-400">{`',`}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">Phone:</span>
                                    <span className="text-gray-400">{`'`}</span>
                                    <span className="text-green-400">+8801731106500</span>
                                    <span className="text-gray-400">{`',`}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">location:</span>
                                    <span className="text-gray-400">{`'`}</span>
                                    <span className="text-green-400">Bangladesh, Dhaka ,Tangail</span>
                                    <span className="text-gray-400">{`',`}</span>
                                </div>




                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">hireable:</span>
                                    <span className="text-orange-400">true</span>
                                    <span className="text-gray-400">,</span>
                                </div>
                                <div><span className="text-gray-400">{`};`}</span></div>
                            </code>
                        </div>
                    </div>


                    <div className=" w-full xl:min-w-[500px]  h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] py-4 px-2">

                        <form onSubmit={handlesubmit}>

                            <div className="mb-5">
                                <Input
                                    isClearable
                                    key="success"
                                    type="email"
                                    isRequired
                                    name='Email'
                                    label="Email"
                                    labelPlacement="outside"
                                    variant="underlined"
                                    fullWidth
                                    onBlur={(e) => setEmail(e.target.value)}
                                    color="success"
                                    placeholder="Enter your email"
                                    onClear={() => console.log("input cleared")}
                                    className=" text-white "
                                />
                            </div>
                            <div className="mb-5">
                                <Textarea

                                    key="success"
                                    color="success"
                                    variant="underlined"
                                    isRequired
                                    label="Description"
                                    labelPlacement="outside"
                                    placeholder="Enter your description"
                                    className="text-white "

                                />
                            </div>

                            <button type="submit" className="btn w-full px-3 py-3 text-center rounded-[9px] font-semibold text-white" >Submit</button>
                        </form>


                    </div>
                </div>


            </div>



        </section>
    )
}

export default Contact