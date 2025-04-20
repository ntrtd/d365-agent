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
import { ExternallyMaintainedCustomerSalesInvoiceLines } from './ExternallyMaintainedCustomerSalesInvoiceLines';

/**
 * Request builder class for operations supported on the {@link ExternallyMaintainedCustomerSalesInvoiceLines} entity.
 */
export class ExternallyMaintainedCustomerSalesInvoiceLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternallyMaintainedCustomerSalesInvoiceLines<T>, T> {
  /**
   * Returns a request builder for querying all `ExternallyMaintainedCustomerSalesInvoiceLines` entities.
   * @returns A request builder for creating requests to retrieve all `ExternallyMaintainedCustomerSalesInvoiceLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExternallyMaintainedCustomerSalesInvoiceLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternallyMaintainedCustomerSalesInvoiceLines`.
   */
  create(
    entity: ExternallyMaintainedCustomerSalesInvoiceLines<T>
  ): CreateRequestBuilder<ExternallyMaintainedCustomerSalesInvoiceLines<T>, T> {
    return new CreateRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExternallyMaintainedCustomerSalesInvoiceLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.invoiceNumber}.
   * @param invoiceDate Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.invoiceDate}.
   * @param lineCreationSequenceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.lineCreationSequenceNumber}.
   * @param ledgerVoucher Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `ExternallyMaintainedCustomerSalesInvoiceLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InvoiceNumber: invoiceNumber,
      InvoiceDate: invoiceDate,
      LineCreationSequenceNumber: lineCreationSequenceNumber,
      LedgerVoucher: ledgerVoucher
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExternallyMaintainedCustomerSalesInvoiceLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternallyMaintainedCustomerSalesInvoiceLines`.
   */
  update(
    entity: ExternallyMaintainedCustomerSalesInvoiceLines<T>
  ): UpdateRequestBuilder<ExternallyMaintainedCustomerSalesInvoiceLines<T>, T> {
    return new UpdateRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternallyMaintainedCustomerSalesInvoiceLines`.
   * @param dataAreaId Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.invoiceNumber}.
   * @param invoiceDate Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.invoiceDate}.
   * @param lineCreationSequenceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.lineCreationSequenceNumber}.
   * @param ledgerVoucher Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLines.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `ExternallyMaintainedCustomerSalesInvoiceLines`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    invoiceDate: Moment,
    lineCreationSequenceNumber: number,
    ledgerVoucher: string
  ): DeleteRequestBuilder<ExternallyMaintainedCustomerSalesInvoiceLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternallyMaintainedCustomerSalesInvoiceLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternallyMaintainedCustomerSalesInvoiceLines` by taking the entity as a parameter.
   */
  delete(
    entity: ExternallyMaintainedCustomerSalesInvoiceLines<T>
  ): DeleteRequestBuilder<ExternallyMaintainedCustomerSalesInvoiceLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    invoiceDate?: Moment,
    lineCreationSequenceNumber?: number,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<ExternallyMaintainedCustomerSalesInvoiceLines<T>, T> {
    return new DeleteRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ExternallyMaintainedCustomerSalesInvoiceLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceNumber: invoiceNumber!,
            InvoiceDate: invoiceDate!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!,
            LedgerVoucher: ledgerVoucher!
          }
    );
  }
}
