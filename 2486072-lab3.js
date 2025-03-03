function getMusicTitlesByYear(music_tracks){
    let track={};
    music_tracks.map(item =>{

        const year = Number(item.year);
        if(isNaN(item.year)){
            console.error("year is not a number")
        }
        if(!item.hasOwnProperty('year')){
            console.error("missing year")
        }
        
        if(track[year] != undefined){
            const correct = track[year];
            correct.push(item.title);
        }
        else{
            track[year]=[item.title];
        }
    });
    return track;

}

const tracks = [
    { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa'},
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
  ];

  console.log(getMusicTitlesByYear(tracks));

  module.exports = getMusicTitlesByYear;

