import React from 'react';
import { useForm } from 'react-hook-form';
import useTaskStore from '../state/tasks'; // Adjust the path accordingly
import StyledButton from './button'; // Ensure this path is correct
import ActivityIcon from './activity';


const activityOptions = [
    "coffee", "eat", "other", "running", "working",
    "drink", "meeting", "party", "walking"
]

const EditTaskModal = ({ task, onSubmit, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: task
    });

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-5 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Task</h3>

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
                            <label
                                htmlFor="date"
                                className="block text-gray-700 text-sm font-bold mb-2">
                                Date
                            </label>
                            <input type="date" id="date" {...register("date", { required: true })}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.date && <span className="text-red-500 text-xs italic">Date is required.</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="startTime"
                                className="block text-gray-700 text-sm font-bold mb-2">
                                From (Time)
                            </label>
                            <input type="time" id="startTime" {...register("startTime", { required: true })}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.startTime && <span className="text-red-500 text-xs italic">From time is required.</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="endTime"
                                className="block text-gray-700 text-sm font-bold mb-2">
                                To (Time)
                            </label>
                            <input type="time" id="endTime" {...register("endTime", { required: true })}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.endTime && <span className="text-red-500 text-xs italic">End time is required.</span>}
                        </div>
                    </div>

                    {/* Activity Input */}
                    <div className="mb-4">
                        <label htmlFor="activity" className="block text-gray-700 text-sm font-bold mb-2">Activity</label>
                        <div className="relative">
                            <select id="activity" {...register("activity")}
                                className="shadow appearance-none border rounded w-full py-2 pl-16 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                {activityOptions.map((activity, index) => (
                                    <option key={index} value={activity}>{activity}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                        <div className="flex items-center mb-2">
                            <input id="sheltered" type="checkbox" {...register("sheltered")} className="form-checkbox h-5 w-5 text-gray-600" />
                            <label htmlFor="sheltered" className="ml-2 text-gray-700">Sheltered</label>
                        </div>
                    </div>

                    {/* Description Input */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                        <textarea id="description" {...register("description")}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    {/* GPS Coordinates Inputs */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="latitude" className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
                            <input type="text" id="latitude" {...register("latitude", { pattern: /^-?\d+(\.\d+)?(?:,-?\d+(\.\d+)?)*$/ })}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.latitude && <span className="text-red-500 text-xs italic">Invalid latitude format.</span>}
                        </div>
                        <div>
                            <label htmlFor="longitude" className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
                            <input type="text" id="longitude" {...register("longitude", { pattern: /^-?\d+(\.\d+)?(?:,-?\d+(\.\d+)?)*$/ })}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.longitude && <span className="text-red-500 text-xs italic">Invalid longitude format.</span>}
                        </div>
                    </div>

                    {/* Submit and Cancel Buttons */}
                    <div className="flex justify-end mt-4">
                        <StyledButton type="submit">Save</StyledButton>
                        <button
                            type="button"
                            className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTaskModal;
