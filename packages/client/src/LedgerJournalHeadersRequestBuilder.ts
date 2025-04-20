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
import { LedgerJournalHeaders } from './LedgerJournalHeaders';

/**
 * Request builder class for operations supported on the {@link LedgerJournalHeaders} entity.
 */
export class LedgerJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalHeaders`.
   */
  create(
    entity: LedgerJournalHeaders<T>
  ): CreateRequestBuilder<LedgerJournalHeaders<T>, T> {
    return new CreateRequestBuilder<LedgerJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link LedgerJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<LedgerJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalHeaders`.
   */
  update(
    entity: LedgerJournalHeaders<T>
  ): UpdateRequestBuilder<LedgerJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalHeaders`.
   * @param dataAreaId Key property. See {@link LedgerJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link LedgerJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<LedgerJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalHeaders<T>
  ): DeleteRequestBuilder<LedgerJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<LedgerJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
