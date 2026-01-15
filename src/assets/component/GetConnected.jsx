import React from 'react'

function GetConnected() {
  return (
    // <div>
      <div className="mt-20 max-w-full md:mx-12 mx-6 text-center bg-white border border-blue-300 rounded-3xl p-12 mb-20 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Still have questions?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            If you couldn't find an answer to your question, our support team is ready to help.
          </p>
          <a
            href="/contact" // Replace with your contact page link
            className="inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-red-700"
          >
            Contact Support
          </a>
        </div>
    // </div>
  )
}

export default GetConnected
