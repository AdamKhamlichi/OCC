import { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import PrayerTimes from '@/components/Prayer/PrayerTimes';
import EventsList from '@/components/Events/EventsList';

export default function HomePage() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/news');
                const data = await response.json();
                setNews(data.data || []);
            } catch (error) {
                console.error('Error fetching news:', error);
                setNews([]);
            }
        };
        fetchNews();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12">Centre Communautaire Orchidée</h1>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-semibold">Prochains Événements</h2>
                    </CardHeader>
                    <CardContent>
                        <EventsList limit={3} />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <PrayerTimes />
                    </CardContent>
                </Card>
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <h2 className="text-2xl font-semibold">Actualités</h2>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        {news && news.length > 0 ? (
                            news.map((item) => (
                                <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="font-semibold">{item.attributes?.title}</h3>
                                    <p className="text-gray-600">{item.attributes?.content}</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {item.attributes?.publishedAt && new Date(item.attributes.publishedAt).toLocaleDateString('fr-FR')}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>Aucune actualité disponible</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}