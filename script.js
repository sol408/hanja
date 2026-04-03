function startStudy(category) {
    // 1. 백틱 안의 긴 글을 가져와서 줄바꿈 기준으로 자름
    const rawText = flashcardsData[category].trim();
    const lines = rawText.split('\n');

    // 2. 각 줄을 다시 | 기준으로 쪼개서 데이터화함
    currentCards = lines.map(line => {
        const parts = line.split('|').map(p => p.trim());
        return {
            kanji: parts[0],
            hangeul: parts[1],
            mean: parts[2],
            radical: parts[3],
            info: parts[4],
            tip: parts[5]
        };
    });

    // 3. 화면 전환
    document.getElementById('menu-view').style.display = 'none';
    document.getElementById('card-view').style.display = 'block';
    renderCard(0); // 첫 번째 카드부터 시작
}