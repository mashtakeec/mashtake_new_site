# 🚀 MASHTAKE Site Clone

## 🇯🇵 日本語版 (Japanese Version)

### MASHTAKEサイトクローン

これは[MASHTAKE](https://mashtake.co.jp/)のウェブサイトの**完全なクローン**で、Reactを使用して作成され、元のサイトのデザイン、機能、コンテンツを忠実に再現しています。

#### ✨ 特徴

- **🎯 忠実なクローン**: MASHTAKEの元のデザインの正確な複製
- **⚛️ React 18**: 最新バージョンのReactで構築
- **🎨 レスポンシブデザイン**: すべてのデバイスに対応
- **🚀 最適化されたパフォーマンス**: 高速で効率的な読み込み
- **🌐 完全なルーティング**: すべてのページ間のナビゲーション
- **📱 モバイルファースト**: モバイルに最適化されたデザイン
- **🎭 アニメーション**: ビジュアルエフェクトとスムーズなトランジション
- **🔍 SEO最適化**: メタタグとセマンティック構造

#### 🏗️ プロジェクト構造

```
mashtake-clone/
├── public/
│   ├── resources/          # 元のサイトから抽出されたリソース
│   │   ├── images/        # 49枚のダウンロードされた画像
│   │   ├── css/           # 抽出されたCSSスタイル
│   │   ├── js/            # 抽出されたJavaScript
│   │   └── fonts/         # Webフォント
│   └── index.html         # メインHTML
├── src/
│   ├── components/        # 再利用可能なコンポーネント
│   │   ├── Header.js      # メインナビゲーション
│   │   └── Footer.js      # フッター
│   ├── pages/             # メインページ
│   │   ├── Home.js        # ホームページ
│   │   ├── About.js       # 会社概要
│   │   ├── Services.js    # サービス
│   │   ├── Projects.js    # プロジェクト
│   │   ├── Technologies.js # 技術
│   │   ├── News.js        # ニュース
│   │   └── Contact.js     # お問い合わせ
│   ├── styles/            # CSSスタイル
│   │   ├── main.css       # メインスタイル
│   │   ├── Header.css     # ヘッダースタイル
│   │   └── Home.css       # ホームページスタイル
│   └── assets/            # キー画像
├── resources/              # 抽出された元のリソース
└── package.json           # プロジェクトの依存関係
```

#### 🚀 インストールと実行

##### 前提条件
- Node.js 16+
- npmまたはyarn

##### インストール手順

1. **リポジトリをクローン**
   ```bash
   git clone <repository-url>
   cd aces-clone
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   ```

3. **開発モードで実行**
   ```bash
   npm start
   ```

4. **本番用にビルド**
   ```bash
   npm run build
   ```

5. **ビルドをテスト**
   ```bash
   npm test
   ```

#### 🌐 利用可能なページ

- **🏠 ホーム** (`/`) - ヒーロー、サービス、プロジェクトを含むメインページ
- **👥 会社概要** (`/about`) - MASHTAKEについての情報
- **🛠️ サービス** (`/services`) - 提供されるサービス
- **📊 プロジェクト** (`/projects`) - 成功事例とプロジェクト
- **🔬 技術** (`/technologies`) - 使用される技術
- **📰 ニュース** (`/news`) - ニュースとアップデート
- **📞 お問い合わせ** (`/contact`) - お問い合わせフォーム

#### 🎨 使用される技術

##### フロントエンド
- **React 18.2.0** - UIライブラリ
- **React Router 6.8.0** - ページルーティング
- **Styled Components 5.3.9** - CSS-in-JS
- **Framer Motion 10.0.0** - アニメーション

##### スタイル
- **CSS3** - カスタムスタイル
- **CSS Grid & Flexbox** - モダンなレイアウト
- **CSS Variables** - デザインシステム
- **Media Queries** - レスポンシブデザイン

##### フォント
- **Noto Sans JP** - メインの日本語フォント
- **Inter** - セカンダリフォント
- **Roboto** - フォールバックフォント

#### 📱 レスポンシブデザイン

サイトは以下に最適化されています：
- **📱 モバイル**: 320px - 768px
- **💻 タブレット**: 768px - 1024px
- **🖥️ デスクトップ**: 1024px+

#### 🔧 利用可能なスクリプト

- **`npm start`** - 開発モードで実行
- **`npm run build`** - 本番用にビルド
- **`npm test`** - テストを実行
- **`npm run eject`** - 設定をエジェクト（不可逆）

#### 📁 抽出されたリソース

##### 画像（49ファイル）
- MASHTAKEのメインロゴ
- プロジェクト画像
- クライアントロゴ
- 背景画像
- アイコンとビジュアル要素

##### 抽出されたCSS
- **1,401のインラインスタイル**をキャプチャ
- **4つの外部スタイルシート**を識別
- **キーフレームとアニメーション**を保持
- レスポンシブデザイン用の**メディアクエリ**

##### 抽出されたJavaScript
- **6つのインラインスクリプト**を分析
- **36の外部スクリプト**を識別
- **グローバル変数**を検出
- **イベントリスナー**をマッピング

#### 🎯 実装された機能

- ✅ **完全なナビゲーション**とドロップダウン
- ✅ **固定ヘッダー**とスクロールエフェクト
- ✅ **レスポンシブなモバイルメニュー**
- ✅ **アニメーション**とトランジション
- ✅ 要素の**ホバーエフェクト**
- ✅ レスポンシブな**グリッドシステム**
- ✅ **再利用可能なコンポーネント**
- ✅ ページ間の**ルーティング**
- ✅ SEO用の**メタタグ**
- ✅ カスタム**ローディングインジケーター**

#### 🌟 注目の特徴

##### インテリジェントヘッダー
- スクロール時の透明度変化
- 機能的なドロップダウンメニュー
- 最適化されたモバイルナビゲーション
- アニメーションロゴ

##### ヒーローセクション
- 日本語のメインタイトル
- 会社の完全な説明
- アクションボタン
- 浮遊するアニメーションロゴ

##### コンテンツセクション
- ビジョンとミッション
- アイコン付きサービス
- 注目プロジェクト
- クライアントとパートナー
- 使用される技術

#### 🔍 SEOとパフォーマンス

- ソーシャルメディア用の**完全なメタタグ**
- Facebook用の**Open Graph**
- Twitter用の**Twitter Cards**
- カスタム**ファビコン**
- 重要な画像の**プリロード**
- **遅延読み込み**を実装
- Webフォントの**最適化**

#### 📊 プロジェクト統計

- **📄 ページ**: 7つのメインページ
- **🧩 コンポーネント**: 2つのベースコンポーネント
- **🖼️ 画像**: 49のビジュアルリソース
- **🎨 スタイル**: 3つのメインCSSファイル
- **📱 レスポンシブ**: 3つのメインブレークポイント
- **🌐 言語**: 日本語（メイン）+ 英語

#### 🚧 次のステップ

1. **より多くのページ**を完全なコンテンツで実装
2. **インタラクティブな機能**を追加（フォームなど）
3. 遅延読み込みで**パフォーマンスを最適化**
4. オフライン機能のための**PWAを実装**
5. **自動テスト**を追加
6. コンテンツ管理のための**CMSを実装**

#### 📝 重要な注意事項

- このプロジェクトは**教育と開発目的のみ**です
- すべてのリソースはMASHTAKEの元のサイトから抽出されています
- コンテンツは元のサイトと同様に**日本語**です
- **視覚的な忠実性**を最大限に維持しています

#### 🤝 貢献

プロジェクトに貢献するには：

1. リポジトリをフォーク
2. 機能用のブランチを作成（`git checkout -b feature/AmazingFeature`）
3. 変更をコミット（`git commit -m 'Add some AmazingFeature'`）
4. ブランチにプッシュ（`git push origin feature/AmazingFeature`）
5. プルリクエストを開く

#### 📄 ライセンス

このプロジェクトはMITライセンスの下にあります。詳細は`LICENSE`ファイルを参照してください。

#### 📞 連絡先

- **プロジェクト**: MASHTAKEサイトクローン
- **元のサイト**: [https://mashtake.co.jp/](https://mashtake.co.jp/)
- **開発者**: Reactでクローン

---

**🎉 MASHTAKEウェブサイトのこの忠実なクローンをお楽しみください！**

---

## 🇪🇸 Versión en Español (Spanish Version)

Este es un **clon exacto** del sitio web de [MASHTAKE](https://mashtake.co.jp/) creado con React, que replica fielmente el diseño, funcionalidad y contenido del sitio original.

## ✨ Características

- **🎯 Clon Fiel**: Replica exacta del diseño original de MASHTAKE
- **⚛️ React 18**: Construido con la última versión de React
- **🎨 Diseño Responsive**: Adaptable a todos los dispositivos
- **🚀 Performance Optimizada**: Carga rápida y eficiente
- **🌐 Routing Completo**: Navegación entre todas las páginas
- **📱 Mobile First**: Diseño optimizado para móviles
- **🎭 Animaciones**: Efectos visuales y transiciones suaves
- **🔍 SEO Optimizado**: Meta tags y estructura semántica

## 🏗️ Estructura del Proyecto

```
mashtake-clone/
├── public/
│   ├── resources/          # Recursos extraídos del sitio original
│   │   ├── images/        # 49 imágenes descargadas
│   │   ├── css/           # Estilos CSS extraídos
│   │   ├── js/            # JavaScript extraído
│   │   └── fonts/         # Fuentes web
│   └── index.html         # HTML principal
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.js      # Navegación principal
│   │   └── Footer.js      # Pie de página
│   ├── pages/             # Páginas principales
│   │   ├── Home.js        # Página de inicio
│   │   ├── About.js       # Nosotros
│   │   ├── Services.js    # Servicios
│   │   ├── Projects.js    # Proyectos
│   │   ├── Technologies.js # Tecnologías
│   │   ├── News.js        # Noticias
│   │   └── Contact.js     # Contacto
│   ├── styles/            # Estilos CSS
│   │   ├── main.css       # Estilos principales
│   │   ├── Header.css     # Estilos del header
│   │   └── Home.css       # Estilos de la página principal
│   └── assets/            # Imágenes clave
├── resources/              # Recursos originales extraídos
└── package.json           # Dependencias del proyecto
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd aces-clone
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm start
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Probar la build**
   ```bash
   npm test
   ```

## 🌐 Páginas Disponibles

- **🏠 Home** (`/`) - Página principal con hero, servicios y proyectos
- **👥 About** (`/about`) - Información sobre MASHTAKE
- **🛠️ Services** (`/services`) - Servicios ofrecidos
- **📊 Projects** (`/projects`) - Casos de éxito y proyectos
- **🔬 Technologies** (`/technologies`) - Tecnologías utilizadas
- **📰 News** (`/news`) - Noticias y actualizaciones
- **📞 Contact** (`/contact`) - Formulario de contacto

## 🎨 Tecnologías Utilizadas

### Frontend
- **React 18.2.0** - Biblioteca de UI
- **React Router 6.8.0** - Enrutamiento de páginas
- **Styled Components 5.3.9** - CSS-in-JS
- **Framer Motion 10.0.0** - Animaciones

### Estilos
- **CSS3** - Estilos personalizados
- **CSS Grid & Flexbox** - Layout moderno
- **CSS Variables** - Sistema de diseño
- **Media Queries** - Diseño responsive

### Fuentes
- **Noto Sans JP** - Fuente principal japonesa
- **Inter** - Fuente secundaria
- **Roboto** - Fuente de respaldo

## 📱 Responsive Design

El sitio está optimizado para:
- **📱 Mobile**: 320px - 768px
- **💻 Tablet**: 768px - 1024px
- **🖥️ Desktop**: 1024px+

## 🔧 Scripts Disponibles

- **`npm start`** - Ejecutar en modo desarrollo
- **`npm run build`** - Construir para producción
- **`npm test`** - Ejecutar tests
- **`npm run eject`** - Eyectar configuración (irreversible)

## 📁 Recursos Extraídos

### Imágenes (49 archivos)
- Logo principal de MASHTAKE
- Imágenes de proyectos
- Logos de clientes
- Imágenes de fondo
- Iconos y elementos visuales

### CSS Extraído
- **1,401 estilos inline** capturados
- **4 hojas de estilo externas** identificadas
- **Keyframes y animaciones** preservados
- **Media queries** para responsive design

### JavaScript Extraído
- **6 scripts inline** analizados
- **36 scripts externos** identificados
- **Variables globales** detectadas
- **Event listeners** mapeados

## 🎯 Funcionalidades Implementadas

- ✅ **Navegación completa** con dropdowns
- ✅ **Header fijo** con efectos de scroll
- ✅ **Menú móvil** responsive
- ✅ **Animaciones** y transiciones
- ✅ **Efectos hover** en elementos
- ✅ **Grid system** responsive
- ✅ **Componentes reutilizables**
- ✅ **Routing** entre páginas
- ✅ **Meta tags** para SEO
- ✅ **Loading indicator** personalizado

## 🌟 Características Destacadas

### Header Inteligente
- Cambia de transparencia al hacer scroll
- Menús dropdown funcionales
- Navegación móvil optimizada
- Logo animado

### Hero Section
- Título principal en japonés
- Descripción completa de la empresa
- Botones de acción
- Logo flotante animado

### Secciones de Contenido
- Vision & Mission
- Servicios con iconos
- Proyectos destacados
- Clientes y partners
- Tecnologías utilizadas

## 🔍 SEO y Performance

- **Meta tags** completos para redes sociales
- **Open Graph** para Facebook
- **Twitter Cards** para Twitter
- **Favicon** personalizado
- **Preload** de imágenes críticas
- **Lazy loading** implementado
- **Optimización** de fuentes web

## 📊 Estadísticas del Proyecto

- **📄 Páginas**: 7 páginas principales
- **🧩 Componentes**: 2 componentes base
- **🖼️ Imágenes**: 49 recursos visuales
- **🎨 Estilos**: 3 archivos CSS principales
- **📱 Responsive**: 3 breakpoints principales
- **🌐 Idiomas**: Japonés (principal) + Inglés

## 🚧 Próximos Pasos

1. **Implementar más páginas** con contenido completo
2. **Agregar funcionalidades interactivas** (formularios, etc.)
3. **Optimizar performance** con lazy loading
4. **Implementar PWA** para funcionalidad offline
5. **Agregar tests** automatizados
6. **Implementar CMS** para gestión de contenido

## 📝 Notas Importantes

- Este proyecto es **solo para fines educativos y de desarrollo**
- Todos los recursos han sido extraídos del sitio original de MASHTAKE
- El contenido está en **japonés** como en el sitio original
- Se mantiene la **fidelidad visual** al máximo posible

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Proyecto**: MASHTAKE Site Clone
- **Sitio Original**: [https://mashtake.co.jp/](https://mashtake.co.jp/)
- **Desarrollador**: Clonado con React

---

**🎉 ¡Disfruta explorando este clon fiel del sitio web de MASHTAKE!**

