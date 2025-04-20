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
import { LedgerEntryJournalizingBiEntities } from './LedgerEntryJournalizingBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerEntryJournalizingBiEntities} entity.
 */
export class LedgerEntryJournalizingBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerEntryJournalizingBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerEntryJournalizingBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerEntryJournalizingBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerEntryJournalizingBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerEntryJournalizingBiEntities`.
   */
  create(
    entity: LedgerEntryJournalizingBiEntities<T>
  ): CreateRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerEntryJournalizingBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link LedgerEntryJournalizingBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `LedgerEntryJournalizingBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerEntryJournalizingBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerEntryJournalizingBiEntities`.
   */
  update(
    entity: LedgerEntryJournalizingBiEntities<T>
  ): UpdateRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerEntryJournalizingBiEntities`.
   * @param sourceKey Key property. See {@link LedgerEntryJournalizingBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEntryJournalizingBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerEntryJournalizingBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEntryJournalizingBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerEntryJournalizingBiEntities<T>
  ): DeleteRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerEntryJournalizingBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof LedgerEntryJournalizingBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
