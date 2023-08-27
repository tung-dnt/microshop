export async function catchAsync<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U, null] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt)
        return [parsedError, null]
      }
      return [err, null]
    })
}