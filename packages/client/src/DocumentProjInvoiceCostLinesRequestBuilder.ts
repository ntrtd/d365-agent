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
import { DocumentProjInvoiceCostLines } from './DocumentProjInvoiceCostLines';

/**
 * Request builder class for operations supported on the {@link DocumentProjInvoiceCostLines} entity.
 */
export class DocumentProjInvoiceCostLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentProjInvoiceCostLines<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentProjInvoiceCostLines` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentProjInvoiceCostLines` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentProjInvoiceCostLines<T>, T> {
    return new GetAllRequestBuilder<DocumentProjInvoiceCostLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentProjInvoiceCostLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentProjInvoiceCostLines`.
   */
  create(
    entity: DocumentProjInvoiceCostLines<T>
  ): CreateRequestBuilder<DocumentProjInvoiceCostLines<T>, T> {
    return new CreateRequestBuilder<DocumentProjInvoiceCostLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentProjInvoiceCostLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceCostLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceCostLines.transId}.
   * @returns A request builder for creating requests to retrieve one `DocumentProjInvoiceCostLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentProjInvoiceCostLines<T>, T> {
    return new GetByKeyRequestBuilder<DocumentProjInvoiceCostLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransId: transId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentProjInvoiceCostLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentProjInvoiceCostLines`.
   */
  update(
    entity: DocumentProjInvoiceCostLines<T>
  ): UpdateRequestBuilder<DocumentProjInvoiceCostLines<T>, T> {
    return new UpdateRequestBuilder<DocumentProjInvoiceCostLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceCostLines`.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceCostLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceCostLines.transId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceCostLines`.
   */
  delete(
    dataAreaId: string,
    transId: string
  ): DeleteRequestBuilder<DocumentProjInvoiceCostLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceCostLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceCostLines` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentProjInvoiceCostLines<T>
  ): DeleteRequestBuilder<DocumentProjInvoiceCostLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transId?: string
  ): DeleteRequestBuilder<DocumentProjInvoiceCostLines<T>, T> {
    return new DeleteRequestBuilder<DocumentProjInvoiceCostLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentProjInvoiceCostLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransId: transId!
          }
    );
  }
}
