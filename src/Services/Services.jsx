export const fetchData = async (id) => {
    const result = await fetch(`http://localhost:3000/user/${id}`);
    const loadDataJson = await result.json();
    return loadDataJson.data
}

export const fetchDataAverage = async (id) => {
    const result = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
    const loadDataJson = await result.json();
    return loadDataJson.data
}

export const fetchDataPerfomance = async (id) => {
    const result = await fetch(`http://localhost:3000/user/${id}/performance`);
    const loadDataJson = await result.json();
    return loadDataJson.data
}

export const fetchDataActivity = async (id) => {
    const result = await fetch(`http://localhost:3000/user/${id}/activity`);
    const loadDataJson = await result.json();
    return loadDataJson.data
}

