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
import { InventoryTransferJournalHeaders } from './InventoryTransferJournalHeaders';

/**
 * Request builder class for operations supported on the {@link InventoryTransferJournalHeaders} entity.
 */
export class InventoryTransferJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryTransferJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryTransferJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryTransferJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryTransferJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<InventoryTransferJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryTransferJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryTransferJournalHeaders`.
   */
  create(
    entity: InventoryTransferJournalHeaders<T>
  ): CreateRequestBuilder<InventoryTransferJournalHeaders<T>, T> {
    return new CreateRequestBuilder<InventoryTransferJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryTransferJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryTransferJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryTransferJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryTransferJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryTransferJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<InventoryTransferJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryTransferJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryTransferJournalHeaders`.
   */
  update(
    entity: InventoryTransferJournalHeaders<T>
  ): UpdateRequestBuilder<InventoryTransferJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<InventoryTransferJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryTransferJournalHeaders`.
   * @param dataAreaId Key property. See {@link InventoryTransferJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryTransferJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTransferJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<InventoryTransferJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryTransferJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTransferJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryTransferJournalHeaders<T>
  ): DeleteRequestBuilder<InventoryTransferJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<InventoryTransferJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<InventoryTransferJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryTransferJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
