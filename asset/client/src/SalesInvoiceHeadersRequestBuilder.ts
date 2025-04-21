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
import { SalesInvoiceHeaders } from './SalesInvoiceHeaders';

/**
 * Request builder class for operations supported on the {@link SalesInvoiceHeaders} entity.
 */
export class SalesInvoiceHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesInvoiceHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SalesInvoiceHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SalesInvoiceHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SalesInvoiceHeaders<T>, T> {
    return new GetAllRequestBuilder<SalesInvoiceHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesInvoiceHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesInvoiceHeaders`.
   */
  create(
    entity: SalesInvoiceHeaders<T>
  ): CreateRequestBuilder<SalesInvoiceHeaders<T>, T> {
    return new CreateRequestBuilder<SalesInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesInvoiceHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesInvoiceHeaders.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceHeaders.invoiceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceHeaders.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `SalesInvoiceHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SalesInvoiceHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SalesInvoiceHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceNumber: invoiceNumber,
        InvoiceDate: invoiceDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesInvoiceHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesInvoiceHeaders`.
   */
  update(
    entity: SalesInvoiceHeaders<T>
  ): UpdateRequestBuilder<SalesInvoiceHeaders<T>, T> {
    return new UpdateRequestBuilder<SalesInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceHeaders`.
   * @param dataAreaId Key property. See {@link SalesInvoiceHeaders.dataAreaId}.
   * @param invoiceNumber Key property. See {@link SalesInvoiceHeaders.invoiceNumber}.
   * @param invoiceDate Key property. See {@link SalesInvoiceHeaders.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceHeaders`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    invoiceDate: Moment
  ): DeleteRequestBuilder<SalesInvoiceHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesInvoiceHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesInvoiceHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SalesInvoiceHeaders<T>
  ): DeleteRequestBuilder<SalesInvoiceHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<SalesInvoiceHeaders<T>, T> {
    return new DeleteRequestBuilder<SalesInvoiceHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesInvoiceHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceNumber: invoiceNumber!,
            InvoiceDate: invoiceDate!
          }
    );
  }
}
