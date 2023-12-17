import lozad from 'lozad'

export const util_lozad = () => {
    const el = document.querySelectorAll('img');
    const observer = lozad(el);
    observer.observe();
    
    const elloading = document.querySelectorAll('.animate');
    const observerloading = lozad(elloading);
    observerloading.observe();
}