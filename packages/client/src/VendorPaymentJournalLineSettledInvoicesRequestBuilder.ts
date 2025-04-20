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
import { VendorPaymentJournalLineSettledInvoices } from './VendorPaymentJournalLineSettledInvoices';

/**
 * Request builder class for operations supported on the {@link VendorPaymentJournalLineSettledInvoices} entity.
 */
export class VendorPaymentJournalLineSettledInvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymentJournalLineSettledInvoices<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymentJournalLineSettledInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymentJournalLineSettledInvoices` entities.
   */
  getAll(): GetAllRequestBuilder<
    VendorPaymentJournalLineSettledInvoices<T>,
    T
  > {
    return new GetAllRequestBuilder<
      VendorPaymentJournalLineSettledInvoices<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorPaymentJournalLineSettledInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymentJournalLineSettledInvoices`.
   */
  create(
    entity: VendorPaymentJournalLineSettledInvoices<T>
  ): CreateRequestBuilder<VendorPaymentJournalLineSettledInvoices<T>, T> {
    return new CreateRequestBuilder<
      VendorPaymentJournalLineSettledInvoices<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymentJournalLineSettledInvoices` entity based on its keys.
   * @param journalLineCompany Key property. See {@link VendorPaymentJournalLineSettledInvoices.journalLineCompany}.
   * @param journalBatchNumber Key property. See {@link VendorPaymentJournalLineSettledInvoices.journalBatchNumber}.
   * @param journalLineNumber Key property. See {@link VendorPaymentJournalLineSettledInvoices.journalLineNumber}.
   * @param invoiceNumber Key property. See {@link VendorPaymentJournalLineSettledInvoices.invoiceNumber}.
   * @param invoiceCompany Key property. See {@link VendorPaymentJournalLineSettledInvoices.invoiceCompany}.
   * @param invoiceDueDate Key property. See {@link VendorPaymentJournalLineSettledInvoices.invoiceDueDate}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymentJournalLineSettledInvoices` entity based on its keys.
   */
  getByKey(
    journalLineCompany: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceCompany: DeserializedType<T, 'Edm.String'>,
    invoiceDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<VendorPaymentJournalLineSettledInvoices<T>, T> {
    return new GetByKeyRequestBuilder<
      VendorPaymentJournalLineSettledInvoices<T>,
      T
    >(this.entityApi, {
      JournalLineCompany: journalLineCompany,
      JournalBatchNumber: journalBatchNumber,
      JournalLineNumber: journalLineNumber,
      InvoiceNumber: invoiceNumber,
      InvoiceCompany: invoiceCompany,
      InvoiceDueDate: invoiceDueDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPaymentJournalLineSettledInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymentJournalLineSettledInvoices`.
   */
  update(
    entity: VendorPaymentJournalLineSettledInvoices<T>
  ): UpdateRequestBuilder<VendorPaymentJournalLineSettledInvoices<T>, T> {
    return new UpdateRequestBuilder<
      VendorPaymentJournalLineSettledInvoices<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentJournalLineSettledInvoices`.
   * @param journalLineCompany Key property. See {@link VendorPaymentJournalLineSettledInvoices.journalLineCompany}.
   * @param journalBatchNumber Key property. See {@link VendorPaymentJournalLineSettledInvoices.journalBatchNumber}.
   * @param journalLineNumber Key property. See {@link VendorPaymentJournalLineSettledInvoices.journalLineNumber}.
   * @param invoiceNumber Key property. See {@link VendorPaymentJournalLineSettledInvoices.invoiceNumber}.
   * @param invoiceCompany Key property. See {@link VendorPaymentJournalLineSettledInvoices.invoiceCompany}.
   * @param invoiceDueDate Key property. See {@link VendorPaymentJournalLineSettledInvoices.invoiceDueDate}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentJournalLineSettledInvoices`.
   */
  delete(
    journalLineCompany: string,
    journalBatchNumber: string,
    journalLineNumber: BigNumber,
    invoiceNumber: string,
    invoiceCompany: string,
    invoiceDueDate: Moment
  ): DeleteRequestBuilder<VendorPaymentJournalLineSettledInvoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentJournalLineSettledInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentJournalLineSettledInvoices` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymentJournalLineSettledInvoices<T>
  ): DeleteRequestBuilder<VendorPaymentJournalLineSettledInvoices<T>, T>;
  delete(
    journalLineCompanyOrEntity: any,
    journalBatchNumber?: string,
    journalLineNumber?: BigNumber,
    invoiceNumber?: string,
    invoiceCompany?: string,
    invoiceDueDate?: Moment
  ): DeleteRequestBuilder<VendorPaymentJournalLineSettledInvoices<T>, T> {
    return new DeleteRequestBuilder<
      VendorPaymentJournalLineSettledInvoices<T>,
      T
    >(
      this.entityApi,
      journalLineCompanyOrEntity instanceof
      VendorPaymentJournalLineSettledInvoices
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
