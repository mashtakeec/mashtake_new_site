const https = require('https');
const http = require('http');
const fs = require('fs-extra');
const path = require('path');

class FontDownloader {
    constructor() {
        this.fontsDir = path.join(__dirname, "resources", "fonts");
        this.fontUrls = [
            // Fuentes principales del sitio ACES
            "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap",
            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
            "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        ];
    }

    async downloadFonts() {
        console.log("🔤 Descargando fuentes web...");
        
        for (const fontUrl of this.fontUrls) {
            try {
                await this.downloadFont(fontUrl);
            } catch (error) {
                console.log(`⚠️ Error descargando fuente: ${error.message}`);
            }
        }
        
        console.log("✅ Fuentes descargadas");
    }

    async downloadFont(url, filepath) {
        return new Promise((resolve, reject) => {
            const protocol = url.startsWith('https:') ? https : http;
            const request = protocol.get(url, (response) => {
                if (response.statusCode === 200) {
                    const file = fs.createWriteStream(filepath);
                    response.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        resolve();
                    });
                } else {
                    reject(new Error(`HTTP ${response.statusCode}`));
                }
            });
            request.on('error', reject);
            request.setTimeout(10000, () => {
                request.destroy();
                reject(new Error('Timeout'));
            });
        });
    }

    async downloadFont(fontUrl) {
        try {
            const filename = `font-${Date.now()}.css`;
            const filepath = path.join(this.fontsDir, filename);
            await this.downloadFont(fontUrl, filepath);
            console.log(`  📥 ${filename}`);
        } catch (error) {
            console.log(`  ❌ Error: ${error.message}`);
        }
    }
}

async function main() {
    const downloader = new FontDownloader();
    await downloader.downloadFonts();
}

if (require.main === module) {
    main().catch(console.error);
}
