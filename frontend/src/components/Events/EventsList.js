import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function EventsList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/events');
                setEvents(response.data.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="grid gap-6">
            {events?.map((event) => (
                <Card key={event?.id}>
                    <CardHeader>
                        <h3 className="text-xl font-semibold">{event?.attributes?.title}</h3>
                        <p className="text-sm text-gray-600">
                            {event?.attributes?.date && new Date(event.attributes.date).toLocaleDateString('fr-FR')}
                        </p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700">{event?.attributes?.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}