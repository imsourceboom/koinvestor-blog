export const activeSwich = e => {
    const children = Array.from(e.currentTarget.children);
    children.map(child => {
        if (
            e.target === child ||
            e.target.parentElement === child ||
            e.target.parentElement.parentElement === child
        ) {
            child.classList.add('active');
        } else if (e.target !== e.currentTarget) {
            child.classList.remove('active');
        }
    });
};
