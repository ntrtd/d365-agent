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
import { InventoryMovementJournalHeaders } from './InventoryMovementJournalHeaders';

/**
 * Request builder class for operations supported on the {@link InventoryMovementJournalHeaders} entity.
 */
export class InventoryMovementJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryMovementJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryMovementJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryMovementJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryMovementJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<InventoryMovementJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryMovementJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryMovementJournalHeaders`.
   */
  create(
    entity: InventoryMovementJournalHeaders<T>
  ): CreateRequestBuilder<InventoryMovementJournalHeaders<T>, T> {
    return new CreateRequestBuilder<InventoryMovementJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryMovementJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryMovementJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryMovementJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryMovementJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryMovementJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<InventoryMovementJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryMovementJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryMovementJournalHeaders`.
   */
  update(
    entity: InventoryMovementJournalHeaders<T>
  ): UpdateRequestBuilder<InventoryMovementJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<InventoryMovementJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryMovementJournalHeaders`.
   * @param dataAreaId Key property. See {@link InventoryMovementJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryMovementJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryMovementJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<InventoryMovementJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryMovementJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryMovementJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryMovementJournalHeaders<T>
  ): DeleteRequestBuilder<InventoryMovementJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<InventoryMovementJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<InventoryMovementJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryMovementJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
