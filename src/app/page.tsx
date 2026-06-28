export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Ece's Hynotherapy Sessions</h1>
      <p className="text-lg text-gray-600 mb-8">
        Guided hypnotherapy sessions to help you relax, heal, and grow — available exclusively to members.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
        Become a Member
      </button>
    </main>
  );
}