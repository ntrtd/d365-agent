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
import { LedgerJournalTableBiEntities } from './LedgerJournalTableBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerJournalTableBiEntities} entity.
 */
export class LedgerJournalTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerJournalTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalTableBiEntities`.
   */
  create(
    entity: LedgerJournalTableBiEntities<T>
  ): CreateRequestBuilder<LedgerJournalTableBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerJournalTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalTableBiEntities.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalTableBiEntities.journalNum}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerJournalTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerJournalTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNum: journalNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalTableBiEntities`.
   */
  update(
    entity: LedgerJournalTableBiEntities<T>
  ): UpdateRequestBuilder<LedgerJournalTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalTableBiEntities`.
   * @param dataAreaId Key property. See {@link LedgerJournalTableBiEntities.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalTableBiEntities.journalNum}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    journalNum: string
  ): DeleteRequestBuilder<LedgerJournalTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalTableBiEntities<T>
  ): DeleteRequestBuilder<LedgerJournalTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string
  ): DeleteRequestBuilder<LedgerJournalTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!
          }
    );
  }
}
