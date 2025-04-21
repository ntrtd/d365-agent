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
import { AssetParameters } from './AssetParameters';

/**
 * Request builder class for operations supported on the {@link AssetParameters} entity.
 */
export class AssetParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetParameters<T>, T> {
  /**
   * Returns a request builder for querying all `AssetParameters` entities.
   * @returns A request builder for creating requests to retrieve all `AssetParameters` entities.
   */
  getAll(): GetAllRequestBuilder<AssetParameters<T>, T> {
    return new GetAllRequestBuilder<AssetParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetParameters`.
   */
  create(
    entity: AssetParameters<T>
  ): CreateRequestBuilder<AssetParameters<T>, T> {
    return new CreateRequestBuilder<AssetParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `AssetParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetParameters<T>, T> {
    return new GetByKeyRequestBuilder<AssetParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetParameters`.
   */
  update(
    entity: AssetParameters<T>
  ): UpdateRequestBuilder<AssetParameters<T>, T> {
    return new UpdateRequestBuilder<AssetParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetParameters`.
   * @param dataAreaId Key property. See {@link AssetParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<AssetParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetParameters` by taking the entity as a parameter.
   */
  delete(
    entity: AssetParameters<T>
  ): DeleteRequestBuilder<AssetParameters<T>, T>;
  delete(dataAreaIdOrEntity: any): DeleteRequestBuilder<AssetParameters<T>, T> {
    return new DeleteRequestBuilder<AssetParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
