import tulipaniSrc from './assets/tulipani.jpg'
import gigliSrc from './assets/gigli.jpg'
import girasoliSrc from './assets/girasoli.jpg'
import crisantemiSrc from './assets/crisantemi.jpg'


export const posts = [
    {
        id: 1,
        title: 'Tulipani',
        image: tulipaniSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html', 'css'],
        published: true,
    },
    {
        id: 2,
        title: 'Papaveri',
        image: undefined,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'css'],
        published: false,
    },
    {
        id: 3,
        title: 'Gigli',
        image: gigliSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'php'],
        published: true,
    },
    {
        id: 4,
        title: 'Rose',
        image: undefined,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html'],
        published: true,
    },
    {
        id: 5,
        title: 'Girasoli',
        image: girasoliSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html'],
        published: true,
    },
    {
        id: 6,
        title: 'Crisantemi',
        image: crisantemiSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html'],
        published: false,
    },
]


export default posts