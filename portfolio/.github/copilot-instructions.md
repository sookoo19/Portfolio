## 目的
このファイルは、このリポジトリ内で AI コーディングエージェントが短時間で生産的に作業できるよう、プロジェクト固有の構造・ワークフロー・注意点を手早く示すことを目的とします。

## 要点サマリ
- フレームワーク: Vite + React + TypeScript（エントリ: `src/main.tsx` → `src/App.tsx`）
- ビルド: `npm run build` はまず `tsc -b`（型チェック／プロジェクト参照）を実行し、続いて `vite build` を実行します。
- 開発: `npm run dev`（Vite の HMR）
- Lint: `npm run lint`（設定ファイル: `eslint.config.js`）

## アーキテクチャ（短く）
- 単一フロントエンド SPA。ソースは `src/` に格納。
- 画像・静的アセット: `src/assets/`（ソースに直接 import）およびルート直下/public 的に扱われるファイルは `'/vite.svg'` のようにルート参照で読み込まれる（`public/` に置かれる想定）。
- TypeScript はプロジェクト参照を使っており、`tsconfig.json` が `tsconfig.app.json` と `tsconfig.node.json` を参照します。`tsc -b` は型チェックと依存関係解決のために実行されます（`noEmit: true` 設定あり）。

## 主要ファイル（参照先）
- `package.json` — スクリプト、依存関係（`dev`/`build`/`lint`）
- `vite.config.ts` — Vite 設定、現在は `@vitejs/plugin-react-swc` を使用
- `tsconfig.app.json`, `tsconfig.node.json` — コンパイラ設定（厳格モード、noEmit）
- `eslint.config.js` — ESLint の拡張・ルール（`@typescript-eslint`, `react-hooks`, `react-refresh` 等）
- `src/main.tsx`, `src/App.tsx` — エントリとルートコンポーネントの例

## 具体的なワークフローとコマンド
- 開発サーバを起動: `npm install` した上で `npm run dev`（ブラウザで HMR が有効）
- 本番ビルド: `npm run build`（`tsc -b` による型チェックを含む）
- プレビュー: `npm run preview`（ビルド出力のローカルプレビュー）
- Lint 実行: `npm run lint`（必要なら `npx prettier --write .` でフォーマット）

## コードパターンと注意点（このリポジトリ固有）
- 画像取り扱いの例:
  - ルートの静的ファイル: `import viteLogo from '/vite.svg'`（`public/` 配下想定）
  - ソース内アセット: `import reactLogo from './assets/react.svg'`（`src/assets`）
- TypeScript に関しては厳格モードが有効（`strict: true` など）。型の不整合はビルド段階で止められるため、修正時は `tsc -b` を意識する。
- ESLint は `eslint.config.js` で設定。新しいルールやプラグインを追加する場合はこのファイルを編集する。

## 変更のヒント（エージェント向け指示）
- 小さな UI 作業（コンポーネント追加/修正）: `src/components/` を作って `tsx` を追加（このリポジトリはまだ小さいため、既存は `src/App.tsx` を参照）。
- ビルドを壊さない: 変更後は必ず `npm run build` をローカルで通す（`tsc -b` が失敗すると CI/ビルドが止まる）。
- Lint とフォーマット: `npm run lint` の実行を推奨。Prettier が devDependencies に入っているため `npx prettier --write <paths>` を使って整形可能。

## 既知の欠落 / 注意してほしいこと
- テストフレームワークは見当たりません（ユニットテストは現状無し）。
- GitHub Actions 等の CI 設定はリポジトリに無いようです。CI に接続する場合は `npm run build` と `npm run lint` をステップに含めると安全です。

## 参考例（編集例）
- 新しいコンポーネント作成: `src/components/MyWidget.tsx` を追加 → `src/App.tsx` で import し動作確認 → `npm run build`。

---
質問や補足したいローカルルール（ファイル配置、命名規約、CI の要件など）があれば教えてください。必要ならこのファイルを更新して具体例（コンポーネント雛形、lint autofix コマンド等）を追加します。
