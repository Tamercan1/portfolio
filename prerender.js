import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function prerender() {
    console.log("Starting static pre-rendering");

    // 1. Read the client-built index.html
    const templatePath = path.resolve(__dirname, 'dist/index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    // 2. Import the server bundle built by vite
    const serverEntryPath = path.resolve(__dirname, 'dist/server/entry-server.js');
    const { render } = await import(pathToFileURL(serverEntryPath).href);

    // 3. Render the React component tree to an HTML string
    const { html } = render();

    // 4. Inject the pre-rendered HTML into <div id="root"></div>
    const finalHtml = template.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
    );

    // 5. Overwrite dist/index.html with the pre-rendered version
    fs.writeFileSync(templatePath, finalHtml);

    console.log('Static pre-renderin complete!');
}

prerender().catch(console.error);