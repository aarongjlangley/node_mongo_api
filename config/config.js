require('dotenv').config(); // Instantiate environment variables

CONFIG = {}; // global

// App info
CONFIG.app          = process.env.APP   || 'development';
CONFIG.port         = process.env.PORT  || '3000';

// DB info
CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mongo';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_port      = process.env.DB_PORT       || '27017';
CONFIG.db_name      = process.env.DB_NAME       || 'app_db';
CONFIG.db_user      = process.env.DB_USER       || 'aaron';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'magic123';

// JWT info
CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'HolyMary';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

// Encrypt info
CONFIG.encryption_key   = process.env.ENCRYPTION_KEY || 'thisisatestthisisatestthisisates';
CONFIG.algorithm        = process.env.ALGORITHM || 'aes-256-ctr';

