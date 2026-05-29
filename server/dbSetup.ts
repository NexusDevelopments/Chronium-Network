import { fileURLToPath } from "node:url";
import chalk from "chalk";
import ora from "ora";
import { ModelStatic } from "sequelize";
import { Catalog, CatalogModel } from "./marketplace.js";

interface Items extends Omit<Catalog, "background_video" | "background_image"> {
    background_video?: string;
    background_image?: string;
}

async function installItems(db: ModelStatic<CatalogModel>, items: Items[]) {
    items.forEach(async (item) => {
        await db.create({
            package_name: item.package_name,
            title: item.title,
            image: item.image,
            author: item.author,
            version: item.version,
            description: item.description,
            tags: item.tags,
            payload: item.payload,
            background_video: item.background_video,
            background_image: item.background_image,
            type: item.type
        });
    });
}

async function setupDB(db: ModelStatic<CatalogModel>) {
    //We have some packages that need to be installed if they aren't.
    const items: Items[] = [
        {
            package_name: "com.chronium.gruvbox",
            title: "Gruvbox",
            image: "gruvbox.jpg",
            author: "Chronium Network",
            version: "1.0.0",
            description: "The gruvbox theme",
            tags: ["Theme", "Simple"],
            payload: "gruvbox.css",
            type: "theme"
        },
        {
            package_name: "com.chronium.oled",
            title: "Oled theme",
            image: "oled.jpg",
            author: "Chronium Network",
            version: "1.0.0",
            description: "A sleek & simple Oled theme for Chronium",
            tags: ["Theme", "Simple", "Sleek"],
            payload: "oled.css",
            type: "theme"
        },
        {
            package_name: "com.chronium.lightTheme",
            title: "Light Theme",
            image: "light.png",
            author: "Chronium Network",
            version: "1.0.0",
            description: "A sleek light theme for Chronium",
            tags: ["Theme", "Simple", "Light"],
            payload: "light.css",
            type: "theme"
        },
        {
            package_name: "com.chronium.retro",
            title: "Retro Theme",
            image: "retro.png",
            author: "Chronium Network",
            version: "1.0.0",
            description: "Give a retro look to Chronium",
            tags: ["Theme", "Simple", "Dark", "Retro"],
            payload: "retro.css",
            type: "theme"
        },
        /* {
            package_name: 'gyatt',
            title: 'gyatt',
            image: 'gyatt',
            author: "nebuka",
            version: "2",
            description: "e",
            tags: [ "e" ],
            payload: "gyatt.js",
            type: "plugin-page"
        } */
        //To add plugins: plugin types consist of plugin-sw (workerware) & plugin-page (uv.config.inject)
    ];
    const dbItems = await db.findAll();
    if (dbItems.length === 0) {
        const spinner = ora(chalk.hex("#7967dd")("Performing DB setup...")).start();
        await installItems(db, items);
        spinner.succeed(chalk.hex("#eb6f92")("DB setup complete!"));
    }
}

export { setupDB };
