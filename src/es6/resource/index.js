import { resource } from '../elements';

const container = resource.self;
const trigger = resource.trigger;

if (container != null) {
    trigger.addEventListener('click', () => {
        container.classList.toggle('active');
    });
}
