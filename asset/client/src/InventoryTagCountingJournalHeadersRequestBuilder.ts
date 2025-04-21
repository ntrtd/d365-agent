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
import { InventoryTagCountingJournalHeaders } from './InventoryTagCountingJournalHeaders';

/**
 * Request builder class for operations supported on the {@link InventoryTagCountingJournalHeaders} entity.
 */
export class InventoryTagCountingJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryTagCountingJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryTagCountingJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryTagCountingJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryTagCountingJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<InventoryTagCountingJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryTagCountingJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryTagCountingJournalHeaders`.
   */
  create(
    entity: InventoryTagCountingJournalHeaders<T>
  ): CreateRequestBuilder<InventoryTagCountingJournalHeaders<T>, T> {
    return new CreateRequestBuilder<InventoryTagCountingJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryTagCountingJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryTagCountingJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryTagCountingJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryTagCountingJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryTagCountingJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<InventoryTagCountingJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryTagCountingJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryTagCountingJournalHeaders`.
   */
  update(
    entity: InventoryTagCountingJournalHeaders<T>
  ): UpdateRequestBuilder<InventoryTagCountingJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<InventoryTagCountingJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryTagCountingJournalHeaders`.
   * @param dataAreaId Key property. See {@link InventoryTagCountingJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryTagCountingJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTagCountingJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<InventoryTagCountingJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryTagCountingJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTagCountingJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryTagCountingJournalHeaders<T>
  ): DeleteRequestBuilder<InventoryTagCountingJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<InventoryTagCountingJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<InventoryTagCountingJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryTagCountingJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
