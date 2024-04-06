import React from 'react';
import { useForm } from 'react-hook-form';

function TaskForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        // Here you would typically send data to the backend
    };

    const getTodayString = () => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        // Ensure two digits
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    };

    return (
        <div className="container mx-auto px-4">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto my-10">
                <h2 className="text-2xl font-bold mb-5">Submit Your Details</h2>
                {/* Title Input */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input type="text" id="title" {...register("title", { required: true })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {errors.title && <span className="text-red-500 text-xs italic">Title is required.</span>}
                </div>

                {/* Timeframe Inputs */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                        <input type="date" id="date" defaultValue={getTodayString()} {...register("date", { required: true })}
                               className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        {errors.date && <span className="text-red-500 text-xs italic">Date is required.</span>}
                    </div>
                    <div>
                        <label htmlFor="timeFrom" className="block text-gray-700 text-sm font-bold mb-2">From (Time)</label>
                        <input type="time" id="timeFrom" {...register("timeFrom", { required: true })}
                               className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        {errors.timeFrom && <span className="text-red-500 text-xs italic">From time is required.</span>}
                    </div>
                    <div>
                        <label htmlFor="timeTo" className="block text-gray-700 text-sm font-bold mb-2">To (Time)</label>
                        <input type="time" id="timeTo" {...register("timeTo", { required: true })}
                               className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        {errors.timeTo && <span className="text-red-500 text-xs italic">To time is required.</span>}
                    </div>
                </div>

                {/* Activity Input */}
                <div className="mb-4">
                    <label htmlFor="activity" className="block text-gray-700 text-sm font-bold mb-2">Activity</label>
                    <input type="text" id="activity" {...register("activity")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                {/* Location Radio Buttons */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                    <div className="flex items-center mb-2">
                        <input id="outside" type="radio" value="Outside" {...register("location")}
                            className="form-radio h-5 w-5 text-gray-600" />
                        <label htmlFor="outside" className="ml-2 text-gray-700">Outside</label>
                    </div>
                    <div className="flex items-center">
                        <input id="inside" type="radio" value="Inside" {...register("location")}
                            className="form-radio h-5 w-5 text-gray-600" />
                        <label htmlFor="inside" className="ml-2 text-gray-700">Inside</label>
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
