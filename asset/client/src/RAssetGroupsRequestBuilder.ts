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
import { RAssetGroups } from './RAssetGroups';

/**
 * Request builder class for operations supported on the {@link RAssetGroups} entity.
 */
export class RAssetGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetGroups<T>, T> {
    return new GetAllRequestBuilder<RAssetGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetGroups`.
   */
  create(entity: RAssetGroups<T>): CreateRequestBuilder<RAssetGroups<T>, T> {
    return new CreateRequestBuilder<RAssetGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RAssetGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetGroups.dataAreaId}.
   * @param depreciationGroup Key property. See {@link RAssetGroups.depreciationGroup}.
   * @returns A request builder for creating requests to retrieve one `RAssetGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    depreciationGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetGroups<T>, T> {
    return new GetByKeyRequestBuilder<RAssetGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DepreciationGroup: depreciationGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetGroups`.
   */
  update(entity: RAssetGroups<T>): UpdateRequestBuilder<RAssetGroups<T>, T> {
    return new UpdateRequestBuilder<RAssetGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetGroups`.
   * @param dataAreaId Key property. See {@link RAssetGroups.dataAreaId}.
   * @param depreciationGroup Key property. See {@link RAssetGroups.depreciationGroup}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetGroups`.
   */
  delete(
    dataAreaId: string,
    depreciationGroup: string
  ): DeleteRequestBuilder<RAssetGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetGroups` by taking the entity as a parameter.
   */
  delete(entity: RAssetGroups<T>): DeleteRequestBuilder<RAssetGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    depreciationGroup?: string
  ): DeleteRequestBuilder<RAssetGroups<T>, T> {
    return new DeleteRequestBuilder<RAssetGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DepreciationGroup: depreciationGroup!
          }
    );
  }
}
