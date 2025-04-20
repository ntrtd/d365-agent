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
import { SalesInvoiceHeadersV2 } from './SalesInvoiceHeadersV2';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceHeadersV2} entity.
 */
export class SalesInvoiceHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceHeadersV2<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceHeadersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceHeadersV2`.
   */
  create(
    entity: SalesInvoiceHeadersV2<T>
  ): CreateRequestBuilder<SalesInvoiceHeadersV2<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceHeadersV2.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceHeadersV2.invoiceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceHeadersV2.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceHeadersV2.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesInvoiceHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceHeadersV2<T>, T>(
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
   * Returns a request builder for updating an entity of type `SalesInvoiceHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceHeadersV2`.
   */
  update(
    entity: SalesInvoiceHeadersV2<T>
  ): UpdateRequestBuilder<SalesInvoiceHeadersV2<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceHeadersV2`.
   * @param dataAreaId Key property. See {@link SalesInvoiceHeadersV2.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceHeadersV2.invoiceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceHeadersV2.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceHeadersV2.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceHeadersV2`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    invoiceDate: Moment,
    ledgerVoucher: string
  ): DeleteRequestBuilder<SalesInvoiceHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceHeadersV2<T>
  ): DeleteRequestBuilder<SalesInvoiceHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    invoiceDate?: Moment,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<SalesInvoiceHeadersV2<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceHeadersV2
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
