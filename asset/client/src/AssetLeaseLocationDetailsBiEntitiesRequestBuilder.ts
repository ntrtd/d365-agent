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
import { AssetLeaseLocationDetailsBiEntities } from './AssetLeaseLocationDetailsBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseLocationDetailsBiEntities} entity.
 */
export class AssetLeaseLocationDetailsBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseLocationDetailsBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseLocationDetailsBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseLocationDetailsBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseLocationDetailsBiEntities`.
   */
  create(
    entity: AssetLeaseLocationDetailsBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseLocationDetailsBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseLocationDetailsBiEntities.dataAreaId}.
   * @param locationNumber Key property. See {@link AssetLeaseLocationDetailsBiEntities.locationNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseLocationDetailsBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    locationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeaseLocationDetailsBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LocationNumber: locationNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseLocationDetailsBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseLocationDetailsBiEntities`.
   */
  update(
    entity: AssetLeaseLocationDetailsBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLocationDetailsBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseLocationDetailsBiEntities.dataAreaId}.
   * @param locationNumber Key property. See {@link AssetLeaseLocationDetailsBiEntities.locationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLocationDetailsBiEntities`.
   */
  delete(
    dataAreaId: string,
    locationNumber: string
  ): DeleteRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLocationDetailsBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLocationDetailsBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseLocationDetailsBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    locationNumber?: string
  ): DeleteRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseLocationDetailsBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseLocationDetailsBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LocationNumber: locationNumber!
          }
    );
  }
}
