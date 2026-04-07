export const onBodyNoScrollable = (isActive: boolean) => {
    if (isActive) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
}