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
import { InventoryServiceAdjustmentJournalHeaders } from './InventoryServiceAdjustmentJournalHeaders';

/**
 * Request builder class for operations supported on the {@link InventoryServiceAdjustmentJournalHeaders} entity.
 */
export class InventoryServiceAdjustmentJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryServiceAdjustmentJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryServiceAdjustmentJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryServiceAdjustmentJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<
    InventoryServiceAdjustmentJournalHeaders<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InventoryServiceAdjustmentJournalHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryServiceAdjustmentJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryServiceAdjustmentJournalHeaders`.
   */
  create(
    entity: InventoryServiceAdjustmentJournalHeaders<T>
  ): CreateRequestBuilder<InventoryServiceAdjustmentJournalHeaders<T>, T> {
    return new CreateRequestBuilder<
      InventoryServiceAdjustmentJournalHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventoryServiceAdjustmentJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryServiceAdjustmentJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryServiceAdjustmentJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryServiceAdjustmentJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryServiceAdjustmentJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      InventoryServiceAdjustmentJournalHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNumber: journalNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryServiceAdjustmentJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryServiceAdjustmentJournalHeaders`.
   */
  update(
    entity: InventoryServiceAdjustmentJournalHeaders<T>
  ): UpdateRequestBuilder<InventoryServiceAdjustmentJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<
      InventoryServiceAdjustmentJournalHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryServiceAdjustmentJournalHeaders`.
   * @param dataAreaId Key property. See {@link InventoryServiceAdjustmentJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryServiceAdjustmentJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryServiceAdjustmentJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<InventoryServiceAdjustmentJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryServiceAdjustmentJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryServiceAdjustmentJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryServiceAdjustmentJournalHeaders<T>
  ): DeleteRequestBuilder<InventoryServiceAdjustmentJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<InventoryServiceAdjustmentJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<
      InventoryServiceAdjustmentJournalHeaders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryServiceAdjustmentJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
