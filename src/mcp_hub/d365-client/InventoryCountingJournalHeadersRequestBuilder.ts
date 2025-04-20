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
import { InventoryCountingJournalHeaders } from './InventoryCountingJournalHeaders';

/**
 * Request builder class for operations supported on the {@link InventoryCountingJournalHeaders} entity.
 */
export class InventoryCountingJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryCountingJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryCountingJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCountingJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryCountingJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<InventoryCountingJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryCountingJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCountingJournalHeaders`.
   */
  create(
    entity: InventoryCountingJournalHeaders<T>
  ): CreateRequestBuilder<InventoryCountingJournalHeaders<T>, T> {
    return new CreateRequestBuilder<InventoryCountingJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryCountingJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryCountingJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryCountingJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryCountingJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryCountingJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<InventoryCountingJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCountingJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCountingJournalHeaders`.
   */
  update(
    entity: InventoryCountingJournalHeaders<T>
  ): UpdateRequestBuilder<InventoryCountingJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<InventoryCountingJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingJournalHeaders`.
   * @param dataAreaId Key property. See {@link InventoryCountingJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryCountingJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<InventoryCountingJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryCountingJournalHeaders<T>
  ): DeleteRequestBuilder<InventoryCountingJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<InventoryCountingJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<InventoryCountingJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryCountingJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
