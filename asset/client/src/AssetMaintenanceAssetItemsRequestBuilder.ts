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
import { AssetMaintenanceAssetItems } from './AssetMaintenanceAssetItems';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetItems} entity.
 */
export class AssetMaintenanceAssetItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetItems<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetItems` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetItems` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetItems<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetItems<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetItems`.
   */
  create(
    entity: AssetMaintenanceAssetItems<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetItems<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetItems.dataAreaId}.
   * @param itemId Key property. See {@link AssetMaintenanceAssetItems.itemId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetItems<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetItems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetItems`.
   */
  update(
    entity: AssetMaintenanceAssetItems<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetItems<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetItems`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetItems.dataAreaId}.
   * @param itemId Key property. See {@link AssetMaintenanceAssetItems.itemId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetItems`.
   */
  delete(
    dataAreaId: string,
    itemId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetItems` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetItems<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetItems<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetItems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!
          }
    );
  }
}
