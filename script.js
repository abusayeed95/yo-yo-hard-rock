function searchButtonWork() {
    const searchedSong = document.getElementById("searched-song").value;
    if (searchedSong == "") {
        alert('Please, write down first....');
    }
    else {
        document.getElementById('results').style.display = 'block';
        fetch(`https://api.lyrics.ovh/suggest/${searchedSong}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                const arrays = data.data;
                for (let i = 0; i <= 9; i++) {
                    const details = arrays[i];
                    const songTitle = details.title;
                    const artist = details.artist.name;
                    const albumTitle = details.album.title;
                    document.getElementById(`song-title-${i}`).innerHTML = `${songTitle}`;
                    document.getElementById(`song-album-${i}`).innerHTML = `Album: ${albumTitle}`;
                    document.getElementById(`artist-name-${i}`).innerHTML = `Artist: <span id="artist-${i}">${artist}</span>`;
                }
            })
    }
}

function getLyrics() {
    for (let i = 0; i <= 9; i++) {
        document.getElementById(`lyrics-area-${i}`).style.display = "none";
        const artist = document.getElementById(`artist-${i}`).innerText;
        const songTitle = document.getElementById(`song-title-${i}`).innerText;

        fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
            .then(res => res.json())
            .then(data => {
                const lyrics = data.lyrics;

                document.getElementById(`lyrics-area-${i}`).innerHTML = `
                <h2 class="text-success">Lyrics of ${songTitle}</h2>
                <pre id="lyric-${i}">${lyrics}</pre>
                <button class="btn btn-primary">Hide Lyrics</button>
                `
                if (document.getElementById(`lyric-${i}`).innerText == "undefined") {
                    document.getElementById(`lyrics-area-${i}`).style.display = "none";
                }

            })
    }
}
function showLyrics(id) {
    document.getElementById(id).style.display = 'block';
}