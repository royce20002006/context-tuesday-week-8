class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList;
	}
	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if(this.guestList.length) {
			return `Welcome to the party ${this.guestList.join(' and ')}`
		} else return `Gotta add people to the guest list`
	}
}




/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
