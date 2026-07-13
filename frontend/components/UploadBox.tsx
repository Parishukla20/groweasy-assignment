"use client";

import { useState } from "react";
import Papa, { ParseResult } from "papaparse";
import axios from "axios";

export default function UploadBox() {
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [mappedData, setMappedData] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
    setMappedData([]);
    setMessage("");

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result: ParseResult<any>) => {
        setData(result.data);
      },
    });
  };

  const handleImport = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post(
        "https://groweasy-backend-ns2t.onrender.com/upload",
        data
      );

      const cleanData = response.data.aiResponse
        .replace("```json", "")
        .replace("```", "")
        .trim();

      const parsedData = JSON.parse(cleanData);

      setMappedData(parsedData);
      setMessage("Data imported successfully");
    } catch (error) {
      console.error(error);
      setMessage("Error sending data");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center">
      <h2 className="text-xl font-semibold mb-4">
        Upload CSV File
      </h2>

      <input
        type="file"
        accept=".csv"
        className="border p-2 rounded"
        onChange={handleFileChange}
      />

      <p className="mt-4 text-gray-500">
        {fileName
          ? `Selected File: ${fileName}`
          : "Choose a CSV file to continue."}
      </p>

      {data.length > 0 && (
        <>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th
                      key={key}
                      className="border border-gray-300 p-2 bg-gray-100"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value: any, i) => (
                      <td
                        key={i}
                        className="border border-gray-300 p-2"
                      >
                        {value || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={handleImport}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Confirm Import
          </button>
        </>
      )}

      {message && (
        <p className="mt-4 text-green-600 font-semibold">
          {message}
        </p>
      )}

      {loading && (
        <div className="mt-8">
          <p className="text-lg font-semibold text-blue-600">
            Processing CSV...
          </p>

          <p className="text-gray-500">
            Please wait while AI maps your records.
          </p>
        </div>
      )}

      {mappedData.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            AI Parsed Records
          </h2>

          <div className="mb-4">
            <p className="font-semibold">
              Total Imported: {mappedData.length}
            </p>

            <p className="font-semibold">
              Total Skipped: 0
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr>
                  {Object.keys(mappedData[0]).map((key) => (
                    <th
                      key={key}
                      className="border border-gray-300 p-2 bg-green-100"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {mappedData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value: any, i) => (
                      <td
                        key={i}
                        className="border border-gray-300 p-2"
                      >
                        {value || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}