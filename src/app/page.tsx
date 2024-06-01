import UploadForm from "./_components/UploadForm";

export default async function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">Gallery</h1>

      <UploadForm />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4"></div>
    </main>
  );
}
