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
import { DocumentParameters } from './DocumentParameters';

/**
 * Request builder class for operations supported on the {@link DocumentParameters} entity.
 */
export class DocumentParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentParameters<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentParameters` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentParameters` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentParameters<T>, T> {
    return new GetAllRequestBuilder<DocumentParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DocumentParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentParameters`.
   */
  create(
    entity: DocumentParameters<T>
  ): CreateRequestBuilder<DocumentParameters<T>, T> {
    return new CreateRequestBuilder<DocumentParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentParameters.dataAreaId}.
   * @param key Key property. See {@link DocumentParameters.key}.
   * @returns A request builder for creating requests to retrieve one `DocumentParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DocumentParameters<T>, T> {
    return new GetByKeyRequestBuilder<DocumentParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentParameters`.
   */
  update(
    entity: DocumentParameters<T>
  ): UpdateRequestBuilder<DocumentParameters<T>, T> {
    return new UpdateRequestBuilder<DocumentParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentParameters`.
   * @param dataAreaId Key property. See {@link DocumentParameters.dataAreaId}.
   * @param key Key property. See {@link DocumentParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentParameters`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<DocumentParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentParameters` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentParameters<T>
  ): DeleteRequestBuilder<DocumentParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<DocumentParameters<T>, T> {
    return new DeleteRequestBuilder<DocumentParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
