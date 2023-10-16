type AttributeType =
  | NumberConstructor
  | StringConstructor
  | BooleanConstructor
  | [NumberConstructor]
  | [StringConstructor]
  | [BooleanConstructor];

interface NumberAttributeSchema {
  type: NumberConstructor;
  validator?: (value: number) => boolean;
  index: boolean;
}

interface StringAttributeSchema {
  type: StringConstructor;
  validator?: (value: string) => boolean;
}

interface BooleanAttributeSchema {
  type: BooleanConstructor;
  validator?: (value: boolean) => boolean;
}

interface ConstructorSchema<T> {
  type: Type<T>;
  validator?: (value: T) => boolean;
}

interface AnyClass<T> {
  new (...params: unknown[]): T;
}

type SchemaDefinition<T = unknown> =
  //   | AttributeType
  | NumberAttributeSchema
  | StringAttributeSchema
  | BooleanAttributeSchema
  | ConstructorSchema<T>;

export interface Type<T> extends Function {
  new (...args: any[]): T;
}

class Schema {
  constructor(private readonly schema: Record<string, SchemaDefinition>) {}

  private validate() {
    // validate schema
  }
}

class Gun {
  type!: string;
}

const x = new Schema({
  a: { type: Gun, validator: (x: any) => x.type === '0' },

});
