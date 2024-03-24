// khai bao bien
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const PLAYER_STORAGE_KEY = 'Duz-Player'

const player = $('.player')
const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playList = $('.playlist');
const progress = $('#progress');
const playBtn = $('.btn-toggle-play');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const songClick = $('.song');
const songPlayList = $('.playlist');

// api songs

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    songs: [
        {
            name: 'Nơi này có anh',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-1.mp3',
            image: './assets/img/song-1.jpg'
        },
        {
            name: 'Lạc trôi',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-2.mp3',
            image: './assets/img/song-2.jpg'
        },
        {
            name: 'Âm thầm bên em',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-3.mp3',
            image: './assets/img/song-3.png'
        },
        {
            name: 'Có chắc yêu là đây',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-4.mp3',
            image: './assets/img/song-4.jfif'
        },
        {
            name: 'Chắc ai đó sẽ về',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-5.mp3',
            image: './assets/img/song-5.jpg'
        },
        {
            name: 'Buông đôi tay nhau ra',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-6.mp3',
            image: './assets/img/song-6.jpg'
        },
        {
            name: 'Chúng ta không thuộc về nhau',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-7.mp3',
            image: './assets/img/song-7.jpg'
        },
        {
            name: 'Cơn mưa ngang qua',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-8.mp3',
            image: './assets/img/song-8.jpg'
        },

        {
            name: 'There\' no one at all',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-9.mp3',
            image: './assets/img/song-9.jfif'
        },
        {
            name: 'Em của ngày hôm qua',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-10.mp3',
            image: './assets/img/song-10.jfif'
        },
        {
            name: 'Anh sai rồi',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-11.mp3',
            image: './assets/img/song-11.jpg'
        },
        {
            name: 'Chúng ta của hiện tại',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-12.mp3',
            image: './assets/img/song-12.jfif'
        },
        {
            name: 'Chạy ngay đi',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-13.mp3',
            image: './assets/img/song-13.jpg'
        },
        {
            name: 'Mai này con lớn lên',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-14.mp3',
            image: './assets/img/song-14.jfif'
        },
        {
            name: 'Bình yên nơi đâu',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-15.mp3',
            image: './assets/img/song-15.jfif'
        },
        {
            name: 'Cơn mưa xa dần',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-16.mp3',
            image: './assets/img/song-16.jpg'
        },
        {
            name: 'Đừng về trễ',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-17.mp3',
            image: './assets/img/song-17.jpg'
        },
        {
            name: 'Một mình cô đơn',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-18.mp3',
            image: './assets/img/song-18.jpg'
        },
        {
            name: 'Tiến lên Việt Nam ơi',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-19.mp3',
            image: './assets/img/song-19.jpg'
        },
        {
            name: 'Remember Me',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-20.mp3',
            image: './assets/img/song-20.jpg'
        },
        {
            name: 'Làm người luôn yêu em',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-21.mp3',
            image: './assets/img/song-21.jpg'
        },
        {
            name: 'Không phải dạng vừa đâu',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-22.mp3',
            image: './assets/img/song-22.jfif'
        },
        {
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-23.mp3',
            image: './assets/img/song-23.png'
        },
        {
            name: 'Thái Bình mồ hôi rơi',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-24.mp3',
            image: './assets/img/song-24.jpg'
        },
        {
            name: 'Khuôn mặt đáng thương',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-25.mp3',
            image: './assets/img/song-25.jpg'
        },
        {
            name: 'Ấn nút nhớ...Thả giấc mơ',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-26.mp3',
            image: './assets/img/song-26.jfif'
        },
        {
            name: 'Như ngày hôm qua',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-27.mp3',
            image: './assets/img/song-27.jpg'
        },
        {
            name: 'Một năm mới bình an',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-28.mp3',
            image: './assets/img/song-28.jpg'
        },
        {
            name: 'Nắng ấm xa dần',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-29.mp3',
            image: './assets/img/song-29.jpg'
        },
        {
            name: 'Hãy trao cho anh',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-30.mp3',
            image: './assets/img/song-30.jpg'
        },
        {
            name: 'Chấm hết',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song-31.mp3',
            image: './assets/img/song-31.jfif'
        },
    ],
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${ index === this.currentIndex ? 'active' : '' }" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
            `
        })
        songPlayList.innerHTML = htmls.join('')
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },
    handleEvents: function() {
        const cdWidth = cd.offsetWidth;
        const _this = this;

        // rotate cd and pause

        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000 , // 10seconds
            iterations: Infinity
        })
        cdThumbAnimate.pause();

        // zoom in / zoom out cd
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // click play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        // when click repeat;

        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // when click next song
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        // when click prev song
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong();
            } else {
            _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        // when click btn random

        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom);
            _this.randomSong();
            audio.play();
            _this.render();
        }

        // when click in box song

        songPlayList.onclick = function(e) {
            const songElement = e.target.closest('.song:not(.active)');
            if(songElement || e.target.closest('.option')) {
                if(songElement) {
                    _this.currentIndex = Number(songElement.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
            }
        }

        // when audio ended

        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        }

        // when song on play

        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }

        // when song off play

        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }

        // when time change
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }

        // progress
        progress.onchange = function(re) {
            const seekTime = audio.duration / 100 * re.target.value;
            audio.currentTime = seekTime;
        }
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            }) 
        }, 300)  
    },
    loadCurrentSong: function() {
        

        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;

    },

    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    repeatSong: function() {

    },
    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    randomSong: function() {
        let newIndex;
        do {
        newIndex = Math.floor(Math.random() * this.songs.length);
        } while(newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    start: function() {
        // gan cau hinh from config to app
        this.loadConfig();

        // định nghĩa các thuộc tính cho object
        this.defineProperties();

        // lắng nghe/ xử lý các sự kiện (DOM event)
        this.handleEvents();

        // loading the first music
        this.loadCurrentSong();

        // render playlist
        this.render();

        // hien thi 
        repeatBtn.classList.toggle('active', this.isRepeat);
        randomBtn.classList.toggle('active', this.isRandom);
    }
}

app.start();

// range round volume 

class RangeSlider {
	constructor(element, settings) {
		this.settings = Object.assign({
			clsCircular: 'c-rng--circular',
			clsCircularOutput: 'c-rng--circular-output',
			clsOutput: 'c-rng__output',
			clsOutputWrapper: 'c-rng--output',
			clsRangeTicks: 'c-rng--ticks',
			clsWrapper: 'c-rng__wrapper',
			offset: -90,
			varPercent: '--rng-percent',
			varPercentUpper: '--rng-percent-upper',
			varThumb: '--rng-thumb-w',
			varUnit: '--rng-unit',
			varValue: '--rng-value'
		}, stringToType(settings));

		this.range = element;
		this.initRange(this.range);
	}

	/**
	* @function initRange
	* @param {Node} range
	* @description Initialize: Create elements, add eventListeners etc.
	*/
	initRange(range) {
		const circular = this.settings.range.includes('circular');
		range.id = range.id || uuid();

		this.lower = this.settings.range.includes('upper') ? range.parentNode.querySelector(`[data-range*="lower"]`) : null;
		this.max = parseInt(range.max, 10) || 100;
		this.min = parseInt(range.min, 10);
		this.multiplier = 100 / (this.max - this.min);
		this.output = this.settings.range.includes('output') || circular ? document.createElement('output') : null;
		this.ticks = parseInt(range.dataset.ticks, 10);
		this.upper = this.settings.range.includes('lower') ? range.parentNode.querySelector(`[data-range*="upper"]`) : null;
		const isMulti = (this.lower || this.upper);
		this.wrapper = isMulti ? range.parentNode : document.createElement('div');

		/* output */
		if (this.output) {
			this.output.className = circular ? this.settings.clsCircularOutput : this.settings.clsOutput;
			this.output.for = range.id;

			if (isMulti) {
				this.wrapper.insertBefore(this.output, range);
			}
			else {
				this.wrapper.classList.add(circular ? this.settings.clsCircular : this.settings.clsOutputWrapper);
				this.wrapper.appendChild(this.output);
			}
		}

		/* wrapper */
		if (!isMulti) { 
			range.parentNode.insertBefore(this.wrapper, range);
			this.wrapper.appendChild(range);
		}
		if (range.dataset.modifier) {
			this.wrapper.classList.add(range.dataset.modifier)
		}

		this.wrapper.classList.add(this.settings.clsWrapper);
		this.wrapper.style.setProperty(this.settings.varThumb, getComputedStyle(range).getPropertyValue(this.settings.varThumb));

		/* ticks */
		if (this.ticks) {
			const ticks = [...Array(this.ticks).keys()];
			const svg = `
				<svg class="${this.settings.clsRangeTicks}" width="100%" height="100%">
				${ticks.map((index) => {
					return `<rect x="${(100 / this.ticks) * index}%" y="5" width="1" height="100%"></rect>`}).join('')
				}
				<rect x="100%" y="5" width="1" height="100%"></rect>
			</svg>`;
			this.wrapper.insertAdjacentHTML('afterbegin', svg);
		}

		/* circular */
		if (circular) {
			range.hidden = true;
			const pointerMove = (event) => { return this.updateCircle(this.rotate(event.pageX, event.pageY)) };
			this.setCenter();
			this.output.setAttribute('tabindex', 0);
			this.output.addEventListener('keydown', (event) => {
				switch(event.key) {
					case 'ArrowLeft': case 'ArrowDown': event.preventDefault(); this.range.stepDown(); this.updateCircle(); break;
					case 'ArrowRight': case 'ArrowUp': event.preventDefault(); this.range.stepUp(); this.updateCircle(); break;
					default: break;
				}
			});
			this.output.addEventListener('pointerdown', () => {return this.output.addEventListener('pointermove', pointerMove)});
			this.output.addEventListener('pointerup', () => {return this.output.removeEventListener('pointermove', pointerMove)});

			this.updateCircle();
		}
		else {
			range.addEventListener('input', () => {return this.updateRange()});
		}

		/* TODO: Send init event ? */
		range.dispatchEvent(new Event('input'));
	}

	/**
	* @function rotate
	* @param {Number} x
	* @param {Number} y
	* @description  Returns angle from center of circle to current mouse x and y
	*/
	rotate(x, y) {
		return Math.atan2(y - this.center.y, x - this.center.x) * 180 / Math.PI
	}

	/**
	* @function setCenter
	* @description Calculates center of circular range
	*/
	setCenter() {
		const rect = this.wrapper.getBoundingClientRect();
		this.center = {
			x: rect.left + rect.width / 2,
			y: rect.top + rect.height / 2
		}
	}

	/**
	* @function updateCircle
	* @param {Number} start
	* @description  Updates CSS Custom Props/coniuc-gradient when circular-input is modified
	*/
	updateCircle(start) {
		let angle = start;
		let rad = 360 / (this.max - this.min);
		if (!angle) {angle = rad * this.range.valueAsNumber + this.settings.offset;}
		let end = angle - this.settings.offset;
		if (end < 0) {end = end + 360;}
		if (start) {this.range.value = Math.ceil(end / rad);}
		this.wrapper.dataset.value = this.range.value;
		this.wrapper.style.setProperty('--angle', `${angle}deg`);
		this.wrapper.style.setProperty('--gradient-end', `${end}deg`);
	}

	/**
	* @function updateRange
	* @description Updates CSS Custom Props when range-input is modified
	*/
	updateRange() {
		if (this.lower) { /* Active is `upper` */
			if (this.lower.valueAsNumber > this.range.valueAsNumber) {
				this.range.value = this.lower.valueAsNumber;
				return;
			}
		}
		if (this.upper) { /* Active is `lower` */
			if (this.upper.valueAsNumber < this.range.valueAsNumber) {
				this.range.value = this.upper.valueAsNumber;
				return;
			}
		}

		const value = (this.range.valueAsNumber - this.min) * this.multiplier;
		this.range.style.setProperty(this.settings.varPercent, `${value}%`);
		this.range.style.setProperty(this.settings.varValue, `${this.range.valueAsNumber}`);
		
		if (this.lower) {
			this.lower.style.setProperty(this.settings.varPercentUpper, `${value}%`);
		}

		if (this.output) {
			this.output.style.setProperty(this.settings.varUnit, `${value}`);
			this.output.innerText = this.range.value;
		}
	}
}

/* Helper methods */
function stringToType(obj) {
	const object = Object.assign({}, obj);
	Object.keys(object).forEach(key => {
		if (typeof object[key] === 'string' && object[key].charAt(0) === ':') {
			object[key] = JSON.parse(object[key].slice(1));
		}
	});
	return object;
}

function uuid() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
		{return (
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)}
	);
}

/* Demo: Run it */
const elements = document.querySelectorAll('[data-range]');
	elements.forEach(element => {
		new RangeSlider(element, element.dataset);
	})