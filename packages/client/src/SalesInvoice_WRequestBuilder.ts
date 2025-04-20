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
import { SalesInvoice_W } from './SalesInvoice_W';

/**
 * Request builder class for operations supported on the {@link SalesInvoice_W} entity.
 */
export class SalesInvoice_WRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoice_W<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoice_W` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoice_W` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoice_W<T>, T> {
    return new GetAllRequestBuilder<SalesInvoice_W<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesInvoice_W` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoice_W`.
   */
  create(
    entity: SalesInvoice_W<T>
  ): CreateRequestBuilder<SalesInvoice_W<T>, T> {
    return new CreateRequestBuilder<SalesInvoice_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoice_W` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoice_W.dataAreaId}.
   * @param invoiceId Key property. See {@link SalesInvoice_W.invoiceId}.
   * @param ledgerVoucher Key property. See {@link SalesInvoice_W.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link SalesInvoice_W.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoice_W` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SalesInvoice_W<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoice_W<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InvoiceId: invoiceId,
      LedgerVoucher: ledgerVoucher,
      InvoiceDate: invoiceDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesInvoice_W`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoice_W`.
   */
  update(
    entity: SalesInvoice_W<T>
  ): UpdateRequestBuilder<SalesInvoice_W<T>, T> {
    return new UpdateRequestBuilder<SalesInvoice_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoice_W`.
   * @param dataAreaId Key property. See {@link SalesInvoice_W.dataAreaId}.
   * @param invoiceId Key property. See {@link SalesInvoice_W.invoiceId}.
   * @param ledgerVoucher Key property. See {@link SalesInvoice_W.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link SalesInvoice_W.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoice_W`.
   */
  delete(
    dataAreaId: string,
    invoiceId: string,
    ledgerVoucher: string,
    invoiceDate: Moment
  ): DeleteRequestBuilder<SalesInvoice_W<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoice_W`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoice_W` by taking the entity as a parameter.
   */
  delete(entity: SalesInvoice_W<T>): DeleteRequestBuilder<SalesInvoice_W<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceId?: string,
    ledgerVoucher?: string,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<SalesInvoice_W<T>, T> {
    return new DeleteRequestBuilder<SalesInvoice_W<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoice_W
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
