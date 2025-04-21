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
import { AssetMaintenanceProducts } from './AssetMaintenanceProducts';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceProducts} entity.
 */
export class AssetMaintenanceProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceProducts<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceProducts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceProducts` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceProducts<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceProducts`.
   */
  create(
    entity: AssetMaintenanceProducts<T>
  ): CreateRequestBuilder<AssetMaintenanceProducts<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceProducts.dataAreaId}.
   * @param productId Key property. See {@link AssetMaintenanceProducts.productId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceProducts<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductId: productId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceProducts`.
   */
  update(
    entity: AssetMaintenanceProducts<T>
  ): UpdateRequestBuilder<AssetMaintenanceProducts<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceProducts`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceProducts.dataAreaId}.
   * @param productId Key property. See {@link AssetMaintenanceProducts.productId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceProducts`.
   */
  delete(
    dataAreaId: string,
    productId: string
  ): DeleteRequestBuilder<AssetMaintenanceProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceProducts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceProducts<T>
  ): DeleteRequestBuilder<AssetMaintenanceProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productId?: string
  ): DeleteRequestBuilder<AssetMaintenanceProducts<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductId: productId!
          }
    );
  }
}
