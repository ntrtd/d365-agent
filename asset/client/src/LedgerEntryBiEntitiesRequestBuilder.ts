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
import { LedgerEntryBiEntities } from './LedgerEntryBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerEntryBiEntities} entity.
 */
export class LedgerEntryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerEntryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerEntryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerEntryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerEntryBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerEntryBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerEntryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerEntryBiEntities`.
   */
  create(
    entity: LedgerEntryBiEntities<T>
  ): CreateRequestBuilder<LedgerEntryBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerEntryBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link LedgerEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `LedgerEntryBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LedgerEntryBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerEntryBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerEntryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerEntryBiEntities`.
   */
  update(
    entity: LedgerEntryBiEntities<T>
  ): UpdateRequestBuilder<LedgerEntryBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerEntryBiEntities`.
   * @param sourceKey Key property. See {@link LedgerEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEntryBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<LedgerEntryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerEntryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEntryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerEntryBiEntities<T>
  ): DeleteRequestBuilder<LedgerEntryBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<LedgerEntryBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerEntryBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof LedgerEntryBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
