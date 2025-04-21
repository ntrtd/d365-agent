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
import { InventoryAdjustmentJournalHeaders } from './InventoryAdjustmentJournalHeaders';

/**
 * Request builder class for operations supported on the {@link InventoryAdjustmentJournalHeaders} entity.
 */
export class InventoryAdjustmentJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryAdjustmentJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryAdjustmentJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryAdjustmentJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryAdjustmentJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryAdjustmentJournalHeaders`.
   */
  create(
    entity: InventoryAdjustmentJournalHeaders<T>
  ): CreateRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T> {
    return new CreateRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryAdjustmentJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryAdjustmentJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryAdjustmentJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryAdjustmentJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryAdjustmentJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryAdjustmentJournalHeaders`.
   */
  update(
    entity: InventoryAdjustmentJournalHeaders<T>
  ): UpdateRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryAdjustmentJournalHeaders`.
   * @param dataAreaId Key property. See {@link InventoryAdjustmentJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryAdjustmentJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryAdjustmentJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryAdjustmentJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryAdjustmentJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryAdjustmentJournalHeaders<T>
  ): DeleteRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<InventoryAdjustmentJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryAdjustmentJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
