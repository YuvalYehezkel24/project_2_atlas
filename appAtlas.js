import { doApi } from "./atlasManager.js";
import { declareEvents } from "./atlasDeclareEvents.js"


const init = () => {
  doApi("israel");
  declareEvents(doApi);
}



init();