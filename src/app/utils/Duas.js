export const getDuas= async (id) => {
    const res = await fetch(`https://dua-server-tnmm.onrender.com/duas?cat_id=${id}`, {
        cache: 'no-store'
    });
    return res.json();
}