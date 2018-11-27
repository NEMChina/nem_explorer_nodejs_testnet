const config = {
	port: 8081,
	mongodb: 'mongodb://127.0.0.1:27017/explorer',
	nisHost: '127.0.0.1',
	nisPort: '7890',
	wsPort: '7778',
	wsPath: '/w/messages',
	hugeAliceNisHost: '95.216.73.245',
	// apostilleAccount: 'NCZSJHLTIMESERVBVKOW6US64YDZG2PFGQCSV23J',
	apostilleAccount: 'TC7MCY5AGJQXZQ4BN3BOPNXUVIGDJCOHBPGUM2GE',
	// pollAccount: 'NAZN26HYB7C5HVYVJ4SL3KBTDT773NZBAOMGRFZB',
	pollAccount: 'TAVGTNCVGALLUPZC4JTLKR2WX25RQM2QOK5BHBKC',
	nisInitStartBlock: 0, //default 0
	network: 98 // 68-mainnet, 98-testnet 
}

module.exports = config;