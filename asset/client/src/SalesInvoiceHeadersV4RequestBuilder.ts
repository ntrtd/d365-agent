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
import { SalesInvoiceHeadersV4 } from './SalesInvoiceHeadersV4';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceHeadersV4} entity.
 */
export class SalesInvoiceHeadersV4RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceHeadersV4<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceHeadersV4` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceHeadersV4` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceHeadersV4<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceHeadersV4<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceHeadersV4` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceHeadersV4`.
   */
  create(
    entity: SalesInvoiceHeadersV4<T>
  ): CreateRequestBuilder<SalesInvoiceHeadersV4<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceHeadersV4<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceHeadersV4` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceHeadersV4.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceHeadersV4.invoiceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceHeadersV4.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceHeadersV4.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceHeadersV4` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesInvoiceHeadersV4<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceHeadersV4<T>, T>(
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
   * Returns a request builder for updating an entity of type `SalesInvoiceHeadersV4`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceHeadersV4`.
   */
  update(
    entity: SalesInvoiceHeadersV4<T>
  ): UpdateRequestBuilder<SalesInvoiceHeadersV4<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceHeadersV4<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceHeadersV4`.
   * @param dataAreaId Key property. See {@link SalesInvoiceHeadersV4.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceHeadersV4.invoiceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceHeadersV4.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceHeadersV4.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceHeadersV4`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    invoiceDate: Moment,
    ledgerVoucher: string
  ): DeleteRequestBuilder<SalesInvoiceHeadersV4<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceHeadersV4`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceHeadersV4` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceHeadersV4<T>
  ): DeleteRequestBuilder<SalesInvoiceHeadersV4<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    invoiceDate?: Moment,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<SalesInvoiceHeadersV4<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceHeadersV4<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceHeadersV4
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
