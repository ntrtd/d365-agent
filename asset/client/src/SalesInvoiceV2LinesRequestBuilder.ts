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
import { SalesInvoiceV2Lines } from './SalesInvoiceV2Lines';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceV2Lines} entity.
 */
export class SalesInvoiceV2LinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceV2Lines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceV2Lines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceV2Lines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceV2Lines<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceV2Lines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceV2Lines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceV2Lines`.
   */
  create(
    entity: SalesInvoiceV2Lines<T>
  ): CreateRequestBuilder<SalesInvoiceV2Lines<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceV2Lines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceV2Lines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceV2Lines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceV2Lines.invoiceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesInvoiceV2Lines.lineCreationSequenceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceV2Lines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceV2Lines.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceV2Lines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesInvoiceV2Lines<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceV2Lines<T>, T>(
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
   * Returns a request builder for updating an entity of type `SalesInvoiceV2Lines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceV2Lines`.
   */
  update(
    entity: SalesInvoiceV2Lines<T>
  ): UpdateRequestBuilder<SalesInvoiceV2Lines<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceV2Lines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceV2Lines`.
   * @param dataAreaId Key property. See {@link SalesInvoiceV2Lines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceV2Lines.invoiceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesInvoiceV2Lines.lineCreationSequenceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceV2Lines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceV2Lines.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceV2Lines`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    lineCreationSequenceNumber: number,
    invoiceDate: Moment,
    ledgerVoucher: string
  ): DeleteRequestBuilder<SalesInvoiceV2Lines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceV2Lines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceV2Lines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceV2Lines<T>
  ): DeleteRequestBuilder<SalesInvoiceV2Lines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    lineCreationSequenceNumber?: number,
    invoiceDate?: Moment,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<SalesInvoiceV2Lines<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceV2Lines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceV2Lines
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
