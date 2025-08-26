const fs = require('fs-extra');
const path = require('path');

class AssetCopier {
    constructor() {
        this.sourceDir = path.join(__dirname, 'resources');
        this.publicDir = path.join(__dirname, 'public');
        this.assetsDir = path.join(__dirname, 'src', 'assets');
    }

    async copyAssets() {
        console.log('📁 Copiando recursos al proyecto React...');
        
        try {
            // Crear directorios si no existen
            await fs.ensureDir(this.publicDir);
            await fs.ensureDir(this.assetsDir);
            
            // Copiar imágenes a public/resources/images
            const publicImagesDir = path.join(this.publicDir, 'resources', 'images');
            await fs.ensureDir(publicImagesDir);
            
            const sourceImagesDir = path.join(this.sourceDir, 'images');
            if (await fs.pathExists(sourceImagesDir)) {
                await fs.copy(sourceImagesDir, publicImagesDir);
                console.log('  ✅ Imágenes copiadas a public/resources/images');
            }
            
            // Copiar CSS a public/resources/css
            const publicCssDir = path.join(this.publicDir, 'resources', 'css');
            await fs.ensureDir(publicCssDir);
            
            const sourceCssDir = path.join(this.sourceDir, 'css');
            if (await fs.pathExists(sourceCssDir)) {
                await fs.copy(sourceCssDir, publicCssDir);
                console.log('  ✅ CSS copiado a public/resources/css');
            }
            
            // Copiar JavaScript a public/resources/js
            const publicJsDir = path.join(this.publicDir, 'resources', 'js');
            await fs.ensureDir(publicJsDir);
            
            const sourceJsDir = path.join(this.sourceDir, 'js');
            if (await fs.pathExists(sourceJsDir)) {
                await fs.copy(sourceJsDir, publicJsDir);
                console.log('  ✅ JavaScript copiado a public/resources/js');
            }
            
            // Copiar fuentes a public/resources/fonts
            const publicFontsDir = path.join(this.publicDir, 'resources', 'fonts');
            await fs.ensureDir(publicFontsDir);
            
            const sourceFontsDir = path.join(this.sourceDir, 'fonts');
            if (await fs.pathExists(sourceFontsDir)) {
                await fs.copy(sourceFontsDir, publicFontsDir);
                console.log('  ✅ Fuentes copiadas a public/resources/fonts');
            }
            
            // Copiar algunas imágenes clave a src/assets para uso en componentes
            const keyImages = [
                'aces-animation-logo.png',
                'career-bg-01.jpg',
                'cta-download-bg.jpg',
                'cta-contact-bg.jpg'
            ];
            
            for (const image of keyImages) {
                const sourcePath = path.join(sourceImagesDir, image);
                const destPath = path.join(this.assetsDir, image);
                
                if (await fs.pathExists(sourcePath)) {
                    await fs.copy(sourcePath, destPath);
                    console.log(`  ✅ ${image} copiado a src/assets`);
                }
            }
            
            console.log('🎉 Todos los recursos han sido copiados exitosamente');
            
        } catch (error) {
            console.error('❌ Error copiando recursos:', error);
        }
    }

    async createAssetIndex() {
        try {
            const assetsDir = path.join(this.assetsDir);
            const files = await fs.readdir(assetsDir);
            
            const indexContent = `// ========================================
// ASSETS INDEX - ACES SITE CLONE
// ========================================

${files
    .filter(file => file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i))
    .map(file => {
        const name = file.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, '');
        return `export { default as ${name} } from './${file}';`;
    })
    .join('\n')}

export default {
${files
    .filter(file => file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i))
    .map(file => {
        const name = file.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, '');
        return `  ${name}: require('./${file}')`;
    })
    .join(',\n')}
};
`;
            
            await fs.writeFile(path.join(assetsDir, 'index.js'), indexContent);
            console.log('  ✅ Archivo de índice de assets creado');
            
        } catch (error) {
            console.error('❌ Error creando índice de assets:', error);
        }
    }
}

async function main() {
    const copier = new AssetCopier();
    await copier.copyAssets();
    await copier.createAssetIndex();
}

if (require.main === module) {
    main().catch(console.error);
}
