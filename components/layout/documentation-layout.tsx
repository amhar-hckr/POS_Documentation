import { ReactNode } from 'react';

interface DocumentationLayoutProps {
    children: ReactNode;
}

export function DocumentationLayout({ children }: DocumentationLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border h-16 flex items-center px-6">
                <div className="w-full max-w-7xl mx-auto">
                    <h1 className="text-xl font-semibold text-primary">POS System Documentation</h1>
                </div>
            </header>

            {/* Main content with padding for fixed header and footer */}
            <main className="flex-grow pt-20 pb-20 px-2 sm:px-4">
                {children}
            </main>

            {/* Fixed Footer */}
            
            <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-t border-border h-14 flex items-center px-2 sm:px-4 md:px-6">
                <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
                    <p className="text-xs sm:text-sm text-muted-foreground text-center">© 2025 POS Documentation. Team IT All rights reserved.</p>
                    <p className="text-xs sm:text-sm text-muted-foreground text-center">Last updated: September 22, 2025</p>
                </div>
            </footer>
        </div>
    );
}