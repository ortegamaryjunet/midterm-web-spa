import { flexRender, useTable } from "@tanstack/react-table";
import { getCoreRowModel} from "@tanstack/react-table/legacy";
import { useState } from "react";

function Table({data}) {

    const [pageIndex, setPageIndex] = useState(0);
    const pageSize = 5;
    const pageCount = Math.max (
        1, Math.ceil(data.length / pageSize)
    );

    const pageData = data.slice(
        pageIndex * pageSize, 
        pageIndex * pageSize + pageSize
    );

    const columns = [
        {
            accessorKey: "title",
            header: "Track Title",
        },
         {
            accessorKey: "genre",
            header: "Genre"
        },
         {
            accessorKey: "artist",
            header: "Artist Name"
        },
         {
            accessorKey: "rating",
            header: "Rating/BPM"
        },
    ]

    const table = useTable({
        data: pageData, 
        columns, 
        getCoreRowModel: getCoreRowModel(), 
    });

    return (

        <div className="bg-[#F4F3FA] px-10 pb-10">
            <div className="mx-auto w-full max-w-5xl border-2 border-emerald-300 rounded-2xl p-10 shadow-xl">

                <div className="mb-4">
                    <h2 className="text-xl font-bold text-slate-900">PLAYLIST TRACKS</h2>
                    <p className="text-sm font-medium text-emerald-700 mb-8">View all tracks added to your Spotify collection</p>
                </div>

                <div className="overflow-hidden rounded-2xl border-2 border-emerald-200 bg-white shadow-xl">
                    <div className="overflow-x-auto">

                        <table className="w-full text-sm">
                            <thead className="bg-slate-50">
                            {table.getHeaderGroups().map((headerGroup)=> (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header)=>(
                                        <th key={header.id} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>

                            <tbody>
                                {table.getRowModel().rows.length === 0 ? (
                                    <tr>
                                        <td colSpan={columns.length} className="px-5 py-10 text-center text-sm text-slate-400">No tracks added yet.</td>
                                    </tr>
                                ) : (
                                    table.getRowModel().rows.map((row)=>(
                                        <tr key={row.id} className="border-t border-slate-100 transition hover:bg-emerald-50">
                                            {row.getVisibleCells().map((cell)=> (
                                                <td key={cell.id} className="px-5 py-4 text-slate-700">
                                                    {cell.getValue()}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-end gap-4 border-t border-slate-100 px-5 py-4">
                        <span className="text-xs text-slate-400">
                            Page {pageIndex + 1} of {pageCount}
                        </span>

                        <button type="button" onClick={()=>setPageIndex((prev)=>prev - 1)} disabled={pageIndex === 0} className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold tracking-wide text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30">PREVIOUS</button>

                        <button type="button" onClick={()=>setPageIndex((prev)=> prev +1)} disabled={pageIndex >= pageCount -1} className="rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold tracking-wide text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-30">NEXT</button>

                    </div>

                </div>
            </div>
        </div>
    );
}
export default Table;
