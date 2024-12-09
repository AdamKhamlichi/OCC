import EventsList from '@/components/Events/EventsList';

export default function EventsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Événements</h1>
            <EventsList />
        </div>
    );
}