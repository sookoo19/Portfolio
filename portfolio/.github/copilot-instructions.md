# Portfolio プロジェクト - AI コーディングエージェント ガイド

## プロジェクト概要
個人ポートフォリオサイト（SPA）。スクロールベースの単一ページレイアウトで、アニメーション豊富なインタラクティブ UI が特徴。

**技術スタック**: Vite + React 19 + TypeScript + Tailwind CSS 4 + Motion (旧 Framer Motion)

## アーキテクチャ

### アプリケーション構造
```
src/main.tsx           # ルートエントリポイント（グラデーション背景、レイジーローディング、スクロール制御）
  └─ src/pages/App.tsx # ランディングページ（グリッドレイアウトの MoveIcon 群）
  └─ src/pages/Intro.tsx, Profile.tsx, Skill.tsx, Work.tsx  # スクロールセクション
  └─ src/components/   # 再利用可能なコンポーネント
```

**重要**: `main.tsx` は `App.tsx` を 3.5 秒の遅延付きで lazy load する（`Loading` コンポーネント表示）。`RootApp` が実際のルートで、動的グラデーション背景とスクロールベースのページ管理を実装。

### ページ構成パターン
- **セクションベース**: 各ページ（Intro, Profile, Skill, Work）は `id` 属性を持つ
- **ナビゲーション**: `MoveIcon` コンポーネントが `scrollTo` prop で `document.getElementById(id).scrollIntoView()` を実行
- **モーダル**: `TripostModal`, `PortfolioModal` が `onClick` prop で開閉（`AnimatePresence` + Portal パターン使用）

## 開発ワークフロー

### 必須コマンド
```bash
npm run dev              # 開発サーバ起動（ポート 5173）
npm run build            # 型チェック → 本番ビルド（tsc -b && vite build）
npm run lint:fix         # ESLint + Prettier 自動修正
npm run storybook        # Storybook 起動（ポート 6006）
```

**ビルド前の必須チェック**: `npm run build` は必ず成功させる（`tsc -b` が失敗すると本番ビルドできない）

### Storybook 統合
- **コンポーネント開発**: `src/components/*.stories.ts(x)` で管理
- **テスト**: Vitest + Playwright によるブラウザテスト（`vitest.config.ts` の Storybook プラグイン使用）
- **パターン**: すべての Story ファイルは `Meta` と `StoryObj` を export（例: `Button.stories.ts`）

## コーディング規約

### アニメーション（Motion）
**重要**: Motion ライブラリは 2 つのインポートパスが混在
```tsx
// 推奨（新しい Motion）
import { motion, AnimatePresence } from 'motion/react';

// 非推奨（古い Framer Motion が残存）
import { motion } from 'framer-motion';  // SkillSheet.tsx のみ使用中
```
**今後の変更**: 新しいコンポーネントは `motion/react` を使用。`SkillSheet.tsx` は将来的に移行が必要。

### コンポーネントパターン
```tsx
// 典型的な Props 定義（export interface で Storybook 対応）
export interface MoveIconProps {
  name?: string;
  src: string;
  scrollTo?: string;   // セクション ID でスクロール
  onClick?: () => void; // カスタムアクション（モーダル開閉など）
}

// Tailwind クラスの使用例（カスタム色は #f2f2f2 など直指定が多い）
className='text-[#f2f2f2] bg-black/20 rounded-[50px]'
```

### 画像・アセット管理
```tsx
// public/ 配下の画像（絶対パス）
src='/images/profile-icon.svg'
src='/images/portfolio/screenshot1.png'

// Vite によるバンドル（import 不要、パスのみ指定）
```

### TypeScript 設定
- **strict モード有効**: `noUnusedLocals`, `noUnusedParameters` でクリーンなコードを強制
- **プロジェクト参照**: `tsconfig.json` が `tsconfig.app.json`（src）と `tsconfig.node.json`（Vite 設定）を参照
- **noEmit: true**: Vite がトランスパイル担当、TypeScript は型チェックのみ

### スタイリング
- **Tailwind CSS 4**: `src/index.css` で `@import 'tailwindcss';` のみ（設定は `postcss.config.cjs`）
- **カスタム CSS**: `components/button.css` のようにコンポーネント固有 CSS ファイルを許容
- **アニメーション**: Motion の `whileInView`, `whileHover` を多用（例: `SkillSheet` のスター評価）

## プロジェクト固有の注意点

### 1. スクロール制御
`main.tsx` で `useScroll` と `useTransform` を使用し、グラデーション背景がマウス位置に追従。新しいセクション追加時は：
- ページコンポーネントに `id="section-name"` を設定
- `App.tsx` の `MoveIcon` に `scrollTo="section-name"` を追加

### 2. モーダルの実装パターン
```tsx
// 状態管理（親コンポーネント）
const [openModal, setOpenModal] = useState(false);

// モーダルコンポーネント（AnimatePresence で開閉アニメーション）
<AnimatePresence>
  {isOpen && (
    <motion.div onClick={onClose} /* 背景クリックで閉じる */>
      <motion.div onClick={e => e.stopPropagation()} /* コンテンツ */>
```

### 3. Storybook での型定義
```tsx
// コンポーネント
export interface ButtonProps { ... }

// Story ファイル
const meta = {
  component: Button,
  tags: ['autodocs'],  // 自動ドキュメント生成
} satisfies Meta<typeof Button>;
```

### 4. 既知の技術的負債
- `SkillSheet.tsx` が `framer-motion` を使用（他は `motion/react`）
- ユニットテストなし（Storybook のブラウザテストのみ）
- ESLint 設定が Prettier プラグイン未反映（`lint:fix` スクリプトで対応中）

## 新機能追加の典型フロー

### 新しいコンポーネント作成
1. `src/components/NewComponent.tsx` 作成（`export interface NewComponentProps` を定義）
2. `src/components/NewComponent.stories.tsx` 作成（Storybook 確認）
3. 親コンポーネントから import して使用
4. `npm run lint:fix && npm run build` で検証

### 新しいページセクション追加
1. `src/pages/NewSection.tsx` 作成（`id="new-section"` 設定）
2. `main.tsx` の `RootApp` 内に `<NewSection />` 追加
3. `App.tsx` に対応する `MoveIcon` 追加（`scrollTo="new-section"`）
4. アイコン画像を `public/images/` に配置

## トラブルシューティング

### ビルドエラー
- **型エラー**: `tsc -b` を個別実行して原因特定
- **Vite エラー**: `node_modules/.vite/` 削除後 `npm run dev` 再起動

### Storybook が起動しない
- `npm run storybook` 前に `npm install` 実行
- `.storybook/vitest.setup.ts` の存在確認

### Motion アニメーションが動かない
- `motion/react` と `framer-motion` の混在確認
- `viewport={{ once: true }}` の有無（初回表示のみアニメーション）
