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
import { GeneralJournalAccountEntryWBiEntities } from './GeneralJournalAccountEntryWBiEntities';

/**
 * Request builder class for operations supported on the {@link GeneralJournalAccountEntryWBiEntities} entity.
 */
export class GeneralJournalAccountEntryWBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GeneralJournalAccountEntryWBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `GeneralJournalAccountEntryWBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `GeneralJournalAccountEntryWBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<GeneralJournalAccountEntryWBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      GeneralJournalAccountEntryWBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GeneralJournalAccountEntryWBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GeneralJournalAccountEntryWBiEntities`.
   */
  create(
    entity: GeneralJournalAccountEntryWBiEntities<T>
  ): CreateRequestBuilder<GeneralJournalAccountEntryWBiEntities<T>, T> {
    return new CreateRequestBuilder<
      GeneralJournalAccountEntryWBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `GeneralJournalAccountEntryWBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link GeneralJournalAccountEntryWBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `GeneralJournalAccountEntryWBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<GeneralJournalAccountEntryWBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      GeneralJournalAccountEntryWBiEntities<T>,
      T
    >(this.entityApi, { SourceKey: sourceKey });
  }

  /**
   * Returns a request builder for updating an entity of type `GeneralJournalAccountEntryWBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GeneralJournalAccountEntryWBiEntities`.
   */
  update(
    entity: GeneralJournalAccountEntryWBiEntities<T>
  ): UpdateRequestBuilder<GeneralJournalAccountEntryWBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      GeneralJournalAccountEntryWBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GeneralJournalAccountEntryWBiEntities`.
   * @param sourceKey Key property. See {@link GeneralJournalAccountEntryWBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `GeneralJournalAccountEntryWBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<GeneralJournalAccountEntryWBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GeneralJournalAccountEntryWBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GeneralJournalAccountEntryWBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: GeneralJournalAccountEntryWBiEntities<T>
  ): DeleteRequestBuilder<GeneralJournalAccountEntryWBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<GeneralJournalAccountEntryWBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      GeneralJournalAccountEntryWBiEntities<T>,
      T
    >(
      this.entityApi,
      sourceKeyOrEntity instanceof GeneralJournalAccountEntryWBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
