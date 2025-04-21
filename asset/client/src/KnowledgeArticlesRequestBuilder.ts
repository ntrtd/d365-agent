/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { KnowledgeArticles } from './KnowledgeArticles';

/**
 * Request builder class for operations supported on the {@link KnowledgeArticles} entity.
 */
export class KnowledgeArticlesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KnowledgeArticles<T>, T> {
  /**
   * Returns a request builder for querying all `KnowledgeArticles` entities.
   * @returns A request builder for creating requests to retrieve all `KnowledgeArticles` entities.
   */
  getAll(): GetAllRequestBuilder<KnowledgeArticles<T>, T> {
    return new GetAllRequestBuilder<KnowledgeArticles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KnowledgeArticles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KnowledgeArticles`.
   */
  create(
    entity: KnowledgeArticles<T>
  ): CreateRequestBuilder<KnowledgeArticles<T>, T> {
    return new CreateRequestBuilder<KnowledgeArticles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `KnowledgeArticles` entity based on its keys.
   * @param dataAreaId Key property. See {@link KnowledgeArticles.dataAreaId}.
   * @param articleItemId Key property. See {@link KnowledgeArticles.articleItemId}.
   * @returns A request builder for creating requests to retrieve one `KnowledgeArticles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    articleItemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<KnowledgeArticles<T>, T> {
    return new GetByKeyRequestBuilder<KnowledgeArticles<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ArticleItemId: articleItemId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `KnowledgeArticles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KnowledgeArticles`.
   */
  update(
    entity: KnowledgeArticles<T>
  ): UpdateRequestBuilder<KnowledgeArticles<T>, T> {
    return new UpdateRequestBuilder<KnowledgeArticles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KnowledgeArticles`.
   * @param dataAreaId Key property. See {@link KnowledgeArticles.dataAreaId}.
   * @param articleItemId Key property. See {@link KnowledgeArticles.articleItemId}.
   * @returns A request builder for creating requests that delete an entity of type `KnowledgeArticles`.
   */
  delete(
    dataAreaId: string,
    articleItemId: string
  ): DeleteRequestBuilder<KnowledgeArticles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KnowledgeArticles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KnowledgeArticles` by taking the entity as a parameter.
   */
  delete(
    entity: KnowledgeArticles<T>
  ): DeleteRequestBuilder<KnowledgeArticles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    articleItemId?: string
  ): DeleteRequestBuilder<KnowledgeArticles<T>, T> {
    return new DeleteRequestBuilder<KnowledgeArticles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof KnowledgeArticles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ArticleItemId: articleItemId!
          }
    );
  }
}
