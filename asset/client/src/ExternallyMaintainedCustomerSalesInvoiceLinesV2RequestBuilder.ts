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
import { ExternallyMaintainedCustomerSalesInvoiceLinesV2 } from './ExternallyMaintainedCustomerSalesInvoiceLinesV2';

/**
 * Request builder class for operations supported on the {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2} entity.
 */
export class ExternallyMaintainedCustomerSalesInvoiceLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ExternallyMaintainedCustomerSalesInvoiceLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ExternallyMaintainedCustomerSalesInvoiceLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExternallyMaintainedCustomerSalesInvoiceLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternallyMaintainedCustomerSalesInvoiceLinesV2`.
   */
  create(
    entity: ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>
  ): CreateRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExternallyMaintainedCustomerSalesInvoiceLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.dataAreaId}.
   * @param invoiceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.invoiceNumber}.
   * @param invoiceDate Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.invoiceDate}.
   * @param lineCreationSequenceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.lineCreationSequenceNumber}.
   * @param ledgerVoucher Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `ExternallyMaintainedCustomerSalesInvoiceLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
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
   * Returns a request builder for updating an entity of type `ExternallyMaintainedCustomerSalesInvoiceLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternallyMaintainedCustomerSalesInvoiceLinesV2`.
   */
  update(
    entity: ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>
  ): UpdateRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternallyMaintainedCustomerSalesInvoiceLinesV2`.
   * @param dataAreaId Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.dataAreaId}.
   * @param invoiceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.invoiceNumber}.
   * @param invoiceDate Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.invoiceDate}.
   * @param lineCreationSequenceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.lineCreationSequenceNumber}.
   * @param ledgerVoucher Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceLinesV2.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `ExternallyMaintainedCustomerSalesInvoiceLinesV2`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    invoiceDate: Moment,
    lineCreationSequenceNumber: number,
    ledgerVoucher: string
  ): DeleteRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ExternallyMaintainedCustomerSalesInvoiceLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternallyMaintainedCustomerSalesInvoiceLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>
  ): DeleteRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    invoiceDate?: Moment,
    lineCreationSequenceNumber?: number,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ExternallyMaintainedCustomerSalesInvoiceLinesV2
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
