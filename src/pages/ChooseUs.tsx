

const ChooseUs = () => {
  return (
    <>
    <h1 className="text-2xl font-bold text-blue-400 text-center mb-6" style={{ marginTop: '50px', marginBottom: '50px' }}>Why Choose Us</h1>
            <div className="flex justify-center items-center h-full">
                <form className="space-y-8 p-8 md:max-w-6xl sm:max-w-screen-sm w-full mx-4 sm:my-16 sm:mx-10 md:mx-8 lg:mx-16 xl:mx-24">

                    
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow-lg">
                            <label className="block text-lg font-semibold mb-3" htmlFor="mainHeading">
                                Main Heading
                            </label>
                            <input
                                type="text"
                                id="mainHeading"
                                placeholder="Enter Main Heading"
                                className="block w-full h-10 text-sm text-gray-700 border border-gray-300 rounded-md p-4"
                            />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <label className="block text-lg font-semibold mb-2" htmlFor="littleImage">
                                 Little Image
                            </label>
                            <input
                                type="file"
                                id="littleImage"
                                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md file:py-2 file:px-4 file:border file:rounded-md file:bg-green-100 file:text-green-600 file:hover:bg-green-200"
                            />
                        </div>
                    
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <label className="block text-lg font-semibold mb-2" htmlFor="subHeading">
                                Sub Heading
                            </label>
                            <input
                                type="text"
                                id="subHeading"
                                placeholder="Enter Sub Heading"
                                className="block w-full h-10 text-sm text-gray-700 border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <label className="block text-lg font-semibold mb-2" htmlFor="description">
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                placeholder="Enter Description"
                                className="block w-full h-10 text-sm text-gray-700 border border-gray-300 rounded-md p-2"
                            />
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-lg">
                            <label className="block text-lg font-semibold mb-2" htmlFor="fileInput">
                                Main Image
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md file:py-2 file:px-4 file:border file:rounded-md file:bg-green-100 file:text-green-600 file:hover:bg-green-200"
                            />
                        </div>
                        <div className="bg-white p-6 w-full rounded-lg sm:col-span-1 sm:mx-auto md:max-w-6xl sm:max-w-2xl " style={{marginTop: "29px"}}>
                            <button
                                type="submit"
                                className="w-full sm:w-52 h-10 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700" style={{marginBottom: "29px"}}
                            >
                                Submit
                            </button>
                        </div>

                    </div>

                </form>
            </div>
    </>
  )
}

export default ChooseUs