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
import { AssetMaintenanceAssetAttributes } from './AssetMaintenanceAssetAttributes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetAttributes} entity.
 */
export class AssetMaintenanceAssetAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetAttributes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetAttributes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetAttributes`.
   */
  create(
    entity: AssetMaintenanceAssetAttributes<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetAttributes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetAttributes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetAttributes.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetAttributes.maintenanceAssetId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceAssetAttributes.attributeTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetAttributes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    attributeTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetAttributes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetAttributes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceAssetId: maintenanceAssetId,
        AttributeTypeId: attributeTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetAttributes`.
   */
  update(
    entity: AssetMaintenanceAssetAttributes<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetAttributes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetAttributes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetAttributes.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetAttributes.maintenanceAssetId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceAssetAttributes.attributeTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetAttributes`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string,
    attributeTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetAttributes<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetAttributes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string,
    attributeTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetAttributes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetAttributes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetAttributes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!,
            AttributeTypeId: attributeTypeId!
          }
    );
  }
}
