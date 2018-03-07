export class MongoConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  name: string;

   constructor (host: string, port: number, user: string, pass: string, name: string) {
    this.host = host;
    this.port = port;
    this.user = user;
    this.pass = pass;
    this.name = name;
  }

  getMongoUrl(): string {
     return ''
  }
}

export let mongoConfig: MongoConfig = new MongoConfig("127.0.0.1", 32768, "", "", "homework10");

export let serverPort: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
