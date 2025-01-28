import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-background border-t mt-auto">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted-foreground">&copy; 2025 Mon Site. Tous droits réservés.</p>

                </div>
            </div>
        </footer>
    )
}

