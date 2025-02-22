class Album {

	constructor(artist, title, duration) {
		if (artist !== '') {
			this.artist = artist;
		} else {
			throw {name:'InvalidInputException', message:'Invalid artist name'};
		}

		if (title !== '') {
			this.title = title;
		} else {
			throw {name:'InvalidInputException', message:'Invalid album name'};
		}

		if (duration.match('[0-9][0-9]:[0-9][0-9]:[0-9][0-9]')) {
			this.duration = duration;
		} else {
			throw {name:'InvalidInputException', message:'Invalid duration'};
		}

		this.tracks = [];
	}

	addTrack(artist, title, cuePoint) {
		this.tracks.push(new Track(artist, title, cuePoint));
	}

	deleteTrack(title) {
		let formerCuePoint;
		if (this.tracks[0]) {
			formerCuePoint = this.tracks[0].cuePoint;
		}
		for (let i = 0; i < this.tracks.length; i++) {
			if (this.tracks[i].title === title) {
				this.tracks.splice(i, 1);
			}
		}
		if (this.tracks[0]) {
			this.tracks[0].cuePoint = formerCuePoint;
		}
	}

	clearTracks() {
		this.tracks = [];
	}

	toString() {

		let returnString = 'PERFORMER "' + this.artist + '"\n';
		returnString += 'TITLE "' + this.title + '"\n';
		returnString += 'FILE "' + this.artist + ' - ' + this.title + '" WAVE\n';

		for (let k = 0; k < this.tracks.length; k++) {

			let trackCounter = 0
			if ((k + 1) < 10) {
				trackCounter = ('0' + (k + 1));
			} else {
				trackCounter = (k + 1);
			}

			returnString += 'TRACK ' + trackCounter + ' AUDIO\n';
			returnString += this.tracks[k].toString();
			returnString += '\n';
		}

		return returnString;

	}


}
