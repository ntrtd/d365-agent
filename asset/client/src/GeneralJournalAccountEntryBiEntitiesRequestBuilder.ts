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
import { GeneralJournalAccountEntryBiEntities } from './GeneralJournalAccountEntryBiEntities';

/**
 * Request builder class for operations supported on the {@link GeneralJournalAccountEntryBiEntities} entity.
 */
export class GeneralJournalAccountEntryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `GeneralJournalAccountEntryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `GeneralJournalAccountEntryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T> {
    return new GetAllRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GeneralJournalAccountEntryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GeneralJournalAccountEntryBiEntities`.
   */
  create(
    entity: GeneralJournalAccountEntryBiEntities<T>
  ): CreateRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T> {
    return new CreateRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GeneralJournalAccountEntryBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link GeneralJournalAccountEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `GeneralJournalAccountEntryBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      GeneralJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, { SourceKey: sourceKey });
  }

  /**
   * Returns a request builder for updating an entity of type `GeneralJournalAccountEntryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GeneralJournalAccountEntryBiEntities`.
   */
  update(
    entity: GeneralJournalAccountEntryBiEntities<T>
  ): UpdateRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T> {
    return new UpdateRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GeneralJournalAccountEntryBiEntities`.
   * @param sourceKey Key property. See {@link GeneralJournalAccountEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `GeneralJournalAccountEntryBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GeneralJournalAccountEntryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GeneralJournalAccountEntryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: GeneralJournalAccountEntryBiEntities<T>
  ): DeleteRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T> {
    return new DeleteRequestBuilder<GeneralJournalAccountEntryBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof GeneralJournalAccountEntryBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
