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
import { InventoryServiceAdjustmentJournalEntries } from './InventoryServiceAdjustmentJournalEntries';

/**
 * Request builder class for operations supported on the {@link InventoryServiceAdjustmentJournalEntries} entity.
 */
export class InventoryServiceAdjustmentJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryServiceAdjustmentJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryServiceAdjustmentJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryServiceAdjustmentJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<
    InventoryServiceAdjustmentJournalEntries<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InventoryServiceAdjustmentJournalEntries<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryServiceAdjustmentJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryServiceAdjustmentJournalEntries`.
   */
  create(
    entity: InventoryServiceAdjustmentJournalEntries<T>
  ): CreateRequestBuilder<InventoryServiceAdjustmentJournalEntries<T>, T> {
    return new CreateRequestBuilder<
      InventoryServiceAdjustmentJournalEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventoryServiceAdjustmentJournalEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryServiceAdjustmentJournalEntries.dataAreaId}.
   * @param inventoryServiceTransactionId Key property. See {@link InventoryServiceAdjustmentJournalEntries.inventoryServiceTransactionId}.
   * @returns A request builder for creating requests to retrieve one `InventoryServiceAdjustmentJournalEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryServiceTransactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryServiceAdjustmentJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<
      InventoryServiceAdjustmentJournalEntries<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InventoryServiceTransactionId: inventoryServiceTransactionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryServiceAdjustmentJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryServiceAdjustmentJournalEntries`.
   */
  update(
    entity: InventoryServiceAdjustmentJournalEntries<T>
  ): UpdateRequestBuilder<InventoryServiceAdjustmentJournalEntries<T>, T> {
    return new UpdateRequestBuilder<
      InventoryServiceAdjustmentJournalEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryServiceAdjustmentJournalEntries`.
   * @param dataAreaId Key property. See {@link InventoryServiceAdjustmentJournalEntries.dataAreaId}.
   * @param inventoryServiceTransactionId Key property. See {@link InventoryServiceAdjustmentJournalEntries.inventoryServiceTransactionId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryServiceAdjustmentJournalEntries`.
   */
  delete(
    dataAreaId: string,
    inventoryServiceTransactionId: string
  ): DeleteRequestBuilder<InventoryServiceAdjustmentJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryServiceAdjustmentJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryServiceAdjustmentJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryServiceAdjustmentJournalEntries<T>
  ): DeleteRequestBuilder<InventoryServiceAdjustmentJournalEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryServiceTransactionId?: string
  ): DeleteRequestBuilder<InventoryServiceAdjustmentJournalEntries<T>, T> {
    return new DeleteRequestBuilder<
      InventoryServiceAdjustmentJournalEntries<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryServiceAdjustmentJournalEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryServiceTransactionId: inventoryServiceTransactionId!
          }
    );
  }
}
