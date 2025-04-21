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
import { DocumentFileTypes } from './DocumentFileTypes';

/**
 * Request builder class for operations supported on the {@link DocumentFileTypes} entity.
 */
export class DocumentFileTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentFileTypes<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentFileTypes` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentFileTypes` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentFileTypes<T>, T> {
    return new GetAllRequestBuilder<DocumentFileTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DocumentFileTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentFileTypes`.
   */
  create(
    entity: DocumentFileTypes<T>
  ): CreateRequestBuilder<DocumentFileTypes<T>, T> {
    return new CreateRequestBuilder<DocumentFileTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentFileTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentFileTypes.dataAreaId}.
   * @param fileType Key property. See {@link DocumentFileTypes.fileType}.
   * @returns A request builder for creating requests to retrieve one `DocumentFileTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fileType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentFileTypes<T>, T> {
    return new GetByKeyRequestBuilder<DocumentFileTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FileType: fileType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentFileTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentFileTypes`.
   */
  update(
    entity: DocumentFileTypes<T>
  ): UpdateRequestBuilder<DocumentFileTypes<T>, T> {
    return new UpdateRequestBuilder<DocumentFileTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentFileTypes`.
   * @param dataAreaId Key property. See {@link DocumentFileTypes.dataAreaId}.
   * @param fileType Key property. See {@link DocumentFileTypes.fileType}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentFileTypes`.
   */
  delete(
    dataAreaId: string,
    fileType: string
  ): DeleteRequestBuilder<DocumentFileTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentFileTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentFileTypes` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentFileTypes<T>
  ): DeleteRequestBuilder<DocumentFileTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fileType?: string
  ): DeleteRequestBuilder<DocumentFileTypes<T>, T> {
    return new DeleteRequestBuilder<DocumentFileTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentFileTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FileType: fileType!
          }
    );
  }
}
