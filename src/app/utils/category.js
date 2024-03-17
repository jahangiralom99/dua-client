export const getCategory= async () => {
    const res = await fetch('https://dua-server-tnmm.onrender.com/category', {
        cache: 'no-store'
    });
    return res.json();
}