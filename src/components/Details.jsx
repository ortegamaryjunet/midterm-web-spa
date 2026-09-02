function Details({ track }) {

    if(!track) {
        return (

            <div className="bg-[#F4F3FA] px-10 pb-10">
                <div className="mx-auto w-full max-w-5xl rounded-2xl border-2 border-emerald-200 bg-white p-10 shadow-xl">
                    <h2 className="text-xl font-bold text-slate-900">TRACK DETAILS
                    </h2>
                    <p className="mb-8 text-sm font-medium text-emerald-700">Select a track from the table to view its full details</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#F4F3FA] px-10 pb-10">
            <div className="mx-auto w-full max-w-5xl rounded-2xl border-2 border-emerald-200 bg-white p-10 shadow-xl">

                <div className="mb-4">

                    <h2 className="text-xl font-bold text-slate-900">TRACK DETAILS</h2>
                    <p className="mb-8 text-sm font-medium text-emerald-700">Below is the full details for the selected track</p>
                </div>

                <div  className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    <div>
                        <p className="text-xs font-semibold uppercase text-slate-400">Track Title</p>
                        <p className="mt-1 text-base font-semibold text-slate-900">{track.title}</p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase text-slate-400">Genre</p>
                        <p className="mt-1 text-base text-slate-700">{track.genre}</p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase text-slate-400">Artist Name</p>
                        <p className="mt-1 text-base text-slate-700">{track.artist}</p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase text-slate-400">Rating/BPM</p>
                        <p className="mt-1 text-base text-slate-700">{track.rating}</p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase text-slate-400">Label Name</p>
                        <p className="mt-1 text-base text-slate-700">{track.label}</p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase text-slate-400">Role</p>
                        <p className="mt-1 text-base text-slate-700">{track.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Details;