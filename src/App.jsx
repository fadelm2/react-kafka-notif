import Navbar from "./component/Navbar";

export default function App() {
  return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="p-6">
          <h1 className="text-2xl font-bold">Homepage</h1>
          <p>Notifikasi akan muncul realtime di pojok kanan atas.</p>
        </div>
      </div>
  );
}
