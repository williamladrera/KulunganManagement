const guards = [
    {
        id: 1,
        name: "Alexa",
        rank: "Sergeant",
        yearsOfService: 1,
        active: true,
    },
    {
        id: 2,
        name: "Hannah",
        rank: "Chief",
        yearsOfService: 3,
        active: false,
    },
    {
        id: 3,
        name: "William",
        rank: "Corporal",
        yearsOfService: 5,
        active: false,
    },
];



// Get all guards
const getAllGuards = (req, res) => {
    res.json({ guards });
};

// Search guard by ID, rank, and years of service
const searchGuard = (req, res) => {
    const { id, rank, years } = req.query;
    console.log(id, rank, years);
  
    const matchingGuard = guards.find(
      (guard) => guard.id === parseInt(id) && guard.rank === rank && guard.yearsOfService === parseInt(years)
    );
  
    if (!matchingGuard) {
      res.status(404).json({ error: `Guard with id ${id}, rank ${rank}, and ${years} years of experience not found.` });
    } else {
      // Constructing a response object with only id, rank, and yearsOfService
      const response = {
        id: matchingGuard.id,
        rank: matchingGuard.rank,
        yearsOfService: matchingGuard.yearsOfService
      };
      res.status(200).json({ found: response });
    }
};



// Delete a guard by ID
const deleteGuardById = (req, res) => {
    const { id } = req.params;
    const index = guards.findIndex(g => g.id === parseInt(id));
    if (index !== -1) {
        guards.splice(index, 1);
        res.status(200).json({ message: `Guard with ID ${id} deleted successfully` });
    } else {
        res.status(404).json({ error: `Guard with ID ${id} not found` });
    }
};


module.exports = {
    getAllGuards,
    searchGuard,
    deleteGuardById
};
