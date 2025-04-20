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
import { DocumentTypes } from './DocumentTypes';

/**
 * Request builder class for operations supported on the {@link DocumentTypes} entity.
 */
export class DocumentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentTypes<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentTypes<T>, T> {
    return new GetAllRequestBuilder<DocumentTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DocumentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentTypes`.
   */
  create(entity: DocumentTypes<T>): CreateRequestBuilder<DocumentTypes<T>, T> {
    return new CreateRequestBuilder<DocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentTypes.dataAreaId}.
   * @param id Key property. See {@link DocumentTypes.id}.
   * @returns A request builder for creating requests to retrieve one `DocumentTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentTypes<T>, T> {
    return new GetByKeyRequestBuilder<DocumentTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentTypes`.
   */
  update(entity: DocumentTypes<T>): UpdateRequestBuilder<DocumentTypes<T>, T> {
    return new UpdateRequestBuilder<DocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentTypes`.
   * @param dataAreaId Key property. See {@link DocumentTypes.dataAreaId}.
   * @param id Key property. See {@link DocumentTypes.id}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentTypes`.
   */
  delete(
    dataAreaId: string,
    id: string
  ): DeleteRequestBuilder<DocumentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentTypes` by taking the entity as a parameter.
   */
  delete(entity: DocumentTypes<T>): DeleteRequestBuilder<DocumentTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: string
  ): DeleteRequestBuilder<DocumentTypes<T>, T> {
    return new DeleteRequestBuilder<DocumentTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
