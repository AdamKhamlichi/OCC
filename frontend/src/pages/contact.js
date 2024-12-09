import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1337/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: formData }),
            });
            if (response.ok) {
                setFormData({ name: '', email: '', subject: '', message: '' });
                alert('Message envoyé avec succès!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Erreur lors de l\'envoi du message');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>

            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <h2 className="text-xl font-semibold">Envoyez-nous un message</h2>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nom</label>
                            <input
                                type="text"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Sujet</label>
                            <input
                                type="text"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                required
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600"
                        >
                            Envoyer
                        </button>
                    </form>
                </CardContent>
            </Card>

            <Card className="max-w-2xl mx-auto mt-8">
                <CardContent>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-4">Informations de Contact</h2>
                        <p className="mb-2">📍 123 Rue Example, 75000 Paris</p>
                        <p className="mb-2">📞 01 23 45 67 89</p>
                        <p>📧 contact@example.com</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}