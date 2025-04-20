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
import { AssetLocationBiEntities } from './AssetLocationBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLocationBiEntities} entity.
 */
export class AssetLocationBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLocationBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLocationBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLocationBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLocationBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLocationBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLocationBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLocationBiEntities`.
   */
  create(
    entity: AssetLocationBiEntities<T>
  ): CreateRequestBuilder<AssetLocationBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLocationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLocationBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLocationBiEntities.dataAreaId}.
   * @param location Key property. See {@link AssetLocationBiEntities.location}.
   * @returns A request builder for creating requests to retrieve one `AssetLocationBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    location: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLocationBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetLocationBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Location: location
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLocationBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLocationBiEntities`.
   */
  update(
    entity: AssetLocationBiEntities<T>
  ): UpdateRequestBuilder<AssetLocationBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLocationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLocationBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLocationBiEntities.dataAreaId}.
   * @param location Key property. See {@link AssetLocationBiEntities.location}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLocationBiEntities`.
   */
  delete(
    dataAreaId: string,
    location: string
  ): DeleteRequestBuilder<AssetLocationBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLocationBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLocationBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLocationBiEntities<T>
  ): DeleteRequestBuilder<AssetLocationBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    location?: string
  ): DeleteRequestBuilder<AssetLocationBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLocationBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLocationBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Location: location!
          }
    );
  }
}
