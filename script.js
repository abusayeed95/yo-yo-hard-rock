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
                const songTitleSplit = songTitle.split(" ");
                const songTitleURL = songTitleSplit.join("%20");

                const albumTitle = details.album.title;

                const artist = details.artist.name;
                const artistSplit = artist.split(" ");
                const artistURL = artistSplit.join("%20");

                // fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
                //     .then(response => response.json())
                //     .then(data => data.lyrics)
                //     .catch(error => console.log(error));
                document.getElementById('results').innerHTML +=
                    `<div class="single-result row align-items-center my-3 p-3">
                        <div class="col-md-9">
                            <h3 class="lyrics-name">${songTitle}</h3>
                            <p class="author lead">Album by <span>${albumTitle}</span></p>
                        </div>
                        <div class="col-md-3 text-md-right text-center">
                            <button class="btn btn-success" onclick="lyricsDropdown('lyrics${i}')">Get Lyrics</button>
                        </div>
                        <div class="align-items-center my-3 p-3 lyrics" id="lyrics${i}"> <pre>O laallaljdfkjkhfjkshfihj
                        adfijsadhfioehfiosdg
                        asdfhidshgfioedrfgjisd
                        erfgtiudrguiodrtgiodj
                        oetfgioerutiur/pre></div>
                    </div>`
            }
        })
        .catch(error => console.log(error))
}

function lyricsDropdown(id) {
    document.getElementById(id).style.display = "block";
}