const { supabase } = require("../models/TryBae_db");

// Select all banned hosts
async function getAllBannedHosts(req, res) {

	let { data: Banned_hosts, error } = await supabase
		.from('Banned_hosts')
		.select('ban_ID')

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: results });
	}

}

// Select banned host by ID
async function getBannedHostById(req, res) {
	const id = req.body.id;

	const { error, data } = await supabase
		.from('Banned_hosts')
		.select('*')
		.eq('ban_id', id)

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: data });
	}
}

async function getBannedHostByUsername(login, callback) {
	const { error, data } = await supabase
		.from('Banned_hosts')
		.select('*')
		.eq('host_username', login)

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		callback(data);
	}
}



// Add new banned host
async function addBannedHost(req, res) {
	const bannedHost = req.body;

	const { error, data } = await supabase
		.from('Banned_hosts')
		.insert(bannedHost)
	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: results });
	}
}

// Update banned host by ID
async function updateBannedHost(req, res) {
	const id = req.body.id;
	const bannedHost = req.body;
	const { error, data } = await supabase
		.from('Banned_hosts')
		.update(bannedHost)
		.eq('ban_id', id)

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: results });
	}
}

// Delete banned host by ID
async function deleteBannedHost(req, res) {
	const id = req.body.id;
	const { error, data } = await supabase
		.from('Banned_hosts')
		.delete()
		.eq('ban_id', id)
	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: results });
	}
}

module.exports = {
	getAllBannedHosts: getAllBannedHosts,
	getBannedHostById: getBannedHostById,
	getBannedHostByUsername: getBannedHostByUsername,
	addBannedHost: addBannedHost,
	updateBannedHost: updateBannedHost,
	deleteBannedHost: deleteBannedHost,
};
