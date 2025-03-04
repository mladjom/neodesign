[**neodesign v1.0.0**](../../../README.md)

***

[neodesign](../../../modules.md) / [lib/blog-service](../README.md) / getPaginatedBlogPosts

# Function: getPaginatedBlogPosts()

> **getPaginatedBlogPosts**(`page`, `limit`, `category`?, `tag`?, `authorSlug`?): `Promise`\<[`PaginationResult`](../../../types/blog/interfaces/PaginationResult.md)\<[`BlogPost`](../../../types/blog/interfaces/BlogPost.md)\>\>

Defined in: [lib/blog-service.ts:169](https://github.com/mladjom/neodesign/blob/12ebc446849a001345c104056aef95c6372b148e/lib/blog-service.ts#L169)

## Parameters

### page

`number` = `1`

### limit

`number` = `9`

### category?

`string`

### tag?

`string`

### authorSlug?

`string`

## Returns

`Promise`\<[`PaginationResult`](../../../types/blog/interfaces/PaginationResult.md)\<[`BlogPost`](../../../types/blog/interfaces/BlogPost.md)\>\>
