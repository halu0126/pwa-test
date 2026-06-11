// サーバーから通知（プッシュイベント）を受け取った時の処理
self.addEventListener('push', function(event) {
    // 通知のタイトルと内容を設定（まずはテスト用の固定文字）
    const title = '通知システムテスト';
    const options = {
        body: 'あなたへの新しい通知が届きました！',
        icon: 'icon.png' // 後でアイコンを設定できます
    };

    // スマホの画面にポップアップを表示する
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});