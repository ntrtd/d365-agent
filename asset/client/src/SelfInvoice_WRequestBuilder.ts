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
import { SelfInvoice_W } from './SelfInvoice_W';

/**
 * Request builder class for operations supported on the {@link SelfInvoice_W} entity.
 */
export class SelfInvoice_WRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SelfInvoice_W<T>, T> {
  /**
   * Returns a request builder for querying all `SelfInvoice_W` entities.
   * @returns A request builder for creating requests to retrieve all `SelfInvoice_W` entities.
   */
  getAll(): GetAllRequestBuilder<SelfInvoice_W<T>, T> {
    return new GetAllRequestBuilder<SelfInvoice_W<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SelfInvoice_W` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SelfInvoice_W`.
   */
  create(entity: SelfInvoice_W<T>): CreateRequestBuilder<SelfInvoice_W<T>, T> {
    return new CreateRequestBuilder<SelfInvoice_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SelfInvoice_W` entity based on its keys.
   * @param dataAreaId Key property. See {@link SelfInvoice_W.dataAreaId}.
   * @param invoiceId Key property. See {@link SelfInvoice_W.invoiceId}.
   * @param ledgerVoucher Key property. See {@link SelfInvoice_W.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link SelfInvoice_W.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `SelfInvoice_W` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SelfInvoice_W<T>, T> {
    return new GetByKeyRequestBuilder<SelfInvoice_W<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InvoiceId: invoiceId,
      LedgerVoucher: ledgerVoucher,
      InvoiceDate: invoiceDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SelfInvoice_W`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SelfInvoice_W`.
   */
  update(entity: SelfInvoice_W<T>): UpdateRequestBuilder<SelfInvoice_W<T>, T> {
    return new UpdateRequestBuilder<SelfInvoice_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SelfInvoice_W`.
   * @param dataAreaId Key property. See {@link SelfInvoice_W.dataAreaId}.
   * @param invoiceId Key property. See {@link SelfInvoice_W.invoiceId}.
   * @param ledgerVoucher Key property. See {@link SelfInvoice_W.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link SelfInvoice_W.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `SelfInvoice_W`.
   */
  delete(
    dataAreaId: string,
    invoiceId: string,
    ledgerVoucher: string,
    invoiceDate: Moment
  ): DeleteRequestBuilder<SelfInvoice_W<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SelfInvoice_W`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SelfInvoice_W` by taking the entity as a parameter.
   */
  delete(entity: SelfInvoice_W<T>): DeleteRequestBuilder<SelfInvoice_W<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceId?: string,
    ledgerVoucher?: string,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<SelfInvoice_W<T>, T> {
    return new DeleteRequestBuilder<SelfInvoice_W<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SelfInvoice_W
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
