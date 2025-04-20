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
import { AssetLeaseLedgerJournalHeaders } from './AssetLeaseLedgerJournalHeaders';

/**
 * Request builder class for operations supported on the {@link AssetLeaseLedgerJournalHeaders} entity.
 */
export class AssetLeaseLedgerJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseLedgerJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseLedgerJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseLedgerJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseLedgerJournalHeaders`.
   */
  create(
    entity: AssetLeaseLedgerJournalHeaders<T>
  ): CreateRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T> {
    return new CreateRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseLedgerJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseLedgerJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetLeaseLedgerJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseLedgerJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseLedgerJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseLedgerJournalHeaders`.
   */
  update(
    entity: AssetLeaseLedgerJournalHeaders<T>
  ): UpdateRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLedgerJournalHeaders`.
   * @param dataAreaId Key property. See {@link AssetLeaseLedgerJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetLeaseLedgerJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLedgerJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLedgerJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLedgerJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseLedgerJournalHeaders<T>
  ): DeleteRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseLedgerJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseLedgerJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
