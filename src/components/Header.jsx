function Header() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black p-4">
            <div className="container mx-auto flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <img src="/spotify-logo.png" alt="logo" className="h-10 w-10 object-contain"/>
                    <div className="text-3xl font-bold tracking-tight text-white hover:cursor-pointer hover:text-green-600">Spotify Track Playlist Manager</div>
                </div>

                <div className="flex items-center gap-4 text-xl">
                    <button className="px-4 py-2 tracking-tight font-bold text-white hover:text-green-600">Add New Track</button>
                    <button className="px-4 py-2 tracking-tight font-bold text-white hover:text-green-600">Tracks</button>
                    <button className="px-4 py-2 tracking-tight font-bold text-white hover:text-green-600">Details</button>
                </div>
            </div>
        </nav>
    );
}
export default Header;