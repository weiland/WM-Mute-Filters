var data  = {
	"keywords": [
		"WM",
		"WorldCup2014", 
		"WC2014", 
		"WorldCup", 
		"WC",
		"FIFA World Cup",
		"FIFA",
		"aneurerseite",
		"WM2014",
		"Tor",
		"gewonnen",
		"gewinnt",
		"verloren",
		"verliert",
		"Finale",
		"Halbfinale",
		"Viertelfinale",
		"Achtelfinale",
		"Gruppenphase",
		"Gruppe",
		"#flagge",
		"#ALG",
		"#ARG",
		"#GER",
		"#FRA",
		"#ESP",
		"#flagge",
		"#ALG",
		"#ARG",
		"#AUS",
		"#BRA",
		"#CHI",
		"#CIV",
		"#CMR",
		"#DEN",
		"#ENG",
		"#ESP",
		"#FRA",
		"#GER",
		"#GHA",
		"#GRE",
		"#HON",
		"#ITA",
		"#JPN",
		"#KOR",
		"#MEX",
		"#NED",
		"#NGA",
		"#NZL",
		"#PAR",
		"#POR",
		"#PRK",
		"#RSA",
		"#SRB",
		"#SUI",
		"#SVK",
		"#SVN",
		"#URU",
		"#USA"
	]
};

for (var i = 0; i < data.keywords.length; i++) {
	$("#filter-input").val(data.keywords[i]);
	$("#add-filter").trigger("click");
}
