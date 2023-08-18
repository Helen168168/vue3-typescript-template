

type omit<T, U> = Pick<T, Exclude<keyof T, U>>