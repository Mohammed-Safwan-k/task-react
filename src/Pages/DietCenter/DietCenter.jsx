import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const DietCenter = () => {
    return (
        <>
            <div className='w-full p-10'>
                <div className='flex w-full'>
                    <div>
                        <ArrowBackIosNewOutlinedIcon />
                    </div>
                    <p className='flex justify-center w-full text-2xl font-medium'>
                        Diet Centre
                    </p>
                </div>

                <div className='flex space-x-4 mt-14'>
                    <div className='flex mt-10 space-x-5 bg-gray-100 w-64 px-1.5 py-1.5 rounded-lg'>
                        <button className='bg-green-600 text-white px-5 py-1.5 rounded-lg'>
                            Week View
                        </button>
                        <button className='bg-white px-5 py-1.5 rounded-lg'>
                            Day View
                        </button>
                    </div>
                    <div className='bg-gray-100 flex p-2 justify-center items-center space-x-4 rounded-lg'>
                        <div>
                            <p className='font-medium'>
                                Name
                            </p>
                            <input type="text" className='bg-white h-10 rounded-lg mt-2 placeholder:px-4 w-72' placeholder='Name' />
                        </div>
                        <div>
                            <p className='font-medium'>
                                Name
                            </p>
                            <input type="text" className='bg-white h-10 rounded-lg mt-2 placeholder:px-4 w-64' placeholder='Name' />
                        </div>
                        <div>
                            <p className='font-medium'>
                                Name
                            </p>
                            <input type="text" className='bg-white h-10 rounded-lg mt-2 placeholder:px-4' placeholder='Name' />
                        </div>
                        <div>
                            <p className='font-medium'>
                                Name
                            </p>
                            <input type="text" className='bg-white h-10 rounded-lg mt-2 placeholder:px-4' placeholder='Name' />
                        </div>
                        <div>
                            <p className='font-medium'>
                                Name
                            </p>
                            <input type="text" className='bg-white h-10 rounded-lg mt-2 placeholder:px-4' placeholder='Name' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <div className='flex'>
                            <div className='mt-5 ml-2'>
                                <p className='text-gray-400'>
                                    Set Calories
                                </p>
                                <button className='flex bg-gray-100 px-2 py-1.5 rounded-lg space-x-28'>
                                    <p className='w-full'>
                                        900 Calories
                                    </p>
                                    <div>
                                        <ExpandMoreOutlinedIcon />
                                    </div>
                                </button>
                            </div>
                            <div className='mt-5 ml-6'>
                                <p className='text-gray-900'>
                                    Sunday
                                </p>
                                <button className='flex bg-gray-100 px-10 py-1.5 rounded-lg'>
                                    <p className='w-full text-gray-400'>
                                        900 Cal.
                                    </p>
                                </button>
                            </div>
                            <div className='mt-5 ml-6'>
                                <p className='text-gray-900'>
                                    Sunday
                                </p>
                                <button className='flex bg-gray-100 px-10 py-1.5 rounded-lg'>
                                    <p className='w-full text-gray-400'>
                                        900 Cal.
                                    </p>
                                </button>
                            </div>
                            <div className='mt-5 ml-6'>
                                <p className='text-gray-900'>
                                    Sunday
                                </p>
                                <button className='flex bg-gray-100 px-10 py-1.5 rounded-lg'>
                                    <p className='w-full text-gray-400'>
                                        900 Cal.
                                    </p>
                                </button>
                            </div>
                            <div className='mt-5 ml-6'>
                                <p className='text-gray-900'>
                                    Sunday
                                </p>
                                <button className='flex bg-gray-100 px-10 py-1.5 rounded-lg'>
                                    <p className='w-full text-gray-400'>
                                        900 Cal.
                                    </p>
                                </button>
                            </div>
                            <div className='mt-5 ml-6'>
                                <p className='text-gray-900'>
                                    Sunday
                                </p>
                                <button className='flex bg-gray-100 px-10 py-1.5 rounded-lg'>
                                    <p className='w-full text-gray-400'>
                                        900 Cal.
                                    </p>
                                </button>
                            </div>
                            <div className='mt-5 ml-6'>
                                <p className='text-gray-900'>
                                    Sunday
                                </p>
                                <button className='flex bg-gray-100 px-10 py-1.5 rounded-lg'>
                                    <p className='w-full text-gray-400'>
                                        900 Cal.
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div className='flex ml-2 mt-5'>
                            <p className='text-3xl flex justify-center items-center text-center px-[3.9rem] py-1.5'>
                                Morning <br /> Snacks
                            </p>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                        </div>
                        <hr className='mt-5 w-full' />
                        <div className='flex ml-2 mt-5'>
                            <p className='text-3xl flex justify-start items-center text-center px-[3.9rem] py-1.5'>
                                Morning <br /> Snacks
                            </p>
                            <div className='ml-9'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className="h-56 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:shadow-xl cursor-pointer">
                                    <img
                                        alt="Developer"
                                        src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                        className="h-16 w-16 rounded-full object-cover mx-auto"
                                    />
                                    <span className="mt-6 text-sm ?leading-5 font-semibold text-start ml-3">Spicy Chicken Nice Slice</span>
                                    <p className='w-full text-gray-400 ml-3'>
                                        900 Cal.
                                    </p>
                                    <div className='flex justify-center'>
                                        <button className='bg-white rounded-lg mt-2 mb-2 w-5/6 py-2 flex justify-start'>
                                            <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 p-5 mt-4 flex justify-center items-center rounded-lg hover:shadow-xl cursor-pointer'>
                                    <AddOutlinedIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='mt-5 ml-6'>
                                <button className='flex bg-white px-1 py-2 rounded-xl mt-2 border border-gray-100 shadow-md'>
                                    <div className='rounded-full bg-[#30AC10] px-0.5 py-0.5 ml-2 text-white'>
                                        <LocationOnIcon sx={{ height: "15px" }} />
                                    </div>
                                    <p className='w-full ml-2 font-medium'>
                                        Dislike List
                                    </p>
                                    <div className='ml-12'>
                                        <ExpandMoreOutlinedIcon />
                                    </div>
                                </button>
                            </div>
                            <div className='mt-3 ml-6'>
                                <button className='flex bg-white px-1 py-2 rounded-xl mt-2 border border-gray-100 shadow-md'>
                                    <div className='rounded-full bg-[#30AC10] px-0.5 py-0.5 ml-2 text-white'>
                                        <LocationOnIcon sx={{ height: "15px" }} />
                                    </div>
                                    <p className='w-full ml-2 font-medium'>
                                        Dislike List
                                    </p>
                                    <div className='ml-12'>
                                        <ExpandMoreOutlinedIcon />
                                    </div>
                                </button>
                            </div>
                            <div className='mt-3 ml-6'>
                                <button className='flex bg-white px-1 py-2 rounded-xl mt-2 border border-gray-100 shadow-md'>
                                    <div className='rounded-full bg-[#30AC10] px-0.5 py-0.5 ml-2 text-white'>
                                        <LocationOnIcon sx={{ height: "15px" }} />
                                    </div>
                                    <p className='w-full ml-2 font-medium'>
                                        Dislike List
                                    </p>
                                    <div className='ml-12'>
                                        <ExpandMoreOutlinedIcon />
                                    </div>
                                </button>
                            </div>
                            <div className='mt-3 ml-6 w-[12.7rem]'>
                                <button className='bg-white px-1 py-2 rounded-xl mt-2 border border-gray-100 shadow-md'>
                                    <div className='flex mt-2'>
                                        <div className='rounded-full bg-[#30AC10] px-0.5 py-0.5 ml-2 text-white'>
                                            <LocationOnIcon sx={{ height: "15px" }} />
                                        </div>
                                        <p className='w-full ml-2 font-medium'>
                                            Dislike List
                                        </p>
                                        <div className='ml-12'>
                                            <ExpandMoreOutlinedIcon />
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-4 ml-2">
                                        <img
                                            alt="Developer"
                                            src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div>
                                            <h3 className="text-sm font-medium text-start ml-3">Spicy Chicken Nice Slice</h3>
                                            <p className='w-full text-gray-400 ml-3 text-start'>
                                                900 Cal.
                                            </p>
                                        </div>
                                    </div>
                                    <hr className='mt-4 mb-4 w-[90%] mx-auto' />
                                    <div className="flex items-center mt-4 ml-2 mb-2">
                                        <img
                                            alt="Developer"
                                            src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div>
                                            <h3 className="text-sm font-medium text-start ml-3">Spicy Chicken Nice Slice</h3>
                                            <p className='w-full text-gray-400 ml-3 text-start'>
                                                900 Cal.
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='mt-3 ml-6'>
                                <button className='flex bg-white px-1 py-2 rounded-xl mt-2 border border-gray-100 shadow-md'>
                                    <div className='rounded-full bg-[#30AC10] px-0.5 py-0.5 ml-2 text-white'>
                                        <LocationOnIcon sx={{ height: "15px" }} />
                                    </div>
                                    <p className='w-full ml-3 font-medium'>
                                        Notes
                                    </p>
                                    <div className='ml-20'>
                                        <ExpandMoreOutlinedIcon />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DietCenter