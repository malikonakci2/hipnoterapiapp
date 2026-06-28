export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to StreamVault</h1>
      <p className="text-lg text-gray-600 mb-8">
        Exclusive video content for members.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
        Join Now
      </button>
    </main>
  );
}