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
import { SourceDocumentHeaderBiEntities } from './SourceDocumentHeaderBiEntities';

/**
 * Request builder class for operations supported on the {@link SourceDocumentHeaderBiEntities} entity.
 */
export class SourceDocumentHeaderBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SourceDocumentHeaderBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SourceDocumentHeaderBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SourceDocumentHeaderBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SourceDocumentHeaderBiEntities<T>, T> {
    return new GetAllRequestBuilder<SourceDocumentHeaderBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SourceDocumentHeaderBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceDocumentHeaderBiEntities`.
   */
  create(
    entity: SourceDocumentHeaderBiEntities<T>
  ): CreateRequestBuilder<SourceDocumentHeaderBiEntities<T>, T> {
    return new CreateRequestBuilder<SourceDocumentHeaderBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SourceDocumentHeaderBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link SourceDocumentHeaderBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SourceDocumentHeaderBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SourceDocumentHeaderBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SourceDocumentHeaderBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SourceDocumentHeaderBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceDocumentHeaderBiEntities`.
   */
  update(
    entity: SourceDocumentHeaderBiEntities<T>
  ): UpdateRequestBuilder<SourceDocumentHeaderBiEntities<T>, T> {
    return new UpdateRequestBuilder<SourceDocumentHeaderBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceDocumentHeaderBiEntities`.
   * @param sourceKey Key property. See {@link SourceDocumentHeaderBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SourceDocumentHeaderBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SourceDocumentHeaderBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SourceDocumentHeaderBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceDocumentHeaderBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SourceDocumentHeaderBiEntities<T>
  ): DeleteRequestBuilder<SourceDocumentHeaderBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<SourceDocumentHeaderBiEntities<T>, T> {
    return new DeleteRequestBuilder<SourceDocumentHeaderBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof SourceDocumentHeaderBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
