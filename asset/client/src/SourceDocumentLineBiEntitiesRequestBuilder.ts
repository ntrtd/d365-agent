/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { SourceDocumentLineBiEntities } from './SourceDocumentLineBiEntities';

/**
 * Request builder class for operations supported on the {@link SourceDocumentLineBiEntities} entity.
 */
export class SourceDocumentLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SourceDocumentLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SourceDocumentLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SourceDocumentLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SourceDocumentLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<SourceDocumentLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SourceDocumentLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceDocumentLineBiEntities`.
   */
  create(
    entity: SourceDocumentLineBiEntities<T>
  ): CreateRequestBuilder<SourceDocumentLineBiEntities<T>, T> {
    return new CreateRequestBuilder<SourceDocumentLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SourceDocumentLineBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link SourceDocumentLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SourceDocumentLineBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SourceDocumentLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SourceDocumentLineBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SourceDocumentLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceDocumentLineBiEntities`.
   */
  update(
    entity: SourceDocumentLineBiEntities<T>
  ): UpdateRequestBuilder<SourceDocumentLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<SourceDocumentLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceDocumentLineBiEntities`.
   * @param sourceKey Key property. See {@link SourceDocumentLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SourceDocumentLineBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SourceDocumentLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SourceDocumentLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceDocumentLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SourceDocumentLineBiEntities<T>
  ): DeleteRequestBuilder<SourceDocumentLineBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<SourceDocumentLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<SourceDocumentLineBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof SourceDocumentLineBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
