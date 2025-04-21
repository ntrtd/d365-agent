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
import { VendInvoiceJournalHeaders } from './VendInvoiceJournalHeaders';

/**
 * Request builder class for operations supported on the {@link VendInvoiceJournalHeaders} entity.
 */
export class VendInvoiceJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceJournalHeaders`.
   */
  create(
    entity: VendInvoiceJournalHeaders<T>
  ): CreateRequestBuilder<VendInvoiceJournalHeaders<T>, T> {
    return new CreateRequestBuilder<VendInvoiceJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendInvoiceJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceJournalHeaders`.
   */
  update(
    entity: VendInvoiceJournalHeaders<T>
  ): UpdateRequestBuilder<VendInvoiceJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceJournalHeaders`.
   * @param dataAreaId Key property. See {@link VendInvoiceJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<VendInvoiceJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceJournalHeaders<T>
  ): DeleteRequestBuilder<VendInvoiceJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<VendInvoiceJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
