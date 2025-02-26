const MatchProfile = require('../models/MatchProfile');


exports.createMatchProfile = async (req, res) => {
  try {
    const { name, cidade, estado, launches, revenue, instagram, whatsapp, tipo } = req.body;
    const userId = req.userId;

    const newProfile = new MatchProfile({
      name,
      cidade,
      estado,
      launches,
      revenue,
      instagram,
      whatsapp,
      tipo,
      createdBy: userId, 
    });

    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllMatchProfiles = async (req, res) => {
  try {
    const profiles = await MatchProfile.find().populate('createdBy', 'name email'); 
    res.status(200).json(profiles);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
