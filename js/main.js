(function($) {
  "use strict";

  var artist = $('#soundSearch').val();
  var artistURL = url + artist;
  var url = 'https://api.soundcloud.com/tracks' + CLIENT_ID + '&q=';



  var form = $('.search-form');
  var $button = $('#searchButton');
  var $results = $('.results');

  form.submit(function(e){
    e.preventDefault();
    $results.empty();
    var artist = $('#soundSearch').val();

    artist = artist.split(' ').join('');
    var artistURL = url + artist;


    fetch(artistURL).then((resp) => resp.json())
    .then(function(data){

      for (var i = 0; i < data.length; i++) {
        var input = data[i];
      

        var $searchNode = document.createElement('li');

        $searchNode.className= 'searchRes';

        var artIMG = document.createElement('img');
        artIMG.src = input.artwork_url;
        if (input.artwork_url === null) {
          artIMG.src = 'orangeWhiteHPhones.jpg';
        }
        artIMG.classList.add('pictureRes');
        artIMG.href = input.stream_url + CLIENT_ID;
        console.log('s', artIMG.href);
        $searchNode.append(artIMG);

        var title = document.createElement('span');
        title.textContent = input.title;
        title.classList.add('titleRes');
        $searchNode.append(title);

        var searchTitle = document.createElement('h6');
        searchTitle.textContent = artist;
        searchTitle.classList.add('searchInput');
        $searchNode.append(searchTitle);

        var song = document.createElement('a');
        song.href = input.stream_url + CLIENT_ID;
        $searchNode.append(song);

        $results.append($searchNode);
      }

      $('.searchRes').click(function(e){
        e.preventDefault();

        this.value = song.href;
        var musicAudio = document.querySelector('.music-player');
        musicAudio.src = $(this).children('a')[0].href;
        console.log($(this).children('a')[0].href);
        var songPlaying = document.querySelector('.songPlaying');
        var thisSong = document.createElement('h1');
        thisSong.textContent = title.textContent;
        $('.songPlaying').empty();
        songPlaying.append(thisSong);

      });
    })







  });
}(jQuery));
/*
Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
