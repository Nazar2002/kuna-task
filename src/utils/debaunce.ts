const debounce = (func: Function, timeout = 100) => {
    let timer: ReturnType<typeof setTimeout>;

    return () => {
        clearTimeout(timer);

        timer = setTimeout(() => func(), timeout);
    };
}

export { debounce }