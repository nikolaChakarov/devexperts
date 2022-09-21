const handleIngredientList = (arr, search) => {
    const regex = new RegExp(/[a-zA-Z]+/i);

    const list = arr
        .reduce((acc, curr) => {
            let temp = curr.split(/[ ,.()*%^!@#$]+/);
            temp.forEach((el) => regex.test(el) && acc.push(el.toLowerCase()));

            return acc;
        }, [])
        .join(" ");

    return list.includes(search.toLowerCase());
};

export default handleIngredientList;
