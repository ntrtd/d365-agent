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
import { SalesInvoiceV3Lines } from './SalesInvoiceV3Lines';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceV3Lines} entity.
 */
export class SalesInvoiceV3LinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceV3Lines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceV3Lines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceV3Lines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceV3Lines<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceV3Lines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceV3Lines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceV3Lines`.
   */
  create(
    entity: SalesInvoiceV3Lines<T>
  ): CreateRequestBuilder<SalesInvoiceV3Lines<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceV3Lines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceV3Lines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceV3Lines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceV3Lines.invoiceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesInvoiceV3Lines.lineCreationSequenceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceV3Lines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceV3Lines.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceV3Lines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesInvoiceV3Lines<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceV3Lines<T>, T>(
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
   * Returns a request builder for updating an entity of type `SalesInvoiceV3Lines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceV3Lines`.
   */
  update(
    entity: SalesInvoiceV3Lines<T>
  ): UpdateRequestBuilder<SalesInvoiceV3Lines<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceV3Lines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceV3Lines`.
   * @param dataAreaId Key property. See {@link SalesInvoiceV3Lines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceV3Lines.invoiceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesInvoiceV3Lines.lineCreationSequenceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceV3Lines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link SalesInvoiceV3Lines.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceV3Lines`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    lineCreationSequenceNumber: number,
    invoiceDate: Moment,
    ledgerVoucher: string
  ): DeleteRequestBuilder<SalesInvoiceV3Lines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceV3Lines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceV3Lines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceV3Lines<T>
  ): DeleteRequestBuilder<SalesInvoiceV3Lines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    lineCreationSequenceNumber?: number,
    invoiceDate?: Moment,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<SalesInvoiceV3Lines<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceV3Lines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceV3Lines
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
