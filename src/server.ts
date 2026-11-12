import mongoose from 'mongoose';

import { app } from './app';

import { MONGODB_URI, PORT, DB_NAME } from './config';

async function main() {
    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: DB_NAME
        });

        console.log('MongoDB Connected!');
        console.log(`Database: ${DB_NAME}`);

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (err) {
        console.error('Failed on start:', err);
        process.exit(1);
    }
}

main();