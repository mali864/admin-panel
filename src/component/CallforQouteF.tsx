

const CallforQouteF = () => {
  return (
    <>
     <h1 className="text-2xl font-bold text-blue-400 text-center mb-6" style={{ marginTop: '50px', marginBottom: '50px' }}>Call Us for Qoute</h1>
            <div className="flex justify-center items-center h-full">
                <form className="space-y-8 p-8 md:max-w-6xl sm:max-w-screen-sm w-full mx-4 sm:my-16 sm:mx-10 md:mx-8 lg:mx-16 xl:mx-24">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow-lg">
                            <label className="block text-lg font-semibold mb-3" htmlFor="Heading">
                                Heading
                            </label>
                            <input
                                type="text"
                                id="Heading"
                                placeholder="Enter your heading"
                                className="block w-full h-10 text-sm text-gray-700 border border-gray-300 rounded-md p-4"
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg">
                            <label className="block text-lg font-semibold mb-3" htmlFor="description">
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                placeholder="Enter your description"
                                className="block w-full h-10 text-sm text-gray-700 border border-gray-300 rounded-md p-4"
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg">
                            <label className="block text-lg font-semibold mb-3" htmlFor="contactNo">
                                 Contact Number
                            </label>
                            <input
                                type="number"
                                id="contactNo"
                                placeholder="Contact Number"
                                className="block w-full h-10 text-sm text-gray-700 border border-gray-300 rounded-md p-4"
                            />
                        </div>
                        
                        <div className="bg-white p-6 w-full rounded-lg sm:col-span-1 sm:mx-auto md:max-w-6xl sm:max-w-2xl" style={{ marginTop: "29px" }}>
                            <button
                                type="submit"
                                className="w-full sm:w-52 h-10 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
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

export default CallforQouteF