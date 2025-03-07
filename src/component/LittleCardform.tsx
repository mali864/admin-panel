

const LittleCardform = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-400 text-center">Little Card Form</h1>
      <div className="ml-62 ">
        <form className="space-y-6 w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label
              className="block text-lg font-semibold mb-2"
              htmlFor="Heading"
            >
              Heading
            </label>
            <input
              type="text"
              id="Heading"
              placeholder="Heading"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">

            <label
              className="block text-lg font-semibold mb-2"
              htmlFor="file"
            >
              Select Image
            </label>
            <input
              type="file"
              id="file"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md file:py-2 file:px-4 file:border file:rounded-md file:bg-green-100 file:text-green-600 file:hover:bg-green-200"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 mb-4 ml-28">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4  rounded-md hover:bg-green-700"
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

export default LittleCardform;