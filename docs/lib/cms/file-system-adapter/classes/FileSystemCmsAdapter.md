[**neodesign v1.0.0**](../../../../README.md)

***

[neodesign](../../../../modules.md) / [lib/cms/file-system-adapter](../README.md) / FileSystemCmsAdapter

# Class: FileSystemCmsAdapter

Defined in: lib/cms/file-system-adapter.ts:11

## Implements

- [`CmsAdapter`](../../interfaces/interfaces/CmsAdapter.md)

## Constructors

### new FileSystemCmsAdapter()

> **new FileSystemCmsAdapter**(): [`FileSystemCmsAdapter`](FileSystemCmsAdapter.md)

#### Returns

[`FileSystemCmsAdapter`](FileSystemCmsAdapter.md)

## Methods

### getAllAuthors()

> **getAllAuthors**(): `Promise`\<[`Author`](../../../../types/blog/interfaces/Author.md)[]\>

Defined in: lib/cms/file-system-adapter.ts:49

#### Returns

`Promise`\<[`Author`](../../../../types/blog/interfaces/Author.md)[]\>

#### Implementation of

[`CmsAdapter`](../../interfaces/interfaces/CmsAdapter.md).[`getAllAuthors`](../../interfaces/interfaces/CmsAdapter.md#getallauthors)

***

### getAllBlogPosts()

> **getAllBlogPosts**(): `Promise`\<[`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)[]\>

Defined in: lib/cms/file-system-adapter.ts:17

#### Returns

`Promise`\<[`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)[]\>

#### Implementation of

[`CmsAdapter`](../../interfaces/interfaces/CmsAdapter.md).[`getAllBlogPosts`](../../interfaces/interfaces/CmsAdapter.md#getallblogposts)

***

### getAllProjects()

> **getAllProjects**(): `Promise`\<[`ProjectDetail`](../../../../types/project/interfaces/ProjectDetail.md)[]\>

Defined in: lib/cms/file-system-adapter.ts:40

#### Returns

`Promise`\<[`ProjectDetail`](../../../../types/project/interfaces/ProjectDetail.md)[]\>

#### Implementation of

[`CmsAdapter`](../../interfaces/interfaces/CmsAdapter.md).[`getAllProjects`](../../interfaces/interfaces/CmsAdapter.md#getallprojects)

***

### getAuthorBySlug()

> **getAuthorBySlug**(`slug`): `Promise`\<`null` \| [`Author`](../../../../types/blog/interfaces/Author.md)\>

Defined in: lib/cms/file-system-adapter.ts:44

#### Parameters

##### slug

`string`

#### Returns

`Promise`\<`null` \| [`Author`](../../../../types/blog/interfaces/Author.md)\>

#### Implementation of

[`CmsAdapter`](../../interfaces/interfaces/CmsAdapter.md).[`getAuthorBySlug`](../../interfaces/interfaces/CmsAdapter.md#getauthorbyslug)

***

### getBlogPostBySlug()

> **getBlogPostBySlug**(`slug`): `Promise`\<`null` \| [`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)\>

Defined in: lib/cms/file-system-adapter.ts:12

#### Parameters

##### slug

`string`

#### Returns

`Promise`\<`null` \| [`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)\>

#### Implementation of

[`CmsAdapter`](../../interfaces/interfaces/CmsAdapter.md).[`getBlogPostBySlug`](../../interfaces/interfaces/CmsAdapter.md#getblogpostbyslug)

***

### getPaginatedBlogPosts()

> **getPaginatedBlogPosts**(`page`, `limit`, `filters`?): `Promise`\<\{ `items`: [`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)[]; `pageCount`: `number`; `totalItems`: `number`; \}\>

Defined in: lib/cms/file-system-adapter.ts:21

#### Parameters

##### page

`number`

##### limit

`number`

##### filters?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<\{ `items`: [`BlogPost`](../../../../types/blog/interfaces/BlogPost.md)[]; `pageCount`: `number`; `totalItems`: `number`; \}\>

#### Implementation of

[`CmsAdapter`](../../interfaces/interfaces/CmsAdapter.md).[`getPaginatedBlogPosts`](../../interfaces/interfaces/CmsAdapter.md#getpaginatedblogposts)

***

### getProjectBySlug()

> **getProjectBySlug**(`slug`): `Promise`\<[`ProjectDetail`](../../../../types/project/interfaces/ProjectDetail.md)\>

Defined in: lib/cms/file-system-adapter.ts:35

#### Parameters

##### slug

`string`

#### Returns

`Promise`\<[`ProjectDetail`](../../../../types/project/interfaces/ProjectDetail.md)\>

#### Implementation of

[`CmsAdapter`](../../interfaces/interfaces/CmsAdapter.md).[`getProjectBySlug`](../../interfaces/interfaces/CmsAdapter.md#getprojectbyslug)
