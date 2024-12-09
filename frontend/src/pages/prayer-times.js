import PrayerTimes from '@/components/Prayer/PrayerTimes';

export default function PrayerTimesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Horaires des Prières</h1>
            <PrayerTimes />
        </div>
    );
}