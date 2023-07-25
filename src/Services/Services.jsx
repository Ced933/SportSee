
// const [userDataInfo, setUserDataInfo] = useState([]);

export const fetchData = async () => {
    console.log(1)
    const result = await fetch(`http://localhost:3000/user/ ${id}`);

}