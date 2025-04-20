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
import { CapturedInvoiceDocuments } from './CapturedInvoiceDocuments';

/**
 * Request builder class for operations supported on the {@link CapturedInvoiceDocuments} entity.
 */
export class CapturedInvoiceDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CapturedInvoiceDocuments<T>, T> {
  /**
   * Returns a request builder for querying all `CapturedInvoiceDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `CapturedInvoiceDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<CapturedInvoiceDocuments<T>, T> {
    return new GetAllRequestBuilder<CapturedInvoiceDocuments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CapturedInvoiceDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CapturedInvoiceDocuments`.
   */
  create(
    entity: CapturedInvoiceDocuments<T>
  ): CreateRequestBuilder<CapturedInvoiceDocuments<T>, T> {
    return new CreateRequestBuilder<CapturedInvoiceDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CapturedInvoiceDocuments` entity based on its keys.
   * @param dataAreaId Key property. See {@link CapturedInvoiceDocuments.dataAreaId}.
   * @param capturedDocumentId Key property. See {@link CapturedInvoiceDocuments.capturedDocumentId}.
   * @returns A request builder for creating requests to retrieve one `CapturedInvoiceDocuments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    capturedDocumentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CapturedInvoiceDocuments<T>, T> {
    return new GetByKeyRequestBuilder<CapturedInvoiceDocuments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CapturedDocumentId: capturedDocumentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CapturedInvoiceDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CapturedInvoiceDocuments`.
   */
  update(
    entity: CapturedInvoiceDocuments<T>
  ): UpdateRequestBuilder<CapturedInvoiceDocuments<T>, T> {
    return new UpdateRequestBuilder<CapturedInvoiceDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CapturedInvoiceDocuments`.
   * @param dataAreaId Key property. See {@link CapturedInvoiceDocuments.dataAreaId}.
   * @param capturedDocumentId Key property. See {@link CapturedInvoiceDocuments.capturedDocumentId}.
   * @returns A request builder for creating requests that delete an entity of type `CapturedInvoiceDocuments`.
   */
  delete(
    dataAreaId: string,
    capturedDocumentId: string
  ): DeleteRequestBuilder<CapturedInvoiceDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CapturedInvoiceDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CapturedInvoiceDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: CapturedInvoiceDocuments<T>
  ): DeleteRequestBuilder<CapturedInvoiceDocuments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    capturedDocumentId?: string
  ): DeleteRequestBuilder<CapturedInvoiceDocuments<T>, T> {
    return new DeleteRequestBuilder<CapturedInvoiceDocuments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CapturedInvoiceDocuments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CapturedDocumentId: capturedDocumentId!
          }
    );
  }
}
