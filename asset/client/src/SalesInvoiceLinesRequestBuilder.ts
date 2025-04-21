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
import { SalesInvoiceLines } from './SalesInvoiceLines';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceLines} entity.
 */
export class SalesInvoiceLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceLines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceLines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceLines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceLines<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceLines`.
   */
  create(
    entity: SalesInvoiceLines<T>
  ): CreateRequestBuilder<SalesInvoiceLines<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceLines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceLines.invoiceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesInvoiceLines.lineCreationSequenceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceLines.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SalesInvoiceLines<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InvoiceNumber: invoiceNumber,
      LineCreationSequenceNumber: lineCreationSequenceNumber,
      InvoiceDate: invoiceDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesInvoiceLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceLines`.
   */
  update(
    entity: SalesInvoiceLines<T>
  ): UpdateRequestBuilder<SalesInvoiceLines<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceLines`.
   * @param dataAreaId Key property. See {@link SalesInvoiceLines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceLines.invoiceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesInvoiceLines.lineCreationSequenceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceLines.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceLines`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    lineCreationSequenceNumber: number,
    invoiceDate: Moment
  ): DeleteRequestBuilder<SalesInvoiceLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceLines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceLines<T>
  ): DeleteRequestBuilder<SalesInvoiceLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    lineCreationSequenceNumber?: number,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<SalesInvoiceLines<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceNumber: invoiceNumber!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!,
            InvoiceDate: invoiceDate!
          }
    );
  }
}
