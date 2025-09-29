
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserDetails
 * 
 */
export type UserDetails = $Result.DefaultSelection<Prisma.$UserDetailsPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model OverViews
 * 
 */
export type OverViews = $Result.DefaultSelection<Prisma.$OverViewsPayload>
/**
 * Model Details
 * 
 */
export type Details = $Result.DefaultSelection<Prisma.$DetailsPayload>
/**
 * Model Lessons
 * 
 */
export type Lessons = $Result.DefaultSelection<Prisma.$LessonsPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderForm
 * 
 */
export type OrderForm = $Result.DefaultSelection<Prisma.$OrderFormPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDetails`: Exposes CRUD operations for the **UserDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDetails
    * const userDetails = await prisma.userDetails.findMany()
    * ```
    */
  get userDetails(): Prisma.UserDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.overViews`: Exposes CRUD operations for the **OverViews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OverViews
    * const overViews = await prisma.overViews.findMany()
    * ```
    */
  get overViews(): Prisma.OverViewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.details`: Exposes CRUD operations for the **Details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Details
    * const details = await prisma.details.findMany()
    * ```
    */
  get details(): Prisma.DetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessons`: Exposes CRUD operations for the **Lessons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lessons.findMany()
    * ```
    */
  get lessons(): Prisma.LessonsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderForm`: Exposes CRUD operations for the **OrderForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderForms
    * const orderForms = await prisma.orderForm.findMany()
    * ```
    */
  get orderForm(): Prisma.OrderFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserDetails: 'UserDetails',
    Course: 'Course',
    OverViews: 'OverViews',
    Details: 'Details',
    Lessons: 'Lessons',
    Order: 'Order',
    OrderForm: 'OrderForm',
    Comment: 'Comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userDetails" | "course" | "overViews" | "details" | "lessons" | "order" | "orderForm" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserDetails: {
        payload: Prisma.$UserDetailsPayload<ExtArgs>
        fields: Prisma.UserDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findFirst: {
            args: Prisma.UserDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findMany: {
            args: Prisma.UserDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          create: {
            args: Prisma.UserDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          createMany: {
            args: Prisma.UserDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          delete: {
            args: Prisma.UserDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          update: {
            args: Prisma.UserDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          deleteMany: {
            args: Prisma.UserDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          upsert: {
            args: Prisma.UserDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          aggregate: {
            args: Prisma.UserDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDetails>
          }
          groupBy: {
            args: Prisma.UserDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      OverViews: {
        payload: Prisma.$OverViewsPayload<ExtArgs>
        fields: Prisma.OverViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OverViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OverViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload>
          }
          findFirst: {
            args: Prisma.OverViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OverViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload>
          }
          findMany: {
            args: Prisma.OverViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload>[]
          }
          create: {
            args: Prisma.OverViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload>
          }
          createMany: {
            args: Prisma.OverViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OverViewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload>[]
          }
          delete: {
            args: Prisma.OverViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload>
          }
          update: {
            args: Prisma.OverViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload>
          }
          deleteMany: {
            args: Prisma.OverViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OverViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OverViewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload>[]
          }
          upsert: {
            args: Prisma.OverViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverViewsPayload>
          }
          aggregate: {
            args: Prisma.OverViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOverViews>
          }
          groupBy: {
            args: Prisma.OverViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OverViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OverViewsCountArgs<ExtArgs>
            result: $Utils.Optional<OverViewsCountAggregateOutputType> | number
          }
        }
      }
      Details: {
        payload: Prisma.$DetailsPayload<ExtArgs>
        fields: Prisma.DetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          findFirst: {
            args: Prisma.DetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          findMany: {
            args: Prisma.DetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>[]
          }
          create: {
            args: Prisma.DetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          createMany: {
            args: Prisma.DetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>[]
          }
          delete: {
            args: Prisma.DetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          update: {
            args: Prisma.DetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          deleteMany: {
            args: Prisma.DetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>[]
          }
          upsert: {
            args: Prisma.DetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          aggregate: {
            args: Prisma.DetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetails>
          }
          groupBy: {
            args: Prisma.DetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailsCountArgs<ExtArgs>
            result: $Utils.Optional<DetailsCountAggregateOutputType> | number
          }
        }
      }
      Lessons: {
        payload: Prisma.$LessonsPayload<ExtArgs>
        fields: Prisma.LessonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload>
          }
          findFirst: {
            args: Prisma.LessonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload>
          }
          findMany: {
            args: Prisma.LessonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload>[]
          }
          create: {
            args: Prisma.LessonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload>
          }
          createMany: {
            args: Prisma.LessonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload>[]
          }
          delete: {
            args: Prisma.LessonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload>
          }
          update: {
            args: Prisma.LessonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload>
          }
          deleteMany: {
            args: Prisma.LessonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload>[]
          }
          upsert: {
            args: Prisma.LessonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonsPayload>
          }
          aggregate: {
            args: Prisma.LessonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessons>
          }
          groupBy: {
            args: Prisma.LessonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonsCountArgs<ExtArgs>
            result: $Utils.Optional<LessonsCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderForm: {
        payload: Prisma.$OrderFormPayload<ExtArgs>
        fields: Prisma.OrderFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload>
          }
          findFirst: {
            args: Prisma.OrderFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload>
          }
          findMany: {
            args: Prisma.OrderFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload>[]
          }
          create: {
            args: Prisma.OrderFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload>
          }
          createMany: {
            args: Prisma.OrderFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload>[]
          }
          delete: {
            args: Prisma.OrderFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload>
          }
          update: {
            args: Prisma.OrderFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload>
          }
          deleteMany: {
            args: Prisma.OrderFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload>[]
          }
          upsert: {
            args: Prisma.OrderFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFormPayload>
          }
          aggregate: {
            args: Prisma.OrderFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderForm>
          }
          groupBy: {
            args: Prisma.OrderFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderFormCountArgs<ExtArgs>
            result: $Utils.Optional<OrderFormCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userDetails?: UserDetailsOmit
    course?: CourseOmit
    overViews?: OverViewsOmit
    details?: DetailsOmit
    lessons?: LessonsOmit
    order?: OrderOmit
    orderForm?: OrderFormOmit
    comment?: CommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    courses: number
    coursesS: number
    orders: number
    orderForms: number
    Comment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
    coursesS?: boolean | UserCountOutputTypeCountCoursesSArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    orderForms?: boolean | UserCountOutputTypeCountOrderFormsArgs
    Comment?: boolean | UserCountOutputTypeCountCommentArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFormWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    overviews: number
    details: number
    students: number
    orders: number
    orderForms: number
    Comment: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    overviews?: boolean | CourseCountOutputTypeCountOverviewsArgs
    details?: boolean | CourseCountOutputTypeCountDetailsArgs
    students?: boolean | CourseCountOutputTypeCountStudentsArgs
    orders?: boolean | CourseCountOutputTypeCountOrdersArgs
    orderForms?: boolean | CourseCountOutputTypeCountOrderFormsArgs
    Comment?: boolean | CourseCountOutputTypeCountCommentArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountOverviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OverViewsWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailsWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountOrderFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFormWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type DetailsCountOutputType
   */

  export type DetailsCountOutputType = {
    lessons: number
  }

  export type DetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | DetailsCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * DetailsCountOutputType without action
   */
  export type DetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailsCountOutputType
     */
    select?: DetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetailsCountOutputType without action
   */
  export type DetailsCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    username: string | null
    password: string | null
    phone_number: string | null
    wilaya: string | null
    picture: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    username: string | null
    password: string | null
    phone_number: string | null
    wilaya: string | null
    picture: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    username: number
    password: number
    phone_number: number
    wilaya: number
    picture: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    password?: true
    phone_number?: true
    wilaya?: true
    picture?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    password?: true
    phone_number?: true
    wilaya?: true
    picture?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    password?: true
    phone_number?: true
    wilaya?: true
    picture?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture: string | null
    role: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone_number?: boolean
    wilaya?: boolean
    picture?: boolean
    role?: boolean
    details?: boolean | User$detailsArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    coursesS?: boolean | User$coursesSArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    orderForms?: boolean | User$orderFormsArgs<ExtArgs>
    Comment?: boolean | User$CommentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone_number?: boolean
    wilaya?: boolean
    picture?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone_number?: boolean
    wilaya?: boolean
    picture?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone_number?: boolean
    wilaya?: boolean
    picture?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "username" | "password" | "phone_number" | "wilaya" | "picture" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | User$detailsArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    coursesS?: boolean | User$coursesSArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    orderForms?: boolean | User$orderFormsArgs<ExtArgs>
    Comment?: boolean | User$CommentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      details: Prisma.$UserDetailsPayload<ExtArgs> | null
      courses: Prisma.$CoursePayload<ExtArgs>[]
      coursesS: Prisma.$CoursePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      orderForms: Prisma.$OrderFormPayload<ExtArgs>[]
      Comment: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      username: string
      password: string
      phone_number: string
      wilaya: string
      picture: string | null
      role: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends User$detailsArgs<ExtArgs> = {}>(args?: Subset<T, User$detailsArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    courses<T extends User$coursesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coursesS<T extends User$coursesSArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderForms<T extends User$orderFormsArgs<ExtArgs> = {}>(args?: Subset<T, User$orderFormsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Comment<T extends User$CommentArgs<ExtArgs> = {}>(args?: Subset<T, User$CommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly wilaya: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.details
   */
  export type User$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    where?: UserDetailsWhereInput
  }

  /**
   * User.courses
   */
  export type User$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.coursesS
   */
  export type User$coursesSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.orderForms
   */
  export type User$orderFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    where?: OrderFormWhereInput
    orderBy?: OrderFormOrderByWithRelationInput | OrderFormOrderByWithRelationInput[]
    cursor?: OrderFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderFormScalarFieldEnum | OrderFormScalarFieldEnum[]
  }

  /**
   * User.Comment
   */
  export type User$CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserDetails
   */

  export type AggregateUserDetails = {
    _count: UserDetailsCountAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  export type UserDetailsMinAggregateOutputType = {
    id: string | null
    title: string | null
    status: boolean | null
    linkedIn: string | null
    x: string | null
    userId: string | null
  }

  export type UserDetailsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    status: boolean | null
    linkedIn: string | null
    x: string | null
    userId: string | null
  }

  export type UserDetailsCountAggregateOutputType = {
    id: number
    title: number
    status: number
    linkedIn: number
    x: number
    userId: number
    _all: number
  }


  export type UserDetailsMinAggregateInputType = {
    id?: true
    title?: true
    status?: true
    linkedIn?: true
    x?: true
    userId?: true
  }

  export type UserDetailsMaxAggregateInputType = {
    id?: true
    title?: true
    status?: true
    linkedIn?: true
    x?: true
    userId?: true
  }

  export type UserDetailsCountAggregateInputType = {
    id?: true
    title?: true
    status?: true
    linkedIn?: true
    x?: true
    userId?: true
    _all?: true
  }

  export type UserDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to aggregate.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDetails
    **/
    _count?: true | UserDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDetailsMaxAggregateInputType
  }

  export type GetUserDetailsAggregateType<T extends UserDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDetails[P]>
      : GetScalarType<T[P], AggregateUserDetails[P]>
  }




  export type UserDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsWhereInput
    orderBy?: UserDetailsOrderByWithAggregationInput | UserDetailsOrderByWithAggregationInput[]
    by: UserDetailsScalarFieldEnum[] | UserDetailsScalarFieldEnum
    having?: UserDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDetailsCountAggregateInputType | true
    _min?: UserDetailsMinAggregateInputType
    _max?: UserDetailsMaxAggregateInputType
  }

  export type UserDetailsGroupByOutputType = {
    id: string
    title: string
    status: boolean | null
    linkedIn: string | null
    x: string | null
    userId: string
    _count: UserDetailsCountAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  type GetUserDetailsGroupByPayload<T extends UserDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
        }
      >
    >


  export type UserDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    linkedIn?: boolean
    x?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    linkedIn?: boolean
    x?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    linkedIn?: boolean
    x?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectScalar = {
    id?: boolean
    title?: boolean
    status?: boolean
    linkedIn?: boolean
    x?: boolean
    userId?: boolean
  }

  export type UserDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "status" | "linkedIn" | "x" | "userId", ExtArgs["result"]["userDetails"]>
  export type UserDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      status: boolean | null
      linkedIn: string | null
      x: string | null
      userId: string
    }, ExtArgs["result"]["userDetails"]>
    composites: {}
  }

  type UserDetailsGetPayload<S extends boolean | null | undefined | UserDetailsDefaultArgs> = $Result.GetResult<Prisma.$UserDetailsPayload, S>

  type UserDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDetailsCountAggregateInputType | true
    }

  export interface UserDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDetails'], meta: { name: 'UserDetails' } }
    /**
     * Find zero or one UserDetails that matches the filter.
     * @param {UserDetailsFindUniqueArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDetailsFindUniqueArgs>(args: SelectSubset<T, UserDetailsFindUniqueArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDetailsFindUniqueOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDetailsFindFirstArgs>(args?: SelectSubset<T, UserDetailsFindFirstArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDetails
     * const userDetails = await prisma.userDetails.findMany()
     * 
     * // Get first 10 UserDetails
     * const userDetails = await prisma.userDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDetailsWithIdOnly = await prisma.userDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDetailsFindManyArgs>(args?: SelectSubset<T, UserDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDetails.
     * @param {UserDetailsCreateArgs} args - Arguments to create a UserDetails.
     * @example
     * // Create one UserDetails
     * const UserDetails = await prisma.userDetails.create({
     *   data: {
     *     // ... data to create a UserDetails
     *   }
     * })
     * 
     */
    create<T extends UserDetailsCreateArgs>(args: SelectSubset<T, UserDetailsCreateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDetails.
     * @param {UserDetailsCreateManyArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDetailsCreateManyArgs>(args?: SelectSubset<T, UserDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDetails and returns the data saved in the database.
     * @param {UserDetailsCreateManyAndReturnArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDetails and only return the `id`
     * const userDetailsWithIdOnly = await prisma.userDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDetails.
     * @param {UserDetailsDeleteArgs} args - Arguments to delete one UserDetails.
     * @example
     * // Delete one UserDetails
     * const UserDetails = await prisma.userDetails.delete({
     *   where: {
     *     // ... filter to delete one UserDetails
     *   }
     * })
     * 
     */
    delete<T extends UserDetailsDeleteArgs>(args: SelectSubset<T, UserDetailsDeleteArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDetails.
     * @param {UserDetailsUpdateArgs} args - Arguments to update one UserDetails.
     * @example
     * // Update one UserDetails
     * const userDetails = await prisma.userDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDetailsUpdateArgs>(args: SelectSubset<T, UserDetailsUpdateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDetails.
     * @param {UserDetailsDeleteManyArgs} args - Arguments to filter UserDetails to delete.
     * @example
     * // Delete a few UserDetails
     * const { count } = await prisma.userDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDetailsDeleteManyArgs>(args?: SelectSubset<T, UserDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDetails
     * const userDetails = await prisma.userDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDetailsUpdateManyArgs>(args: SelectSubset<T, UserDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails and returns the data updated in the database.
     * @param {UserDetailsUpdateManyAndReturnArgs} args - Arguments to update many UserDetails.
     * @example
     * // Update many UserDetails
     * const userDetails = await prisma.userDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDetails and only return the `id`
     * const userDetailsWithIdOnly = await prisma.userDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDetails.
     * @param {UserDetailsUpsertArgs} args - Arguments to update or create a UserDetails.
     * @example
     * // Update or create a UserDetails
     * const userDetails = await prisma.userDetails.upsert({
     *   create: {
     *     // ... data to create a UserDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDetails we want to update
     *   }
     * })
     */
    upsert<T extends UserDetailsUpsertArgs>(args: SelectSubset<T, UserDetailsUpsertArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsCountArgs} args - Arguments to filter UserDetails to count.
     * @example
     * // Count the number of UserDetails
     * const count = await prisma.userDetails.count({
     *   where: {
     *     // ... the filter for the UserDetails we want to count
     *   }
     * })
    **/
    count<T extends UserDetailsCountArgs>(
      args?: Subset<T, UserDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDetailsAggregateArgs>(args: Subset<T, UserDetailsAggregateArgs>): Prisma.PrismaPromise<GetUserDetailsAggregateType<T>>

    /**
     * Group by UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDetailsGroupByArgs['orderBy'] }
        : { orderBy?: UserDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDetails model
   */
  readonly fields: UserDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDetails model
   */
  interface UserDetailsFieldRefs {
    readonly id: FieldRef<"UserDetails", 'String'>
    readonly title: FieldRef<"UserDetails", 'String'>
    readonly status: FieldRef<"UserDetails", 'Boolean'>
    readonly linkedIn: FieldRef<"UserDetails", 'String'>
    readonly x: FieldRef<"UserDetails", 'String'>
    readonly userId: FieldRef<"UserDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserDetails findUnique
   */
  export type UserDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findUniqueOrThrow
   */
  export type UserDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findFirst
   */
  export type UserDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findFirstOrThrow
   */
  export type UserDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findMany
   */
  export type UserDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails create
   */
  export type UserDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDetails.
     */
    data: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
  }

  /**
   * UserDetails createMany
   */
  export type UserDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDetails createManyAndReturn
   */
  export type UserDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetails update
   */
  export type UserDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDetails.
     */
    data: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
    /**
     * Choose, which UserDetails to update.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails updateMany
   */
  export type UserDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
  }

  /**
   * UserDetails updateManyAndReturn
   */
  export type UserDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetails upsert
   */
  export type UserDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDetails to update in case it exists.
     */
    where: UserDetailsWhereUniqueInput
    /**
     * In case the UserDetails found by the `where` argument doesn't exist, create a new UserDetails with this data.
     */
    create: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
    /**
     * In case the UserDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
  }

  /**
   * UserDetails delete
   */
  export type UserDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter which UserDetails to delete.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails deleteMany
   */
  export type UserDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to delete
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to delete.
     */
    limit?: number
  }

  /**
   * UserDetails without action
   */
  export type UserDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: number | null
    discount: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: number | null
    discount: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    picture: string | null
    type: string | null
    discount: number | null
    categorie: string | null
    level: string | null
    status: string | null
    startDate: Date | null
    instructorId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    picture: string | null
    type: string | null
    discount: number | null
    categorie: string | null
    level: string | null
    status: string | null
    startDate: Date | null
    instructorId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    picture: number
    type: number
    discount: number
    categorie: number
    level: number
    status: number
    startDate: number
    instructorId: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
    discount?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
    discount?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    picture?: true
    type?: true
    discount?: true
    categorie?: true
    level?: true
    status?: true
    startDate?: true
    instructorId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    picture?: true
    type?: true
    discount?: true
    categorie?: true
    level?: true
    status?: true
    startDate?: true
    instructorId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    picture?: true
    type?: true
    discount?: true
    categorie?: true
    level?: true
    status?: true
    startDate?: true
    instructorId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    picture: string
    type: string | null
    discount: number | null
    categorie: string
    level: string
    status: string
    startDate: Date | null
    instructorId: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    picture?: boolean
    type?: boolean
    discount?: boolean
    categorie?: boolean
    level?: boolean
    status?: boolean
    startDate?: boolean
    instructorId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    overviews?: boolean | Course$overviewsArgs<ExtArgs>
    details?: boolean | Course$detailsArgs<ExtArgs>
    students?: boolean | Course$studentsArgs<ExtArgs>
    orders?: boolean | Course$ordersArgs<ExtArgs>
    orderForms?: boolean | Course$orderFormsArgs<ExtArgs>
    Comment?: boolean | Course$CommentArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    picture?: boolean
    type?: boolean
    discount?: boolean
    categorie?: boolean
    level?: boolean
    status?: boolean
    startDate?: boolean
    instructorId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    picture?: boolean
    type?: boolean
    discount?: boolean
    categorie?: boolean
    level?: boolean
    status?: boolean
    startDate?: boolean
    instructorId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    picture?: boolean
    type?: boolean
    discount?: boolean
    categorie?: boolean
    level?: boolean
    status?: boolean
    startDate?: boolean
    instructorId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "picture" | "type" | "discount" | "categorie" | "level" | "status" | "startDate" | "instructorId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    overviews?: boolean | Course$overviewsArgs<ExtArgs>
    details?: boolean | Course$detailsArgs<ExtArgs>
    students?: boolean | Course$studentsArgs<ExtArgs>
    orders?: boolean | Course$ordersArgs<ExtArgs>
    orderForms?: boolean | Course$orderFormsArgs<ExtArgs>
    Comment?: boolean | Course$CommentArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      instructor: Prisma.$UserPayload<ExtArgs>
      overviews: Prisma.$OverViewsPayload<ExtArgs>[]
      details: Prisma.$DetailsPayload<ExtArgs>[]
      students: Prisma.$UserPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      orderForms: Prisma.$OrderFormPayload<ExtArgs>[]
      Comment: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      picture: string
      type: string | null
      discount: number | null
      categorie: string
      level: string
      status: string
      startDate: Date | null
      instructorId: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    overviews<T extends Course$overviewsArgs<ExtArgs> = {}>(args?: Subset<T, Course$overviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    details<T extends Course$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Course$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Course$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Course$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Course$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderForms<T extends Course$orderFormsArgs<ExtArgs> = {}>(args?: Subset<T, Course$orderFormsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Comment<T extends Course$CommentArgs<ExtArgs> = {}>(args?: Subset<T, Course$CommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Float'>
    readonly picture: FieldRef<"Course", 'String'>
    readonly type: FieldRef<"Course", 'String'>
    readonly discount: FieldRef<"Course", 'Float'>
    readonly categorie: FieldRef<"Course", 'String'>
    readonly level: FieldRef<"Course", 'String'>
    readonly status: FieldRef<"Course", 'String'>
    readonly startDate: FieldRef<"Course", 'DateTime'>
    readonly instructorId: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.overviews
   */
  export type Course$overviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    where?: OverViewsWhereInput
    orderBy?: OverViewsOrderByWithRelationInput | OverViewsOrderByWithRelationInput[]
    cursor?: OverViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OverViewsScalarFieldEnum | OverViewsScalarFieldEnum[]
  }

  /**
   * Course.details
   */
  export type Course$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    where?: DetailsWhereInput
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    cursor?: DetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * Course.students
   */
  export type Course$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Course.orders
   */
  export type Course$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Course.orderForms
   */
  export type Course$orderFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    where?: OrderFormWhereInput
    orderBy?: OrderFormOrderByWithRelationInput | OrderFormOrderByWithRelationInput[]
    cursor?: OrderFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderFormScalarFieldEnum | OrderFormScalarFieldEnum[]
  }

  /**
   * Course.Comment
   */
  export type Course$CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model OverViews
   */

  export type AggregateOverViews = {
    _count: OverViewsCountAggregateOutputType | null
    _min: OverViewsMinAggregateOutputType | null
    _max: OverViewsMaxAggregateOutputType | null
  }

  export type OverViewsMinAggregateOutputType = {
    id: string | null
    statement: string | null
    type: string | null
    courseId: string | null
  }

  export type OverViewsMaxAggregateOutputType = {
    id: string | null
    statement: string | null
    type: string | null
    courseId: string | null
  }

  export type OverViewsCountAggregateOutputType = {
    id: number
    statement: number
    type: number
    courseId: number
    _all: number
  }


  export type OverViewsMinAggregateInputType = {
    id?: true
    statement?: true
    type?: true
    courseId?: true
  }

  export type OverViewsMaxAggregateInputType = {
    id?: true
    statement?: true
    type?: true
    courseId?: true
  }

  export type OverViewsCountAggregateInputType = {
    id?: true
    statement?: true
    type?: true
    courseId?: true
    _all?: true
  }

  export type OverViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OverViews to aggregate.
     */
    where?: OverViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverViews to fetch.
     */
    orderBy?: OverViewsOrderByWithRelationInput | OverViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OverViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OverViews
    **/
    _count?: true | OverViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OverViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OverViewsMaxAggregateInputType
  }

  export type GetOverViewsAggregateType<T extends OverViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateOverViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOverViews[P]>
      : GetScalarType<T[P], AggregateOverViews[P]>
  }




  export type OverViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OverViewsWhereInput
    orderBy?: OverViewsOrderByWithAggregationInput | OverViewsOrderByWithAggregationInput[]
    by: OverViewsScalarFieldEnum[] | OverViewsScalarFieldEnum
    having?: OverViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OverViewsCountAggregateInputType | true
    _min?: OverViewsMinAggregateInputType
    _max?: OverViewsMaxAggregateInputType
  }

  export type OverViewsGroupByOutputType = {
    id: string
    statement: string
    type: string
    courseId: string
    _count: OverViewsCountAggregateOutputType | null
    _min: OverViewsMinAggregateOutputType | null
    _max: OverViewsMaxAggregateOutputType | null
  }

  type GetOverViewsGroupByPayload<T extends OverViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OverViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OverViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OverViewsGroupByOutputType[P]>
            : GetScalarType<T[P], OverViewsGroupByOutputType[P]>
        }
      >
    >


  export type OverViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statement?: boolean
    type?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["overViews"]>

  export type OverViewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statement?: boolean
    type?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["overViews"]>

  export type OverViewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statement?: boolean
    type?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["overViews"]>

  export type OverViewsSelectScalar = {
    id?: boolean
    statement?: boolean
    type?: boolean
    courseId?: boolean
  }

  export type OverViewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statement" | "type" | "courseId", ExtArgs["result"]["overViews"]>
  export type OverViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type OverViewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type OverViewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $OverViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OverViews"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      statement: string
      type: string
      courseId: string
    }, ExtArgs["result"]["overViews"]>
    composites: {}
  }

  type OverViewsGetPayload<S extends boolean | null | undefined | OverViewsDefaultArgs> = $Result.GetResult<Prisma.$OverViewsPayload, S>

  type OverViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OverViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OverViewsCountAggregateInputType | true
    }

  export interface OverViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OverViews'], meta: { name: 'OverViews' } }
    /**
     * Find zero or one OverViews that matches the filter.
     * @param {OverViewsFindUniqueArgs} args - Arguments to find a OverViews
     * @example
     * // Get one OverViews
     * const overViews = await prisma.overViews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OverViewsFindUniqueArgs>(args: SelectSubset<T, OverViewsFindUniqueArgs<ExtArgs>>): Prisma__OverViewsClient<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OverViews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OverViewsFindUniqueOrThrowArgs} args - Arguments to find a OverViews
     * @example
     * // Get one OverViews
     * const overViews = await prisma.overViews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OverViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, OverViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OverViewsClient<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OverViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverViewsFindFirstArgs} args - Arguments to find a OverViews
     * @example
     * // Get one OverViews
     * const overViews = await prisma.overViews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OverViewsFindFirstArgs>(args?: SelectSubset<T, OverViewsFindFirstArgs<ExtArgs>>): Prisma__OverViewsClient<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OverViews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverViewsFindFirstOrThrowArgs} args - Arguments to find a OverViews
     * @example
     * // Get one OverViews
     * const overViews = await prisma.overViews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OverViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, OverViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OverViewsClient<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OverViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OverViews
     * const overViews = await prisma.overViews.findMany()
     * 
     * // Get first 10 OverViews
     * const overViews = await prisma.overViews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const overViewsWithIdOnly = await prisma.overViews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OverViewsFindManyArgs>(args?: SelectSubset<T, OverViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OverViews.
     * @param {OverViewsCreateArgs} args - Arguments to create a OverViews.
     * @example
     * // Create one OverViews
     * const OverViews = await prisma.overViews.create({
     *   data: {
     *     // ... data to create a OverViews
     *   }
     * })
     * 
     */
    create<T extends OverViewsCreateArgs>(args: SelectSubset<T, OverViewsCreateArgs<ExtArgs>>): Prisma__OverViewsClient<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OverViews.
     * @param {OverViewsCreateManyArgs} args - Arguments to create many OverViews.
     * @example
     * // Create many OverViews
     * const overViews = await prisma.overViews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OverViewsCreateManyArgs>(args?: SelectSubset<T, OverViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OverViews and returns the data saved in the database.
     * @param {OverViewsCreateManyAndReturnArgs} args - Arguments to create many OverViews.
     * @example
     * // Create many OverViews
     * const overViews = await prisma.overViews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OverViews and only return the `id`
     * const overViewsWithIdOnly = await prisma.overViews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OverViewsCreateManyAndReturnArgs>(args?: SelectSubset<T, OverViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OverViews.
     * @param {OverViewsDeleteArgs} args - Arguments to delete one OverViews.
     * @example
     * // Delete one OverViews
     * const OverViews = await prisma.overViews.delete({
     *   where: {
     *     // ... filter to delete one OverViews
     *   }
     * })
     * 
     */
    delete<T extends OverViewsDeleteArgs>(args: SelectSubset<T, OverViewsDeleteArgs<ExtArgs>>): Prisma__OverViewsClient<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OverViews.
     * @param {OverViewsUpdateArgs} args - Arguments to update one OverViews.
     * @example
     * // Update one OverViews
     * const overViews = await prisma.overViews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OverViewsUpdateArgs>(args: SelectSubset<T, OverViewsUpdateArgs<ExtArgs>>): Prisma__OverViewsClient<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OverViews.
     * @param {OverViewsDeleteManyArgs} args - Arguments to filter OverViews to delete.
     * @example
     * // Delete a few OverViews
     * const { count } = await prisma.overViews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OverViewsDeleteManyArgs>(args?: SelectSubset<T, OverViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OverViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OverViews
     * const overViews = await prisma.overViews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OverViewsUpdateManyArgs>(args: SelectSubset<T, OverViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OverViews and returns the data updated in the database.
     * @param {OverViewsUpdateManyAndReturnArgs} args - Arguments to update many OverViews.
     * @example
     * // Update many OverViews
     * const overViews = await prisma.overViews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OverViews and only return the `id`
     * const overViewsWithIdOnly = await prisma.overViews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OverViewsUpdateManyAndReturnArgs>(args: SelectSubset<T, OverViewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OverViews.
     * @param {OverViewsUpsertArgs} args - Arguments to update or create a OverViews.
     * @example
     * // Update or create a OverViews
     * const overViews = await prisma.overViews.upsert({
     *   create: {
     *     // ... data to create a OverViews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OverViews we want to update
     *   }
     * })
     */
    upsert<T extends OverViewsUpsertArgs>(args: SelectSubset<T, OverViewsUpsertArgs<ExtArgs>>): Prisma__OverViewsClient<$Result.GetResult<Prisma.$OverViewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OverViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverViewsCountArgs} args - Arguments to filter OverViews to count.
     * @example
     * // Count the number of OverViews
     * const count = await prisma.overViews.count({
     *   where: {
     *     // ... the filter for the OverViews we want to count
     *   }
     * })
    **/
    count<T extends OverViewsCountArgs>(
      args?: Subset<T, OverViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OverViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OverViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OverViewsAggregateArgs>(args: Subset<T, OverViewsAggregateArgs>): Prisma.PrismaPromise<GetOverViewsAggregateType<T>>

    /**
     * Group by OverViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverViewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OverViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OverViewsGroupByArgs['orderBy'] }
        : { orderBy?: OverViewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OverViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOverViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OverViews model
   */
  readonly fields: OverViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OverViews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OverViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OverViews model
   */
  interface OverViewsFieldRefs {
    readonly id: FieldRef<"OverViews", 'String'>
    readonly statement: FieldRef<"OverViews", 'String'>
    readonly type: FieldRef<"OverViews", 'String'>
    readonly courseId: FieldRef<"OverViews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OverViews findUnique
   */
  export type OverViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    /**
     * Filter, which OverViews to fetch.
     */
    where: OverViewsWhereUniqueInput
  }

  /**
   * OverViews findUniqueOrThrow
   */
  export type OverViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    /**
     * Filter, which OverViews to fetch.
     */
    where: OverViewsWhereUniqueInput
  }

  /**
   * OverViews findFirst
   */
  export type OverViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    /**
     * Filter, which OverViews to fetch.
     */
    where?: OverViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverViews to fetch.
     */
    orderBy?: OverViewsOrderByWithRelationInput | OverViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OverViews.
     */
    cursor?: OverViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OverViews.
     */
    distinct?: OverViewsScalarFieldEnum | OverViewsScalarFieldEnum[]
  }

  /**
   * OverViews findFirstOrThrow
   */
  export type OverViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    /**
     * Filter, which OverViews to fetch.
     */
    where?: OverViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverViews to fetch.
     */
    orderBy?: OverViewsOrderByWithRelationInput | OverViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OverViews.
     */
    cursor?: OverViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OverViews.
     */
    distinct?: OverViewsScalarFieldEnum | OverViewsScalarFieldEnum[]
  }

  /**
   * OverViews findMany
   */
  export type OverViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    /**
     * Filter, which OverViews to fetch.
     */
    where?: OverViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverViews to fetch.
     */
    orderBy?: OverViewsOrderByWithRelationInput | OverViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OverViews.
     */
    cursor?: OverViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverViews.
     */
    skip?: number
    distinct?: OverViewsScalarFieldEnum | OverViewsScalarFieldEnum[]
  }

  /**
   * OverViews create
   */
  export type OverViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a OverViews.
     */
    data: XOR<OverViewsCreateInput, OverViewsUncheckedCreateInput>
  }

  /**
   * OverViews createMany
   */
  export type OverViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OverViews.
     */
    data: OverViewsCreateManyInput | OverViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OverViews createManyAndReturn
   */
  export type OverViewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * The data used to create many OverViews.
     */
    data: OverViewsCreateManyInput | OverViewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OverViews update
   */
  export type OverViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a OverViews.
     */
    data: XOR<OverViewsUpdateInput, OverViewsUncheckedUpdateInput>
    /**
     * Choose, which OverViews to update.
     */
    where: OverViewsWhereUniqueInput
  }

  /**
   * OverViews updateMany
   */
  export type OverViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OverViews.
     */
    data: XOR<OverViewsUpdateManyMutationInput, OverViewsUncheckedUpdateManyInput>
    /**
     * Filter which OverViews to update
     */
    where?: OverViewsWhereInput
    /**
     * Limit how many OverViews to update.
     */
    limit?: number
  }

  /**
   * OverViews updateManyAndReturn
   */
  export type OverViewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * The data used to update OverViews.
     */
    data: XOR<OverViewsUpdateManyMutationInput, OverViewsUncheckedUpdateManyInput>
    /**
     * Filter which OverViews to update
     */
    where?: OverViewsWhereInput
    /**
     * Limit how many OverViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OverViews upsert
   */
  export type OverViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the OverViews to update in case it exists.
     */
    where: OverViewsWhereUniqueInput
    /**
     * In case the OverViews found by the `where` argument doesn't exist, create a new OverViews with this data.
     */
    create: XOR<OverViewsCreateInput, OverViewsUncheckedCreateInput>
    /**
     * In case the OverViews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OverViewsUpdateInput, OverViewsUncheckedUpdateInput>
  }

  /**
   * OverViews delete
   */
  export type OverViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
    /**
     * Filter which OverViews to delete.
     */
    where: OverViewsWhereUniqueInput
  }

  /**
   * OverViews deleteMany
   */
  export type OverViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OverViews to delete
     */
    where?: OverViewsWhereInput
    /**
     * Limit how many OverViews to delete.
     */
    limit?: number
  }

  /**
   * OverViews without action
   */
  export type OverViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverViews
     */
    select?: OverViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverViews
     */
    omit?: OverViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverViewsInclude<ExtArgs> | null
  }


  /**
   * Model Details
   */

  export type AggregateDetails = {
    _count: DetailsCountAggregateOutputType | null
    _avg: DetailsAvgAggregateOutputType | null
    _sum: DetailsSumAggregateOutputType | null
    _min: DetailsMinAggregateOutputType | null
    _max: DetailsMaxAggregateOutputType | null
  }

  export type DetailsAvgAggregateOutputType = {
    week: number | null
  }

  export type DetailsSumAggregateOutputType = {
    week: number | null
  }

  export type DetailsMinAggregateOutputType = {
    id: string | null
    week: number | null
    title: string | null
    courseId: string | null
  }

  export type DetailsMaxAggregateOutputType = {
    id: string | null
    week: number | null
    title: string | null
    courseId: string | null
  }

  export type DetailsCountAggregateOutputType = {
    id: number
    week: number
    title: number
    courseId: number
    _all: number
  }


  export type DetailsAvgAggregateInputType = {
    week?: true
  }

  export type DetailsSumAggregateInputType = {
    week?: true
  }

  export type DetailsMinAggregateInputType = {
    id?: true
    week?: true
    title?: true
    courseId?: true
  }

  export type DetailsMaxAggregateInputType = {
    id?: true
    week?: true
    title?: true
    courseId?: true
  }

  export type DetailsCountAggregateInputType = {
    id?: true
    week?: true
    title?: true
    courseId?: true
    _all?: true
  }

  export type DetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Details to aggregate.
     */
    where?: DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Details
    **/
    _count?: true | DetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailsMaxAggregateInputType
  }

  export type GetDetailsAggregateType<T extends DetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetails[P]>
      : GetScalarType<T[P], AggregateDetails[P]>
  }




  export type DetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailsWhereInput
    orderBy?: DetailsOrderByWithAggregationInput | DetailsOrderByWithAggregationInput[]
    by: DetailsScalarFieldEnum[] | DetailsScalarFieldEnum
    having?: DetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailsCountAggregateInputType | true
    _avg?: DetailsAvgAggregateInputType
    _sum?: DetailsSumAggregateInputType
    _min?: DetailsMinAggregateInputType
    _max?: DetailsMaxAggregateInputType
  }

  export type DetailsGroupByOutputType = {
    id: string
    week: number
    title: string
    courseId: string
    _count: DetailsCountAggregateOutputType | null
    _avg: DetailsAvgAggregateOutputType | null
    _sum: DetailsSumAggregateOutputType | null
    _min: DetailsMinAggregateOutputType | null
    _max: DetailsMaxAggregateOutputType | null
  }

  type GetDetailsGroupByPayload<T extends DetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailsGroupByOutputType[P]>
            : GetScalarType<T[P], DetailsGroupByOutputType[P]>
        }
      >
    >


  export type DetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    title?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | Details$lessonsArgs<ExtArgs>
    _count?: boolean | DetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["details"]>

  export type DetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    title?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["details"]>

  export type DetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    title?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["details"]>

  export type DetailsSelectScalar = {
    id?: boolean
    week?: boolean
    title?: boolean
    courseId?: boolean
  }

  export type DetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "week" | "title" | "courseId", ExtArgs["result"]["details"]>
  export type DetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | Details$lessonsArgs<ExtArgs>
    _count?: boolean | DetailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type DetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $DetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Details"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      lessons: Prisma.$LessonsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      week: number
      title: string
      courseId: string
    }, ExtArgs["result"]["details"]>
    composites: {}
  }

  type DetailsGetPayload<S extends boolean | null | undefined | DetailsDefaultArgs> = $Result.GetResult<Prisma.$DetailsPayload, S>

  type DetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailsCountAggregateInputType | true
    }

  export interface DetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Details'], meta: { name: 'Details' } }
    /**
     * Find zero or one Details that matches the filter.
     * @param {DetailsFindUniqueArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailsFindUniqueArgs>(args: SelectSubset<T, DetailsFindUniqueArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailsFindUniqueOrThrowArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsFindFirstArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailsFindFirstArgs>(args?: SelectSubset<T, DetailsFindFirstArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsFindFirstOrThrowArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Details
     * const details = await prisma.details.findMany()
     * 
     * // Get first 10 Details
     * const details = await prisma.details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailsWithIdOnly = await prisma.details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailsFindManyArgs>(args?: SelectSubset<T, DetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Details.
     * @param {DetailsCreateArgs} args - Arguments to create a Details.
     * @example
     * // Create one Details
     * const Details = await prisma.details.create({
     *   data: {
     *     // ... data to create a Details
     *   }
     * })
     * 
     */
    create<T extends DetailsCreateArgs>(args: SelectSubset<T, DetailsCreateArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Details.
     * @param {DetailsCreateManyArgs} args - Arguments to create many Details.
     * @example
     * // Create many Details
     * const details = await prisma.details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailsCreateManyArgs>(args?: SelectSubset<T, DetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Details and returns the data saved in the database.
     * @param {DetailsCreateManyAndReturnArgs} args - Arguments to create many Details.
     * @example
     * // Create many Details
     * const details = await prisma.details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Details and only return the `id`
     * const detailsWithIdOnly = await prisma.details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Details.
     * @param {DetailsDeleteArgs} args - Arguments to delete one Details.
     * @example
     * // Delete one Details
     * const Details = await prisma.details.delete({
     *   where: {
     *     // ... filter to delete one Details
     *   }
     * })
     * 
     */
    delete<T extends DetailsDeleteArgs>(args: SelectSubset<T, DetailsDeleteArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Details.
     * @param {DetailsUpdateArgs} args - Arguments to update one Details.
     * @example
     * // Update one Details
     * const details = await prisma.details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailsUpdateArgs>(args: SelectSubset<T, DetailsUpdateArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Details.
     * @param {DetailsDeleteManyArgs} args - Arguments to filter Details to delete.
     * @example
     * // Delete a few Details
     * const { count } = await prisma.details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailsDeleteManyArgs>(args?: SelectSubset<T, DetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Details
     * const details = await prisma.details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailsUpdateManyArgs>(args: SelectSubset<T, DetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Details and returns the data updated in the database.
     * @param {DetailsUpdateManyAndReturnArgs} args - Arguments to update many Details.
     * @example
     * // Update many Details
     * const details = await prisma.details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Details and only return the `id`
     * const detailsWithIdOnly = await prisma.details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Details.
     * @param {DetailsUpsertArgs} args - Arguments to update or create a Details.
     * @example
     * // Update or create a Details
     * const details = await prisma.details.upsert({
     *   create: {
     *     // ... data to create a Details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Details we want to update
     *   }
     * })
     */
    upsert<T extends DetailsUpsertArgs>(args: SelectSubset<T, DetailsUpsertArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsCountArgs} args - Arguments to filter Details to count.
     * @example
     * // Count the number of Details
     * const count = await prisma.details.count({
     *   where: {
     *     // ... the filter for the Details we want to count
     *   }
     * })
    **/
    count<T extends DetailsCountArgs>(
      args?: Subset<T, DetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetailsAggregateArgs>(args: Subset<T, DetailsAggregateArgs>): Prisma.PrismaPromise<GetDetailsAggregateType<T>>

    /**
     * Group by Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailsGroupByArgs['orderBy'] }
        : { orderBy?: DetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Details model
   */
  readonly fields: DetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Details$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Details$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Details model
   */
  interface DetailsFieldRefs {
    readonly id: FieldRef<"Details", 'String'>
    readonly week: FieldRef<"Details", 'Int'>
    readonly title: FieldRef<"Details", 'String'>
    readonly courseId: FieldRef<"Details", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Details findUnique
   */
  export type DetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where: DetailsWhereUniqueInput
  }

  /**
   * Details findUniqueOrThrow
   */
  export type DetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where: DetailsWhereUniqueInput
  }

  /**
   * Details findFirst
   */
  export type DetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where?: DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Details.
     */
    cursor?: DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Details.
     */
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * Details findFirstOrThrow
   */
  export type DetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where?: DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Details.
     */
    cursor?: DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Details.
     */
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * Details findMany
   */
  export type DetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where?: DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Details.
     */
    cursor?: DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * Details create
   */
  export type DetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a Details.
     */
    data: XOR<DetailsCreateInput, DetailsUncheckedCreateInput>
  }

  /**
   * Details createMany
   */
  export type DetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Details.
     */
    data: DetailsCreateManyInput | DetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Details createManyAndReturn
   */
  export type DetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * The data used to create many Details.
     */
    data: DetailsCreateManyInput | DetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Details update
   */
  export type DetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a Details.
     */
    data: XOR<DetailsUpdateInput, DetailsUncheckedUpdateInput>
    /**
     * Choose, which Details to update.
     */
    where: DetailsWhereUniqueInput
  }

  /**
   * Details updateMany
   */
  export type DetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Details.
     */
    data: XOR<DetailsUpdateManyMutationInput, DetailsUncheckedUpdateManyInput>
    /**
     * Filter which Details to update
     */
    where?: DetailsWhereInput
    /**
     * Limit how many Details to update.
     */
    limit?: number
  }

  /**
   * Details updateManyAndReturn
   */
  export type DetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * The data used to update Details.
     */
    data: XOR<DetailsUpdateManyMutationInput, DetailsUncheckedUpdateManyInput>
    /**
     * Filter which Details to update
     */
    where?: DetailsWhereInput
    /**
     * Limit how many Details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Details upsert
   */
  export type DetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the Details to update in case it exists.
     */
    where: DetailsWhereUniqueInput
    /**
     * In case the Details found by the `where` argument doesn't exist, create a new Details with this data.
     */
    create: XOR<DetailsCreateInput, DetailsUncheckedCreateInput>
    /**
     * In case the Details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailsUpdateInput, DetailsUncheckedUpdateInput>
  }

  /**
   * Details delete
   */
  export type DetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter which Details to delete.
     */
    where: DetailsWhereUniqueInput
  }

  /**
   * Details deleteMany
   */
  export type DetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Details to delete
     */
    where?: DetailsWhereInput
    /**
     * Limit how many Details to delete.
     */
    limit?: number
  }

  /**
   * Details.lessons
   */
  export type Details$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    where?: LessonsWhereInput
    orderBy?: LessonsOrderByWithRelationInput | LessonsOrderByWithRelationInput[]
    cursor?: LessonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * Details without action
   */
  export type DetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
  }


  /**
   * Model Lessons
   */

  export type AggregateLessons = {
    _count: LessonsCountAggregateOutputType | null
    _avg: LessonsAvgAggregateOutputType | null
    _sum: LessonsSumAggregateOutputType | null
    _min: LessonsMinAggregateOutputType | null
    _max: LessonsMaxAggregateOutputType | null
  }

  export type LessonsAvgAggregateOutputType = {
    position: number | null
  }

  export type LessonsSumAggregateOutputType = {
    position: number | null
  }

  export type LessonsMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    type: string | null
    duration: string | null
    position: number | null
    weekId: string | null
  }

  export type LessonsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    type: string | null
    duration: string | null
    position: number | null
    weekId: string | null
  }

  export type LessonsCountAggregateOutputType = {
    id: number
    name: number
    url: number
    type: number
    duration: number
    position: number
    weekId: number
    _all: number
  }


  export type LessonsAvgAggregateInputType = {
    position?: true
  }

  export type LessonsSumAggregateInputType = {
    position?: true
  }

  export type LessonsMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    duration?: true
    position?: true
    weekId?: true
  }

  export type LessonsMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    duration?: true
    position?: true
    weekId?: true
  }

  export type LessonsCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    duration?: true
    position?: true
    weekId?: true
    _all?: true
  }

  export type LessonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to aggregate.
     */
    where?: LessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonsOrderByWithRelationInput | LessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonsMaxAggregateInputType
  }

  export type GetLessonsAggregateType<T extends LessonsAggregateArgs> = {
        [P in keyof T & keyof AggregateLessons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessons[P]>
      : GetScalarType<T[P], AggregateLessons[P]>
  }




  export type LessonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonsWhereInput
    orderBy?: LessonsOrderByWithAggregationInput | LessonsOrderByWithAggregationInput[]
    by: LessonsScalarFieldEnum[] | LessonsScalarFieldEnum
    having?: LessonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonsCountAggregateInputType | true
    _avg?: LessonsAvgAggregateInputType
    _sum?: LessonsSumAggregateInputType
    _min?: LessonsMinAggregateInputType
    _max?: LessonsMaxAggregateInputType
  }

  export type LessonsGroupByOutputType = {
    id: string
    name: string
    url: string | null
    type: string
    duration: string | null
    position: number
    weekId: string
    _count: LessonsCountAggregateOutputType | null
    _avg: LessonsAvgAggregateOutputType | null
    _sum: LessonsSumAggregateOutputType | null
    _min: LessonsMinAggregateOutputType | null
    _max: LessonsMaxAggregateOutputType | null
  }

  type GetLessonsGroupByPayload<T extends LessonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonsGroupByOutputType[P]>
            : GetScalarType<T[P], LessonsGroupByOutputType[P]>
        }
      >
    >


  export type LessonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    duration?: boolean
    position?: boolean
    weekId?: boolean
    week?: boolean | DetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessons"]>

  export type LessonsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    duration?: boolean
    position?: boolean
    weekId?: boolean
    week?: boolean | DetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessons"]>

  export type LessonsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    duration?: boolean
    position?: boolean
    weekId?: boolean
    week?: boolean | DetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessons"]>

  export type LessonsSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    duration?: boolean
    position?: boolean
    weekId?: boolean
  }

  export type LessonsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "type" | "duration" | "position" | "weekId", ExtArgs["result"]["lessons"]>
  export type LessonsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    week?: boolean | DetailsDefaultArgs<ExtArgs>
  }
  export type LessonsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    week?: boolean | DetailsDefaultArgs<ExtArgs>
  }
  export type LessonsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    week?: boolean | DetailsDefaultArgs<ExtArgs>
  }

  export type $LessonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lessons"
    objects: {
      week: Prisma.$DetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string | null
      type: string
      duration: string | null
      position: number
      weekId: string
    }, ExtArgs["result"]["lessons"]>
    composites: {}
  }

  type LessonsGetPayload<S extends boolean | null | undefined | LessonsDefaultArgs> = $Result.GetResult<Prisma.$LessonsPayload, S>

  type LessonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonsCountAggregateInputType | true
    }

  export interface LessonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lessons'], meta: { name: 'Lessons' } }
    /**
     * Find zero or one Lessons that matches the filter.
     * @param {LessonsFindUniqueArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonsFindUniqueArgs>(args: SelectSubset<T, LessonsFindUniqueArgs<ExtArgs>>): Prisma__LessonsClient<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lessons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonsFindUniqueOrThrowArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonsFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonsClient<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonsFindFirstArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonsFindFirstArgs>(args?: SelectSubset<T, LessonsFindFirstArgs<ExtArgs>>): Prisma__LessonsClient<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lessons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonsFindFirstOrThrowArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonsFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonsClient<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lessons.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lessons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonsWithIdOnly = await prisma.lessons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonsFindManyArgs>(args?: SelectSubset<T, LessonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lessons.
     * @param {LessonsCreateArgs} args - Arguments to create a Lessons.
     * @example
     * // Create one Lessons
     * const Lessons = await prisma.lessons.create({
     *   data: {
     *     // ... data to create a Lessons
     *   }
     * })
     * 
     */
    create<T extends LessonsCreateArgs>(args: SelectSubset<T, LessonsCreateArgs<ExtArgs>>): Prisma__LessonsClient<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonsCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lessons = await prisma.lessons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonsCreateManyArgs>(args?: SelectSubset<T, LessonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonsCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lessons = await prisma.lessons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonsWithIdOnly = await prisma.lessons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonsCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lessons.
     * @param {LessonsDeleteArgs} args - Arguments to delete one Lessons.
     * @example
     * // Delete one Lessons
     * const Lessons = await prisma.lessons.delete({
     *   where: {
     *     // ... filter to delete one Lessons
     *   }
     * })
     * 
     */
    delete<T extends LessonsDeleteArgs>(args: SelectSubset<T, LessonsDeleteArgs<ExtArgs>>): Prisma__LessonsClient<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lessons.
     * @param {LessonsUpdateArgs} args - Arguments to update one Lessons.
     * @example
     * // Update one Lessons
     * const lessons = await prisma.lessons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonsUpdateArgs>(args: SelectSubset<T, LessonsUpdateArgs<ExtArgs>>): Prisma__LessonsClient<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonsDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lessons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonsDeleteManyArgs>(args?: SelectSubset<T, LessonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lessons = await prisma.lessons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonsUpdateManyArgs>(args: SelectSubset<T, LessonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonsUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lessons = await prisma.lessons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonsWithIdOnly = await prisma.lessons.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonsUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lessons.
     * @param {LessonsUpsertArgs} args - Arguments to update or create a Lessons.
     * @example
     * // Update or create a Lessons
     * const lessons = await prisma.lessons.upsert({
     *   create: {
     *     // ... data to create a Lessons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lessons we want to update
     *   }
     * })
     */
    upsert<T extends LessonsUpsertArgs>(args: SelectSubset<T, LessonsUpsertArgs<ExtArgs>>): Prisma__LessonsClient<$Result.GetResult<Prisma.$LessonsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonsCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lessons.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonsCountArgs>(
      args?: Subset<T, LessonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonsAggregateArgs>(args: Subset<T, LessonsAggregateArgs>): Prisma.PrismaPromise<GetLessonsAggregateType<T>>

    /**
     * Group by Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonsGroupByArgs['orderBy'] }
        : { orderBy?: LessonsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lessons model
   */
  readonly fields: LessonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lessons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    week<T extends DetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetailsDefaultArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lessons model
   */
  interface LessonsFieldRefs {
    readonly id: FieldRef<"Lessons", 'String'>
    readonly name: FieldRef<"Lessons", 'String'>
    readonly url: FieldRef<"Lessons", 'String'>
    readonly type: FieldRef<"Lessons", 'String'>
    readonly duration: FieldRef<"Lessons", 'String'>
    readonly position: FieldRef<"Lessons", 'Int'>
    readonly weekId: FieldRef<"Lessons", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lessons findUnique
   */
  export type LessonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where: LessonsWhereUniqueInput
  }

  /**
   * Lessons findUniqueOrThrow
   */
  export type LessonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where: LessonsWhereUniqueInput
  }

  /**
   * Lessons findFirst
   */
  export type LessonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonsOrderByWithRelationInput | LessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * Lessons findFirstOrThrow
   */
  export type LessonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonsOrderByWithRelationInput | LessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * Lessons findMany
   */
  export type LessonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonsOrderByWithRelationInput | LessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * Lessons create
   */
  export type LessonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    /**
     * The data needed to create a Lessons.
     */
    data: XOR<LessonsCreateInput, LessonsUncheckedCreateInput>
  }

  /**
   * Lessons createMany
   */
  export type LessonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonsCreateManyInput | LessonsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lessons createManyAndReturn
   */
  export type LessonsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonsCreateManyInput | LessonsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lessons update
   */
  export type LessonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    /**
     * The data needed to update a Lessons.
     */
    data: XOR<LessonsUpdateInput, LessonsUncheckedUpdateInput>
    /**
     * Choose, which Lessons to update.
     */
    where: LessonsWhereUniqueInput
  }

  /**
   * Lessons updateMany
   */
  export type LessonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonsUpdateManyMutationInput, LessonsUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonsWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lessons updateManyAndReturn
   */
  export type LessonsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonsUpdateManyMutationInput, LessonsUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonsWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lessons upsert
   */
  export type LessonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    /**
     * The filter to search for the Lessons to update in case it exists.
     */
    where: LessonsWhereUniqueInput
    /**
     * In case the Lessons found by the `where` argument doesn't exist, create a new Lessons with this data.
     */
    create: XOR<LessonsCreateInput, LessonsUncheckedCreateInput>
    /**
     * In case the Lessons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonsUpdateInput, LessonsUncheckedUpdateInput>
  }

  /**
   * Lessons delete
   */
  export type LessonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
    /**
     * Filter which Lessons to delete.
     */
    where: LessonsWhereUniqueInput
  }

  /**
   * Lessons deleteMany
   */
  export type LessonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonsWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lessons without action
   */
  export type LessonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lessons
     */
    select?: LessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lessons
     */
    omit?: LessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonsInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
    proof: string | null
    paymentMethod: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
    proof: string | null
    paymentMethod: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    studentId: number
    courseId: number
    proof: number
    paymentMethod: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    proof?: true
    paymentMethod?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    proof?: true
    paymentMethod?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    proof?: true
    paymentMethod?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    studentId: string
    courseId: string
    proof: string
    paymentMethod: string
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    proof?: boolean
    paymentMethod?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    proof?: boolean
    paymentMethod?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    proof?: boolean
    paymentMethod?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    proof?: boolean
    paymentMethod?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "courseId" | "proof" | "paymentMethod", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      courseId: string
      proof: string
      paymentMethod: string
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly studentId: FieldRef<"Order", 'String'>
    readonly courseId: FieldRef<"Order", 'String'>
    readonly proof: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderForm
   */

  export type AggregateOrderForm = {
    _count: OrderFormCountAggregateOutputType | null
    _min: OrderFormMinAggregateOutputType | null
    _max: OrderFormMaxAggregateOutputType | null
  }

  export type OrderFormMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    motivation: string | null
    result: boolean | null
  }

  export type OrderFormMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    motivation: string | null
    result: boolean | null
  }

  export type OrderFormCountAggregateOutputType = {
    id: number
    studentId: number
    courseId: number
    firstName: number
    lastName: number
    phone: number
    motivation: number
    result: number
    _all: number
  }


  export type OrderFormMinAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    firstName?: true
    lastName?: true
    phone?: true
    motivation?: true
    result?: true
  }

  export type OrderFormMaxAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    firstName?: true
    lastName?: true
    phone?: true
    motivation?: true
    result?: true
  }

  export type OrderFormCountAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    firstName?: true
    lastName?: true
    phone?: true
    motivation?: true
    result?: true
    _all?: true
  }

  export type OrderFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderForm to aggregate.
     */
    where?: OrderFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderForms to fetch.
     */
    orderBy?: OrderFormOrderByWithRelationInput | OrderFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderForms
    **/
    _count?: true | OrderFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderFormMaxAggregateInputType
  }

  export type GetOrderFormAggregateType<T extends OrderFormAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderForm[P]>
      : GetScalarType<T[P], AggregateOrderForm[P]>
  }




  export type OrderFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFormWhereInput
    orderBy?: OrderFormOrderByWithAggregationInput | OrderFormOrderByWithAggregationInput[]
    by: OrderFormScalarFieldEnum[] | OrderFormScalarFieldEnum
    having?: OrderFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderFormCountAggregateInputType | true
    _min?: OrderFormMinAggregateInputType
    _max?: OrderFormMaxAggregateInputType
  }

  export type OrderFormGroupByOutputType = {
    id: string
    studentId: string
    courseId: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result: boolean | null
    _count: OrderFormCountAggregateOutputType | null
    _min: OrderFormMinAggregateOutputType | null
    _max: OrderFormMaxAggregateOutputType | null
  }

  type GetOrderFormGroupByPayload<T extends OrderFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderFormGroupByOutputType[P]>
            : GetScalarType<T[P], OrderFormGroupByOutputType[P]>
        }
      >
    >


  export type OrderFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    motivation?: boolean
    result?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderForm"]>

  export type OrderFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    motivation?: boolean
    result?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderForm"]>

  export type OrderFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    motivation?: boolean
    result?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderForm"]>

  export type OrderFormSelectScalar = {
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    motivation?: boolean
    result?: boolean
  }

  export type OrderFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "courseId" | "firstName" | "lastName" | "phone" | "motivation" | "result", ExtArgs["result"]["orderForm"]>
  export type OrderFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type OrderFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type OrderFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $OrderFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderForm"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      courseId: string
      firstName: string
      lastName: string
      phone: string
      motivation: string
      result: boolean | null
    }, ExtArgs["result"]["orderForm"]>
    composites: {}
  }

  type OrderFormGetPayload<S extends boolean | null | undefined | OrderFormDefaultArgs> = $Result.GetResult<Prisma.$OrderFormPayload, S>

  type OrderFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderFormCountAggregateInputType | true
    }

  export interface OrderFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderForm'], meta: { name: 'OrderForm' } }
    /**
     * Find zero or one OrderForm that matches the filter.
     * @param {OrderFormFindUniqueArgs} args - Arguments to find a OrderForm
     * @example
     * // Get one OrderForm
     * const orderForm = await prisma.orderForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFormFindUniqueArgs>(args: SelectSubset<T, OrderFormFindUniqueArgs<ExtArgs>>): Prisma__OrderFormClient<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFormFindUniqueOrThrowArgs} args - Arguments to find a OrderForm
     * @example
     * // Get one OrderForm
     * const orderForm = await prisma.orderForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFormFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderFormClient<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFormFindFirstArgs} args - Arguments to find a OrderForm
     * @example
     * // Get one OrderForm
     * const orderForm = await prisma.orderForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFormFindFirstArgs>(args?: SelectSubset<T, OrderFormFindFirstArgs<ExtArgs>>): Prisma__OrderFormClient<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFormFindFirstOrThrowArgs} args - Arguments to find a OrderForm
     * @example
     * // Get one OrderForm
     * const orderForm = await prisma.orderForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFormFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderFormClient<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderForms
     * const orderForms = await prisma.orderForm.findMany()
     * 
     * // Get first 10 OrderForms
     * const orderForms = await prisma.orderForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderFormWithIdOnly = await prisma.orderForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFormFindManyArgs>(args?: SelectSubset<T, OrderFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderForm.
     * @param {OrderFormCreateArgs} args - Arguments to create a OrderForm.
     * @example
     * // Create one OrderForm
     * const OrderForm = await prisma.orderForm.create({
     *   data: {
     *     // ... data to create a OrderForm
     *   }
     * })
     * 
     */
    create<T extends OrderFormCreateArgs>(args: SelectSubset<T, OrderFormCreateArgs<ExtArgs>>): Prisma__OrderFormClient<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderForms.
     * @param {OrderFormCreateManyArgs} args - Arguments to create many OrderForms.
     * @example
     * // Create many OrderForms
     * const orderForm = await prisma.orderForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderFormCreateManyArgs>(args?: SelectSubset<T, OrderFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderForms and returns the data saved in the database.
     * @param {OrderFormCreateManyAndReturnArgs} args - Arguments to create many OrderForms.
     * @example
     * // Create many OrderForms
     * const orderForm = await prisma.orderForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderForms and only return the `id`
     * const orderFormWithIdOnly = await prisma.orderForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderFormCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderForm.
     * @param {OrderFormDeleteArgs} args - Arguments to delete one OrderForm.
     * @example
     * // Delete one OrderForm
     * const OrderForm = await prisma.orderForm.delete({
     *   where: {
     *     // ... filter to delete one OrderForm
     *   }
     * })
     * 
     */
    delete<T extends OrderFormDeleteArgs>(args: SelectSubset<T, OrderFormDeleteArgs<ExtArgs>>): Prisma__OrderFormClient<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderForm.
     * @param {OrderFormUpdateArgs} args - Arguments to update one OrderForm.
     * @example
     * // Update one OrderForm
     * const orderForm = await prisma.orderForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderFormUpdateArgs>(args: SelectSubset<T, OrderFormUpdateArgs<ExtArgs>>): Prisma__OrderFormClient<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderForms.
     * @param {OrderFormDeleteManyArgs} args - Arguments to filter OrderForms to delete.
     * @example
     * // Delete a few OrderForms
     * const { count } = await prisma.orderForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderFormDeleteManyArgs>(args?: SelectSubset<T, OrderFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderForms
     * const orderForm = await prisma.orderForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderFormUpdateManyArgs>(args: SelectSubset<T, OrderFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderForms and returns the data updated in the database.
     * @param {OrderFormUpdateManyAndReturnArgs} args - Arguments to update many OrderForms.
     * @example
     * // Update many OrderForms
     * const orderForm = await prisma.orderForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderForms and only return the `id`
     * const orderFormWithIdOnly = await prisma.orderForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderFormUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderForm.
     * @param {OrderFormUpsertArgs} args - Arguments to update or create a OrderForm.
     * @example
     * // Update or create a OrderForm
     * const orderForm = await prisma.orderForm.upsert({
     *   create: {
     *     // ... data to create a OrderForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderForm we want to update
     *   }
     * })
     */
    upsert<T extends OrderFormUpsertArgs>(args: SelectSubset<T, OrderFormUpsertArgs<ExtArgs>>): Prisma__OrderFormClient<$Result.GetResult<Prisma.$OrderFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFormCountArgs} args - Arguments to filter OrderForms to count.
     * @example
     * // Count the number of OrderForms
     * const count = await prisma.orderForm.count({
     *   where: {
     *     // ... the filter for the OrderForms we want to count
     *   }
     * })
    **/
    count<T extends OrderFormCountArgs>(
      args?: Subset<T, OrderFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderFormAggregateArgs>(args: Subset<T, OrderFormAggregateArgs>): Prisma.PrismaPromise<GetOrderFormAggregateType<T>>

    /**
     * Group by OrderForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderFormGroupByArgs['orderBy'] }
        : { orderBy?: OrderFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderForm model
   */
  readonly fields: OrderFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderForm model
   */
  interface OrderFormFieldRefs {
    readonly id: FieldRef<"OrderForm", 'String'>
    readonly studentId: FieldRef<"OrderForm", 'String'>
    readonly courseId: FieldRef<"OrderForm", 'String'>
    readonly firstName: FieldRef<"OrderForm", 'String'>
    readonly lastName: FieldRef<"OrderForm", 'String'>
    readonly phone: FieldRef<"OrderForm", 'String'>
    readonly motivation: FieldRef<"OrderForm", 'String'>
    readonly result: FieldRef<"OrderForm", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * OrderForm findUnique
   */
  export type OrderFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    /**
     * Filter, which OrderForm to fetch.
     */
    where: OrderFormWhereUniqueInput
  }

  /**
   * OrderForm findUniqueOrThrow
   */
  export type OrderFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    /**
     * Filter, which OrderForm to fetch.
     */
    where: OrderFormWhereUniqueInput
  }

  /**
   * OrderForm findFirst
   */
  export type OrderFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    /**
     * Filter, which OrderForm to fetch.
     */
    where?: OrderFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderForms to fetch.
     */
    orderBy?: OrderFormOrderByWithRelationInput | OrderFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderForms.
     */
    cursor?: OrderFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderForms.
     */
    distinct?: OrderFormScalarFieldEnum | OrderFormScalarFieldEnum[]
  }

  /**
   * OrderForm findFirstOrThrow
   */
  export type OrderFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    /**
     * Filter, which OrderForm to fetch.
     */
    where?: OrderFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderForms to fetch.
     */
    orderBy?: OrderFormOrderByWithRelationInput | OrderFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderForms.
     */
    cursor?: OrderFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderForms.
     */
    distinct?: OrderFormScalarFieldEnum | OrderFormScalarFieldEnum[]
  }

  /**
   * OrderForm findMany
   */
  export type OrderFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    /**
     * Filter, which OrderForms to fetch.
     */
    where?: OrderFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderForms to fetch.
     */
    orderBy?: OrderFormOrderByWithRelationInput | OrderFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderForms.
     */
    cursor?: OrderFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderForms.
     */
    skip?: number
    distinct?: OrderFormScalarFieldEnum | OrderFormScalarFieldEnum[]
  }

  /**
   * OrderForm create
   */
  export type OrderFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderForm.
     */
    data: XOR<OrderFormCreateInput, OrderFormUncheckedCreateInput>
  }

  /**
   * OrderForm createMany
   */
  export type OrderFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderForms.
     */
    data: OrderFormCreateManyInput | OrderFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderForm createManyAndReturn
   */
  export type OrderFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * The data used to create many OrderForms.
     */
    data: OrderFormCreateManyInput | OrderFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderForm update
   */
  export type OrderFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderForm.
     */
    data: XOR<OrderFormUpdateInput, OrderFormUncheckedUpdateInput>
    /**
     * Choose, which OrderForm to update.
     */
    where: OrderFormWhereUniqueInput
  }

  /**
   * OrderForm updateMany
   */
  export type OrderFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderForms.
     */
    data: XOR<OrderFormUpdateManyMutationInput, OrderFormUncheckedUpdateManyInput>
    /**
     * Filter which OrderForms to update
     */
    where?: OrderFormWhereInput
    /**
     * Limit how many OrderForms to update.
     */
    limit?: number
  }

  /**
   * OrderForm updateManyAndReturn
   */
  export type OrderFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * The data used to update OrderForms.
     */
    data: XOR<OrderFormUpdateManyMutationInput, OrderFormUncheckedUpdateManyInput>
    /**
     * Filter which OrderForms to update
     */
    where?: OrderFormWhereInput
    /**
     * Limit how many OrderForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderForm upsert
   */
  export type OrderFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderForm to update in case it exists.
     */
    where: OrderFormWhereUniqueInput
    /**
     * In case the OrderForm found by the `where` argument doesn't exist, create a new OrderForm with this data.
     */
    create: XOR<OrderFormCreateInput, OrderFormUncheckedCreateInput>
    /**
     * In case the OrderForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderFormUpdateInput, OrderFormUncheckedUpdateInput>
  }

  /**
   * OrderForm delete
   */
  export type OrderFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
    /**
     * Filter which OrderForm to delete.
     */
    where: OrderFormWhereUniqueInput
  }

  /**
   * OrderForm deleteMany
   */
  export type OrderFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderForms to delete
     */
    where?: OrderFormWhereInput
    /**
     * Limit how many OrderForms to delete.
     */
    limit?: number
  }

  /**
   * OrderForm without action
   */
  export type OrderFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderForm
     */
    select?: OrderFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderForm
     */
    omit?: OrderFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFormInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    rating: number | null
  }

  export type CommentSumAggregateOutputType = {
    rating: number | null
  }

  export type CommentMinAggregateOutputType = {
    studentId: string | null
    courseId: string | null
    comment: string | null
    rating: number | null
  }

  export type CommentMaxAggregateOutputType = {
    studentId: string | null
    courseId: string | null
    comment: string | null
    rating: number | null
  }

  export type CommentCountAggregateOutputType = {
    studentId: number
    courseId: number
    comment: number
    rating: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    rating?: true
  }

  export type CommentSumAggregateInputType = {
    rating?: true
  }

  export type CommentMinAggregateInputType = {
    studentId?: true
    courseId?: true
    comment?: true
    rating?: true
  }

  export type CommentMaxAggregateInputType = {
    studentId?: true
    courseId?: true
    comment?: true
    rating?: true
  }

  export type CommentCountAggregateInputType = {
    studentId?: true
    courseId?: true
    comment?: true
    rating?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    studentId: string
    courseId: string
    comment: string | null
    rating: number | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    courseId?: boolean
    comment?: boolean
    rating?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    courseId?: boolean
    comment?: boolean
    rating?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    courseId?: boolean
    comment?: boolean
    rating?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    studentId?: boolean
    courseId?: boolean
    comment?: boolean
    rating?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studentId" | "courseId" | "comment" | "rating", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      studentId: string
      courseId: string
      comment: string | null
      rating: number | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const commentWithStudentIdOnly = await prisma.comment.findMany({ select: { studentId: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `studentId`
     * const commentWithStudentIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { studentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `studentId`
     * const commentWithStudentIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { studentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly studentId: FieldRef<"Comment", 'String'>
    readonly courseId: FieldRef<"Comment", 'String'>
    readonly comment: FieldRef<"Comment", 'String'>
    readonly rating: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    username: 'username',
    password: 'password',
    phone_number: 'phone_number',
    wilaya: 'wilaya',
    picture: 'picture',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserDetailsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    status: 'status',
    linkedIn: 'linkedIn',
    x: 'x',
    userId: 'userId'
  };

  export type UserDetailsScalarFieldEnum = (typeof UserDetailsScalarFieldEnum)[keyof typeof UserDetailsScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    picture: 'picture',
    type: 'type',
    discount: 'discount',
    categorie: 'categorie',
    level: 'level',
    status: 'status',
    startDate: 'startDate',
    instructorId: 'instructorId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const OverViewsScalarFieldEnum: {
    id: 'id',
    statement: 'statement',
    type: 'type',
    courseId: 'courseId'
  };

  export type OverViewsScalarFieldEnum = (typeof OverViewsScalarFieldEnum)[keyof typeof OverViewsScalarFieldEnum]


  export const DetailsScalarFieldEnum: {
    id: 'id',
    week: 'week',
    title: 'title',
    courseId: 'courseId'
  };

  export type DetailsScalarFieldEnum = (typeof DetailsScalarFieldEnum)[keyof typeof DetailsScalarFieldEnum]


  export const LessonsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    type: 'type',
    duration: 'duration',
    position: 'position',
    weekId: 'weekId'
  };

  export type LessonsScalarFieldEnum = (typeof LessonsScalarFieldEnum)[keyof typeof LessonsScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    courseId: 'courseId',
    proof: 'proof',
    paymentMethod: 'paymentMethod'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderFormScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    courseId: 'courseId',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    motivation: 'motivation',
    result: 'result'
  };

  export type OrderFormScalarFieldEnum = (typeof OrderFormScalarFieldEnum)[keyof typeof OrderFormScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    studentId: 'studentId',
    courseId: 'courseId',
    comment: 'comment',
    rating: 'rating'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    wilaya?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    details?: XOR<UserDetailsNullableScalarRelationFilter, UserDetailsWhereInput> | null
    courses?: CourseListRelationFilter
    coursesS?: CourseListRelationFilter
    orders?: OrderListRelationFilter
    orderForms?: OrderFormListRelationFilter
    Comment?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    wilaya?: SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    details?: UserDetailsOrderByWithRelationInput
    courses?: CourseOrderByRelationAggregateInput
    coursesS?: CourseOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    orderForms?: OrderFormOrderByRelationAggregateInput
    Comment?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    wilaya?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    details?: XOR<UserDetailsNullableScalarRelationFilter, UserDetailsWhereInput> | null
    courses?: CourseListRelationFilter
    coursesS?: CourseListRelationFilter
    orders?: OrderListRelationFilter
    orderForms?: OrderFormListRelationFilter
    Comment?: CommentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    wilaya?: SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    wilaya?: StringWithAggregatesFilter<"User"> | string
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserDetailsWhereInput = {
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    id?: StringFilter<"UserDetails"> | string
    title?: StringFilter<"UserDetails"> | string
    status?: BoolNullableFilter<"UserDetails"> | boolean | null
    linkedIn?: StringNullableFilter<"UserDetails"> | string | null
    x?: StringNullableFilter<"UserDetails"> | string | null
    userId?: StringFilter<"UserDetails"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDetailsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    x?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    title?: StringFilter<"UserDetails"> | string
    status?: BoolNullableFilter<"UserDetails"> | boolean | null
    linkedIn?: StringNullableFilter<"UserDetails"> | string | null
    x?: StringNullableFilter<"UserDetails"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    x?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: UserDetailsCountOrderByAggregateInput
    _max?: UserDetailsMaxOrderByAggregateInput
    _min?: UserDetailsMinOrderByAggregateInput
  }

  export type UserDetailsScalarWhereWithAggregatesInput = {
    AND?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    OR?: UserDetailsScalarWhereWithAggregatesInput[]
    NOT?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDetails"> | string
    title?: StringWithAggregatesFilter<"UserDetails"> | string
    status?: BoolNullableWithAggregatesFilter<"UserDetails"> | boolean | null
    linkedIn?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    x?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    userId?: StringWithAggregatesFilter<"UserDetails"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    picture?: StringFilter<"Course"> | string
    type?: StringNullableFilter<"Course"> | string | null
    discount?: FloatNullableFilter<"Course"> | number | null
    categorie?: StringFilter<"Course"> | string
    level?: StringFilter<"Course"> | string
    status?: StringFilter<"Course"> | string
    startDate?: DateTimeNullableFilter<"Course"> | Date | string | null
    instructorId?: StringFilter<"Course"> | string
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    overviews?: OverViewsListRelationFilter
    details?: DetailsListRelationFilter
    students?: UserListRelationFilter
    orders?: OrderListRelationFilter
    orderForms?: OrderFormListRelationFilter
    Comment?: CommentListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    picture?: SortOrder
    type?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    categorie?: SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    instructorId?: SortOrder
    instructor?: UserOrderByWithRelationInput
    overviews?: OverViewsOrderByRelationAggregateInput
    details?: DetailsOrderByRelationAggregateInput
    students?: UserOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    orderForms?: OrderFormOrderByRelationAggregateInput
    Comment?: CommentOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    picture?: StringFilter<"Course"> | string
    type?: StringNullableFilter<"Course"> | string | null
    discount?: FloatNullableFilter<"Course"> | number | null
    categorie?: StringFilter<"Course"> | string
    level?: StringFilter<"Course"> | string
    status?: StringFilter<"Course"> | string
    startDate?: DateTimeNullableFilter<"Course"> | Date | string | null
    instructorId?: StringFilter<"Course"> | string
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    overviews?: OverViewsListRelationFilter
    details?: DetailsListRelationFilter
    students?: UserListRelationFilter
    orders?: OrderListRelationFilter
    orderForms?: OrderFormListRelationFilter
    Comment?: CommentListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    picture?: SortOrder
    type?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    categorie?: SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    instructorId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    price?: FloatWithAggregatesFilter<"Course"> | number
    picture?: StringWithAggregatesFilter<"Course"> | string
    type?: StringNullableWithAggregatesFilter<"Course"> | string | null
    discount?: FloatNullableWithAggregatesFilter<"Course"> | number | null
    categorie?: StringWithAggregatesFilter<"Course"> | string
    level?: StringWithAggregatesFilter<"Course"> | string
    status?: StringWithAggregatesFilter<"Course"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Course"> | Date | string | null
    instructorId?: StringWithAggregatesFilter<"Course"> | string
  }

  export type OverViewsWhereInput = {
    AND?: OverViewsWhereInput | OverViewsWhereInput[]
    OR?: OverViewsWhereInput[]
    NOT?: OverViewsWhereInput | OverViewsWhereInput[]
    id?: StringFilter<"OverViews"> | string
    statement?: StringFilter<"OverViews"> | string
    type?: StringFilter<"OverViews"> | string
    courseId?: StringFilter<"OverViews"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type OverViewsOrderByWithRelationInput = {
    id?: SortOrder
    statement?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type OverViewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OverViewsWhereInput | OverViewsWhereInput[]
    OR?: OverViewsWhereInput[]
    NOT?: OverViewsWhereInput | OverViewsWhereInput[]
    statement?: StringFilter<"OverViews"> | string
    type?: StringFilter<"OverViews"> | string
    courseId?: StringFilter<"OverViews"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type OverViewsOrderByWithAggregationInput = {
    id?: SortOrder
    statement?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
    _count?: OverViewsCountOrderByAggregateInput
    _max?: OverViewsMaxOrderByAggregateInput
    _min?: OverViewsMinOrderByAggregateInput
  }

  export type OverViewsScalarWhereWithAggregatesInput = {
    AND?: OverViewsScalarWhereWithAggregatesInput | OverViewsScalarWhereWithAggregatesInput[]
    OR?: OverViewsScalarWhereWithAggregatesInput[]
    NOT?: OverViewsScalarWhereWithAggregatesInput | OverViewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OverViews"> | string
    statement?: StringWithAggregatesFilter<"OverViews"> | string
    type?: StringWithAggregatesFilter<"OverViews"> | string
    courseId?: StringWithAggregatesFilter<"OverViews"> | string
  }

  export type DetailsWhereInput = {
    AND?: DetailsWhereInput | DetailsWhereInput[]
    OR?: DetailsWhereInput[]
    NOT?: DetailsWhereInput | DetailsWhereInput[]
    id?: StringFilter<"Details"> | string
    week?: IntFilter<"Details"> | number
    title?: StringFilter<"Details"> | string
    courseId?: StringFilter<"Details"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonsListRelationFilter
  }

  export type DetailsOrderByWithRelationInput = {
    id?: SortOrder
    week?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    lessons?: LessonsOrderByRelationAggregateInput
  }

  export type DetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetailsWhereInput | DetailsWhereInput[]
    OR?: DetailsWhereInput[]
    NOT?: DetailsWhereInput | DetailsWhereInput[]
    week?: IntFilter<"Details"> | number
    title?: StringFilter<"Details"> | string
    courseId?: StringFilter<"Details"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonsListRelationFilter
  }, "id">

  export type DetailsOrderByWithAggregationInput = {
    id?: SortOrder
    week?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
    _count?: DetailsCountOrderByAggregateInput
    _avg?: DetailsAvgOrderByAggregateInput
    _max?: DetailsMaxOrderByAggregateInput
    _min?: DetailsMinOrderByAggregateInput
    _sum?: DetailsSumOrderByAggregateInput
  }

  export type DetailsScalarWhereWithAggregatesInput = {
    AND?: DetailsScalarWhereWithAggregatesInput | DetailsScalarWhereWithAggregatesInput[]
    OR?: DetailsScalarWhereWithAggregatesInput[]
    NOT?: DetailsScalarWhereWithAggregatesInput | DetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Details"> | string
    week?: IntWithAggregatesFilter<"Details"> | number
    title?: StringWithAggregatesFilter<"Details"> | string
    courseId?: StringWithAggregatesFilter<"Details"> | string
  }

  export type LessonsWhereInput = {
    AND?: LessonsWhereInput | LessonsWhereInput[]
    OR?: LessonsWhereInput[]
    NOT?: LessonsWhereInput | LessonsWhereInput[]
    id?: StringFilter<"Lessons"> | string
    name?: StringFilter<"Lessons"> | string
    url?: StringNullableFilter<"Lessons"> | string | null
    type?: StringFilter<"Lessons"> | string
    duration?: StringNullableFilter<"Lessons"> | string | null
    position?: IntFilter<"Lessons"> | number
    weekId?: StringFilter<"Lessons"> | string
    week?: XOR<DetailsScalarRelationFilter, DetailsWhereInput>
  }

  export type LessonsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    type?: SortOrder
    duration?: SortOrderInput | SortOrder
    position?: SortOrder
    weekId?: SortOrder
    week?: DetailsOrderByWithRelationInput
  }

  export type LessonsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonsWhereInput | LessonsWhereInput[]
    OR?: LessonsWhereInput[]
    NOT?: LessonsWhereInput | LessonsWhereInput[]
    name?: StringFilter<"Lessons"> | string
    url?: StringNullableFilter<"Lessons"> | string | null
    type?: StringFilter<"Lessons"> | string
    duration?: StringNullableFilter<"Lessons"> | string | null
    position?: IntFilter<"Lessons"> | number
    weekId?: StringFilter<"Lessons"> | string
    week?: XOR<DetailsScalarRelationFilter, DetailsWhereInput>
  }, "id">

  export type LessonsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    type?: SortOrder
    duration?: SortOrderInput | SortOrder
    position?: SortOrder
    weekId?: SortOrder
    _count?: LessonsCountOrderByAggregateInput
    _avg?: LessonsAvgOrderByAggregateInput
    _max?: LessonsMaxOrderByAggregateInput
    _min?: LessonsMinOrderByAggregateInput
    _sum?: LessonsSumOrderByAggregateInput
  }

  export type LessonsScalarWhereWithAggregatesInput = {
    AND?: LessonsScalarWhereWithAggregatesInput | LessonsScalarWhereWithAggregatesInput[]
    OR?: LessonsScalarWhereWithAggregatesInput[]
    NOT?: LessonsScalarWhereWithAggregatesInput | LessonsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lessons"> | string
    name?: StringWithAggregatesFilter<"Lessons"> | string
    url?: StringNullableWithAggregatesFilter<"Lessons"> | string | null
    type?: StringWithAggregatesFilter<"Lessons"> | string
    duration?: StringNullableWithAggregatesFilter<"Lessons"> | string | null
    position?: IntWithAggregatesFilter<"Lessons"> | number
    weekId?: StringWithAggregatesFilter<"Lessons"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    studentId?: StringFilter<"Order"> | string
    courseId?: StringFilter<"Order"> | string
    proof?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    proof?: SortOrder
    paymentMethod?: SortOrder
    student?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_courseId?: OrderStudentIdCourseIdCompoundUniqueInput
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    studentId?: StringFilter<"Order"> | string
    courseId?: StringFilter<"Order"> | string
    proof?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "studentId_courseId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    proof?: SortOrder
    paymentMethod?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    studentId?: StringWithAggregatesFilter<"Order"> | string
    courseId?: StringWithAggregatesFilter<"Order"> | string
    proof?: StringWithAggregatesFilter<"Order"> | string
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string
  }

  export type OrderFormWhereInput = {
    AND?: OrderFormWhereInput | OrderFormWhereInput[]
    OR?: OrderFormWhereInput[]
    NOT?: OrderFormWhereInput | OrderFormWhereInput[]
    id?: StringFilter<"OrderForm"> | string
    studentId?: StringFilter<"OrderForm"> | string
    courseId?: StringFilter<"OrderForm"> | string
    firstName?: StringFilter<"OrderForm"> | string
    lastName?: StringFilter<"OrderForm"> | string
    phone?: StringFilter<"OrderForm"> | string
    motivation?: StringFilter<"OrderForm"> | string
    result?: BoolNullableFilter<"OrderForm"> | boolean | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type OrderFormOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    motivation?: SortOrder
    result?: SortOrderInput | SortOrder
    student?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type OrderFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_courseId?: OrderFormStudentIdCourseIdCompoundUniqueInput
    AND?: OrderFormWhereInput | OrderFormWhereInput[]
    OR?: OrderFormWhereInput[]
    NOT?: OrderFormWhereInput | OrderFormWhereInput[]
    studentId?: StringFilter<"OrderForm"> | string
    courseId?: StringFilter<"OrderForm"> | string
    firstName?: StringFilter<"OrderForm"> | string
    lastName?: StringFilter<"OrderForm"> | string
    phone?: StringFilter<"OrderForm"> | string
    motivation?: StringFilter<"OrderForm"> | string
    result?: BoolNullableFilter<"OrderForm"> | boolean | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "studentId_courseId">

  export type OrderFormOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    motivation?: SortOrder
    result?: SortOrderInput | SortOrder
    _count?: OrderFormCountOrderByAggregateInput
    _max?: OrderFormMaxOrderByAggregateInput
    _min?: OrderFormMinOrderByAggregateInput
  }

  export type OrderFormScalarWhereWithAggregatesInput = {
    AND?: OrderFormScalarWhereWithAggregatesInput | OrderFormScalarWhereWithAggregatesInput[]
    OR?: OrderFormScalarWhereWithAggregatesInput[]
    NOT?: OrderFormScalarWhereWithAggregatesInput | OrderFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderForm"> | string
    studentId?: StringWithAggregatesFilter<"OrderForm"> | string
    courseId?: StringWithAggregatesFilter<"OrderForm"> | string
    firstName?: StringWithAggregatesFilter<"OrderForm"> | string
    lastName?: StringWithAggregatesFilter<"OrderForm"> | string
    phone?: StringWithAggregatesFilter<"OrderForm"> | string
    motivation?: StringWithAggregatesFilter<"OrderForm"> | string
    result?: BoolNullableWithAggregatesFilter<"OrderForm"> | boolean | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    studentId?: StringFilter<"Comment"> | string
    courseId?: StringFilter<"Comment"> | string
    comment?: StringNullableFilter<"Comment"> | string | null
    rating?: IntNullableFilter<"Comment"> | number | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    studentId?: SortOrder
    courseId?: SortOrder
    comment?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    student?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    studentId_courseId?: CommentStudentIdCourseIdCompoundUniqueInput
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    studentId?: StringFilter<"Comment"> | string
    courseId?: StringFilter<"Comment"> | string
    comment?: StringNullableFilter<"Comment"> | string | null
    rating?: IntNullableFilter<"Comment"> | number | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "studentId_courseId">

  export type CommentOrderByWithAggregationInput = {
    studentId?: SortOrder
    courseId?: SortOrder
    comment?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    studentId?: StringWithAggregatesFilter<"Comment"> | string
    courseId?: StringWithAggregatesFilter<"Comment"> | string
    comment?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    rating?: IntNullableWithAggregatesFilter<"Comment"> | number | null
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsCreateNestedOneWithoutUserInput
    courses?: CourseCreateNestedManyWithoutInstructorInput
    coursesS?: CourseCreateNestedManyWithoutStudentsInput
    orders?: OrderCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormCreateNestedManyWithoutStudentInput
    Comment?: CommentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesS?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    orders?: OrderUncheckedCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutStudentInput
    Comment?: CommentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUpdateOneWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUpdateManyWithoutStudentsNestedInput
    orders?: OrderUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUpdateManyWithoutStudentNestedInput
    Comment?: CommentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutStudentNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDetailsCreateInput = {
    id?: string
    title: string
    status?: boolean | null
    linkedIn?: string | null
    x?: string | null
    user: UserCreateNestedOneWithoutDetailsInput
  }

  export type UserDetailsUncheckedCreateInput = {
    id?: string
    title: string
    status?: boolean | null
    linkedIn?: string | null
    x?: string | null
    userId: string
  }

  export type UserDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    x?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type UserDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    x?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailsCreateManyInput = {
    id?: string
    title: string
    status?: boolean | null
    linkedIn?: string | null
    x?: string | null
    userId: string
  }

  export type UserDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    x?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    x?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructor: UserCreateNestedOneWithoutCoursesInput
    overviews?: OverViewsCreateNestedManyWithoutCourseInput
    details?: DetailsCreateNestedManyWithoutCourseInput
    students?: UserCreateNestedManyWithoutCoursesSInput
    orders?: OrderCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormCreateNestedManyWithoutCourseInput
    Comment?: CommentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructorId: string
    overviews?: OverViewsUncheckedCreateNestedManyWithoutCourseInput
    details?: DetailsUncheckedCreateNestedManyWithoutCourseInput
    students?: UserUncheckedCreateNestedManyWithoutCoursesSInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutCourseInput
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    overviews?: OverViewsUpdateManyWithoutCourseNestedInput
    details?: DetailsUpdateManyWithoutCourseNestedInput
    students?: UserUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUpdateManyWithoutCourseNestedInput
    Comment?: CommentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    overviews?: OverViewsUncheckedUpdateManyWithoutCourseNestedInput
    details?: DetailsUncheckedUpdateManyWithoutCourseNestedInput
    students?: UserUncheckedUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutCourseNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructorId: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type OverViewsCreateInput = {
    id?: string
    statement: string
    type: string
    course: CourseCreateNestedOneWithoutOverviewsInput
  }

  export type OverViewsUncheckedCreateInput = {
    id?: string
    statement: string
    type: string
    courseId: string
  }

  export type OverViewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutOverviewsNestedInput
  }

  export type OverViewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type OverViewsCreateManyInput = {
    id?: string
    statement: string
    type: string
    courseId: string
  }

  export type OverViewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type OverViewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type DetailsCreateInput = {
    id?: string
    week: number
    title: string
    course: CourseCreateNestedOneWithoutDetailsInput
    lessons?: LessonsCreateNestedManyWithoutWeekInput
  }

  export type DetailsUncheckedCreateInput = {
    id?: string
    week: number
    title: string
    courseId: string
    lessons?: LessonsUncheckedCreateNestedManyWithoutWeekInput
  }

  export type DetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutDetailsNestedInput
    lessons?: LessonsUpdateManyWithoutWeekNestedInput
  }

  export type DetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    lessons?: LessonsUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type DetailsCreateManyInput = {
    id?: string
    week: number
    title: string
    courseId: string
  }

  export type DetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type LessonsCreateInput = {
    id?: string
    name: string
    url?: string | null
    type?: string
    duration?: string | null
    position: number
    week: DetailsCreateNestedOneWithoutLessonsInput
  }

  export type LessonsUncheckedCreateInput = {
    id?: string
    name: string
    url?: string | null
    type?: string
    duration?: string | null
    position: number
    weekId: string
  }

  export type LessonsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    week?: DetailsUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    weekId?: StringFieldUpdateOperationsInput | string
  }

  export type LessonsCreateManyInput = {
    id?: string
    name: string
    url?: string | null
    type?: string
    duration?: string | null
    position: number
    weekId: string
  }

  export type LessonsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type LessonsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    weekId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id?: string
    proof: string
    paymentMethod?: string
    student: UserCreateNestedOneWithoutOrdersInput
    course: CourseCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    studentId: string
    courseId: string
    proof: string
    paymentMethod?: string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    student?: UserUpdateOneRequiredWithoutOrdersNestedInput
    course?: CourseUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateManyInput = {
    id?: string
    studentId: string
    courseId: string
    proof: string
    paymentMethod?: string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type OrderFormCreateInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result?: boolean | null
    student: UserCreateNestedOneWithoutOrderFormsInput
    course: CourseCreateNestedOneWithoutOrderFormsInput
  }

  export type OrderFormUncheckedCreateInput = {
    id?: string
    studentId: string
    courseId: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result?: boolean | null
  }

  export type OrderFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
    student?: UserUpdateOneRequiredWithoutOrderFormsNestedInput
    course?: CourseUpdateOneRequiredWithoutOrderFormsNestedInput
  }

  export type OrderFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrderFormCreateManyInput = {
    id?: string
    studentId: string
    courseId: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result?: boolean | null
  }

  export type OrderFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrderFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CommentCreateInput = {
    comment?: string | null
    rating?: number | null
    student: UserCreateNestedOneWithoutCommentInput
    course: CourseCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    studentId: string
    courseId: string
    comment?: string | null
    rating?: number | null
  }

  export type CommentUpdateInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    student?: UserUpdateOneRequiredWithoutCommentNestedInput
    course?: CourseUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentCreateManyInput = {
    studentId: string
    courseId: string
    comment?: string | null
    rating?: number | null
  }

  export type CommentUpdateManyMutationInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserDetailsNullableScalarRelationFilter = {
    is?: UserDetailsWhereInput | null
    isNot?: UserDetailsWhereInput | null
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderFormListRelationFilter = {
    every?: OrderFormWhereInput
    some?: OrderFormWhereInput
    none?: OrderFormWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderFormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    wilaya?: SortOrder
    picture?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    wilaya?: SortOrder
    picture?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    wilaya?: SortOrder
    picture?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    linkedIn?: SortOrder
    x?: SortOrder
    userId?: SortOrder
  }

  export type UserDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    linkedIn?: SortOrder
    x?: SortOrder
    userId?: SortOrder
  }

  export type UserDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    linkedIn?: SortOrder
    x?: SortOrder
    userId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OverViewsListRelationFilter = {
    every?: OverViewsWhereInput
    some?: OverViewsWhereInput
    none?: OverViewsWhereInput
  }

  export type DetailsListRelationFilter = {
    every?: DetailsWhereInput
    some?: DetailsWhereInput
    none?: DetailsWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type OverViewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    picture?: SortOrder
    type?: SortOrder
    discount?: SortOrder
    categorie?: SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    instructorId?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    picture?: SortOrder
    type?: SortOrder
    discount?: SortOrder
    categorie?: SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    instructorId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    picture?: SortOrder
    type?: SortOrder
    discount?: SortOrder
    categorie?: SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    instructorId?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type OverViewsCountOrderByAggregateInput = {
    id?: SortOrder
    statement?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
  }

  export type OverViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    statement?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
  }

  export type OverViewsMinOrderByAggregateInput = {
    id?: SortOrder
    statement?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LessonsListRelationFilter = {
    every?: LessonsWhereInput
    some?: LessonsWhereInput
    none?: LessonsWhereInput
  }

  export type LessonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetailsCountOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
  }

  export type DetailsAvgOrderByAggregateInput = {
    week?: SortOrder
  }

  export type DetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
  }

  export type DetailsMinOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
  }

  export type DetailsSumOrderByAggregateInput = {
    week?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DetailsScalarRelationFilter = {
    is?: DetailsWhereInput
    isNot?: DetailsWhereInput
  }

  export type LessonsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    position?: SortOrder
    weekId?: SortOrder
  }

  export type LessonsAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type LessonsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    position?: SortOrder
    weekId?: SortOrder
  }

  export type LessonsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    position?: SortOrder
    weekId?: SortOrder
  }

  export type LessonsSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type OrderStudentIdCourseIdCompoundUniqueInput = {
    studentId: string
    courseId: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    proof?: SortOrder
    paymentMethod?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    proof?: SortOrder
    paymentMethod?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    proof?: SortOrder
    paymentMethod?: SortOrder
  }

  export type OrderFormStudentIdCourseIdCompoundUniqueInput = {
    studentId: string
    courseId: string
  }

  export type OrderFormCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    motivation?: SortOrder
    result?: SortOrder
  }

  export type OrderFormMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    motivation?: SortOrder
    result?: SortOrder
  }

  export type OrderFormMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    motivation?: SortOrder
    result?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommentStudentIdCourseIdCompoundUniqueInput = {
    studentId: string
    courseId: string
  }

  export type CommentCountOrderByAggregateInput = {
    studentId?: SortOrder
    courseId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    studentId?: SortOrder
    courseId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    studentId?: SortOrder
    courseId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserDetailsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput
    connect?: UserDetailsWhereUniqueInput
  }

  export type CourseCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutStudentsInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutStudentInput = {
    create?: XOR<OrderCreateWithoutStudentInput, OrderUncheckedCreateWithoutStudentInput> | OrderCreateWithoutStudentInput[] | OrderUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStudentInput | OrderCreateOrConnectWithoutStudentInput[]
    createMany?: OrderCreateManyStudentInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderFormCreateNestedManyWithoutStudentInput = {
    create?: XOR<OrderFormCreateWithoutStudentInput, OrderFormUncheckedCreateWithoutStudentInput> | OrderFormCreateWithoutStudentInput[] | OrderFormUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OrderFormCreateOrConnectWithoutStudentInput | OrderFormCreateOrConnectWithoutStudentInput[]
    createMany?: OrderFormCreateManyStudentInputEnvelope
    connect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutStudentInput = {
    create?: XOR<CommentCreateWithoutStudentInput, CommentUncheckedCreateWithoutStudentInput> | CommentCreateWithoutStudentInput[] | CommentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStudentInput | CommentCreateOrConnectWithoutStudentInput[]
    createMany?: CommentCreateManyStudentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserDetailsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput
    connect?: UserDetailsWhereUniqueInput
  }

  export type CourseUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<OrderCreateWithoutStudentInput, OrderUncheckedCreateWithoutStudentInput> | OrderCreateWithoutStudentInput[] | OrderUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStudentInput | OrderCreateOrConnectWithoutStudentInput[]
    createMany?: OrderCreateManyStudentInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderFormUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<OrderFormCreateWithoutStudentInput, OrderFormUncheckedCreateWithoutStudentInput> | OrderFormCreateWithoutStudentInput[] | OrderFormUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OrderFormCreateOrConnectWithoutStudentInput | OrderFormCreateOrConnectWithoutStudentInput[]
    createMany?: OrderFormCreateManyStudentInputEnvelope
    connect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CommentCreateWithoutStudentInput, CommentUncheckedCreateWithoutStudentInput> | CommentCreateWithoutStudentInput[] | CommentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStudentInput | CommentCreateOrConnectWithoutStudentInput[]
    createMany?: CommentCreateManyStudentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserDetailsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput
    upsert?: UserDetailsUpsertWithoutUserInput
    disconnect?: UserDetailsWhereInput | boolean
    delete?: UserDetailsWhereInput | boolean
    connect?: UserDetailsWhereUniqueInput
    update?: XOR<XOR<UserDetailsUpdateToOneWithWhereWithoutUserInput, UserDetailsUpdateWithoutUserInput>, UserDetailsUncheckedUpdateWithoutUserInput>
  }

  export type CourseUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutStudentsInput | CourseUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutStudentsInput | CourseUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutStudentsInput | CourseUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OrderCreateWithoutStudentInput, OrderUncheckedCreateWithoutStudentInput> | OrderCreateWithoutStudentInput[] | OrderUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStudentInput | OrderCreateOrConnectWithoutStudentInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutStudentInput | OrderUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OrderCreateManyStudentInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutStudentInput | OrderUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutStudentInput | OrderUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderFormUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OrderFormCreateWithoutStudentInput, OrderFormUncheckedCreateWithoutStudentInput> | OrderFormCreateWithoutStudentInput[] | OrderFormUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OrderFormCreateOrConnectWithoutStudentInput | OrderFormCreateOrConnectWithoutStudentInput[]
    upsert?: OrderFormUpsertWithWhereUniqueWithoutStudentInput | OrderFormUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OrderFormCreateManyStudentInputEnvelope
    set?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    disconnect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    delete?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    connect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    update?: OrderFormUpdateWithWhereUniqueWithoutStudentInput | OrderFormUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OrderFormUpdateManyWithWhereWithoutStudentInput | OrderFormUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OrderFormScalarWhereInput | OrderFormScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CommentCreateWithoutStudentInput, CommentUncheckedCreateWithoutStudentInput> | CommentCreateWithoutStudentInput[] | CommentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStudentInput | CommentCreateOrConnectWithoutStudentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutStudentInput | CommentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CommentCreateManyStudentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutStudentInput | CommentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutStudentInput | CommentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserDetailsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput
    upsert?: UserDetailsUpsertWithoutUserInput
    disconnect?: UserDetailsWhereInput | boolean
    delete?: UserDetailsWhereInput | boolean
    connect?: UserDetailsWhereUniqueInput
    update?: XOR<XOR<UserDetailsUpdateToOneWithWhereWithoutUserInput, UserDetailsUpdateWithoutUserInput>, UserDetailsUncheckedUpdateWithoutUserInput>
  }

  export type CourseUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutStudentsInput | CourseUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutStudentsInput | CourseUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutStudentsInput | CourseUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OrderCreateWithoutStudentInput, OrderUncheckedCreateWithoutStudentInput> | OrderCreateWithoutStudentInput[] | OrderUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStudentInput | OrderCreateOrConnectWithoutStudentInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutStudentInput | OrderUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OrderCreateManyStudentInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutStudentInput | OrderUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutStudentInput | OrderUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderFormUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OrderFormCreateWithoutStudentInput, OrderFormUncheckedCreateWithoutStudentInput> | OrderFormCreateWithoutStudentInput[] | OrderFormUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OrderFormCreateOrConnectWithoutStudentInput | OrderFormCreateOrConnectWithoutStudentInput[]
    upsert?: OrderFormUpsertWithWhereUniqueWithoutStudentInput | OrderFormUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OrderFormCreateManyStudentInputEnvelope
    set?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    disconnect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    delete?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    connect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    update?: OrderFormUpdateWithWhereUniqueWithoutStudentInput | OrderFormUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OrderFormUpdateManyWithWhereWithoutStudentInput | OrderFormUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OrderFormScalarWhereInput | OrderFormScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CommentCreateWithoutStudentInput, CommentUncheckedCreateWithoutStudentInput> | CommentCreateWithoutStudentInput[] | CommentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStudentInput | CommentCreateOrConnectWithoutStudentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutStudentInput | CommentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CommentCreateManyStudentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutStudentInput | CommentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutStudentInput | CommentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDetailsInput = {
    create?: XOR<UserCreateWithoutDetailsInput, UserUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<UserCreateWithoutDetailsInput, UserUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDetailsInput
    upsert?: UserUpsertWithoutDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDetailsInput, UserUpdateWithoutDetailsInput>, UserUncheckedUpdateWithoutDetailsInput>
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type OverViewsCreateNestedManyWithoutCourseInput = {
    create?: XOR<OverViewsCreateWithoutCourseInput, OverViewsUncheckedCreateWithoutCourseInput> | OverViewsCreateWithoutCourseInput[] | OverViewsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OverViewsCreateOrConnectWithoutCourseInput | OverViewsCreateOrConnectWithoutCourseInput[]
    createMany?: OverViewsCreateManyCourseInputEnvelope
    connect?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
  }

  export type DetailsCreateNestedManyWithoutCourseInput = {
    create?: XOR<DetailsCreateWithoutCourseInput, DetailsUncheckedCreateWithoutCourseInput> | DetailsCreateWithoutCourseInput[] | DetailsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: DetailsCreateOrConnectWithoutCourseInput | DetailsCreateOrConnectWithoutCourseInput[]
    createMany?: DetailsCreateManyCourseInputEnvelope
    connect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCoursesSInput = {
    create?: XOR<UserCreateWithoutCoursesSInput, UserUncheckedCreateWithoutCoursesSInput> | UserCreateWithoutCoursesSInput[] | UserUncheckedCreateWithoutCoursesSInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesSInput | UserCreateOrConnectWithoutCoursesSInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderFormCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderFormCreateWithoutCourseInput, OrderFormUncheckedCreateWithoutCourseInput> | OrderFormCreateWithoutCourseInput[] | OrderFormUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderFormCreateOrConnectWithoutCourseInput | OrderFormCreateOrConnectWithoutCourseInput[]
    createMany?: OrderFormCreateManyCourseInputEnvelope
    connect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutCourseInput = {
    create?: XOR<CommentCreateWithoutCourseInput, CommentUncheckedCreateWithoutCourseInput> | CommentCreateWithoutCourseInput[] | CommentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCourseInput | CommentCreateOrConnectWithoutCourseInput[]
    createMany?: CommentCreateManyCourseInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type OverViewsUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<OverViewsCreateWithoutCourseInput, OverViewsUncheckedCreateWithoutCourseInput> | OverViewsCreateWithoutCourseInput[] | OverViewsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OverViewsCreateOrConnectWithoutCourseInput | OverViewsCreateOrConnectWithoutCourseInput[]
    createMany?: OverViewsCreateManyCourseInputEnvelope
    connect?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
  }

  export type DetailsUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<DetailsCreateWithoutCourseInput, DetailsUncheckedCreateWithoutCourseInput> | DetailsCreateWithoutCourseInput[] | DetailsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: DetailsCreateOrConnectWithoutCourseInput | DetailsCreateOrConnectWithoutCourseInput[]
    createMany?: DetailsCreateManyCourseInputEnvelope
    connect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCoursesSInput = {
    create?: XOR<UserCreateWithoutCoursesSInput, UserUncheckedCreateWithoutCoursesSInput> | UserCreateWithoutCoursesSInput[] | UserUncheckedCreateWithoutCoursesSInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesSInput | UserCreateOrConnectWithoutCoursesSInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderFormUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderFormCreateWithoutCourseInput, OrderFormUncheckedCreateWithoutCourseInput> | OrderFormCreateWithoutCourseInput[] | OrderFormUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderFormCreateOrConnectWithoutCourseInput | OrderFormCreateOrConnectWithoutCourseInput[]
    createMany?: OrderFormCreateManyCourseInputEnvelope
    connect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CommentCreateWithoutCourseInput, CommentUncheckedCreateWithoutCourseInput> | CommentCreateWithoutCourseInput[] | CommentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCourseInput | CommentCreateOrConnectWithoutCourseInput[]
    createMany?: CommentCreateManyCourseInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesInput, UserUpdateWithoutCoursesInput>, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type OverViewsUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OverViewsCreateWithoutCourseInput, OverViewsUncheckedCreateWithoutCourseInput> | OverViewsCreateWithoutCourseInput[] | OverViewsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OverViewsCreateOrConnectWithoutCourseInput | OverViewsCreateOrConnectWithoutCourseInput[]
    upsert?: OverViewsUpsertWithWhereUniqueWithoutCourseInput | OverViewsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OverViewsCreateManyCourseInputEnvelope
    set?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
    disconnect?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
    delete?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
    connect?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
    update?: OverViewsUpdateWithWhereUniqueWithoutCourseInput | OverViewsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OverViewsUpdateManyWithWhereWithoutCourseInput | OverViewsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OverViewsScalarWhereInput | OverViewsScalarWhereInput[]
  }

  export type DetailsUpdateManyWithoutCourseNestedInput = {
    create?: XOR<DetailsCreateWithoutCourseInput, DetailsUncheckedCreateWithoutCourseInput> | DetailsCreateWithoutCourseInput[] | DetailsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: DetailsCreateOrConnectWithoutCourseInput | DetailsCreateOrConnectWithoutCourseInput[]
    upsert?: DetailsUpsertWithWhereUniqueWithoutCourseInput | DetailsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: DetailsCreateManyCourseInputEnvelope
    set?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    disconnect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    delete?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    connect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    update?: DetailsUpdateWithWhereUniqueWithoutCourseInput | DetailsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: DetailsUpdateManyWithWhereWithoutCourseInput | DetailsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: DetailsScalarWhereInput | DetailsScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCoursesSNestedInput = {
    create?: XOR<UserCreateWithoutCoursesSInput, UserUncheckedCreateWithoutCoursesSInput> | UserCreateWithoutCoursesSInput[] | UserUncheckedCreateWithoutCoursesSInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesSInput | UserCreateOrConnectWithoutCoursesSInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesSInput | UserUpsertWithWhereUniqueWithoutCoursesSInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesSInput | UserUpdateWithWhereUniqueWithoutCoursesSInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesSInput | UserUpdateManyWithWhereWithoutCoursesSInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCourseInput | OrderUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCourseInput | OrderUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCourseInput | OrderUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderFormUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderFormCreateWithoutCourseInput, OrderFormUncheckedCreateWithoutCourseInput> | OrderFormCreateWithoutCourseInput[] | OrderFormUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderFormCreateOrConnectWithoutCourseInput | OrderFormCreateOrConnectWithoutCourseInput[]
    upsert?: OrderFormUpsertWithWhereUniqueWithoutCourseInput | OrderFormUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderFormCreateManyCourseInputEnvelope
    set?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    disconnect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    delete?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    connect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    update?: OrderFormUpdateWithWhereUniqueWithoutCourseInput | OrderFormUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderFormUpdateManyWithWhereWithoutCourseInput | OrderFormUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderFormScalarWhereInput | OrderFormScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CommentCreateWithoutCourseInput, CommentUncheckedCreateWithoutCourseInput> | CommentCreateWithoutCourseInput[] | CommentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCourseInput | CommentCreateOrConnectWithoutCourseInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCourseInput | CommentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CommentCreateManyCourseInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCourseInput | CommentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCourseInput | CommentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type OverViewsUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OverViewsCreateWithoutCourseInput, OverViewsUncheckedCreateWithoutCourseInput> | OverViewsCreateWithoutCourseInput[] | OverViewsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OverViewsCreateOrConnectWithoutCourseInput | OverViewsCreateOrConnectWithoutCourseInput[]
    upsert?: OverViewsUpsertWithWhereUniqueWithoutCourseInput | OverViewsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OverViewsCreateManyCourseInputEnvelope
    set?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
    disconnect?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
    delete?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
    connect?: OverViewsWhereUniqueInput | OverViewsWhereUniqueInput[]
    update?: OverViewsUpdateWithWhereUniqueWithoutCourseInput | OverViewsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OverViewsUpdateManyWithWhereWithoutCourseInput | OverViewsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OverViewsScalarWhereInput | OverViewsScalarWhereInput[]
  }

  export type DetailsUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<DetailsCreateWithoutCourseInput, DetailsUncheckedCreateWithoutCourseInput> | DetailsCreateWithoutCourseInput[] | DetailsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: DetailsCreateOrConnectWithoutCourseInput | DetailsCreateOrConnectWithoutCourseInput[]
    upsert?: DetailsUpsertWithWhereUniqueWithoutCourseInput | DetailsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: DetailsCreateManyCourseInputEnvelope
    set?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    disconnect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    delete?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    connect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    update?: DetailsUpdateWithWhereUniqueWithoutCourseInput | DetailsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: DetailsUpdateManyWithWhereWithoutCourseInput | DetailsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: DetailsScalarWhereInput | DetailsScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCoursesSNestedInput = {
    create?: XOR<UserCreateWithoutCoursesSInput, UserUncheckedCreateWithoutCoursesSInput> | UserCreateWithoutCoursesSInput[] | UserUncheckedCreateWithoutCoursesSInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesSInput | UserCreateOrConnectWithoutCoursesSInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesSInput | UserUpsertWithWhereUniqueWithoutCoursesSInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesSInput | UserUpdateWithWhereUniqueWithoutCoursesSInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesSInput | UserUpdateManyWithWhereWithoutCoursesSInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCourseInput | OrderUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCourseInput | OrderUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCourseInput | OrderUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderFormUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderFormCreateWithoutCourseInput, OrderFormUncheckedCreateWithoutCourseInput> | OrderFormCreateWithoutCourseInput[] | OrderFormUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderFormCreateOrConnectWithoutCourseInput | OrderFormCreateOrConnectWithoutCourseInput[]
    upsert?: OrderFormUpsertWithWhereUniqueWithoutCourseInput | OrderFormUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderFormCreateManyCourseInputEnvelope
    set?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    disconnect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    delete?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    connect?: OrderFormWhereUniqueInput | OrderFormWhereUniqueInput[]
    update?: OrderFormUpdateWithWhereUniqueWithoutCourseInput | OrderFormUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderFormUpdateManyWithWhereWithoutCourseInput | OrderFormUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderFormScalarWhereInput | OrderFormScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CommentCreateWithoutCourseInput, CommentUncheckedCreateWithoutCourseInput> | CommentCreateWithoutCourseInput[] | CommentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCourseInput | CommentCreateOrConnectWithoutCourseInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCourseInput | CommentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CommentCreateManyCourseInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCourseInput | CommentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCourseInput | CommentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutOverviewsInput = {
    create?: XOR<CourseCreateWithoutOverviewsInput, CourseUncheckedCreateWithoutOverviewsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOverviewsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutOverviewsNestedInput = {
    create?: XOR<CourseCreateWithoutOverviewsInput, CourseUncheckedCreateWithoutOverviewsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOverviewsInput
    upsert?: CourseUpsertWithoutOverviewsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutOverviewsInput, CourseUpdateWithoutOverviewsInput>, CourseUncheckedUpdateWithoutOverviewsInput>
  }

  export type CourseCreateNestedOneWithoutDetailsInput = {
    create?: XOR<CourseCreateWithoutDetailsInput, CourseUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutDetailsInput
    connect?: CourseWhereUniqueInput
  }

  export type LessonsCreateNestedManyWithoutWeekInput = {
    create?: XOR<LessonsCreateWithoutWeekInput, LessonsUncheckedCreateWithoutWeekInput> | LessonsCreateWithoutWeekInput[] | LessonsUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: LessonsCreateOrConnectWithoutWeekInput | LessonsCreateOrConnectWithoutWeekInput[]
    createMany?: LessonsCreateManyWeekInputEnvelope
    connect?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
  }

  export type LessonsUncheckedCreateNestedManyWithoutWeekInput = {
    create?: XOR<LessonsCreateWithoutWeekInput, LessonsUncheckedCreateWithoutWeekInput> | LessonsCreateWithoutWeekInput[] | LessonsUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: LessonsCreateOrConnectWithoutWeekInput | LessonsCreateOrConnectWithoutWeekInput[]
    createMany?: LessonsCreateManyWeekInputEnvelope
    connect?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<CourseCreateWithoutDetailsInput, CourseUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutDetailsInput
    upsert?: CourseUpsertWithoutDetailsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutDetailsInput, CourseUpdateWithoutDetailsInput>, CourseUncheckedUpdateWithoutDetailsInput>
  }

  export type LessonsUpdateManyWithoutWeekNestedInput = {
    create?: XOR<LessonsCreateWithoutWeekInput, LessonsUncheckedCreateWithoutWeekInput> | LessonsCreateWithoutWeekInput[] | LessonsUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: LessonsCreateOrConnectWithoutWeekInput | LessonsCreateOrConnectWithoutWeekInput[]
    upsert?: LessonsUpsertWithWhereUniqueWithoutWeekInput | LessonsUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: LessonsCreateManyWeekInputEnvelope
    set?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
    disconnect?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
    delete?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
    connect?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
    update?: LessonsUpdateWithWhereUniqueWithoutWeekInput | LessonsUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: LessonsUpdateManyWithWhereWithoutWeekInput | LessonsUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: LessonsScalarWhereInput | LessonsScalarWhereInput[]
  }

  export type LessonsUncheckedUpdateManyWithoutWeekNestedInput = {
    create?: XOR<LessonsCreateWithoutWeekInput, LessonsUncheckedCreateWithoutWeekInput> | LessonsCreateWithoutWeekInput[] | LessonsUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: LessonsCreateOrConnectWithoutWeekInput | LessonsCreateOrConnectWithoutWeekInput[]
    upsert?: LessonsUpsertWithWhereUniqueWithoutWeekInput | LessonsUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: LessonsCreateManyWeekInputEnvelope
    set?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
    disconnect?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
    delete?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
    connect?: LessonsWhereUniqueInput | LessonsWhereUniqueInput[]
    update?: LessonsUpdateWithWhereUniqueWithoutWeekInput | LessonsUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: LessonsUpdateManyWithWhereWithoutWeekInput | LessonsUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: LessonsScalarWhereInput | LessonsScalarWhereInput[]
  }

  export type DetailsCreateNestedOneWithoutLessonsInput = {
    create?: XOR<DetailsCreateWithoutLessonsInput, DetailsUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: DetailsCreateOrConnectWithoutLessonsInput
    connect?: DetailsWhereUniqueInput
  }

  export type DetailsUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<DetailsCreateWithoutLessonsInput, DetailsUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: DetailsCreateOrConnectWithoutLessonsInput
    upsert?: DetailsUpsertWithoutLessonsInput
    connect?: DetailsWhereUniqueInput
    update?: XOR<XOR<DetailsUpdateToOneWithWhereWithoutLessonsInput, DetailsUpdateWithoutLessonsInput>, DetailsUncheckedUpdateWithoutLessonsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOrdersInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type CourseUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOrdersInput
    upsert?: CourseUpsertWithoutOrdersInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutOrdersInput, CourseUpdateWithoutOrdersInput>, CourseUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutOrderFormsInput = {
    create?: XOR<UserCreateWithoutOrderFormsInput, UserUncheckedCreateWithoutOrderFormsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderFormsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutOrderFormsInput = {
    create?: XOR<CourseCreateWithoutOrderFormsInput, CourseUncheckedCreateWithoutOrderFormsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOrderFormsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrderFormsNestedInput = {
    create?: XOR<UserCreateWithoutOrderFormsInput, UserUncheckedCreateWithoutOrderFormsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderFormsInput
    upsert?: UserUpsertWithoutOrderFormsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderFormsInput, UserUpdateWithoutOrderFormsInput>, UserUncheckedUpdateWithoutOrderFormsInput>
  }

  export type CourseUpdateOneRequiredWithoutOrderFormsNestedInput = {
    create?: XOR<CourseCreateWithoutOrderFormsInput, CourseUncheckedCreateWithoutOrderFormsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOrderFormsInput
    upsert?: CourseUpsertWithoutOrderFormsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutOrderFormsInput, CourseUpdateWithoutOrderFormsInput>, CourseUncheckedUpdateWithoutOrderFormsInput>
  }

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCommentInput = {
    create?: XOR<CourseCreateWithoutCommentInput, CourseUncheckedCreateWithoutCommentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCommentInput
    connect?: CourseWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentInput, UserUpdateWithoutCommentInput>, UserUncheckedUpdateWithoutCommentInput>
  }

  export type CourseUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<CourseCreateWithoutCommentInput, CourseUncheckedCreateWithoutCommentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCommentInput
    upsert?: CourseUpsertWithoutCommentInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCommentInput, CourseUpdateWithoutCommentInput>, CourseUncheckedUpdateWithoutCommentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserDetailsCreateWithoutUserInput = {
    id?: string
    title: string
    status?: boolean | null
    linkedIn?: string | null
    x?: string | null
  }

  export type UserDetailsUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    status?: boolean | null
    linkedIn?: string | null
    x?: string | null
  }

  export type UserDetailsCreateOrConnectWithoutUserInput = {
    where: UserDetailsWhereUniqueInput
    create: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
  }

  export type CourseCreateWithoutInstructorInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    overviews?: OverViewsCreateNestedManyWithoutCourseInput
    details?: DetailsCreateNestedManyWithoutCourseInput
    students?: UserCreateNestedManyWithoutCoursesSInput
    orders?: OrderCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormCreateNestedManyWithoutCourseInput
    Comment?: CommentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutInstructorInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    overviews?: OverViewsUncheckedCreateNestedManyWithoutCourseInput
    details?: DetailsUncheckedCreateNestedManyWithoutCourseInput
    students?: UserUncheckedCreateNestedManyWithoutCoursesSInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutCourseInput
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseCreateManyInstructorInputEnvelope = {
    data: CourseCreateManyInstructorInput | CourseCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutStudentsInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructor: UserCreateNestedOneWithoutCoursesInput
    overviews?: OverViewsCreateNestedManyWithoutCourseInput
    details?: DetailsCreateNestedManyWithoutCourseInput
    orders?: OrderCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormCreateNestedManyWithoutCourseInput
    Comment?: CommentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructorId: string
    overviews?: OverViewsUncheckedCreateNestedManyWithoutCourseInput
    details?: DetailsUncheckedCreateNestedManyWithoutCourseInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutCourseInput
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
  }

  export type OrderCreateWithoutStudentInput = {
    id?: string
    proof: string
    paymentMethod?: string
    course: CourseCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutStudentInput = {
    id?: string
    courseId: string
    proof: string
    paymentMethod?: string
  }

  export type OrderCreateOrConnectWithoutStudentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutStudentInput, OrderUncheckedCreateWithoutStudentInput>
  }

  export type OrderCreateManyStudentInputEnvelope = {
    data: OrderCreateManyStudentInput | OrderCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type OrderFormCreateWithoutStudentInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result?: boolean | null
    course: CourseCreateNestedOneWithoutOrderFormsInput
  }

  export type OrderFormUncheckedCreateWithoutStudentInput = {
    id?: string
    courseId: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result?: boolean | null
  }

  export type OrderFormCreateOrConnectWithoutStudentInput = {
    where: OrderFormWhereUniqueInput
    create: XOR<OrderFormCreateWithoutStudentInput, OrderFormUncheckedCreateWithoutStudentInput>
  }

  export type OrderFormCreateManyStudentInputEnvelope = {
    data: OrderFormCreateManyStudentInput | OrderFormCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutStudentInput = {
    comment?: string | null
    rating?: number | null
    course: CourseCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutStudentInput = {
    courseId: string
    comment?: string | null
    rating?: number | null
  }

  export type CommentCreateOrConnectWithoutStudentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutStudentInput, CommentUncheckedCreateWithoutStudentInput>
  }

  export type CommentCreateManyStudentInputEnvelope = {
    data: CommentCreateManyStudentInput | CommentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserDetailsUpsertWithoutUserInput = {
    update: XOR<UserDetailsUpdateWithoutUserInput, UserDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    where?: UserDetailsWhereInput
  }

  export type UserDetailsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserDetailsWhereInput
    data: XOR<UserDetailsUpdateWithoutUserInput, UserDetailsUncheckedUpdateWithoutUserInput>
  }

  export type UserDetailsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    x?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDetailsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    x?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUpsertWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
  }

  export type CourseUpdateManyWithWhereWithoutInstructorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutInstructorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    picture?: StringFilter<"Course"> | string
    type?: StringNullableFilter<"Course"> | string | null
    discount?: FloatNullableFilter<"Course"> | number | null
    categorie?: StringFilter<"Course"> | string
    level?: StringFilter<"Course"> | string
    status?: StringFilter<"Course"> | string
    startDate?: DateTimeNullableFilter<"Course"> | Date | string | null
    instructorId?: StringFilter<"Course"> | string
  }

  export type CourseUpsertWithWhereUniqueWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutStudentsInput, CourseUncheckedUpdateWithoutStudentsInput>
    create: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutStudentsInput, CourseUncheckedUpdateWithoutStudentsInput>
  }

  export type CourseUpdateManyWithWhereWithoutStudentsInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutStudentsInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutStudentInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutStudentInput, OrderUncheckedUpdateWithoutStudentInput>
    create: XOR<OrderCreateWithoutStudentInput, OrderUncheckedCreateWithoutStudentInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutStudentInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutStudentInput, OrderUncheckedUpdateWithoutStudentInput>
  }

  export type OrderUpdateManyWithWhereWithoutStudentInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutStudentInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    studentId?: StringFilter<"Order"> | string
    courseId?: StringFilter<"Order"> | string
    proof?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
  }

  export type OrderFormUpsertWithWhereUniqueWithoutStudentInput = {
    where: OrderFormWhereUniqueInput
    update: XOR<OrderFormUpdateWithoutStudentInput, OrderFormUncheckedUpdateWithoutStudentInput>
    create: XOR<OrderFormCreateWithoutStudentInput, OrderFormUncheckedCreateWithoutStudentInput>
  }

  export type OrderFormUpdateWithWhereUniqueWithoutStudentInput = {
    where: OrderFormWhereUniqueInput
    data: XOR<OrderFormUpdateWithoutStudentInput, OrderFormUncheckedUpdateWithoutStudentInput>
  }

  export type OrderFormUpdateManyWithWhereWithoutStudentInput = {
    where: OrderFormScalarWhereInput
    data: XOR<OrderFormUpdateManyMutationInput, OrderFormUncheckedUpdateManyWithoutStudentInput>
  }

  export type OrderFormScalarWhereInput = {
    AND?: OrderFormScalarWhereInput | OrderFormScalarWhereInput[]
    OR?: OrderFormScalarWhereInput[]
    NOT?: OrderFormScalarWhereInput | OrderFormScalarWhereInput[]
    id?: StringFilter<"OrderForm"> | string
    studentId?: StringFilter<"OrderForm"> | string
    courseId?: StringFilter<"OrderForm"> | string
    firstName?: StringFilter<"OrderForm"> | string
    lastName?: StringFilter<"OrderForm"> | string
    phone?: StringFilter<"OrderForm"> | string
    motivation?: StringFilter<"OrderForm"> | string
    result?: BoolNullableFilter<"OrderForm"> | boolean | null
  }

  export type CommentUpsertWithWhereUniqueWithoutStudentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutStudentInput, CommentUncheckedUpdateWithoutStudentInput>
    create: XOR<CommentCreateWithoutStudentInput, CommentUncheckedCreateWithoutStudentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutStudentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutStudentInput, CommentUncheckedUpdateWithoutStudentInput>
  }

  export type CommentUpdateManyWithWhereWithoutStudentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutStudentInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    studentId?: StringFilter<"Comment"> | string
    courseId?: StringFilter<"Comment"> | string
    comment?: StringNullableFilter<"Comment"> | string | null
    rating?: IntNullableFilter<"Comment"> | number | null
  }

  export type UserCreateWithoutDetailsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    courses?: CourseCreateNestedManyWithoutInstructorInput
    coursesS?: CourseCreateNestedManyWithoutStudentsInput
    orders?: OrderCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormCreateNestedManyWithoutStudentInput
    Comment?: CommentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutDetailsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesS?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    orders?: OrderUncheckedCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutStudentInput
    Comment?: CommentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDetailsInput, UserUncheckedCreateWithoutDetailsInput>
  }

  export type UserUpsertWithoutDetailsInput = {
    update: XOR<UserUpdateWithoutDetailsInput, UserUncheckedUpdateWithoutDetailsInput>
    create: XOR<UserCreateWithoutDetailsInput, UserUncheckedCreateWithoutDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDetailsInput, UserUncheckedUpdateWithoutDetailsInput>
  }

  export type UserUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUpdateManyWithoutStudentsNestedInput
    orders?: OrderUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUpdateManyWithoutStudentNestedInput
    Comment?: CommentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutStudentNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutCoursesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsCreateNestedOneWithoutUserInput
    coursesS?: CourseCreateNestedManyWithoutStudentsInput
    orders?: OrderCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormCreateNestedManyWithoutStudentInput
    Comment?: CommentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
    coursesS?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    orders?: OrderUncheckedCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutStudentInput
    Comment?: CommentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type OverViewsCreateWithoutCourseInput = {
    id?: string
    statement: string
    type: string
  }

  export type OverViewsUncheckedCreateWithoutCourseInput = {
    id?: string
    statement: string
    type: string
  }

  export type OverViewsCreateOrConnectWithoutCourseInput = {
    where: OverViewsWhereUniqueInput
    create: XOR<OverViewsCreateWithoutCourseInput, OverViewsUncheckedCreateWithoutCourseInput>
  }

  export type OverViewsCreateManyCourseInputEnvelope = {
    data: OverViewsCreateManyCourseInput | OverViewsCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type DetailsCreateWithoutCourseInput = {
    id?: string
    week: number
    title: string
    lessons?: LessonsCreateNestedManyWithoutWeekInput
  }

  export type DetailsUncheckedCreateWithoutCourseInput = {
    id?: string
    week: number
    title: string
    lessons?: LessonsUncheckedCreateNestedManyWithoutWeekInput
  }

  export type DetailsCreateOrConnectWithoutCourseInput = {
    where: DetailsWhereUniqueInput
    create: XOR<DetailsCreateWithoutCourseInput, DetailsUncheckedCreateWithoutCourseInput>
  }

  export type DetailsCreateManyCourseInputEnvelope = {
    data: DetailsCreateManyCourseInput | DetailsCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCoursesSInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsCreateNestedOneWithoutUserInput
    courses?: CourseCreateNestedManyWithoutInstructorInput
    orders?: OrderCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormCreateNestedManyWithoutStudentInput
    Comment?: CommentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutCoursesSInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    orders?: OrderUncheckedCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutStudentInput
    Comment?: CommentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutCoursesSInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesSInput, UserUncheckedCreateWithoutCoursesSInput>
  }

  export type OrderCreateWithoutCourseInput = {
    id?: string
    proof: string
    paymentMethod?: string
    student: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutCourseInput = {
    id?: string
    studentId: string
    proof: string
    paymentMethod?: string
  }

  export type OrderCreateOrConnectWithoutCourseInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput>
  }

  export type OrderCreateManyCourseInputEnvelope = {
    data: OrderCreateManyCourseInput | OrderCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type OrderFormCreateWithoutCourseInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result?: boolean | null
    student: UserCreateNestedOneWithoutOrderFormsInput
  }

  export type OrderFormUncheckedCreateWithoutCourseInput = {
    id?: string
    studentId: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result?: boolean | null
  }

  export type OrderFormCreateOrConnectWithoutCourseInput = {
    where: OrderFormWhereUniqueInput
    create: XOR<OrderFormCreateWithoutCourseInput, OrderFormUncheckedCreateWithoutCourseInput>
  }

  export type OrderFormCreateManyCourseInputEnvelope = {
    data: OrderFormCreateManyCourseInput | OrderFormCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutCourseInput = {
    comment?: string | null
    rating?: number | null
    student: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutCourseInput = {
    studentId: string
    comment?: string | null
    rating?: number | null
  }

  export type CommentCreateOrConnectWithoutCourseInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCourseInput, CommentUncheckedCreateWithoutCourseInput>
  }

  export type CommentCreateManyCourseInputEnvelope = {
    data: CommentCreateManyCourseInput | CommentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUpdateOneWithoutUserNestedInput
    coursesS?: CourseUpdateManyWithoutStudentsNestedInput
    orders?: OrderUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUpdateManyWithoutStudentNestedInput
    Comment?: CommentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
    coursesS?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutStudentNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type OverViewsUpsertWithWhereUniqueWithoutCourseInput = {
    where: OverViewsWhereUniqueInput
    update: XOR<OverViewsUpdateWithoutCourseInput, OverViewsUncheckedUpdateWithoutCourseInput>
    create: XOR<OverViewsCreateWithoutCourseInput, OverViewsUncheckedCreateWithoutCourseInput>
  }

  export type OverViewsUpdateWithWhereUniqueWithoutCourseInput = {
    where: OverViewsWhereUniqueInput
    data: XOR<OverViewsUpdateWithoutCourseInput, OverViewsUncheckedUpdateWithoutCourseInput>
  }

  export type OverViewsUpdateManyWithWhereWithoutCourseInput = {
    where: OverViewsScalarWhereInput
    data: XOR<OverViewsUpdateManyMutationInput, OverViewsUncheckedUpdateManyWithoutCourseInput>
  }

  export type OverViewsScalarWhereInput = {
    AND?: OverViewsScalarWhereInput | OverViewsScalarWhereInput[]
    OR?: OverViewsScalarWhereInput[]
    NOT?: OverViewsScalarWhereInput | OverViewsScalarWhereInput[]
    id?: StringFilter<"OverViews"> | string
    statement?: StringFilter<"OverViews"> | string
    type?: StringFilter<"OverViews"> | string
    courseId?: StringFilter<"OverViews"> | string
  }

  export type DetailsUpsertWithWhereUniqueWithoutCourseInput = {
    where: DetailsWhereUniqueInput
    update: XOR<DetailsUpdateWithoutCourseInput, DetailsUncheckedUpdateWithoutCourseInput>
    create: XOR<DetailsCreateWithoutCourseInput, DetailsUncheckedCreateWithoutCourseInput>
  }

  export type DetailsUpdateWithWhereUniqueWithoutCourseInput = {
    where: DetailsWhereUniqueInput
    data: XOR<DetailsUpdateWithoutCourseInput, DetailsUncheckedUpdateWithoutCourseInput>
  }

  export type DetailsUpdateManyWithWhereWithoutCourseInput = {
    where: DetailsScalarWhereInput
    data: XOR<DetailsUpdateManyMutationInput, DetailsUncheckedUpdateManyWithoutCourseInput>
  }

  export type DetailsScalarWhereInput = {
    AND?: DetailsScalarWhereInput | DetailsScalarWhereInput[]
    OR?: DetailsScalarWhereInput[]
    NOT?: DetailsScalarWhereInput | DetailsScalarWhereInput[]
    id?: StringFilter<"Details"> | string
    week?: IntFilter<"Details"> | number
    title?: StringFilter<"Details"> | string
    courseId?: StringFilter<"Details"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutCoursesSInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCoursesSInput, UserUncheckedUpdateWithoutCoursesSInput>
    create: XOR<UserCreateWithoutCoursesSInput, UserUncheckedCreateWithoutCoursesSInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCoursesSInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCoursesSInput, UserUncheckedUpdateWithoutCoursesSInput>
  }

  export type UserUpdateManyWithWhereWithoutCoursesSInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCoursesSInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    wilaya?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutCourseInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCourseInput, OrderUncheckedUpdateWithoutCourseInput>
    create: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCourseInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCourseInput, OrderUncheckedUpdateWithoutCourseInput>
  }

  export type OrderUpdateManyWithWhereWithoutCourseInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCourseInput>
  }

  export type OrderFormUpsertWithWhereUniqueWithoutCourseInput = {
    where: OrderFormWhereUniqueInput
    update: XOR<OrderFormUpdateWithoutCourseInput, OrderFormUncheckedUpdateWithoutCourseInput>
    create: XOR<OrderFormCreateWithoutCourseInput, OrderFormUncheckedCreateWithoutCourseInput>
  }

  export type OrderFormUpdateWithWhereUniqueWithoutCourseInput = {
    where: OrderFormWhereUniqueInput
    data: XOR<OrderFormUpdateWithoutCourseInput, OrderFormUncheckedUpdateWithoutCourseInput>
  }

  export type OrderFormUpdateManyWithWhereWithoutCourseInput = {
    where: OrderFormScalarWhereInput
    data: XOR<OrderFormUpdateManyMutationInput, OrderFormUncheckedUpdateManyWithoutCourseInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutCourseInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutCourseInput, CommentUncheckedUpdateWithoutCourseInput>
    create: XOR<CommentCreateWithoutCourseInput, CommentUncheckedCreateWithoutCourseInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCourseInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutCourseInput, CommentUncheckedUpdateWithoutCourseInput>
  }

  export type CommentUpdateManyWithWhereWithoutCourseInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutOverviewsInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructor: UserCreateNestedOneWithoutCoursesInput
    details?: DetailsCreateNestedManyWithoutCourseInput
    students?: UserCreateNestedManyWithoutCoursesSInput
    orders?: OrderCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormCreateNestedManyWithoutCourseInput
    Comment?: CommentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutOverviewsInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructorId: string
    details?: DetailsUncheckedCreateNestedManyWithoutCourseInput
    students?: UserUncheckedCreateNestedManyWithoutCoursesSInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutCourseInput
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutOverviewsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutOverviewsInput, CourseUncheckedCreateWithoutOverviewsInput>
  }

  export type CourseUpsertWithoutOverviewsInput = {
    update: XOR<CourseUpdateWithoutOverviewsInput, CourseUncheckedUpdateWithoutOverviewsInput>
    create: XOR<CourseCreateWithoutOverviewsInput, CourseUncheckedCreateWithoutOverviewsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutOverviewsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutOverviewsInput, CourseUncheckedUpdateWithoutOverviewsInput>
  }

  export type CourseUpdateWithoutOverviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    details?: DetailsUpdateManyWithoutCourseNestedInput
    students?: UserUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUpdateManyWithoutCourseNestedInput
    Comment?: CommentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutOverviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    details?: DetailsUncheckedUpdateManyWithoutCourseNestedInput
    students?: UserUncheckedUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutCourseNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutDetailsInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructor: UserCreateNestedOneWithoutCoursesInput
    overviews?: OverViewsCreateNestedManyWithoutCourseInput
    students?: UserCreateNestedManyWithoutCoursesSInput
    orders?: OrderCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormCreateNestedManyWithoutCourseInput
    Comment?: CommentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutDetailsInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructorId: string
    overviews?: OverViewsUncheckedCreateNestedManyWithoutCourseInput
    students?: UserUncheckedCreateNestedManyWithoutCoursesSInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutCourseInput
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutDetailsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutDetailsInput, CourseUncheckedCreateWithoutDetailsInput>
  }

  export type LessonsCreateWithoutWeekInput = {
    id?: string
    name: string
    url?: string | null
    type?: string
    duration?: string | null
    position: number
  }

  export type LessonsUncheckedCreateWithoutWeekInput = {
    id?: string
    name: string
    url?: string | null
    type?: string
    duration?: string | null
    position: number
  }

  export type LessonsCreateOrConnectWithoutWeekInput = {
    where: LessonsWhereUniqueInput
    create: XOR<LessonsCreateWithoutWeekInput, LessonsUncheckedCreateWithoutWeekInput>
  }

  export type LessonsCreateManyWeekInputEnvelope = {
    data: LessonsCreateManyWeekInput | LessonsCreateManyWeekInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutDetailsInput = {
    update: XOR<CourseUpdateWithoutDetailsInput, CourseUncheckedUpdateWithoutDetailsInput>
    create: XOR<CourseCreateWithoutDetailsInput, CourseUncheckedCreateWithoutDetailsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutDetailsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutDetailsInput, CourseUncheckedUpdateWithoutDetailsInput>
  }

  export type CourseUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    overviews?: OverViewsUpdateManyWithoutCourseNestedInput
    students?: UserUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUpdateManyWithoutCourseNestedInput
    Comment?: CommentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    overviews?: OverViewsUncheckedUpdateManyWithoutCourseNestedInput
    students?: UserUncheckedUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutCourseNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type LessonsUpsertWithWhereUniqueWithoutWeekInput = {
    where: LessonsWhereUniqueInput
    update: XOR<LessonsUpdateWithoutWeekInput, LessonsUncheckedUpdateWithoutWeekInput>
    create: XOR<LessonsCreateWithoutWeekInput, LessonsUncheckedCreateWithoutWeekInput>
  }

  export type LessonsUpdateWithWhereUniqueWithoutWeekInput = {
    where: LessonsWhereUniqueInput
    data: XOR<LessonsUpdateWithoutWeekInput, LessonsUncheckedUpdateWithoutWeekInput>
  }

  export type LessonsUpdateManyWithWhereWithoutWeekInput = {
    where: LessonsScalarWhereInput
    data: XOR<LessonsUpdateManyMutationInput, LessonsUncheckedUpdateManyWithoutWeekInput>
  }

  export type LessonsScalarWhereInput = {
    AND?: LessonsScalarWhereInput | LessonsScalarWhereInput[]
    OR?: LessonsScalarWhereInput[]
    NOT?: LessonsScalarWhereInput | LessonsScalarWhereInput[]
    id?: StringFilter<"Lessons"> | string
    name?: StringFilter<"Lessons"> | string
    url?: StringNullableFilter<"Lessons"> | string | null
    type?: StringFilter<"Lessons"> | string
    duration?: StringNullableFilter<"Lessons"> | string | null
    position?: IntFilter<"Lessons"> | number
    weekId?: StringFilter<"Lessons"> | string
  }

  export type DetailsCreateWithoutLessonsInput = {
    id?: string
    week: number
    title: string
    course: CourseCreateNestedOneWithoutDetailsInput
  }

  export type DetailsUncheckedCreateWithoutLessonsInput = {
    id?: string
    week: number
    title: string
    courseId: string
  }

  export type DetailsCreateOrConnectWithoutLessonsInput = {
    where: DetailsWhereUniqueInput
    create: XOR<DetailsCreateWithoutLessonsInput, DetailsUncheckedCreateWithoutLessonsInput>
  }

  export type DetailsUpsertWithoutLessonsInput = {
    update: XOR<DetailsUpdateWithoutLessonsInput, DetailsUncheckedUpdateWithoutLessonsInput>
    create: XOR<DetailsCreateWithoutLessonsInput, DetailsUncheckedCreateWithoutLessonsInput>
    where?: DetailsWhereInput
  }

  export type DetailsUpdateToOneWithWhereWithoutLessonsInput = {
    where?: DetailsWhereInput
    data: XOR<DetailsUpdateWithoutLessonsInput, DetailsUncheckedUpdateWithoutLessonsInput>
  }

  export type DetailsUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailsUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsCreateNestedOneWithoutUserInput
    courses?: CourseCreateNestedManyWithoutInstructorInput
    coursesS?: CourseCreateNestedManyWithoutStudentsInput
    orderForms?: OrderFormCreateNestedManyWithoutStudentInput
    Comment?: CommentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesS?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutStudentInput
    Comment?: CommentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type CourseCreateWithoutOrdersInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructor: UserCreateNestedOneWithoutCoursesInput
    overviews?: OverViewsCreateNestedManyWithoutCourseInput
    details?: DetailsCreateNestedManyWithoutCourseInput
    students?: UserCreateNestedManyWithoutCoursesSInput
    orderForms?: OrderFormCreateNestedManyWithoutCourseInput
    Comment?: CommentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructorId: string
    overviews?: OverViewsUncheckedCreateNestedManyWithoutCourseInput
    details?: DetailsUncheckedCreateNestedManyWithoutCourseInput
    students?: UserUncheckedCreateNestedManyWithoutCoursesSInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutCourseInput
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutOrdersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUpdateOneWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUpdateManyWithoutStudentsNestedInput
    orderForms?: OrderFormUpdateManyWithoutStudentNestedInput
    Comment?: CommentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutStudentNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUpsertWithoutOrdersInput = {
    update: XOR<CourseUpdateWithoutOrdersInput, CourseUncheckedUpdateWithoutOrdersInput>
    create: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutOrdersInput, CourseUncheckedUpdateWithoutOrdersInput>
  }

  export type CourseUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    overviews?: OverViewsUpdateManyWithoutCourseNestedInput
    details?: DetailsUpdateManyWithoutCourseNestedInput
    students?: UserUpdateManyWithoutCoursesSNestedInput
    orderForms?: OrderFormUpdateManyWithoutCourseNestedInput
    Comment?: CommentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    overviews?: OverViewsUncheckedUpdateManyWithoutCourseNestedInput
    details?: DetailsUncheckedUpdateManyWithoutCourseNestedInput
    students?: UserUncheckedUpdateManyWithoutCoursesSNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutCourseNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutOrderFormsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsCreateNestedOneWithoutUserInput
    courses?: CourseCreateNestedManyWithoutInstructorInput
    coursesS?: CourseCreateNestedManyWithoutStudentsInput
    orders?: OrderCreateNestedManyWithoutStudentInput
    Comment?: CommentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutOrderFormsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesS?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    orders?: OrderUncheckedCreateNestedManyWithoutStudentInput
    Comment?: CommentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutOrderFormsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderFormsInput, UserUncheckedCreateWithoutOrderFormsInput>
  }

  export type CourseCreateWithoutOrderFormsInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructor: UserCreateNestedOneWithoutCoursesInput
    overviews?: OverViewsCreateNestedManyWithoutCourseInput
    details?: DetailsCreateNestedManyWithoutCourseInput
    students?: UserCreateNestedManyWithoutCoursesSInput
    orders?: OrderCreateNestedManyWithoutCourseInput
    Comment?: CommentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutOrderFormsInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructorId: string
    overviews?: OverViewsUncheckedCreateNestedManyWithoutCourseInput
    details?: DetailsUncheckedCreateNestedManyWithoutCourseInput
    students?: UserUncheckedCreateNestedManyWithoutCoursesSInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutOrderFormsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutOrderFormsInput, CourseUncheckedCreateWithoutOrderFormsInput>
  }

  export type UserUpsertWithoutOrderFormsInput = {
    update: XOR<UserUpdateWithoutOrderFormsInput, UserUncheckedUpdateWithoutOrderFormsInput>
    create: XOR<UserCreateWithoutOrderFormsInput, UserUncheckedCreateWithoutOrderFormsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderFormsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderFormsInput, UserUncheckedUpdateWithoutOrderFormsInput>
  }

  export type UserUpdateWithoutOrderFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUpdateOneWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUpdateManyWithoutStudentsNestedInput
    orders?: OrderUpdateManyWithoutStudentNestedInput
    Comment?: CommentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStudentNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUpsertWithoutOrderFormsInput = {
    update: XOR<CourseUpdateWithoutOrderFormsInput, CourseUncheckedUpdateWithoutOrderFormsInput>
    create: XOR<CourseCreateWithoutOrderFormsInput, CourseUncheckedCreateWithoutOrderFormsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutOrderFormsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutOrderFormsInput, CourseUncheckedUpdateWithoutOrderFormsInput>
  }

  export type CourseUpdateWithoutOrderFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    overviews?: OverViewsUpdateManyWithoutCourseNestedInput
    details?: DetailsUpdateManyWithoutCourseNestedInput
    students?: UserUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
    Comment?: CommentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutOrderFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    overviews?: OverViewsUncheckedUpdateManyWithoutCourseNestedInput
    details?: DetailsUncheckedUpdateManyWithoutCourseNestedInput
    students?: UserUncheckedUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutCommentInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsCreateNestedOneWithoutUserInput
    courses?: CourseCreateNestedManyWithoutInstructorInput
    coursesS?: CourseCreateNestedManyWithoutStudentsInput
    orders?: OrderCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phone_number: string
    wilaya: string
    picture?: string | null
    role?: string | null
    details?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesS?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    orders?: OrderUncheckedCreateNestedManyWithoutStudentInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type CourseCreateWithoutCommentInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructor: UserCreateNestedOneWithoutCoursesInput
    overviews?: OverViewsCreateNestedManyWithoutCourseInput
    details?: DetailsCreateNestedManyWithoutCourseInput
    students?: UserCreateNestedManyWithoutCoursesSInput
    orders?: OrderCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCommentInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
    instructorId: string
    overviews?: OverViewsUncheckedCreateNestedManyWithoutCourseInput
    details?: DetailsUncheckedCreateNestedManyWithoutCourseInput
    students?: UserUncheckedCreateNestedManyWithoutCoursesSInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
    orderForms?: OrderFormUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCommentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCommentInput, CourseUncheckedCreateWithoutCommentInput>
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUpdateOneWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUpdateManyWithoutStudentsNestedInput
    orders?: OrderUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesS?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUpsertWithoutCommentInput = {
    update: XOR<CourseUpdateWithoutCommentInput, CourseUncheckedUpdateWithoutCommentInput>
    create: XOR<CourseCreateWithoutCommentInput, CourseUncheckedCreateWithoutCommentInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCommentInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCommentInput, CourseUncheckedUpdateWithoutCommentInput>
  }

  export type CourseUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    overviews?: OverViewsUpdateManyWithoutCourseNestedInput
    details?: DetailsUpdateManyWithoutCourseNestedInput
    students?: UserUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    overviews?: OverViewsUncheckedUpdateManyWithoutCourseNestedInput
    details?: DetailsUncheckedUpdateManyWithoutCourseNestedInput
    students?: UserUncheckedUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInstructorInput = {
    id?: string
    name: string
    description: string
    price: number
    picture: string
    type?: string | null
    discount?: number | null
    categorie: string
    level?: string
    status?: string
    startDate?: Date | string | null
  }

  export type OrderCreateManyStudentInput = {
    id?: string
    courseId: string
    proof: string
    paymentMethod?: string
  }

  export type OrderFormCreateManyStudentInput = {
    id?: string
    courseId: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result?: boolean | null
  }

  export type CommentCreateManyStudentInput = {
    courseId: string
    comment?: string | null
    rating?: number | null
  }

  export type CourseUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overviews?: OverViewsUpdateManyWithoutCourseNestedInput
    details?: DetailsUpdateManyWithoutCourseNestedInput
    students?: UserUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUpdateManyWithoutCourseNestedInput
    Comment?: CommentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overviews?: OverViewsUncheckedUpdateManyWithoutCourseNestedInput
    details?: DetailsUncheckedUpdateManyWithoutCourseNestedInput
    students?: UserUncheckedUpdateManyWithoutCoursesSNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutCourseNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    overviews?: OverViewsUpdateManyWithoutCourseNestedInput
    details?: DetailsUpdateManyWithoutCourseNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUpdateManyWithoutCourseNestedInput
    Comment?: CommentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    overviews?: OverViewsUncheckedUpdateManyWithoutCourseNestedInput
    details?: DetailsUncheckedUpdateManyWithoutCourseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutCourseNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    categorie?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type OrderFormUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
    course?: CourseUpdateOneRequiredWithoutOrderFormsNestedInput
  }

  export type OrderFormUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrderFormUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CommentUpdateWithoutStudentInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    course?: CourseUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutStudentInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUncheckedUpdateManyWithoutStudentInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OverViewsCreateManyCourseInput = {
    id?: string
    statement: string
    type: string
  }

  export type DetailsCreateManyCourseInput = {
    id?: string
    week: number
    title: string
  }

  export type OrderCreateManyCourseInput = {
    id?: string
    studentId: string
    proof: string
    paymentMethod?: string
  }

  export type OrderFormCreateManyCourseInput = {
    id?: string
    studentId: string
    firstName: string
    lastName: string
    phone: string
    motivation: string
    result?: boolean | null
  }

  export type CommentCreateManyCourseInput = {
    studentId: string
    comment?: string | null
    rating?: number | null
  }

  export type OverViewsUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type OverViewsUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type OverViewsUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type DetailsUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lessons?: LessonsUpdateManyWithoutWeekNestedInput
  }

  export type DetailsUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lessons?: LessonsUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type DetailsUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutCoursesSInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUpdateOneWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    orders?: OrderUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUpdateManyWithoutStudentNestedInput
    Comment?: CommentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesSInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    details?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStudentNestedInput
    orderForms?: OrderFormUncheckedUpdateManyWithoutStudentNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCoursesSInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    student?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    proof?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type OrderFormUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
    student?: UserUpdateOneRequiredWithoutOrderFormsNestedInput
  }

  export type OrderFormUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrderFormUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CommentUpdateWithoutCourseInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    student?: UserUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutCourseInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUncheckedUpdateManyWithoutCourseInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LessonsCreateManyWeekInput = {
    id?: string
    name: string
    url?: string | null
    type?: string
    duration?: string | null
    position: number
  }

  export type LessonsUpdateWithoutWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type LessonsUncheckedUpdateWithoutWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type LessonsUncheckedUpdateManyWithoutWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}