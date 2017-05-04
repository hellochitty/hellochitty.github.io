import * as allOutThousands from './songs/all_out_00s.js';
import * as allOutNineties from './songs/all_out_90s.js';
import * as allOutEighties from './songs/all_out_80s.js';
import * as allOutSeventies from './songs/all_out_70s.js';
import * as Util from './util.js';

//on start, questions are loaded
$(document).ready(() => {
  $('#start').click(() => {
    Util.shuffle(songs);
    questions = songs.slice(0,10);
    console.log(questions);
    $('#start').remove();
    currentQuestion = questions.shift();
    $('.body').prepend("<div id='myProgress'><div id='myBar'></div></div>");
    showQuestion(currentQuestion);
  });

  const showQuestion = (question) => {
    var buttonAudio = $(`<div class="button-audio">
      <button id="play" type="button" name="button">play</button>
      <audio id="audio" src=${question.url}/>
    </div>`);
    $('.body').append(buttonAudio);
    answers = getOtherAnswers(question);
    $('.body').append(htmlAnswers(answers));
    $('.answer').on('click', (e) => handleAnswerClick(e));
    buttonAudio.click(play);
    var audio = document.getElementById("audio");
    $(audio).on("timeupdate", () => {
      if (audio.currentTime > duration){
        audio.pause();
        audio.remove();
      }
    });
  };

  const getOtherAnswers = (question) => {
    let holder = [question.name];
    Util.shuffle(songs);
    let i = 0;
    while(holder.length < 4){
      if (songs[i].name !== question.name){
        holder.push(songs[i].name);
      }
      i++;
    }
    return Util.shuffle(holder);
  };

  const htmlAnswers = (answers) => {
    return (
      `<button class="answer" type="button">${answers[0]}</button>
      <button class="answer" type="button">${answers[1]}</button>
      <button class="answer" type="button">${answers[2]}</button>
      <button class="answer" type="button">${answers[3]}</button>`
    );
  };

  const handleAnswerClick = (e) => {
    $('#myBar').animate({ width: "+=10%" }, 500 );
    var audio = document.getElementById("audio");
    if (audio){
      audio.pause();
      audio.remove();
    }
    $('.answer').remove();
    if (e.currentTarget.textContent === currentQuestion.name){
      numRight += 1;
      console.log(numRight);
    }
    if (questions.length > 0){
      currentQuestion = questions.shift();
      showQuestion(currentQuestion);
    }else{
      console.log(numRight);
    }
  };




  let level;
  let duration = 0;
  let songs;
  let playlist;
  let questions;
  let currentQuestion;
  let numRight = 0;
  let answers;

  $(".difficulty").click((e) => {
    level = e.target.name;
    durationMapping(level);
    $(e.currentTarget).parent().remove();

  });

  const durationMapping = lvl => {
    switch (lvl){
      case 'Pedestrian':
        duration = 5;
        break;
      case 'Mediocre':
        duration = 3;
        break;
      case 'Tough':
        duration = 1;
      case 'Insane':
        duration = 0.5;
        break;
      case 'Masochistic':
        duration = 0.25;
        break;
    }
  };

  $(".playlist").click((e) => {
    playlist = e.currentTarget.name;
    playlistMapping(playlist);
    $(e.currentTarget).parent().fadeOut(300, function(){ $(this).remove();});
    // $(e.currentTarget).parent().remove();
  });

  const playlistMapping = pl => {
    switch (pl){
      case 'allOutThousands':
        songs = allOutThousands.songs;
        break;
      case 'allOutNineties':
        songs = allOutNineties.songs;
        break;
      case 'allOutEighties':
        songs = allOutEighties.songs;
        break;
      case 'allOutSeventies':
        songs = allOutSeventies.songs;
        break;
    }
  };


  //song play logic
  $( "#play" ).on("click", () => {
    play();
  });

  const play = () => {
    var audio = document.getElementById("audio");
    audio.play();
    $( "#play" ).remove();
  };



  $("#new-song").click((e) => {
    var song = songs[Math.floor(Math.random()* songs.length)];
    var buttonAudio = $(`<div class="button-audio">
      <button id="play" type="button" name="button">play</button>
      <audio id="audio" src=${song.url}/>
    </div>`);
    $('.body').append(buttonAudio);
    buttonAudio.click(play);
    var audio = document.getElementById("audio");
    $(audio).on("timeupdate", () => {
      if (audio.currentTime > duration){
        audio.pause();
        audio.remove();
      }
    });
  });







});
