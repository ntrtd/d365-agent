/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { DocumentProjInvoiceItemLines } from './DocumentProjInvoiceItemLines';

/**
 * Request builder class for operations supported on the {@link DocumentProjInvoiceItemLines} entity.
 */
export class DocumentProjInvoiceItemLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentProjInvoiceItemLines<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentProjInvoiceItemLines` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentProjInvoiceItemLines` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentProjInvoiceItemLines<T>, T> {
    return new GetAllRequestBuilder<DocumentProjInvoiceItemLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentProjInvoiceItemLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentProjInvoiceItemLines`.
   */
  create(
    entity: DocumentProjInvoiceItemLines<T>
  ): CreateRequestBuilder<DocumentProjInvoiceItemLines<T>, T> {
    return new CreateRequestBuilder<DocumentProjInvoiceItemLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentProjInvoiceItemLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceItemLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceItemLines.transId}.
   * @returns A request builder for creating requests to retrieve one `DocumentProjInvoiceItemLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentProjInvoiceItemLines<T>, T> {
    return new GetByKeyRequestBuilder<DocumentProjInvoiceItemLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransId: transId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentProjInvoiceItemLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentProjInvoiceItemLines`.
   */
  update(
    entity: DocumentProjInvoiceItemLines<T>
  ): UpdateRequestBuilder<DocumentProjInvoiceItemLines<T>, T> {
    return new UpdateRequestBuilder<DocumentProjInvoiceItemLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceItemLines`.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceItemLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceItemLines.transId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceItemLines`.
   */
  delete(
    dataAreaId: string,
    transId: string
  ): DeleteRequestBuilder<DocumentProjInvoiceItemLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceItemLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceItemLines` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentProjInvoiceItemLines<T>
  ): DeleteRequestBuilder<DocumentProjInvoiceItemLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transId?: string
  ): DeleteRequestBuilder<DocumentProjInvoiceItemLines<T>, T> {
    return new DeleteRequestBuilder<DocumentProjInvoiceItemLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentProjInvoiceItemLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransId: transId!
          }
    );
  }
}
