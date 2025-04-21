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
import { DocumentProjInvoiceRevenueLines } from './DocumentProjInvoiceRevenueLines';

/**
 * Request builder class for operations supported on the {@link DocumentProjInvoiceRevenueLines} entity.
 */
export class DocumentProjInvoiceRevenueLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentProjInvoiceRevenueLines<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentProjInvoiceRevenueLines` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentProjInvoiceRevenueLines` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T> {
    return new GetAllRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentProjInvoiceRevenueLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentProjInvoiceRevenueLines`.
   */
  create(
    entity: DocumentProjInvoiceRevenueLines<T>
  ): CreateRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T> {
    return new CreateRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentProjInvoiceRevenueLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceRevenueLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceRevenueLines.transId}.
   * @returns A request builder for creating requests to retrieve one `DocumentProjInvoiceRevenueLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T> {
    return new GetByKeyRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransId: transId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentProjInvoiceRevenueLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentProjInvoiceRevenueLines`.
   */
  update(
    entity: DocumentProjInvoiceRevenueLines<T>
  ): UpdateRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T> {
    return new UpdateRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceRevenueLines`.
   * @param dataAreaId Key property. See {@link DocumentProjInvoiceRevenueLines.dataAreaId}.
   * @param transId Key property. See {@link DocumentProjInvoiceRevenueLines.transId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceRevenueLines`.
   */
  delete(
    dataAreaId: string,
    transId: string
  ): DeleteRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentProjInvoiceRevenueLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentProjInvoiceRevenueLines` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentProjInvoiceRevenueLines<T>
  ): DeleteRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transId?: string
  ): DeleteRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T> {
    return new DeleteRequestBuilder<DocumentProjInvoiceRevenueLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentProjInvoiceRevenueLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransId: transId!
          }
    );
  }
}
