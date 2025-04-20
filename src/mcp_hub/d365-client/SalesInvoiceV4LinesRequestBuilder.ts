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
import { SalesInvoiceV4Lines } from './SalesInvoiceV4Lines';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceV4Lines} entity.
 */
export class SalesInvoiceV4LinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceV4Lines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceV4Lines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceV4Lines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceV4Lines<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceV4Lines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceV4Lines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceV4Lines`.
   */
  create(
    entity: SalesInvoiceV4Lines<T>
  ): CreateRequestBuilder<SalesInvoiceV4Lines<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceV4Lines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceV4Lines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceV4Lines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceV4Lines.invoiceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesInvoiceV4Lines.lineCreationSequenceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceV4Lines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceV4Lines.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceV4Lines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesInvoiceV4Lines<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceV4Lines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceNumber: invoiceNumber,
        LineCreationSequenceNumber: lineCreationSequenceNumber,
        InvoiceDate: invoiceDate,
        LedgerVoucher: ledgerVoucher
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesInvoiceV4Lines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceV4Lines`.
   */
  update(
    entity: SalesInvoiceV4Lines<T>
  ): UpdateRequestBuilder<SalesInvoiceV4Lines<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceV4Lines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceV4Lines`.
   * @param dataAreaId Key property. See {@link SalesInvoiceV4Lines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceV4Lines.invoiceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesInvoiceV4Lines.lineCreationSequenceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceV4Lines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceV4Lines.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceV4Lines`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    lineCreationSequenceNumber: number,
    invoiceDate: Moment,
    ledgerVoucher: string
  ): DeleteRequestBuilder<SalesInvoiceV4Lines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceV4Lines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceV4Lines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceV4Lines<T>
  ): DeleteRequestBuilder<SalesInvoiceV4Lines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    lineCreationSequenceNumber?: number,
    invoiceDate?: Moment,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<SalesInvoiceV4Lines<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceV4Lines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceV4Lines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceNumber: invoiceNumber!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!,
            InvoiceDate: invoiceDate!,
            LedgerVoucher: ledgerVoucher!
          }
    );
  }
}
