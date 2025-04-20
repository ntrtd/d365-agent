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
import { DocumentProjectInvoiceBases } from './DocumentProjectInvoiceBases';

/**
 * Request builder class for operations supported on the {@link DocumentProjectInvoiceBases} entity.
 */
export class DocumentProjectInvoiceBasesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentProjectInvoiceBases<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentProjectInvoiceBases` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentProjectInvoiceBases` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentProjectInvoiceBases<T>, T> {
    return new GetAllRequestBuilder<DocumentProjectInvoiceBases<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentProjectInvoiceBases` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentProjectInvoiceBases`.
   */
  create(
    entity: DocumentProjectInvoiceBases<T>
  ): CreateRequestBuilder<DocumentProjectInvoiceBases<T>, T> {
    return new CreateRequestBuilder<DocumentProjectInvoiceBases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentProjectInvoiceBases` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentProjectInvoiceBases.dataAreaId}.
   * @param projInvoiceId Key property. See {@link DocumentProjectInvoiceBases.projInvoiceId}.
   * @param invoiceDate Key property. See {@link DocumentProjectInvoiceBases.invoiceDate}.
   * @param numberSequenceGroupId Key property. See {@link DocumentProjectInvoiceBases.numberSequenceGroupId}.
   * @returns A request builder for creating requests to retrieve one `DocumentProjectInvoiceBases` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projInvoiceId: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    numberSequenceGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentProjectInvoiceBases<T>, T> {
    return new GetByKeyRequestBuilder<DocumentProjectInvoiceBases<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjInvoiceId: projInvoiceId,
        InvoiceDate: invoiceDate,
        NumberSequenceGroupId: numberSequenceGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentProjectInvoiceBases`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentProjectInvoiceBases`.
   */
  update(
    entity: DocumentProjectInvoiceBases<T>
  ): UpdateRequestBuilder<DocumentProjectInvoiceBases<T>, T> {
    return new UpdateRequestBuilder<DocumentProjectInvoiceBases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentProjectInvoiceBases`.
   * @param dataAreaId Key property. See {@link DocumentProjectInvoiceBases.dataAreaId}.
   * @param projInvoiceId Key property. See {@link DocumentProjectInvoiceBases.projInvoiceId}.
   * @param invoiceDate Key property. See {@link DocumentProjectInvoiceBases.invoiceDate}.
   * @param numberSequenceGroupId Key property. See {@link DocumentProjectInvoiceBases.numberSequenceGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjectInvoiceBases`.
   */
  delete(
    dataAreaId: string,
    projInvoiceId: string,
    invoiceDate: Moment,
    numberSequenceGroupId: string
  ): DeleteRequestBuilder<DocumentProjectInvoiceBases<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentProjectInvoiceBases`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjectInvoiceBases` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentProjectInvoiceBases<T>
  ): DeleteRequestBuilder<DocumentProjectInvoiceBases<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projInvoiceId?: string,
    invoiceDate?: Moment,
    numberSequenceGroupId?: string
  ): DeleteRequestBuilder<DocumentProjectInvoiceBases<T>, T> {
    return new DeleteRequestBuilder<DocumentProjectInvoiceBases<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentProjectInvoiceBases
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjInvoiceId: projInvoiceId!,
            InvoiceDate: invoiceDate!,
            NumberSequenceGroupId: numberSequenceGroupId!
          }
    );
  }
}
