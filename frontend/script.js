document.addEventListener('DOMContentLoaded', () => {
    //GET curreent moon phase ON LOAD :)
    fetchMoonPhase();
});

async function fetchMoonPhase() {
    const dateInput = document.getElementById('date-input').value;
    const date = dateInput ? new Date(dateInput) : new Date(); // selected date OR today's date
    const unixTimestamp = Math.floor(date.getTime() / 1000); // Convert to Unix!!

    try {
        const response = await fetch(`https://api.farmsense.net/v1/moonphases/?d=${unixTimestamp}`);
        const data = await response.json();

        console.log('API Response:', data);

        if (data.length > 0) {
            displayMoonPhase(data[0]);
        } else {
            console.error('Sorry, No moon phase data available for the given date.');
        }
    } catch (error) {
        console.error('Oopsy Error fetching moon phase data:', error);
    }
}

function displayMoonPhase(moonData) {
    const moonPhaseElement = document.getElementById('moon-phase');
    let phaseName = moonData.Phase;
    let phaseImage;

    switch (phaseName) {
        case 'Full Moon':
            phaseImage = "https://img.icons8.com/?size=100&id=Wdnu-edbShJS&format=png&color=000000";
            phaseTips = "Print useful tips here"
            break;
        case 'Waxing Crescent':
            phaseImage = "https://img.icons8.com/?size=100&id=CHn0rtZuD2M0&format=png&color=000000";
            phaseTips = "Print useful tips here"
            break;
        case 'First Quarter':
            phaseImage = "https://img.icons8.com/?size=100&id=CHn0rtZuD2M0&format=png&color=000000";
            phaseTips = "Print useful tips here"
            break;
        case 'Waxing Gibbous':
            phaseImage = "https://img.icons8.com/?size=100&id=SnlxFjy7u-4t&format=png&color=000000";
            phaseTips = "Print useful tips here"
            break;
        case 'Full Moon':
            phaseImage = "https://img.icons8.com/?size=100&id=NJx6Gbc4Ng7C&format=png&color=000000";
            phaseTips = "Print useful tips here"
            break;
        case 'Waning Gibbous':
            phaseImage = "https://img.icons8.com/?size=100&id=RLniTqU8gD1y&format=png&color=000000";
            phaseTips = "Print useful tips here"
            break;
        case 'Last Quarter':
            phaseImage = "https://img.icons8.com/?size=100&id=KIPHVfQWWl4R&format=png&color=000000";
            phaseTips = "Print useful tips here"
            break;
        case 'Waning Crescent':
            phaseImage = "https://img.icons8.com/?size=100&id=JGGPnA5MB09j&format=png&color=000000";
            phaseTips = "Print useful tips here"
            break;
        default:
            phaseImage = "https://img.icons8.com/?size=100&id=aVqoQqQDLPQG&format=png&color=000000";
            phaseTips = "No information yet for this moon type";
            break;
    }

    moonPhaseElement.innerHTML = `
        <h2>${phaseName}</h2>
        <img src="${phaseImage}" alt="${phaseName}">
        <p>Illumination: ${moonData.Illumination}%</p>
        <p>Moon Tips: ${phaseTips}</p>
    `;
    document.getElementById('journal-form').dataset.date = dateInput ? dateInput : new Date().toISOString().split('T')[0];
}

function saveJournalEntry() {
    const date = document.getElementById('journal-form').dataset.date;
    const journalText = document.getElementById('journal-text').value;
    if (!date || !journalText.trim()) {
        alert('This feature is coming soon!');
        return;
    }

    let journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || {};
    journalEntries[date] = journalText;
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));



}