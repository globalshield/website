import * as React from "react"

const Rest = () => {
  return (
    <div>
      <div className="inline-flex items-center justify-center px-24 py-20 bg-gray-800">
        <div className="flex space-x-48 items-start justify-start">
          <div className="inline-flex flex-col space-y-4 items-start justify-start flex-1">
            <div className="relative w-16 h-1/4 bg-gray-50 rounded-2xl" />
            <div className="w-full h-0.5 bg-white bg-opacity-10" />
            <p className="w-full text-lg font-semibold leading-relaxed text-gray-400">
              Drone
            </p>
            <p className="w-full text-sm leading-snug text-white">
              Application to scan the internet for disinformation
            </p>
            <div className="inline-flex items-start justify-start px-6 py-4 bg-red-600 bg-opacity-20 border rounded-lg">
              <p className="text-sm leading-snug text-red-400">Help needed!</p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-4 items-start justify-start flex-1 h-full">
            <img
              className="w-16 h-16 rounded-lg"
              src="https://via.placeholder.com/64x64"
            />
            <div className="w-full h-0.5 bg-white bg-opacity-10" />
            <p className="w-full text-lg font-semibold leading-relaxed text-gray-400">
              Command Center
            </p>
            <p className="w-full text-sm leading-snug text-white">
              A platform for content review
            </p>
            <div className="inline-flex items-start justify-start px-6 py-4 bg-blue-700 bg-opacity-20 border rounded-lg">
              <p className="text-sm leading-snug text-blue-300">
                Coming soon...
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-4 items-start justify-start flex-1">
            <div className="relative w-16 h-16 bg-gray-50 rounded-2xl" />
            <div className="w-full h-0.5 bg-white bg-opacity-10" />
            <p className="w-full text-lg font-semibold leading-relaxed text-gray-400">
              Shield API
            </p>
            <p className="w-full text-sm leading-snug text-white">
              API to access domain reports
              <br />
              Golang module for article search, scaping and filtering
            </p>
            <div className="inline-flex items-start justify-start px-6 py-4 bg-blue-700 rounded-lg">
              <p className="text-sm leading-snug text-white">Docs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-800">
        <div className="inline-flex flex-col space-y-12 items-start justify-start absolute m-auto inset-0">
          <div className="flex flex-col space-y-4 items-start justify-start">
            <p className="text-2xl font-semibold leading-loose text-white">
              API endpoints:
            </p>
            <p className="text-sm leading-snug text-white">
              Developers need to be able to plug in our information into their
              apps
            </p>
            <div className="flex flex-col space-y-2 items-start justify-start">
              <div className="inline-flex items-start justify-start px-6 py-4 bg-gray-400 rounded-lg">
                <p className="text-sm leading-snug text-gray-800">
                  https://api.ru.globalshield.io/domains.[json|csv|toml]
                </p>
              </div>
              <div className="inline-flex space-x-2.5 items-center justify-between py-2.5 pl-6 pr-2 bg-gray-400 rounded-lg">
                <p className="text-sm leading-snug text-gray-800">
                  https://api.ru.globalshield.io/domains/score.[json|csv|toml]
                </p>
                <div className="flex items-start justify-start px-4 py-2 bg-white bg-opacity-20 rounded-lg">
                  <p className="text-xs leading-none text-gray-800">Copy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
            <p className="text-2xl font-semibold leading-loose text-white">
              Proxies / mirrors:
            </p>
            <p className="text-sm leading-snug text-white">
              Dynamically changing custom domains proxying our APIs.{" "}
            </p>
            <div className="flex flex-col space-y-2 items-start justify-start">
              <div className="inline-flex items-start justify-start px-6 py-4 bg-gray-400 rounded-lg">
                <p className="text-sm leading-snug text-gray-800">
                  https://something-1u2b3.mirror.com
                </p>
              </div>
              <div className="inline-flex items-start justify-start px-6 py-4 bg-gray-400 rounded-lg">
                <p className="text-sm leading-snug text-gray-800">
                  https://123s-3213da.dodgysite.com
                </p>
              </div>
              <div className="inline-flex items-start justify-start px-6 py-4 bg-gray-400 rounded-lg">
                <p className="text-sm leading-snug text-gray-800">
                  https://qweqw.123aa.ru
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-4 h-2.5 absolute left-0 bottom-0 bg-black bg-opacity-20 rounded-full" />
          <img
            className="w-4 h-4 absolute left-0 top-0 rounded-lg"
            src="https://via.placeholder.com/17x18"
          />
        </div>
      </div>
      <div className="inline-flex items-center justify-center px-72 py-20 bg-gray-400">
        <div className="inline-flex flex-col space-y-4 items-center justify-start p-12 bg-white shadow border rounded-3xl border-indigo-900 border-opacity-20">
          <p className="text-5xl font-semibold leading-10 text-center text-indigo-900">
            About us
          </p>
          <p className="text-2xl leading-loose text-center text-gray-800">
            We are building tools for Journalists to filter and mark
            desinformation
          </p>
          <div className="flex flex-col space-y-4 items-center justify-start pt-6">
            <div className="inline-flex items-center justify-center px-6 py-4 bg-red-100 rounded-lg">
              <p className="text-sm leading-snug text-indigo-900">
                Get in touch with us
              </p>
            </div>
            <p className="text-sm leading-snug text-gray-800">or</p>
            <div className="inline-flex space-x-2.5 items-center justify-between py-2.5 pl-6 pr-2 bg-gray-50 rounded-lg">
              <p className="text-sm leading-snug text-blue-700">
                hi@globalshield.io
              </p>
              <div className="flex items-start justify-start px-4 py-2 bg-gray-400 bg-opacity-20 rounded-lg">
                <p className="text-xs leading-none text-gray-800">Copy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-start justify-center px-96 pt-20 pb-40 bg-gray-800">
        <div className="inline-flex flex-col space-y-8 items-center justify-start">
          <div className="inline-flex items-center justify-start" />
          <div className="inline-flex space-x-6 items-start justify-start">
            <div className="flex items-start justify-start px-6 py-4 bg-blue-700 rounded-lg">
              <p className="text-sm leading-snug text-white">
                Donate to Ukraine
              </p>
            </div>
            <div className="flex space-x-4 items-center justify-start px-6 py-4 bg-white bg-opacity-10 rounded-lg">
              <div className="flex items-center justify-center w-1/5 h-full">
                <div className="flex-1 h-full bg-white rounded-lg" />
              </div>
              <p className="text-sm leading-snug text-white">Contribute</p>
            </div>
          </div>
          <p className="text-xs leading-none text-center text-white">
            Made with ❤️ in Lithuania. 2022
            <br />
            Slava Ukraini! 🇺🇦
          </p>
        </div>
      </div>
    </div>
  )
}

export default Rest
