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
import { InventoryJournalTableBiEntities } from './InventoryJournalTableBiEntities';

/**
 * Request builder class for operations supported on the {@link InventoryJournalTableBiEntities} entity.
 */
export class InventoryJournalTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryJournalTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryJournalTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryJournalTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryJournalTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventoryJournalTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryJournalTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryJournalTableBiEntities`.
   */
  create(
    entity: InventoryJournalTableBiEntities<T>
  ): CreateRequestBuilder<InventoryJournalTableBiEntities<T>, T> {
    return new CreateRequestBuilder<InventoryJournalTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryJournalTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryJournalTableBiEntities.dataAreaId}.
   * @param journalId Key property. See {@link InventoryJournalTableBiEntities.journalId}.
   * @returns A request builder for creating requests to retrieve one `InventoryJournalTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryJournalTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventoryJournalTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalId: journalId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryJournalTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryJournalTableBiEntities`.
   */
  update(
    entity: InventoryJournalTableBiEntities<T>
  ): UpdateRequestBuilder<InventoryJournalTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventoryJournalTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryJournalTableBiEntities`.
   * @param dataAreaId Key property. See {@link InventoryJournalTableBiEntities.dataAreaId}.
   * @param journalId Key property. See {@link InventoryJournalTableBiEntities.journalId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryJournalTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    journalId: string
  ): DeleteRequestBuilder<InventoryJournalTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryJournalTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryJournalTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryJournalTableBiEntities<T>
  ): DeleteRequestBuilder<InventoryJournalTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalId?: string
  ): DeleteRequestBuilder<InventoryJournalTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventoryJournalTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryJournalTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalId: journalId!
          }
    );
  }
}
