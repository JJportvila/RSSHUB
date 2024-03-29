export default {
    'vcb-s.com': {
        _name: 'VCB-Studio',
        '.': [
            {
                title: '最新文章',
                docs: 'https://docs.rsshub.app/routes/anime#vcb-studio',
                source: ['/'],
                target: '/vcb-s',
            },
            {
                title: '分类文章',
                docs: 'https://docs.rsshub.app/routes/anime#vcb-studio',
                source: ['/archives/category/:cate'],
                target: '/vcb-s/category/:cate',
            },
        ],
    },
};
