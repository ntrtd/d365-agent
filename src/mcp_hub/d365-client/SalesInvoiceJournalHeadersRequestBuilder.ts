/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { SalesInvoiceJournalHeaders } from './SalesInvoiceJournalHeaders';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceJournalHeaders} entity.
 */
export class SalesInvoiceJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceJournalHeaders`.
   */
  create(
    entity: SalesInvoiceJournalHeaders<T>
  ): CreateRequestBuilder<SalesInvoiceJournalHeaders<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceJournalHeaders.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceJournalHeaders.invoiceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceJournalHeaders.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceJournalHeaders.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesInvoiceJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceNumber: invoiceNumber,
        InvoiceDate: invoiceDate,
        LedgerVoucher: ledgerVoucher
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesInvoiceJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceJournalHeaders`.
   */
  update(
    entity: SalesInvoiceJournalHeaders<T>
  ): UpdateRequestBuilder<SalesInvoiceJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceJournalHeaders`.
   * @param dataAreaId Key property. See {@link SalesInvoiceJournalHeaders.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceJournalHeaders.invoiceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceJournalHeaders.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceJournalHeaders.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    invoiceDate: Moment,
    ledgerVoucher: string
  ): DeleteRequestBuilder<SalesInvoiceJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceJournalHeaders<T>
  ): DeleteRequestBuilder<SalesInvoiceJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    invoiceDate?: Moment,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<SalesInvoiceJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceNumber: invoiceNumber!,
            InvoiceDate: invoiceDate!,
            LedgerVoucher: ledgerVoucher!
          }
    );
  }
}
