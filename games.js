const games = [
    {
        id: "blackops2",
        title: "Call of Duty: Black Ops II",
        steamAppId: "202970", 
        content: `
            <h3>Maus & Tastatur</h3>
            <ul>
                <li>DPI: 800</li>
                <li>In-Game Sens: 1.5</li>
                <li>FOV: 90</li>
            </ul>
            <h3>Video Settings</h3>
            <p>Alles auf Low für maximale FPS. Schatten deaktiviert.</p>
        `
    }, // <-- HIER FEHLTE DAS KOMMA
    {
        id: "warzone",
        title: "Call of Duty: Warzone",
        steamAppId: "1962663",
        content: `
            <h3>Test</h3><p>Test</p>
        `
    } // Das Komma am Ende hier wurde entfernt, da es das letzte Element in der Liste ist
];
