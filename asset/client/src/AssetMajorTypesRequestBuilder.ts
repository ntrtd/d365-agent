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
import { AssetMajorTypes } from './AssetMajorTypes';

/**
 * Request builder class for operations supported on the {@link AssetMajorTypes} entity.
 */
export class AssetMajorTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMajorTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMajorTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMajorTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMajorTypes<T>, T> {
    return new GetAllRequestBuilder<AssetMajorTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMajorTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMajorTypes`.
   */
  create(
    entity: AssetMajorTypes<T>
  ): CreateRequestBuilder<AssetMajorTypes<T>, T> {
    return new CreateRequestBuilder<AssetMajorTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMajorTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMajorTypes.dataAreaId}.
   * @param majorTypeId Key property. See {@link AssetMajorTypes.majorTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMajorTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    majorTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMajorTypes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMajorTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MajorTypeId: majorTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMajorTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMajorTypes`.
   */
  update(
    entity: AssetMajorTypes<T>
  ): UpdateRequestBuilder<AssetMajorTypes<T>, T> {
    return new UpdateRequestBuilder<AssetMajorTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMajorTypes`.
   * @param dataAreaId Key property. See {@link AssetMajorTypes.dataAreaId}.
   * @param majorTypeId Key property. See {@link AssetMajorTypes.majorTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMajorTypes`.
   */
  delete(
    dataAreaId: string,
    majorTypeId: string
  ): DeleteRequestBuilder<AssetMajorTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMajorTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMajorTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMajorTypes<T>
  ): DeleteRequestBuilder<AssetMajorTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    majorTypeId?: string
  ): DeleteRequestBuilder<AssetMajorTypes<T>, T> {
    return new DeleteRequestBuilder<AssetMajorTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMajorTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MajorTypeId: majorTypeId!
          }
    );
  }
}
