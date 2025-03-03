function getMusicTitlesByYear(music_tracks){
    let track={};
    music_tracks.map(item =>{
        if(track[item.year] != undefined){
            const correct = track[item.year];
            correct.push(item.title);
        }
        else{
            track[item.year]=[item.title];
        }
    });
    return track;

}

const tracks = [
    { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
  ];

  console.log(getMusicTitlesByYear(tracks));

