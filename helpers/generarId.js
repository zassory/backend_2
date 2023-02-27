

const generarId = () => {
    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);
};

export default generarId;