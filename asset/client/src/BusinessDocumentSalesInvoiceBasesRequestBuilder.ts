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
import { BusinessDocumentSalesInvoiceBases } from './BusinessDocumentSalesInvoiceBases';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentSalesInvoiceBases} entity.
 */
export class BusinessDocumentSalesInvoiceBasesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentSalesInvoiceBases` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentSalesInvoiceBases` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T> {
    return new GetAllRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentSalesInvoiceBases` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentSalesInvoiceBases`.
   */
  create(
    entity: BusinessDocumentSalesInvoiceBases<T>
  ): CreateRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T> {
    return new CreateRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentSalesInvoiceBases` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentSalesInvoiceBases.dataAreaId}.
   * @param invoiceId Key property. See {@link BusinessDocumentSalesInvoiceBases.invoiceId}.
   * @param invoiceDate Key property. See {@link BusinessDocumentSalesInvoiceBases.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentSalesInvoiceBases` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T> {
    return new GetByKeyRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceId: invoiceId,
        InvoiceDate: invoiceDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentSalesInvoiceBases`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentSalesInvoiceBases`.
   */
  update(
    entity: BusinessDocumentSalesInvoiceBases<T>
  ): UpdateRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T> {
    return new UpdateRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentSalesInvoiceBases`.
   * @param dataAreaId Key property. See {@link BusinessDocumentSalesInvoiceBases.dataAreaId}.
   * @param invoiceId Key property. See {@link BusinessDocumentSalesInvoiceBases.invoiceId}.
   * @param invoiceDate Key property. See {@link BusinessDocumentSalesInvoiceBases.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentSalesInvoiceBases`.
   */
  delete(
    dataAreaId: string,
    invoiceId: string,
    invoiceDate: Moment
  ): DeleteRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentSalesInvoiceBases`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentSalesInvoiceBases` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentSalesInvoiceBases<T>
  ): DeleteRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceId?: string,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T> {
    return new DeleteRequestBuilder<BusinessDocumentSalesInvoiceBases<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentSalesInvoiceBases
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceId: invoiceId!,
            InvoiceDate: invoiceDate!
          }
    );
  }
}
