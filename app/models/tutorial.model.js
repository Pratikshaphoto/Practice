module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          firstname: String,
          lastname: String,
          email: String,
          gender: String,
          phone: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };