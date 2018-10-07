export interface IPlayer {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  creationDate?: string;
}

class PlayerBuilder {
  private json: IPlayer;

  constructor(player?: Player) {
    this.json = player ? player.toJSON() : <IPlayer> {};
  }

  public id(id: string): PlayerBuilder {
    this.json.id = id;
    return this;
  }

  public firstName(firstName: string): PlayerBuilder {
    this.json.firstName = firstName;
    return this;
  }

  public lastName(lastName: string): PlayerBuilder {
    this.json.lastName = lastName;
    return this;
  }

  public email(email: string): PlayerBuilder {
    this.json.email = email;
    return this;
  }

  public creationDate(creationDate: string): PlayerBuilder {
    this.json.creationDate = creationDate;
    return this;
  }

  public build(): Player {
    return Player.fromJSON(this.json);
  }
}

export class Player implements IPlayer {
  public readonly id: string;
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly email: string;
  public readonly creationDate: string;

  private constructor(
    id: string,
    firstName: string,
    lastName: string,
    email?: string,
    creationDate?: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.creationDate = creationDate;
  }

  public static fromJSON(json: IPlayer): Player {
    return new Player(
      json.id,
      json.firstName,
      json.lastName,
      json.email,
      json.creationDate,
    );
  }

  public static builder(player?: Player): PlayerBuilder {
    return new PlayerBuilder(player);
  }

  public toJSON(): Player {
    // Hack to remove undefined items
    return JSON.parse(JSON.stringify({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      creationDate: this.creationDate,
    }));
  }
}
