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
import { AssetMaintenanceReleasedProducts } from './AssetMaintenanceReleasedProducts';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceReleasedProducts} entity.
 */
export class AssetMaintenanceReleasedProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceReleasedProducts<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceReleasedProducts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceReleasedProducts` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceReleasedProducts<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceReleasedProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceReleasedProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceReleasedProducts`.
   */
  create(
    entity: AssetMaintenanceReleasedProducts<T>
  ): CreateRequestBuilder<AssetMaintenanceReleasedProducts<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceReleasedProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceReleasedProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceReleasedProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link AssetMaintenanceReleasedProducts.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceReleasedProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceReleasedProducts<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceReleasedProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceReleasedProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceReleasedProducts`.
   */
  update(
    entity: AssetMaintenanceReleasedProducts<T>
  ): UpdateRequestBuilder<AssetMaintenanceReleasedProducts<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceReleasedProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceReleasedProducts`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceReleasedProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link AssetMaintenanceReleasedProducts.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceReleasedProducts`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<AssetMaintenanceReleasedProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceReleasedProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceReleasedProducts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceReleasedProducts<T>
  ): DeleteRequestBuilder<AssetMaintenanceReleasedProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<AssetMaintenanceReleasedProducts<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceReleasedProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceReleasedProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
