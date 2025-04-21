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
import { SalesInvoiceChorusProDetails } from './SalesInvoiceChorusProDetails';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceChorusProDetails} entity.
 */
export class SalesInvoiceChorusProDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceChorusProDetails<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceChorusProDetails` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceChorusProDetails` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceChorusProDetails<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceChorusProDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceChorusProDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceChorusProDetails`.
   */
  create(
    entity: SalesInvoiceChorusProDetails<T>
  ): CreateRequestBuilder<SalesInvoiceChorusProDetails<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceChorusProDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceChorusProDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceChorusProDetails.dataAreaId}.
   * @param invoiceId Key property. See {@link SalesInvoiceChorusProDetails.invoiceId}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceChorusProDetails.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link SalesInvoiceChorusProDetails.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceChorusProDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SalesInvoiceChorusProDetails<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceChorusProDetails<T>, T>(
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
   * Returns a request builder for updating an entity of type `SalesInvoiceChorusProDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceChorusProDetails`.
   */
  update(
    entity: SalesInvoiceChorusProDetails<T>
  ): UpdateRequestBuilder<SalesInvoiceChorusProDetails<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceChorusProDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceChorusProDetails`.
   * @param dataAreaId Key property. See {@link SalesInvoiceChorusProDetails.dataAreaId}.
   * @param invoiceId Key property. See {@link SalesInvoiceChorusProDetails.invoiceId}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceChorusProDetails.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link SalesInvoiceChorusProDetails.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceChorusProDetails`.
   */
  delete(
    dataAreaId: string,
    invoiceId: string,
    ledgerVoucher: string,
    invoiceDate: Moment
  ): DeleteRequestBuilder<SalesInvoiceChorusProDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceChorusProDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceChorusProDetails` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceChorusProDetails<T>
  ): DeleteRequestBuilder<SalesInvoiceChorusProDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceId?: string,
    ledgerVoucher?: string,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<SalesInvoiceChorusProDetails<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceChorusProDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceChorusProDetails
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
