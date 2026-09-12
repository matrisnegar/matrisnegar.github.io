import fs from "node:fs";import path from "node:path";
const root=path.resolve("dist/client");if(!fs.existsSync(root))throw new Error("Build output missing");
const required=["index.html","about.html","products.html","services.html","customers.html","testimonials.html","demo.html","faq.html","blog.html","contact.html","privacy.html","terms.html","404.html","sitemap.xml","robots.txt"];
for(const file of required){if(!fs.existsSync(path.join(root,file)))throw new Error(`Missing ${file}`)}
const products=JSON.parse(fs.readFileSync("data/products.json","utf8"));for(const p of products){if(!fs.existsSync(path.join(root,"products",`${p.slug}.html`)))throw new Error(`Missing product route ${p.slug}`);if(!fs.existsSync(path.join(root,p.image)))throw new Error(`Missing image ${p.image}`)}
for(const file of ["services.json","testimonials.json","faq.json","projects.json","demo-requests.json"]){JSON.parse(fs.readFileSync(path.join("data",file),"utf8"))}
const htmlFiles=[];function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else if(f.endsWith(".html"))htmlFiles.push(f)}}walk(root);
for(const file of htmlFiles){const html=fs.readFileSync(file,"utf8");if(!html.includes('dir="rtl"'))throw new Error(`RTL missing: ${file}`);if(!/<meta name="description"/.test(html))throw new Error(`Description missing: ${file}`)}
console.log(`Verified ${htmlFiles.length} HTML pages, ${products.length} product pages and JSON data files.`);
