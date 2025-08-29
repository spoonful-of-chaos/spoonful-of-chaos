import mc_textures from "@/data/mc/mc_textures.json"

// All this is only needed to unzip all the files and create the json that describes each texture.

// import fs from "fs";
// import fsPromises from "fs/promises";
// import path from "path";
// import unzipper from "unzipper";
// import { Vibrant } from "node-vibrant/node";
// import pLimit from "p-limit";

// // ========== CONFIG ==========
// const ZIP_PATH = "src/data/mc/assets-minecraft_textures_1.20.1.zip";
// const EXTRACT_PATH = "src/data/mc/minecraft_textures";
// const OUTPUT_JSON = "src/data/mc/mc_textures.json";
// const CONCURRENT_LIMIT = 10; // Number of files processed at once
// // ============================

// // --- Utility Functions ---

// function idToTitle(idName) {
//   return idName.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
// }

// function inferMaterial(idName) {
//   if (idName.includes("campfire")|| /(campfire|candle|rail|sapling|stem|anvil|door_top|door_bottom|front_on|glass_pane_top|chain_command|command_block|respawn_anchor|destroy_stage|fire_0|fire_1|lantern|kelp|lava_flow|lava_still|magma|portal|prismarine|sculk|seagrass|sea_lantern|stonecutter|water_flow|water_still)/.test(idName)) return "other"
//   if (idName.includes("ore") || /(iron|gold|copper|anvil|rail)/.test(idName))
//     return "metal";
//   if (/(diamond|emerald|amethyst|lapis|quartz|redstone)/.test(idName))
//     return "mineral";
//   if (/(dripleaf|azalea|dandelion|poppy|orchid|allium|bluet|tulip|daisy|cornflower|lily|sunflower|lilac|rose|peony|grass|vine|flower|mushroom|roots|moss|leaves|leaf|fungus|propagule|beetroots|sapling|stem|cocoa)/.test(idName)) return "plant";
//   if (/(barrel|oak|spruce|birch|jungle|acacia|mangrove|cherry|crimson|warped|bee|log|planks|wood|bamboo)/.test(idName))
//     return "wood";
//   if (/(dirt|mud|clay|gravel|sand)/.test(idName)) return "earth";
//   if (/(wool|carpet|bed|banner)/.test(idName)) return "fabric";
//   if (/(brick|terracotta|concrete|glazed)/.test(idName)) return "masonry";
//   if (/(glass|pane)/.test(idName)) return "glass";
//   return "stone"; // fallback
// }

// async function analyzeColors(filePath) {
//   try {
//     const buffer = await fsPromises.readFile(filePath);
//     const palette = await Vibrant.from(buffer).maxColorCount(6).getPalette();

//     const swatches = Object.values(palette)
//       .filter(Boolean)
//       .sort((a, b) => b.population - a.population);

//     const average = swatches.length > 0 ? swatches[0].hex : null;
//     const primary = swatches[0] ? swatches[0].hex : null;
//     const secondary = swatches[1] ? swatches[1].hex : null;

//     return { average, primary, secondary };
//   } catch (err) {
//     console.error("Color analysis failed for:", filePath, err.message);
//     return { average: "#000000", primary: null, secondary: null };
//   }
// }

// // Recursively collect PNG files
// async function walk(dir) {
//   let results = [];
//   const list = await fsPromises.readdir(dir, { withFileTypes: true });
//   for (const dirent of list) {
//     const filePath = path.join(dir, dirent.name);
//     if (dirent.isDirectory()) {
//       results = results.concat(await walk(filePath));
//     } else if (filePath.endsWith(".png")) {
//       results.push(filePath);
//     }
//   }
//   return results;
// }

// // Reliable extraction for large ZIPs
// async function extractZip(zipPath, extractPath) {
//   const directory = await unzipper.Open.file(zipPath);
//   for (const file of directory.files) {
//     if (file.type === "File") {
//       const fullPath = path.join(extractPath, file.path);
//       await fsPromises.mkdir(path.dirname(fullPath), { recursive: true });
//       await new Promise((resolve, reject) => {
//         file.stream()
//           .pipe(fs.createWriteStream(fullPath))
//           .on("finish", resolve)
//           .on("error", reject);
//       });
//     }
//   }
// }

// // --- Main Workflow ---
// async function main() {
//   if (!fs.existsSync(EXTRACT_PATH)) {
//     fs.mkdirSync(EXTRACT_PATH, { recursive: true });
//   }

//   console.log("Extracting zip...");
//   await extractZip(ZIP_PATH, EXTRACT_PATH);
//   console.log("Extraction complete.");

//   const allPNGs = await walk(EXTRACT_PATH);
//   console.log(`Found ${allPNGs.length} PNG files.`);

//   const limit = pLimit(CONCURRENT_LIMIT);
//   const records = await Promise.all(
//     allPNGs.map((filePath) =>
//       limit(async () => {
//         const idName = path.basename(filePath, ".png");
//         const name = idToTitle(idName);
//         const material = inferMaterial(idName);
//         const colorMeta = await analyzeColors(filePath);

//         return {
//           id: idName,
//           name,
//           material,
//           texture_path: path.relative(EXTRACT_PATH, filePath),
//           color_metadata: colorMeta,
//         };
//       })
//     )
//   );

//   await fsPromises.writeFile(OUTPUT_JSON, JSON.stringify(records, null, 2));
//   console.log(`Saved ${records.length} entries to ${OUTPUT_JSON}`);
// }

// main().catch((err) => console.error(err));


export const getBlocks = () => {
  const str = JSON.stringify(mc_textures)
  const blocks = JSON.parse(str)
  return blocks;
}