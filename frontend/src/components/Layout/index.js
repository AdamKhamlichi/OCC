export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer className="bg-green-700 text-white py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <p>Centre Communautaire Orchidée © {new Date().getFullYear()}</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function Navbar() {
    const links = [
        { name: 'Accueil', href: '/' },
        { name: 'Horaires de Prière', href: '/prayer-times' },
        { name: 'Événements', href: '/events' },
        { name: 'Contact', href: '/contact' }
    ]

    return (
        <nav className="bg-green-700">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-white font-bold text-xl">CCO</a>
                    </div>
                    <div className="flex space-x-4">
                        {links.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white hover:bg-green-600 px-3 py-2 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}