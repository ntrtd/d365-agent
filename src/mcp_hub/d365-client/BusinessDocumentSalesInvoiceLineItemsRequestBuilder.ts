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
import { BusinessDocumentSalesInvoiceLineItems } from './BusinessDocumentSalesInvoiceLineItems';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentSalesInvoiceLineItems} entity.
 */
export class BusinessDocumentSalesInvoiceLineItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentSalesInvoiceLineItems<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentSalesInvoiceLineItems` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentSalesInvoiceLineItems` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessDocumentSalesInvoiceLineItems<T>, T> {
    return new GetAllRequestBuilder<
      BusinessDocumentSalesInvoiceLineItems<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentSalesInvoiceLineItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentSalesInvoiceLineItems`.
   */
  create(
    entity: BusinessDocumentSalesInvoiceLineItems<T>
  ): CreateRequestBuilder<BusinessDocumentSalesInvoiceLineItems<T>, T> {
    return new CreateRequestBuilder<
      BusinessDocumentSalesInvoiceLineItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentSalesInvoiceLineItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentSalesInvoiceLineItems.dataAreaId}.
   * @param invoiceId Key property. See {@link BusinessDocumentSalesInvoiceLineItems.invoiceId}.
   * @param invoiceDate Key property. See {@link BusinessDocumentSalesInvoiceLineItems.invoiceDate}.
   * @param lineCreationSequenceNumber Key property. See {@link BusinessDocumentSalesInvoiceLineItems.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentSalesInvoiceLineItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BusinessDocumentSalesInvoiceLineItems<T>, T> {
    return new GetByKeyRequestBuilder<
      BusinessDocumentSalesInvoiceLineItems<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InvoiceId: invoiceId,
      InvoiceDate: invoiceDate,
      LineCreationSequenceNumber: lineCreationSequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentSalesInvoiceLineItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentSalesInvoiceLineItems`.
   */
  update(
    entity: BusinessDocumentSalesInvoiceLineItems<T>
  ): UpdateRequestBuilder<BusinessDocumentSalesInvoiceLineItems<T>, T> {
    return new UpdateRequestBuilder<
      BusinessDocumentSalesInvoiceLineItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentSalesInvoiceLineItems`.
   * @param dataAreaId Key property. See {@link BusinessDocumentSalesInvoiceLineItems.dataAreaId}.
   * @param invoiceId Key property. See {@link BusinessDocumentSalesInvoiceLineItems.invoiceId}.
   * @param invoiceDate Key property. See {@link BusinessDocumentSalesInvoiceLineItems.invoiceDate}.
   * @param lineCreationSequenceNumber Key property. See {@link BusinessDocumentSalesInvoiceLineItems.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentSalesInvoiceLineItems`.
   */
  delete(
    dataAreaId: string,
    invoiceId: string,
    invoiceDate: Moment,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<BusinessDocumentSalesInvoiceLineItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentSalesInvoiceLineItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentSalesInvoiceLineItems` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentSalesInvoiceLineItems<T>
  ): DeleteRequestBuilder<BusinessDocumentSalesInvoiceLineItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceId?: string,
    invoiceDate?: Moment,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<BusinessDocumentSalesInvoiceLineItems<T>, T> {
    return new DeleteRequestBuilder<
      BusinessDocumentSalesInvoiceLineItems<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentSalesInvoiceLineItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceId: invoiceId!,
            InvoiceDate: invoiceDate!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
