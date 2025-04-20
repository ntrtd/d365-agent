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
import { AssetMaintenanceReleasedProductStorageDimensionDefaults } from './AssetMaintenanceReleasedProductStorageDimensionDefaults';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceReleasedProductStorageDimensionDefaults} entity.
 */
export class AssetMaintenanceReleasedProductStorageDimensionDefaultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceReleasedProductStorageDimensionDefaults` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceReleasedProductStorageDimensionDefaults` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceReleasedProductStorageDimensionDefaults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceReleasedProductStorageDimensionDefaults`.
   */
  create(
    entity: AssetMaintenanceReleasedProductStorageDimensionDefaults<T>
  ): CreateRequestBuilder<
    AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceReleasedProductStorageDimensionDefaults` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceReleasedProductStorageDimensionDefaults.dataAreaId}.
   * @param itemNumber Key property. See {@link AssetMaintenanceReleasedProductStorageDimensionDefaults.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceReleasedProductStorageDimensionDefaults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceReleasedProductStorageDimensionDefaults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceReleasedProductStorageDimensionDefaults`.
   */
  update(
    entity: AssetMaintenanceReleasedProductStorageDimensionDefaults<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceReleasedProductStorageDimensionDefaults`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceReleasedProductStorageDimensionDefaults.dataAreaId}.
   * @param itemNumber Key property. See {@link AssetMaintenanceReleasedProductStorageDimensionDefaults.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceReleasedProductStorageDimensionDefaults`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<
    AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceReleasedProductStorageDimensionDefaults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceReleasedProductStorageDimensionDefaults` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceReleasedProductStorageDimensionDefaults<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceReleasedProductStorageDimensionDefaults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
