class Track {

	constructor(artist, title, cuePoint) {
		if (artist !== '') {
			this.artist = artist;
		} else {
			throw {name:'InvalidInputException', message:'Invalid artist name'};
		}

		if (title !== '') {
			this.title = title;
		} else {
			throw {name:'InvalidInputException', message:'Invalid track title'};
		}

		if (cuePoint.match('[0-9][0-9]:[0-9][0-9]:[0-9][0-9]')) {
			this.cuePoint = cuePoint;
		} else {
			throw {name:'InvalidInputException', message:'Invalid cue point'};
		}

	}

	toString() {

		return ('PERFORMER "' + this.artist + '"\nTITLE "' + this.title + '"\nINDEX 01 ' + this.cuePoint);

	}



}
