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
import { GeneralJournalEntryWBiEntities } from './GeneralJournalEntryWBiEntities';

/**
 * Request builder class for operations supported on the {@link GeneralJournalEntryWBiEntities} entity.
 */
export class GeneralJournalEntryWBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GeneralJournalEntryWBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `GeneralJournalEntryWBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `GeneralJournalEntryWBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<GeneralJournalEntryWBiEntities<T>, T> {
    return new GetAllRequestBuilder<GeneralJournalEntryWBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GeneralJournalEntryWBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GeneralJournalEntryWBiEntities`.
   */
  create(
    entity: GeneralJournalEntryWBiEntities<T>
  ): CreateRequestBuilder<GeneralJournalEntryWBiEntities<T>, T> {
    return new CreateRequestBuilder<GeneralJournalEntryWBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GeneralJournalEntryWBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link GeneralJournalEntryWBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `GeneralJournalEntryWBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<GeneralJournalEntryWBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<GeneralJournalEntryWBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GeneralJournalEntryWBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GeneralJournalEntryWBiEntities`.
   */
  update(
    entity: GeneralJournalEntryWBiEntities<T>
  ): UpdateRequestBuilder<GeneralJournalEntryWBiEntities<T>, T> {
    return new UpdateRequestBuilder<GeneralJournalEntryWBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GeneralJournalEntryWBiEntities`.
   * @param sourceKey Key property. See {@link GeneralJournalEntryWBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `GeneralJournalEntryWBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<GeneralJournalEntryWBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GeneralJournalEntryWBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GeneralJournalEntryWBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: GeneralJournalEntryWBiEntities<T>
  ): DeleteRequestBuilder<GeneralJournalEntryWBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<GeneralJournalEntryWBiEntities<T>, T> {
    return new DeleteRequestBuilder<GeneralJournalEntryWBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof GeneralJournalEntryWBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
