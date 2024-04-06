export const getBaseUrl = () => {
    let url;
    switch (process.env.NODE_ENV) {
        case 'production':
            url = '';
            break;
        case 'development':
        default:
            url = 'http://localhost:8000';
    }
    return url;
}

export let backendUrl;
switch (process.env.NODE_ENV) {
    case 'production':
        backendUrl = '';
        break;
    case 'development':
    default:
        backendUrl = 'http://localhost:8000';
}