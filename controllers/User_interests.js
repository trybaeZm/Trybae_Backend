const { supabase } = require("../models/TryBae_db");
// Select all user interests
async function getAllUserInterests(req, res) {
	const { data, error } = await supabase
		.from('User_interests')
		.select('*');  // Select all columns from the table

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error", error: error.message });
	} else {
		res.send({ status: "SUCCESS", results: data });
	}
}


// Select user interest by ID
async function getUserInterestById(req, res) {
	const { id } = req.body;
	const { data, error } = await supabase
		.from('User_interests')
		.select('*')
		.eq('user_interest_id', id)
		.single(); // .single() ensures only one result is returned

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error", error: error.message });
	} else {
		res.send({ status: "SUCCESS", results: data });
	}
}

// Select user interests by username
async function getUserInterestsByUsername(req, res) {
	const { username } = req.body;
	const { data, error } = await supabase
		.from('User_interests')
		.select('*')
		.eq('username', username);

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error", error: error.message });
	} else {
		res.send({ status: "SUCCESS", results: data });
	}
}

// Add new user interest
async function addUserInterest(req, res) {
	const { interest_id } = req.body;
	const username = req.decoded["username"];

	const { data, error } = await supabase
		.from('User_interests')
		.insert([{ interest_id, username }]);

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error", error: error.message });
	} else {
		res.send({ status: "SUCCESS", message: "Interest added", results: data });
	}
}

// Update user interest by ID
async function updateUserInterest(req, res) {
	const { id, userInterest } = req.body;

	const { data, error } = await supabase
		.from('User_interests')
		.update(userInterest)
		.eq('user_interest_id', id);

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error", error: error.message });
	} else {
		res.send({ status: "SUCCESS", results: data });
	}
}

// Delete user interest by ID
async function deleteUserInterest(req, res) {
	const { id } = req.body;

	const { data, error } = await supabase
		.from('User_interests')
		.delete()
		.eq('user_interest_id', id);

	if (error) {
		res.send({ status: "FAILURE", message: "Unknown error", error: error.message });
	} else {
		res.send({ status: "SUCCESS", results: data });
	}
}

module.exports = {
	getAllUserInterests: getAllUserInterests,
	getUserInterestById: getUserInterestById,
	getUserInterestsByUsername: getUserInterestsByUsername,
	addUserInterest: addUserInterest,
	updateUserInterest: updateUserInterest,
	deleteUserInterest: deleteUserInterest,
};
