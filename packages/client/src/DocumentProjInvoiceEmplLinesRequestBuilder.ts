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
import { DocumentProjInvoiceEmplLines } from './DocumentProjInvoiceEmplLines';

/**
 * Request builder class for operations supported on the {@link DocumentProjInvoiceEmplLines} entity.
 */
export class DocumentProjInvoiceEmplLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentProjInvoiceEmplLines<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentProjInvoiceEmplLines` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentProjInvoiceEmplLines` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentProjInvoiceEmplLines<T>, T> {
    return new GetAllRequestBuilder<DocumentProjInvoiceEmplLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentProjInvoiceEmplLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentProjInvoiceEmplLines`.
   */
  create(
    entity: DocumentProjInvoiceEmplLines<T>
  ): CreateRequestBuilder<DocumentProjInvoiceEmplLines<T>, T> {
    return new CreateRequestBuilder<DocumentProjInvoiceEmplLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentProjInvoiceEmplLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceEmplLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceEmplLines.transId}.
   * @returns A request builder for creating requests to retrieve one `DocumentProjInvoiceEmplLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentProjInvoiceEmplLines<T>, T> {
    return new GetByKeyRequestBuilder<DocumentProjInvoiceEmplLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransId: transId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentProjInvoiceEmplLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentProjInvoiceEmplLines`.
   */
  update(
    entity: DocumentProjInvoiceEmplLines<T>
  ): UpdateRequestBuilder<DocumentProjInvoiceEmplLines<T>, T> {
    return new UpdateRequestBuilder<DocumentProjInvoiceEmplLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceEmplLines`.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceEmplLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceEmplLines.transId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceEmplLines`.
   */
  delete(
    dataAreaId: string,
    transId: string
  ): DeleteRequestBuilder<DocumentProjInvoiceEmplLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceEmplLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceEmplLines` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentProjInvoiceEmplLines<T>
  ): DeleteRequestBuilder<DocumentProjInvoiceEmplLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transId?: string
  ): DeleteRequestBuilder<DocumentProjInvoiceEmplLines<T>, T> {
    return new DeleteRequestBuilder<DocumentProjInvoiceEmplLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentProjInvoiceEmplLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransId: transId!
          }
    );
  }
}
