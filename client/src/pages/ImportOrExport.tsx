import { useState } from "react";
import "./ImportOrExport.scss";
import Header from "../components/Header";
import hasSongData from "../utils/hasSongData";
import { SongList } from "../interfaces/songsInterface";
import { saveAs } from "file-saver";
import { get, set } from "idb-keyval";

const ImportOrExport = () => {
  const [jsonData, setJsonData] = useState<SongList>();
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const jsonData = JSON.parse(event.target?.result as string);
        saveData(jsonData);
      };
      fileReader.readAsText(selectedFile);
    }
  };

  const exportData = () => {
    hasSongData()
      .then((res) => {
        setJsonData(res);
        const jsonString = JSON.stringify(res);
        const blob = new Blob([jsonString], {
          type: "text/plain;charset=utf-8",
        });
        saveAs(blob, "songData.json");
      })
      .catch((err) => console.log(err));
  };

  function saveData(data: any) {
    const dbPromise = get("song-data");
    dbPromise.then(() => {
      set("song-data", data).then(() => {
        console.log("Data saved successfully!");
      });
    });
  }

  return (
    <>
      <Header />
      <main className="import-or-export">
        <input type="file" accept=".json" onChange={handleFileChange} />
        <button onClick={handleFileUpload} className="import-button">
          Import Data
        </button>
        <button onClick={exportData} className="export-button">
          Export Data
        </button>
      </main>
    </>
  );
};

export default ImportOrExport;
