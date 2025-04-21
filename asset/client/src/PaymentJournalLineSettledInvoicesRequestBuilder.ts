/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { PaymentJournalLineSettledInvoices } from './PaymentJournalLineSettledInvoices';

/**
 * Request builder class for operations supported on the {@link PaymentJournalLineSettledInvoices} entity.
 */
export class PaymentJournalLineSettledInvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentJournalLineSettledInvoices<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentJournalLineSettledInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentJournalLineSettledInvoices` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentJournalLineSettledInvoices<T>, T> {
    return new GetAllRequestBuilder<PaymentJournalLineSettledInvoices<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PaymentJournalLineSettledInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentJournalLineSettledInvoices`.
   */
  create(
    entity: PaymentJournalLineSettledInvoices<T>
  ): CreateRequestBuilder<PaymentJournalLineSettledInvoices<T>, T> {
    return new CreateRequestBuilder<PaymentJournalLineSettledInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentJournalLineSettledInvoices` entity based on its keys.
   * @param journalLineCompany Key property. See {@link PaymentJournalLineSettledInvoices.journalLineCompany}.
   * @param journalBatchNumber Key property. See {@link PaymentJournalLineSettledInvoices.journalBatchNumber}.
   * @param journalLineNumber Key property. See {@link PaymentJournalLineSettledInvoices.journalLineNumber}.
   * @param invoiceNumber Key property. See {@link PaymentJournalLineSettledInvoices.invoiceNumber}.
   * @param invoiceCompany Key property. See {@link PaymentJournalLineSettledInvoices.invoiceCompany}.
   * @param invoiceDueDate Key property. See {@link PaymentJournalLineSettledInvoices.invoiceDueDate}.
   * @returns A request builder for creating requests to retrieve one `PaymentJournalLineSettledInvoices` entity based on its keys.
   */
  getByKey(
    journalLineCompany: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceCompany: DeserializedType<T, 'Edm.String'>,
    invoiceDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PaymentJournalLineSettledInvoices<T>, T> {
    return new GetByKeyRequestBuilder<PaymentJournalLineSettledInvoices<T>, T>(
      this.entityApi,
      {
        JournalLineCompany: journalLineCompany,
        JournalBatchNumber: journalBatchNumber,
        JournalLineNumber: journalLineNumber,
        InvoiceNumber: invoiceNumber,
        InvoiceCompany: invoiceCompany,
        InvoiceDueDate: invoiceDueDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentJournalLineSettledInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentJournalLineSettledInvoices`.
   */
  update(
    entity: PaymentJournalLineSettledInvoices<T>
  ): UpdateRequestBuilder<PaymentJournalLineSettledInvoices<T>, T> {
    return new UpdateRequestBuilder<PaymentJournalLineSettledInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentJournalLineSettledInvoices`.
   * @param journalLineCompany Key property. See {@link PaymentJournalLineSettledInvoices.journalLineCompany}.
   * @param journalBatchNumber Key property. See {@link PaymentJournalLineSettledInvoices.journalBatchNumber}.
   * @param journalLineNumber Key property. See {@link PaymentJournalLineSettledInvoices.journalLineNumber}.
   * @param invoiceNumber Key property. See {@link PaymentJournalLineSettledInvoices.invoiceNumber}.
   * @param invoiceCompany Key property. See {@link PaymentJournalLineSettledInvoices.invoiceCompany}.
   * @param invoiceDueDate Key property. See {@link PaymentJournalLineSettledInvoices.invoiceDueDate}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentJournalLineSettledInvoices`.
   */
  delete(
    journalLineCompany: string,
    journalBatchNumber: string,
    journalLineNumber: BigNumber,
    invoiceNumber: string,
    invoiceCompany: string,
    invoiceDueDate: Moment
  ): DeleteRequestBuilder<PaymentJournalLineSettledInvoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentJournalLineSettledInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentJournalLineSettledInvoices` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentJournalLineSettledInvoices<T>
  ): DeleteRequestBuilder<PaymentJournalLineSettledInvoices<T>, T>;
  delete(
    journalLineCompanyOrEntity: any,
    journalBatchNumber?: string,
    journalLineNumber?: BigNumber,
    invoiceNumber?: string,
    invoiceCompany?: string,
    invoiceDueDate?: Moment
  ): DeleteRequestBuilder<PaymentJournalLineSettledInvoices<T>, T> {
    return new DeleteRequestBuilder<PaymentJournalLineSettledInvoices<T>, T>(
      this.entityApi,
      journalLineCompanyOrEntity instanceof PaymentJournalLineSettledInvoices
        ? journalLineCompanyOrEntity
        : {
            JournalLineCompany: journalLineCompanyOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            JournalLineNumber: journalLineNumber!,
            InvoiceNumber: invoiceNumber!,
            InvoiceCompany: invoiceCompany!,
            InvoiceDueDate: invoiceDueDate!
          }
    );
  }
}
