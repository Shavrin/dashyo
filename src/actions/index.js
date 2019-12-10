export function addWindow(payload) {
    return { type: "ADD_WINDOW", payload }
}

export function closeWindow(payload) {
    return { type: "CLOSE_WINDOW", payload }
}