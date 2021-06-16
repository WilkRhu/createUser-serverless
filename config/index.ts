const config = {
    DB_URL: process.env.DB_URL,
    DB_NAME: process.env.DB_NAME,
    NODE_ENV: process.env.NODE_ENV
}

export default (() => {
    if (process.env.NODE_ENV === 'test') {
        return (injectValues) => ({ ...config, ...injectValues })
    }

    return () => ({ ...config })
});
