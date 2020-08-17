function searchButtonWork() {
    const searchedSong = document.getElementById("searched-song").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchedSong}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const arrays = data.data;
            for (let i = 0; i <= 9; i++) {
                const details = arrays[i];
                const songTitle = details.title;
                const albumTitle = details.album.title;
                const artist = details.artist.name;
                const albumCover = details.album.cover_medium;
                const artistImg = details.artist.picture_medium;


                document.getElementById('results').innerHTML +=
                    `<div class="single-result row align-items-center my-3 p-3">
                        <div class="col-md-9">
                            <h3 class="lyrics-name" id="song-title">${songTitle}</h3>
                            <p class="author lead">Album: <span>${albumTitle}</span></p> <img src="${albumCover}">
                            <p class="author lead">Artist: <span>${artist}</span></p> <img src="${artistImg}">
                        </div>
                        <div class="col-md-3 text-md-right text-center">
                            <button class="btn btn-success" onclick="catchLyrics(${artist}, ${songTitle}); showLyrics('lyrics-${i}')">Get Lyrics</button>
                        </div>
                        <div class="align-items-center my-3 p-3 lyrics" id="lyrics-${i}">
                        <h2 class="text-success">Lyrics of ${songTitle}</h2>
                         <pre id="lyrics-area">O lyric oooo....</pre>
                        <button class="btn btn-primary m-auto" id="lyrics-hide-${i}" onclick="hideLyrics('lyrics-${i}')">Hide Lyrics</button>
                        </div>
                    </div>`
            }
        })
        .catch(error => console.log(error));
}


function showLyrics(id) {
    document.getElementById(id).style.display = "block";
}
function hideLyrics(id) {
    document.getElementById(id).style.display = "none";
}

function catchLyrics(artist, songTitle) {
    const songTitle = document.getElementById('song-title').innerText;
    const artist = document.getElementById('artist').innerText;

    fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
        .then(response => response.json())
        .then(data => {
            const lyrics = data.lyrics;
            document.getElementById('lyrics-area').innerText = lyrics;
        })
        .catch(error => console.log(error));
}


// const artistSplit = artist.split(" ");
// const artistURL = artistSplit.join("%20");

// const songTitleSplit = songTitle.split(" ");
// const songTitleURL = songTitleSplit.join("%20");