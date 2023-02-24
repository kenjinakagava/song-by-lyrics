import { get } from "idb-keyval";

const hasSongData = async () => {
  try {
    const data = await get("song-data");
    return data;
  } catch (error) {
    console.log(`error getting song-data from indexedDB: ${error}`);
  }
};

export default hasSongData;
