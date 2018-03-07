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

  getMongoUrl (): string {
    if (this.user && this.pass) {
      return 'mongodb://' + this.user + ':' + this.pass + '@' + this.host + ':' + this.port + '/' + this.name;
    } else {
      return 'mongodb://' + this.host + ':' + this.port + '/' + this.name;
    }
  }
}

export let mongoConfig: MongoConfig;

if (process.env.MONGODB_URI) {
  let matches = process.env.MONGODB_URI.match('\\/\\/([a-zA-Z0-9_]+):([a-zA-Z0-9_]+)@([a-zA-Z0-9_\\.]+):([0-9]+)\\/([a-zA-Z0-9_]+)');
  if (matches) {
    mongoConfig = new MongoConfig(matches[2], parseInt(matches[3], 10), matches[0], matches[1], matches[4]);
  }
} else {
  mongoConfig = new MongoConfig('127.0.0.1', 32768, '', '', 'homework10');
}

export let serverPort: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
