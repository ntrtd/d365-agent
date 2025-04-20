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
import { AssetLocations } from './AssetLocations';

/**
 * Request builder class for operations supported on the {@link AssetLocations} entity.
 */
export class AssetLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLocations<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLocations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLocations` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLocations<T>, T> {
    return new GetAllRequestBuilder<AssetLocations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLocations`.
   */
  create(
    entity: AssetLocations<T>
  ): CreateRequestBuilder<AssetLocations<T>, T> {
    return new CreateRequestBuilder<AssetLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLocations.dataAreaId}.
   * @param locationId Key property. See {@link AssetLocations.locationId}.
   * @returns A request builder for creating requests to retrieve one `AssetLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLocations<T>, T> {
    return new GetByKeyRequestBuilder<AssetLocations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LocationId: locationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLocations`.
   */
  update(
    entity: AssetLocations<T>
  ): UpdateRequestBuilder<AssetLocations<T>, T> {
    return new UpdateRequestBuilder<AssetLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLocations`.
   * @param dataAreaId Key property. See {@link AssetLocations.dataAreaId}.
   * @param locationId Key property. See {@link AssetLocations.locationId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLocations`.
   */
  delete(
    dataAreaId: string,
    locationId: string
  ): DeleteRequestBuilder<AssetLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLocations` by taking the entity as a parameter.
   */
  delete(entity: AssetLocations<T>): DeleteRequestBuilder<AssetLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    locationId?: string
  ): DeleteRequestBuilder<AssetLocations<T>, T> {
    return new DeleteRequestBuilder<AssetLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LocationId: locationId!
          }
    );
  }
}
