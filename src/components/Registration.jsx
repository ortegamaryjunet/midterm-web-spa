import { useState } from "react";

function Registration({addTrack}) {

    const[form, setForm] = useState({
        title: "", genre: "", artist: "", rating: "", label:"", role:""
    });
    const[errors, setErrors] = useState({});
    const[message, setMessage] = useState("");

    const validateField=(name, value)=> {
        let error="";

        if(name === "title") {
            if(!value.trim()) {
                error="Track title is required";
            }
            else if (value.trim().length < 2) {
                error="Track title must be 2 or more characters";
            }
        }

        if(name === "genre") {
            if(!value) {
                error="Please select a genre";
            }
        }

        if(name === "artist") {
            if(!value.trim()) {
                error="Artist name is required";
            }
            else if(value.trim().length < 2) {
                error="Artist name must be 2 or more characters";
            }
        }

        if(name === "rating") {
            if(!value) {
                error="Rating is required";
            }
            else if(Number(value) < 1 || Number(value) > 100) {
                error="Rating must be between 1 and 100 only";
            }
        }
        
        if(name === "label") {
            if(!value.trim()) {
                error="Label name is required";
            }
            else if(value.trim().length < 2) {
                error="Label name must be 2 or more characters";
            }
        }

        if(name === "role") {
            if(!value) {
                error="Please select a role";
            }
        }

        return error;
    };

    const handleChange =(event)=>{
        const {name, value} = event.target;
        
        setForm((prev)=> ({
            ...prev,[name]:value,
        }));

        const error=validateField(name,value);

        setErrors((prev)=> ({
            ...prev,[name]:error
        }));
        setMessage("");
    }

    const handleBlur=(event)=> {
        const{name,value} = event.target;
        const error = validateField(name, value);

        setErrors((prev)=> ({
            ...prev,[name]:error,
        }));
    }

    const handleClear=()=>{
        setForm({title: "", genre: "", artist: "", rating: "", label:"", role:""});

        setErrors({});
        setMessage("");
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const newErrors={};
        const ratingNumber = Number(form.rating);

        if(!form.title) {
            newErrors.title="Track title is required";
        }
        else if (form.title.length < 2) {
            newErrors.title="Track title must be 2 or more characters";
        }

        if(!form.genre) {
            newErrors.genre="Please select a genre";
        }

        if(!form.artist) {
            newErrors.artist="Artist name is required";
        } 
        else if (form.artist.length < 2) {
            newErrors.artist="Artist name must be 2 or more characters";
        }

        if(!form.rating) {
            newErrors.rating="Rating is required";
        }
        else if (ratingNumber < 1 || ratingNumber > 100) {
            newErrors.rating = "Rating must be between 1 and 100 only";
        }

       if(!form.label) {
        newErrors.label = "Label name is required";
       }
       else if (form.label.length < 2) {
        newErrors.label="Label name must be 2 or more characters";
       }

       if(!form.role) {
        newErrors.role = "Please select a role";
       }

       setErrors(newErrors);

       if(Object.keys(newErrors).length > 0) {
        return;
       }

       const newTrack={
        id:Date.now(),
        title: form.title,
        genre: form.genre,
        artist: form.artist,
        rating: ratingNumber,
        label: form.label,
        role: form.role,
       };

       addTrack(newTrack);

       setForm({title: "", genre: "", artist: "", rating: "", label:"", role:""});

       setErrors({});
       setMessage("Track has been added successfully");
    }

    return (

        <div className="min-h-screen bg-[#F4F3FA] flex items-center justify-center p-6 font-sans">
            <div className="w-full max-w-2xl bg-white border-2 border-emerald-300 rounded-2xl p-10 shadow-xl">

                <h1 className="text-center text-xl font-bold text-slate-900 mb-2">New Track Entry</h1>
                <p className="text-center text-sm font-medium text-emerald-700 mb-8">Add a new track and keep your Spotify collection up to date.</p>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                        {/* TRACK TITLE */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">Track Title</label>

                            <input type="text" name="title" value={form.title} onChange={handleChange} onBlur={handleBlur} placeholder="Enter the track title" className="w-full rounded-lg bg-white border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400"/>
                            {errors.title && (<p className="text-red-500 text-xs mt-1">{errors.title}</p>)}
                        </div>

                        {/* GENRE */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">Genre</label>
                            <select name="genre" value={form.genre} onChange={handleChange} onBlur={handleBlur} className="w-full rounded-lg bg-white border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400">

                                <option value="">Select Genre</option>
                                <option value="Pop">Pop</option>
                                <option value="Rock">Rock</option>
                                <option value="Indie">Indie</option>
                                <option value="Jazz">Jazz</option>

                            </select>
                            {errors.genre && (<p className="text-red-500 text-xs mt-1">{errors.genre}</p>)}
                        </div>

                        {/* ARTIST NAME */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">Artist Name</label>

                            <input type="text" name="artist" value={form.artist} onChange={handleChange} onBlur={handleBlur} placeholder="Enter the artist name" className="w-full rounded-lg bg-white border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400"/>
                            {errors.artist && (<p className="text-red-500 text-xs mt-1">{errors.artist}</p>)}
                        </div>

                        {/* RATING */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">Rating/BPM</label>

                            <input type="number" name="rating" min="1" max="100" value={form.rating} onChange={handleChange} onBlur={handleBlur} placeholder="Enter the rating from 1 - 100" className="w-full rounded-lg bg-white border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400"/>
                            {errors.rating && (<p className="text-red-500 text-xs mt-1">{errors.rating}</p>)}
                        </div>

                        {/* LABEL */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">Label Name</label>

                            <input type="text" name="label" value={form.label} onChange={handleChange} onBlur={handleBlur} placeholder="Enter the label name" className="w-full rounded-lg bg-white border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400"/>
                            {errors.label && (<p className="text-red-500 text-xs mt-1">{errors.label}</p>)}
                        </div>

                        {/* ROLE */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">Role</label>
                                <div className="flex items-center gap-6 h-[42px]">

                                    <label className="flex items-center gap-2 text-sm font-medium text-slate-800 cursor-pointer">
                                        <input type="radio" name="role" value="Creator" checked={form.role === "Creator"} onChange={handleChange} className="w-4 h-4 accent-emerald-500"/>Creator
                                    </label>

                                    <label className="flex items-center gap-2 text-sm font-medium text-slate-800 cursor-pointer">
                                        <input type="radio" name="role" value="Listener" checked={form.role === "Listener"} onChange={handleChange} className="w-4 h-4 accent-emerald-500"/>Listener
                                    </label>
                                </div>
                            {errors.role && (<p className="text-red-500 text-xs mt-1">{errors.role}</p>)}
                        </div>
                    </div>

                    {message && (<p className="text-center text-sm font-medium text-emerald-600 mt-6">{message}</p>)}

                    <div className=" mt-10 flex w-full items-center justify-center gap-4">

                        <button type="button" onClick={handleClear} className="px-8 py-2.5 rounded-full border border-slate-300 bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition">CLEAR</button>

                        <button type="submit" className="px-10 py-2.5 rounded-full bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition">Add Track</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default Registration;