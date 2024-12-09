import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function PrayerTimes() {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                const response = await axios.get(
                    `http://api.aladhan.com/v1/timings/${Math.floor(date.getTime() / 1000)}`,
                    {
                        params: {
                            latitude: 45.5617,
                            longitude: -73.7127,
                            method: 2,
                            school: 1
                        }
                    }
                );
                setPrayerTimes(response.data.data.timings);
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
        };

        fetchPrayerTimes();
    }, [date]);

    const prayers = [
        { name: 'Fajr', arabicName: 'الفجر' },
        { name: 'Dhuhr', arabicName: 'الظهر' },
        { name: 'Asr', arabicName: 'العصر' },
        { name: 'Maghrib', arabicName: 'المغرب' },
        { name: 'Isha', arabicName: 'العشاء' }
    ];

    if (!prayerTimes) return <div>Chargement des horaires...</div>;

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <h2 className="text-2xl font-bold text-center">Horaires des Prières</h2>
                <p className="text-center text-gray-600">
                    {date.toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    {prayers.map(prayer => (
                        <div
                            key={prayer.name}
                            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                        >
                            <div>
                                <p className="font-semibold">{prayer.name}</p>
                                <p className="text-sm text-gray-600">{prayer.arabicName}</p>
                            </div>
                            <div className="text-xl font-bold text-green-700">
                                {prayerTimes[prayer.name]}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}