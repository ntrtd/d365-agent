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
import { AssetMaintenanceFunctionalLocations } from './AssetMaintenanceFunctionalLocations';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocations} entity.
 */
export class AssetMaintenanceFunctionalLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFunctionalLocations<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocations` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocations`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocations<T>
  ): CreateRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocations.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocations.functionalLocationId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationId: functionalLocationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocations`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocations<T>
  ): UpdateRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocations`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocations.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocations.functionalLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocations`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocations` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocations<T>
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceFunctionalLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFunctionalLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!
          }
    );
  }
}
