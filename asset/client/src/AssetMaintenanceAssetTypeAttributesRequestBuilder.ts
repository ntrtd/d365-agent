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
import { AssetMaintenanceAssetTypeAttributes } from './AssetMaintenanceAssetTypeAttributes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeAttributes} entity.
 */
export class AssetMaintenanceAssetTypeAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeAttributes`.
   */
  create(
    entity: AssetMaintenanceAssetTypeAttributes<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeAttributes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeAttributes.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeAttributes.maintenanceAssetTypeId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceAssetTypeAttributes.attributeTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeAttributes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    attributeTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeAttributes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      AttributeTypeId: attributeTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeAttributes`.
   */
  update(
    entity: AssetMaintenanceAssetTypeAttributes<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeAttributes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeAttributes.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeAttributes.maintenanceAssetTypeId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceAssetTypeAttributes.attributeTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeAttributes`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    attributeTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeAttributes<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    attributeTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetTypeAttributes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeAttributes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            AttributeTypeId: attributeTypeId!
          }
    );
  }
}
