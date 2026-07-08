import UploadBox from "../components/UploadBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[700px]">

        <h1 className="text-3xl font-bold text-center mb-2">
          GrowEasy CSV Importer
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Upload your CSV file and preview the data before importing.
        </p>

        <UploadBox/>

      </div>
    </main>
  );
}