export const isAuthenticated = () => {
    console.log(localStorage.getItem('user'));
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('user')) {
        return localStorage.getItem('user');
    } else {
        return false;
    }
};