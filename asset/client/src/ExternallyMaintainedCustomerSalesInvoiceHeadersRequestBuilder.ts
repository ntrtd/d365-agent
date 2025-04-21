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
import { ExternallyMaintainedCustomerSalesInvoiceHeaders } from './ExternallyMaintainedCustomerSalesInvoiceHeaders';

/**
 * Request builder class for operations supported on the {@link ExternallyMaintainedCustomerSalesInvoiceHeaders} entity.
 */
export class ExternallyMaintainedCustomerSalesInvoiceHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ExternallyMaintainedCustomerSalesInvoiceHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ExternallyMaintainedCustomerSalesInvoiceHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExternallyMaintainedCustomerSalesInvoiceHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternallyMaintainedCustomerSalesInvoiceHeaders`.
   */
  create(
    entity: ExternallyMaintainedCustomerSalesInvoiceHeaders<T>
  ): CreateRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
    T
  > {
    return new CreateRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExternallyMaintainedCustomerSalesInvoiceHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceHeaders.dataAreaId}.
   * @param invoiceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceHeaders.invoiceNumber}.
   * @param invoiceDate Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceHeaders.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceHeaders.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `ExternallyMaintainedCustomerSalesInvoiceHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InvoiceNumber: invoiceNumber,
      InvoiceDate: invoiceDate,
      LedgerVoucher: ledgerVoucher
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExternallyMaintainedCustomerSalesInvoiceHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternallyMaintainedCustomerSalesInvoiceHeaders`.
   */
  update(
    entity: ExternallyMaintainedCustomerSalesInvoiceHeaders<T>
  ): UpdateRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternallyMaintainedCustomerSalesInvoiceHeaders`.
   * @param dataAreaId Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceHeaders.dataAreaId}.
   * @param invoiceNumber Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceHeaders.invoiceNumber}.
   * @param invoiceDate Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceHeaders.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link ExternallyMaintainedCustomerSalesInvoiceHeaders.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `ExternallyMaintainedCustomerSalesInvoiceHeaders`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    invoiceDate: Moment,
    ledgerVoucher: string
  ): DeleteRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ExternallyMaintainedCustomerSalesInvoiceHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternallyMaintainedCustomerSalesInvoiceHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ExternallyMaintainedCustomerSalesInvoiceHeaders<T>
  ): DeleteRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    invoiceDate?: Moment,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<
    ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ExternallyMaintainedCustomerSalesInvoiceHeaders
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
