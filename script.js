// function searchButtonWork() {
//     const searchedSong = document.getElementById("searched-song").value;
//     fetch(`https://api.lyrics.ovh/suggest/${searchedSong}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             const arrays = data.data;
//             for (let i = 0; i <= 9; i++) {
//                 const details = arrays[i];
//                 const songTitle = details.title;
//                 const albumTitle = details.album.title;
//                 const artist = details.artists.name;

//                 document.getElementById('results').innerHTML +=
//                     `<div class="single-result row align-items-center my-3 p-3">
//                         <div class="col-md-9">
//                             <h3 class="lyrics-name">${songTitle}</h3>
//                             <p class="author lead">Album by <span>${albumTitle}</span></p>
//                         </div>
//                         <div class="col-md-3 text-md-right text-center">
//                             <button class="btn btn-success">Get Lyrics</button>
//                         </div>
//                         div class="align-items-center my-3 p-3 lyrics"> <pre>{lyrics}</pre></div
//                     </div>`
//             }
//         })
//         .catch(error => console.log(error))
// }
fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}?lyrics=`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
