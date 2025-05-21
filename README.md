# Hanako-bot

Hanako-botは、Slack用のチャットボットで、デモ用に作成されました。

## 機能概要

- メッセージへの自動返信
- チャンネル内でのインタラクティブなコミュニケーション
- 複数のワークフローに対応

## セットアップ

### 前提条件

- [Slack CLI](https://api.slack.com/automation/cli)のインストール
- Slack有料プランのワークスペース
- Denoの開発環境

### インストール手順

1. プロジェクトのクローン:
```zsh
# プロジェクトをクローン
$ git clone https://github.com/your-repo/hanako-bot.git

# プロジェクトディレクトリに移動
$ cd hanako-bot
```

2. 依存関係のインストール:
```zsh
$ slack install
```

## 開発環境での実行

ローカルで開発する際は、以下のコマンドで実行できます：

```zsh
$ slack run
```

実行中は、アプリ名に「(local)」が付加されます。
終了する場合は `<CTRL> + C` を押してください。

## プロジェクト構成

### ディレクトリ構造

- `.slack/` - Slackアプリの設定ファイル
- `workflows/` - ワークフロー定義
- `triggers/` - トリガー定義
- `assets/` - アイコンなどの静的アセット

### 主要ファイル

- `manifest.ts` - アプリの設定とスコープ定義
- `slack.json` - SDKの依存関係設定
- `import_map.json` - Denoのインポートマップ

## デプロイ

本番環境へのデプロイは以下のコマンドで実行：

```zsh
$ slack deploy
```

## アクティビティログの確認

アプリのログは以下のコマンドでリアルタイムに確認できます：

```zsh
$ slack activity --tail
```

## 権限とスコープ

このボットは以下の必要最小限の権限を使用します：

- `channels:history` - チャンネル内のメッセージの読み取り
- `chat:write` - プライベートチャンネルでのメッセージ送信
- `chat:write.public` - パブリックチャンネルでのメッセージ送信
- `triggers:write` - ワークフローのトリガー作成と管理
- `triggers:read` - ワークフローのトリガー情報の読み取り

## サポートとリソース

- [Slack API ドキュメント](https://api.slack.com/automation)
- [開発者向けクイックスタート](https://api.slack.com/automation/quickstart)
- [サンプルとテンプレート](https://api.slack.com/automation/samples)

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
