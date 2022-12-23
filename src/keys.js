module.exports = {

    database: {
        connectionLimit: 20,
        host : process.env.DATABASE_HOST || '[![Netlify Status](https://api.netlify.com/api/v1/badges/612a7f60-27d5-47cd-9e07-0dc9cdd8f6c2/deploy-status)](https://app.netlify.com/sites/capable-peony-73dc50/deploys)',
        user: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || '',
        database: process.env.DATABASE_NAME || 'events'
    }
}
