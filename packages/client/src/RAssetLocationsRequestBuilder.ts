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
import { RAssetLocations } from './RAssetLocations';

/**
 * Request builder class for operations supported on the {@link RAssetLocations} entity.
 */
export class RAssetLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetLocations<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetLocations` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetLocations` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetLocations<T>, T> {
    return new GetAllRequestBuilder<RAssetLocations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetLocations`.
   */
  create(
    entity: RAssetLocations<T>
  ): CreateRequestBuilder<RAssetLocations<T>, T> {
    return new CreateRequestBuilder<RAssetLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetLocations.dataAreaId}.
   * @param location Key property. See {@link RAssetLocations.location}.
   * @returns A request builder for creating requests to retrieve one `RAssetLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    location: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetLocations<T>, T> {
    return new GetByKeyRequestBuilder<RAssetLocations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Location: location
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetLocations`.
   */
  update(
    entity: RAssetLocations<T>
  ): UpdateRequestBuilder<RAssetLocations<T>, T> {
    return new UpdateRequestBuilder<RAssetLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetLocations`.
   * @param dataAreaId Key property. See {@link RAssetLocations.dataAreaId}.
   * @param location Key property. See {@link RAssetLocations.location}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetLocations`.
   */
  delete(
    dataAreaId: string,
    location: string
  ): DeleteRequestBuilder<RAssetLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetLocations` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetLocations<T>
  ): DeleteRequestBuilder<RAssetLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    location?: string
  ): DeleteRequestBuilder<RAssetLocations<T>, T> {
    return new DeleteRequestBuilder<RAssetLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Location: location!
          }
    );
  }
}
