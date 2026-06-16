import React from "react";
import achievementsData from '../../../data/achievements.json';

export default function Achievements() {
    return (
        <div className="w-full mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                Achievements
            </div>
            {achievementsData.achievements.map(item => (
                <div key={item.id} className="mb-10 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    {/* Image section: large area to showcase achievement pictures */}
                    {item.image && (
                        <div className="w-full h-64 md:h-96 relative bg-gray-100 flex items-center justify-center">
                            <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
                        </div>
                    )}
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">{item.title}</h2>
                            <span className="text-gray-500 font-medium">{item.date}</span>
                        </div>
                        <p className="text-gray-600">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
