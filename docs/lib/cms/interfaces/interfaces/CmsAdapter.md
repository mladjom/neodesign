[**neodesign v1.0.0**](../../../../README.md)

***

[neodesign](../../../../modules.md) / [lib/cms/interfaces](../README.md) / CmsAdapter

# Interface: CmsAdapter

Defined in: lib/cms/interfaces.ts:4

## Methods

### getAllAuthors()

> **getAllAuthors**(): `Promise`\<[`Author`](../../../../types/blog/interfaces/Author.md)[]\>

Defined in: lib/cms/interfaces.ts:20

#### Returns

`Promise`\<[`Author`](../../../../types/blog/interfaces/Author.md)[]\>

***

### getAllBlogPosts()

> **getAllBlogPosts**(): `Promise`\<[`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)[]\>

Defined in: lib/cms/interfaces.ts:7

#### Returns

`Promise`\<[`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)[]\>

***

### getAllProjects()

> **getAllProjects**(): `Promise`\<[`Project`](../../../../types/project/interfaces/Project.md)[]\>

Defined in: lib/cms/interfaces.ts:16

#### Returns

`Promise`\<[`Project`](../../../../types/project/interfaces/Project.md)[]\>

***

### getAuthorBySlug()

> **getAuthorBySlug**(`slug`): `Promise`\<`null` \| [`Author`](../../../../types/blog/interfaces/Author.md)\>

Defined in: lib/cms/interfaces.ts:19

#### Parameters

##### slug

`string`

#### Returns

`Promise`\<`null` \| [`Author`](../../../../types/blog/interfaces/Author.md)\>

***

### getBlogPostBySlug()

> **getBlogPostBySlug**(`slug`): `Promise`\<`null` \| [`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)\>

Defined in: lib/cms/interfaces.ts:6

#### Parameters

##### slug

`string`

#### Returns

`Promise`\<`null` \| [`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)\>

***

### getPaginatedBlogPosts()

> **getPaginatedBlogPosts**(`page`, `limit`, `filters`?): `Promise`\<\{ `items`: [`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)[]; `pageCount`: `number`; `totalItems`: `number`; \}\>

Defined in: lib/cms/interfaces.ts:8

#### Parameters

##### page

`number`

##### limit

`number`

##### filters?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<\{ `items`: [`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)[]; `pageCount`: `number`; `totalItems`: `number`; \}\>

***

### getProjectBySlug()

> **getProjectBySlug**(`slug`): `Promise`\<`null` \| [`Project`](../../../../types/project/interfaces/Project.md)\>

Defined in: lib/cms/interfaces.ts:15

#### Parameters

##### slug

`string`

#### Returns

`Promise`\<`null` \| [`Project`](../../../../types/project/interfaces/Project.md)\>
