import { useEffect, useState } from "react";

export default function Navbar() {
    const [notif, setNotif] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8089/ws");

        ws.onmessage = (event) => {
            setNotif((prev) => [...prev, event.data]);
        };

        return () => ws.close();
    }, []);

    return (
        <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold">MyApp</h1>

            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200"
                >
                    🔔
                    {notif.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {notif.length}
            </span>
                    )}
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3 max-h-72 overflow-auto">
                        <h3 className="font-semibold mb-2">Notifications</h3>
                        {notif.length === 0 ? (
                            <p className="text-sm text-gray-500">No notifications</p>
                        ) : (
                            notif.map((n, i) => (
                                <div
                                    key={i}
                                    className="p-2 border-b last:border-none text-sm text-gray-800"
                                >
                                    {n}
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}
