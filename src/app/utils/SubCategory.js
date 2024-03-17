export const getSubCategory= async (id) => {
    const res = await fetch(`http://localhost:8000/sub_category/${id}`, {
        cache: 'no-store'
    });
    return res.json();
}