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
import { SalesInvoiceQrCode } from './SalesInvoiceQrCode';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceQrCode} entity.
 */
export class SalesInvoiceQrCodeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceQrCode<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceQrCode` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceQrCode` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceQrCode<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceQrCode<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceQrCode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceQrCode`.
   */
  create(
    entity: SalesInvoiceQrCode<T>
  ): CreateRequestBuilder<SalesInvoiceQrCode<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceQrCode<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceQrCode` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceQrCode.dataAreaId}.
   * @param invoiceId Key property. See {@link SalesInvoiceQrCode.invoiceId}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceQrCode.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link SalesInvoiceQrCode.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceQrCode` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SalesInvoiceQrCode<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceQrCode<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceId: invoiceId,
        LedgerVoucher: ledgerVoucher,
        InvoiceDate: invoiceDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesInvoiceQrCode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceQrCode`.
   */
  update(
    entity: SalesInvoiceQrCode<T>
  ): UpdateRequestBuilder<SalesInvoiceQrCode<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceQrCode<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceQrCode`.
   * @param dataAreaId Key property. See {@link SalesInvoiceQrCode.dataAreaId}.
   * @param invoiceId Key property. See {@link SalesInvoiceQrCode.invoiceId}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceQrCode.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link SalesInvoiceQrCode.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceQrCode`.
   */
  delete(
    dataAreaId: string,
    invoiceId: string,
    ledgerVoucher: string,
    invoiceDate: Moment
  ): DeleteRequestBuilder<SalesInvoiceQrCode<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceQrCode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceQrCode` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceQrCode<T>
  ): DeleteRequestBuilder<SalesInvoiceQrCode<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceId?: string,
    ledgerVoucher?: string,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<SalesInvoiceQrCode<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceQrCode<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceQrCode
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceId: invoiceId!,
            LedgerVoucher: ledgerVoucher!,
            InvoiceDate: invoiceDate!
          }
    );
  }
}
