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
import { SubledgerJournalAccountEntryBiEntities } from './SubledgerJournalAccountEntryBiEntities';

/**
 * Request builder class for operations supported on the {@link SubledgerJournalAccountEntryBiEntities} entity.
 */
export class SubledgerJournalAccountEntryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubledgerJournalAccountEntryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SubledgerJournalAccountEntryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubledgerJournalAccountEntryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SubledgerJournalAccountEntryBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      SubledgerJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubledgerJournalAccountEntryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubledgerJournalAccountEntryBiEntities`.
   */
  create(
    entity: SubledgerJournalAccountEntryBiEntities<T>
  ): CreateRequestBuilder<SubledgerJournalAccountEntryBiEntities<T>, T> {
    return new CreateRequestBuilder<
      SubledgerJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubledgerJournalAccountEntryBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link SubledgerJournalAccountEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SubledgerJournalAccountEntryBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SubledgerJournalAccountEntryBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      SubledgerJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, { SourceKey: sourceKey });
  }

  /**
   * Returns a request builder for updating an entity of type `SubledgerJournalAccountEntryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubledgerJournalAccountEntryBiEntities`.
   */
  update(
    entity: SubledgerJournalAccountEntryBiEntities<T>
  ): UpdateRequestBuilder<SubledgerJournalAccountEntryBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      SubledgerJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubledgerJournalAccountEntryBiEntities`.
   * @param sourceKey Key property. See {@link SubledgerJournalAccountEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SubledgerJournalAccountEntryBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SubledgerJournalAccountEntryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubledgerJournalAccountEntryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubledgerJournalAccountEntryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubledgerJournalAccountEntryBiEntities<T>
  ): DeleteRequestBuilder<SubledgerJournalAccountEntryBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<SubledgerJournalAccountEntryBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      SubledgerJournalAccountEntryBiEntities<T>,
      T
    >(
      this.entityApi,
      sourceKeyOrEntity instanceof SubledgerJournalAccountEntryBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
