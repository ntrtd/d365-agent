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
import { MaterialHandlingParameters } from './MaterialHandlingParameters';

/**
 * Request builder class for operations supported on the {@link MaterialHandlingParameters} entity.
 */
export class MaterialHandlingParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialHandlingParameters<T>, T> {
  /**
   * Returns a request builder for querying all `MaterialHandlingParameters` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialHandlingParameters` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialHandlingParameters<T>, T> {
    return new GetAllRequestBuilder<MaterialHandlingParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaterialHandlingParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialHandlingParameters`.
   */
  create(
    entity: MaterialHandlingParameters<T>
  ): CreateRequestBuilder<MaterialHandlingParameters<T>, T> {
    return new CreateRequestBuilder<MaterialHandlingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaterialHandlingParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link MaterialHandlingParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `MaterialHandlingParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MaterialHandlingParameters<T>, T> {
    return new GetByKeyRequestBuilder<MaterialHandlingParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialHandlingParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialHandlingParameters`.
   */
  update(
    entity: MaterialHandlingParameters<T>
  ): UpdateRequestBuilder<MaterialHandlingParameters<T>, T> {
    return new UpdateRequestBuilder<MaterialHandlingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialHandlingParameters`.
   * @param dataAreaId Key property. See {@link MaterialHandlingParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialHandlingParameters`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<MaterialHandlingParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialHandlingParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialHandlingParameters` by taking the entity as a parameter.
   */
  delete(
    entity: MaterialHandlingParameters<T>
  ): DeleteRequestBuilder<MaterialHandlingParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<MaterialHandlingParameters<T>, T> {
    return new DeleteRequestBuilder<MaterialHandlingParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MaterialHandlingParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
