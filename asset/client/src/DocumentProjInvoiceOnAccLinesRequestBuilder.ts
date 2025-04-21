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
import { DocumentProjInvoiceOnAccLines } from './DocumentProjInvoiceOnAccLines';

/**
 * Request builder class for operations supported on the {@link DocumentProjInvoiceOnAccLines} entity.
 */
export class DocumentProjInvoiceOnAccLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentProjInvoiceOnAccLines<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentProjInvoiceOnAccLines` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentProjInvoiceOnAccLines` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T> {
    return new GetAllRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentProjInvoiceOnAccLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentProjInvoiceOnAccLines`.
   */
  create(
    entity: DocumentProjInvoiceOnAccLines<T>
  ): CreateRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T> {
    return new CreateRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentProjInvoiceOnAccLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceOnAccLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceOnAccLines.transId}.
   * @returns A request builder for creating requests to retrieve one `DocumentProjInvoiceOnAccLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T> {
    return new GetByKeyRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransId: transId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentProjInvoiceOnAccLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentProjInvoiceOnAccLines`.
   */
  update(
    entity: DocumentProjInvoiceOnAccLines<T>
  ): UpdateRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T> {
    return new UpdateRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceOnAccLines`.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceOnAccLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceOnAccLines.transId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceOnAccLines`.
   */
  delete(
    dataAreaId: string,
    transId: string
  ): DeleteRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceOnAccLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceOnAccLines` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentProjInvoiceOnAccLines<T>
  ): DeleteRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transId?: string
  ): DeleteRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T> {
    return new DeleteRequestBuilder<DocumentProjInvoiceOnAccLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentProjInvoiceOnAccLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransId: transId!
          }
    );
  }
}
