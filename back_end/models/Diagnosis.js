module.exports = (sequelize, DataTypes) => {
  const Diagnosis = sequelize.define('diagnosis', {
    nameKr: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nameEn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps: true,
    underscored: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return Diagnosis;
};