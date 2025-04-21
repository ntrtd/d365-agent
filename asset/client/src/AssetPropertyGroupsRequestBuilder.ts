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
import { AssetPropertyGroups } from './AssetPropertyGroups';

/**
 * Request builder class for operations supported on the {@link AssetPropertyGroups} entity.
 */
export class AssetPropertyGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetPropertyGroups<T>, T> {
  /**
   * Returns a request builder for querying all `AssetPropertyGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AssetPropertyGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AssetPropertyGroups<T>, T> {
    return new GetAllRequestBuilder<AssetPropertyGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetPropertyGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetPropertyGroups`.
   */
  create(
    entity: AssetPropertyGroups<T>
  ): CreateRequestBuilder<AssetPropertyGroups<T>, T> {
    return new CreateRequestBuilder<AssetPropertyGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetPropertyGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetPropertyGroups.dataAreaId}.
   * @param assetPropertyGroupId Key property. See {@link AssetPropertyGroups.assetPropertyGroupId}.
   * @returns A request builder for creating requests to retrieve one `AssetPropertyGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    assetPropertyGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetPropertyGroups<T>, T> {
    return new GetByKeyRequestBuilder<AssetPropertyGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AssetPropertyGroupId: assetPropertyGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetPropertyGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetPropertyGroups`.
   */
  update(
    entity: AssetPropertyGroups<T>
  ): UpdateRequestBuilder<AssetPropertyGroups<T>, T> {
    return new UpdateRequestBuilder<AssetPropertyGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetPropertyGroups`.
   * @param dataAreaId Key property. See {@link AssetPropertyGroups.dataAreaId}.
   * @param assetPropertyGroupId Key property. See {@link AssetPropertyGroups.assetPropertyGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetPropertyGroups`.
   */
  delete(
    dataAreaId: string,
    assetPropertyGroupId: string
  ): DeleteRequestBuilder<AssetPropertyGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetPropertyGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetPropertyGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AssetPropertyGroups<T>
  ): DeleteRequestBuilder<AssetPropertyGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    assetPropertyGroupId?: string
  ): DeleteRequestBuilder<AssetPropertyGroups<T>, T> {
    return new DeleteRequestBuilder<AssetPropertyGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetPropertyGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AssetPropertyGroupId: assetPropertyGroupId!
          }
    );
  }
}
