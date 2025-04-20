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
import { DocumentTaxGroupHeadings } from './DocumentTaxGroupHeadings';

/**
 * Request builder class for operations supported on the {@link DocumentTaxGroupHeadings} entity.
 */
export class DocumentTaxGroupHeadingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentTaxGroupHeadings<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentTaxGroupHeadings` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentTaxGroupHeadings` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentTaxGroupHeadings<T>, T> {
    return new GetAllRequestBuilder<DocumentTaxGroupHeadings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentTaxGroupHeadings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentTaxGroupHeadings`.
   */
  create(
    entity: DocumentTaxGroupHeadings<T>
  ): CreateRequestBuilder<DocumentTaxGroupHeadings<T>, T> {
    return new CreateRequestBuilder<DocumentTaxGroupHeadings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentTaxGroupHeadings` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentTaxGroupHeadings.dataAreaId}.
   * @param taxGroup Key property. See {@link DocumentTaxGroupHeadings.taxGroup}.
   * @returns A request builder for creating requests to retrieve one `DocumentTaxGroupHeadings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentTaxGroupHeadings<T>, T> {
    return new GetByKeyRequestBuilder<DocumentTaxGroupHeadings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxGroup: taxGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentTaxGroupHeadings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentTaxGroupHeadings`.
   */
  update(
    entity: DocumentTaxGroupHeadings<T>
  ): UpdateRequestBuilder<DocumentTaxGroupHeadings<T>, T> {
    return new UpdateRequestBuilder<DocumentTaxGroupHeadings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentTaxGroupHeadings`.
   * @param dataAreaId Key property. See {@link DocumentTaxGroupHeadings.dataAreaId}.
   * @param taxGroup Key property. See {@link DocumentTaxGroupHeadings.taxGroup}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentTaxGroupHeadings`.
   */
  delete(
    dataAreaId: string,
    taxGroup: string
  ): DeleteRequestBuilder<DocumentTaxGroupHeadings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentTaxGroupHeadings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentTaxGroupHeadings` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentTaxGroupHeadings<T>
  ): DeleteRequestBuilder<DocumentTaxGroupHeadings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxGroup?: string
  ): DeleteRequestBuilder<DocumentTaxGroupHeadings<T>, T> {
    return new DeleteRequestBuilder<DocumentTaxGroupHeadings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentTaxGroupHeadings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxGroup: taxGroup!
          }
    );
  }
}
