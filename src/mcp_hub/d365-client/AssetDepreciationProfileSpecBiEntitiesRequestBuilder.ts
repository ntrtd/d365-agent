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
import { AssetDepreciationProfileSpecBiEntities } from './AssetDepreciationProfileSpecBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetDepreciationProfileSpecBiEntities} entity.
 */
export class AssetDepreciationProfileSpecBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetDepreciationProfileSpecBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetDepreciationProfileSpecBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetDepreciationProfileSpecBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetDepreciationProfileSpecBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      AssetDepreciationProfileSpecBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetDepreciationProfileSpecBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetDepreciationProfileSpecBiEntities`.
   */
  create(
    entity: AssetDepreciationProfileSpecBiEntities<T>
  ): CreateRequestBuilder<AssetDepreciationProfileSpecBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetDepreciationProfileSpecBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetDepreciationProfileSpecBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetDepreciationProfileSpecBiEntities.dataAreaId}.
   * @param profile Key property. See {@link AssetDepreciationProfileSpecBiEntities.profile}.
   * @param interval Key property. See {@link AssetDepreciationProfileSpecBiEntities.interval}.
   * @returns A request builder for creating requests to retrieve one `AssetDepreciationProfileSpecBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profile: DeserializedType<T, 'Edm.String'>,
    interval: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetDepreciationProfileSpecBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetDepreciationProfileSpecBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Profile: profile,
      Interval: interval
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetDepreciationProfileSpecBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetDepreciationProfileSpecBiEntities`.
   */
  update(
    entity: AssetDepreciationProfileSpecBiEntities<T>
  ): UpdateRequestBuilder<AssetDepreciationProfileSpecBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetDepreciationProfileSpecBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetDepreciationProfileSpecBiEntities`.
   * @param dataAreaId Key property. See {@link AssetDepreciationProfileSpecBiEntities.dataAreaId}.
   * @param profile Key property. See {@link AssetDepreciationProfileSpecBiEntities.profile}.
   * @param interval Key property. See {@link AssetDepreciationProfileSpecBiEntities.interval}.
   * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationProfileSpecBiEntities`.
   */
  delete(
    dataAreaId: string,
    profile: string,
    interval: number
  ): DeleteRequestBuilder<AssetDepreciationProfileSpecBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetDepreciationProfileSpecBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationProfileSpecBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetDepreciationProfileSpecBiEntities<T>
  ): DeleteRequestBuilder<AssetDepreciationProfileSpecBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profile?: string,
    interval?: number
  ): DeleteRequestBuilder<AssetDepreciationProfileSpecBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetDepreciationProfileSpecBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetDepreciationProfileSpecBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Profile: profile!,
            Interval: interval!
          }
    );
  }
}
