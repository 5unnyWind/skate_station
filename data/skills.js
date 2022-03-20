const biliBaseUrl = 'https://www.bilibili.com/video/'

export default {
    '滑行': [
        // {
        //     videoName: '',
        //     number: '',
        //     get videoUrl() { return biliBaseUrl + this.number },
        //     posterUrl: '',
        // },
        {
            videoName: '脚位',
            number: 'BV1Li4y1t7VS',
            videoUrl: 'https://www.bilibili.com/video/BV1Li4y1t7VS',
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/0240577a8415bdc19a774cebf2ed54cb43ea3752.jpg@672w_378h_1c_100q.jpg'
        },
        {
            videoName: '上板滑行',
            number: 'BV1MJ411J79d',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/ee4d1075a89c13bc3c69681b2dfbd169cae95f57.jpg@672w_378h_1c_100q.jpg',
        },
        {
            videoName: '荡板',
            number: 'BV1At411K7Pm',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/00c65e334f892ba652d7e81035e6e37546a6d673.jpg@672w_378h_1c_100q.jpg',
        },
        {
            videoName: '快速上班/收板',
            number: 'BV1Xt41187Y8',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/90b4a50cea5b7cadd3822de21fd2c3e16d543939.jpg@672w_378h_1c_100q.jpg',
        },
        {
            videoName: '转弯',
            number: 'BV15J411X7DQ',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/c0b0fb0555412865a052c78831718cd01e8b60b6.jpg@672w_378h_1c_100q.jpg',
        },
    ],
    '刹车': [
        {
            videoName: '横刹',
            number: 'BV14s411K7tR',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/a09cb99f421a07cc3ea82bacc689146969d8733d.jpg@672w_378h_1c_100q.jpg',
        },
        {
            videoName: '背向横刹',
            number: 'BV1hs411N7gp',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/135206d270a6a547c8a71023a844246053ee6c06.jpg@672w_378h_1c_100q.jpg',
        },
    ],
    '入门动作': [
        {
            videoName: 'Ollie',
            number: 'BV1rv41157KK',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/29b65f5e7ea3e9790ab5d52e4352b2be08eda379.jpg@672w_378h_1c_100q.jpg',
        },
        {
            videoName: 'Manual',
            number: 'BV1RW411B7Cy',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/f508c17be5b7ee5d0eadcb0f35ad0f5ba18a3eaa.png@672w_378h_1c_100q.jpg',
        },
        {
            videoName: 'Povit',
            number: 'BV1xa4y1p7mm',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/GettyImages-502498568-59f010d4396e5a0010ef0827.jpg',
        },
    ],
    '进阶动作': [

    ],
    '其他': [
        {
            videoName: '正确摔跤',
            number: 'BV184411P7Vi',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/75b94f547c62718209711a28ebfda86019b8222d.jpg@672w_378h_1c_100q.jpg',
        },
        {
            videoName: 'jaws 25阶Ollie全记录',
            number: 'BV1AW411h7wT',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/30a3adc71d3f22d13e6b1678c22a846134336a2c.png@672w_378h_1c_100q.jpg',
        },
        {
            videoName: 'Dylan 蔚蓝人生',
            number: 'BV1bJ41137Mg',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://gitee.com/sunny_f/img-bed/raw/master/31e081fe150dad1bcc6b79e9585ce9997c1ba694.jpg@672w_378h_1c_100q.jpg',
        },
    ]
}