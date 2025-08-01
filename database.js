const mongoose = require('mongoose');

const mongooseConnect = async () => {
  const db = 'mongodb+srv://santiago_h_2:B1r2a3y4a5n6.16@cluster0.0violb9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conectado a la base de datos');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error);
  }
};

module.exports = { mongooseConnect };
    
