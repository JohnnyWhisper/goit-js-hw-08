
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

const currentTime = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(currentTime, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));


const playedTime = localStorage.getItem(currentTime);

player.setCurrentTime(Number(playedTime)).then(function (seconds) {
  seconds = Number(playedTime);
});
