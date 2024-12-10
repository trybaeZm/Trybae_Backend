const { supabase } = require("../models/TryBae_db");

// Select all banned users
async function getAllBannedUsers(req, res) {
	const { error, data } = await supabase
		.from('Banned_users')
		.select('*')
	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: results });
	}
}

// Select banned user by ID
async function getBannedUserById(req, res) {
	const id = req.body.id;

	const { error, data } = await supabase
		.from('Banned_users')
		.select('*')
		.eq('ban_id', id)
	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: results });
	}

}

async function getBannedUserByUsername(login, callback) {

	const { data, error } = await supabase
		.from('Banned_users')
		.select()
		.eq("username", login)

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" })
	}
	if (data) {
		callback(data)
	}


	// Model.connection.query(
	// 	"SELECT * FROM Banned_users WHERE username = ?",
	// 	login,
	// 	function (error, results) {
	// 		if (error) {
	// 			res.send({ status: "FAILURE", message: "Unknown error" });
	// 		} else {

	// 			callback(results);
	// 		}
	// 	},
	// );
}


// Add new banned user
async function addBannedUser(req, res) {
	const bannedUser = req.body;

	const { error, data } = await supabase
		.from('Banned_users')
		.insert(bannedUser)
	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: results });
	}
}

// Update banned user by ID
async function updateBannedUser(req, res) {
	const id = req.body.id;
	const bannedUser = req.body;
	const { error, data } = await supabase
		.from('Banned_users')
		.update(bannedUser)
		.eq('ban_id', id)
	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: results });
	}

}

// Delete banned user by ID
async function deleteBannedUser(req, res) {
	const id = req.body.id;
	const { error, data } = await supabase
		.from('Banned_users')
		.delete()
		.eq('ban_id', id)
	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error" });
	} else {
		res.send({ status: "SUCCESS", results: results });
	}

}

module.exports = {
	getAllBannedUsers: getAllBannedUsers,
	getBannedUserById: getBannedUserById,
	getBannedUserByUsername: getBannedUserByUsername,
	addBannedUser: addBannedUser,
	updateBannedUser: updateBannedUser,
	deleteBannedUser: deleteBannedUser,
};
