import { Kafka, logLevel } from "kafkajs"

export const kafka = new Kafka({
    brokers: ['tough-horse-11734-eu1-kafka.upstash.io:9092'],
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',
        username: 'dG91Z2gtaG9yc2UtMTE3MzQkI', 
        password: 'MDFhNDVhZWEtYzdmYi00NTdmLWE1NjktZjQxNjZlODRlZTgz'
    },
    logLevel: logLevel.ERROR,
});
