import { client } from '../index';

export const createTables = async () => {
	await client.query(
		`
			CREATE TABLE IF NOT EXISTS "cityWeather" (
				id SERIAL PRIMARY KEY,
				"cityName" varchar(255) NOT NULL UNIQUE,
				"weatherData" jsonb
			);
		`
	);

	await client.query(
		`
			CREATE TABLE IF NOT EXISTS "countries" (
				id SERIAL PRIMARY KEY,
				"countryName" varchar(255) NOT NULL UNIQUE,
				"countryData" jsonb
			);
		`
	);

	await client.query(
		`
			CREATE TABLE IF NOT EXISTS users (
				"userId" varchar(255) NOT NULL,
				lat varchar(255) NOT NULL,
				lon varchar(255) NOT NULL,
				"cityId" int NOT NULL,
				"countryId" int NOT NULL,
				"userSpotifyData" jsonb,

				PRIMARY KEY ("userId"),
				FOREIGN KEY ("cityId") REFERENCES "cityWeather"(id),
				FOREIGN KEY ("countryId") REFERENCES "countries"(id)
			);
		`
	);
};
