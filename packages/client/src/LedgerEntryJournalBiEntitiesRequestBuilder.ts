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
import { LedgerEntryJournalBiEntities } from './LedgerEntryJournalBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerEntryJournalBiEntities} entity.
 */
export class LedgerEntryJournalBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerEntryJournalBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerEntryJournalBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerEntryJournalBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerEntryJournalBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerEntryJournalBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerEntryJournalBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerEntryJournalBiEntities`.
   */
  create(
    entity: LedgerEntryJournalBiEntities<T>
  ): CreateRequestBuilder<LedgerEntryJournalBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerEntryJournalBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerEntryJournalBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link LedgerEntryJournalBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `LedgerEntryJournalBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LedgerEntryJournalBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerEntryJournalBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerEntryJournalBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerEntryJournalBiEntities`.
   */
  update(
    entity: LedgerEntryJournalBiEntities<T>
  ): UpdateRequestBuilder<LedgerEntryJournalBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerEntryJournalBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerEntryJournalBiEntities`.
   * @param sourceKey Key property. See {@link LedgerEntryJournalBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEntryJournalBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<LedgerEntryJournalBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerEntryJournalBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEntryJournalBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerEntryJournalBiEntities<T>
  ): DeleteRequestBuilder<LedgerEntryJournalBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<LedgerEntryJournalBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerEntryJournalBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof LedgerEntryJournalBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
