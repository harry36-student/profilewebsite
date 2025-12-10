import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Harry's Profile
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</a>
                            <a href="#about" className="text-gray-700 hover:text-primary font-medium transition-colors">About</a>
                            <a href="#projects" className="text-gray-700 hover:text-primary font-medium transition-colors">Projects</a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={() => setIsOpen(false)}>Projects</a>
                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
