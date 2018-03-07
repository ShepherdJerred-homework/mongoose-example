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

export let mongoConfig: MongoConfig = new MongoConfig('127.0.0.1', 32768, '', '', 'comp431');

export let serverPort: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
