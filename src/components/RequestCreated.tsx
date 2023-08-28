import { CheckIcon } from "@heroicons/react/20/solid";

export default function RequestCreated() {
    return (
        <div
            className="p-6 shadow-md rounded-md flex flex-col items-center"
        >
            <div className="p-2 rounded-full border bg-green-50">
                <CheckIcon
                    className="text-green-500 w-10 h-10"
                />
            </div>
            <h2 className="text-2xl font-semibold mt-4 text-gray-500 max-w-md text-center">
                your request has been sent. we will contact you soon.
            </h2>
        </div>
    )
}