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
import { AssetMaintenanceAssetPriorities } from './AssetMaintenanceAssetPriorities';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetPriorities} entity.
 */
export class AssetMaintenanceAssetPrioritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetPriorities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetPriorities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetPriorities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetPriorities<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetPriorities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetPriorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetPriorities`.
   */
  create(
    entity: AssetMaintenanceAssetPriorities<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetPriorities<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetPriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetPriorities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetPriorities.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceAssetPriorities.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetPriorities.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetPriorities.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetPriorities.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetPriorities.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetPriorities.maintenanceAssetId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceAssetPriorities.workOrderTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetPriorities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    workOrderTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetPriorities<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetPriorities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FunctionalLocationId: functionalLocationId,
        MaintenanceAssetTypeId: maintenanceAssetTypeId,
        ProductId: productId,
        ModelProductId: modelProductId,
        ModelId: modelId,
        MaintenanceAssetId: maintenanceAssetId,
        WorkOrderTypeId: workOrderTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetPriorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetPriorities`.
   */
  update(
    entity: AssetMaintenanceAssetPriorities<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetPriorities<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetPriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetPriorities`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetPriorities.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceAssetPriorities.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetPriorities.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetPriorities.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetPriorities.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetPriorities.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetPriorities.maintenanceAssetId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceAssetPriorities.workOrderTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetPriorities`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string,
    maintenanceAssetTypeId: string,
    productId: string,
    modelProductId: string,
    modelId: string,
    maintenanceAssetId: string,
    workOrderTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetPriorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetPriorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetPriorities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetPriorities<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetPriorities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    maintenanceAssetTypeId?: string,
    productId?: string,
    modelProductId?: string,
    modelId?: string,
    maintenanceAssetId?: string,
    workOrderTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetPriorities<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetPriorities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetPriorities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ProductId: productId!,
            ModelProductId: modelProductId!,
            ModelId: modelId!,
            MaintenanceAssetId: maintenanceAssetId!,
            WorkOrderTypeId: workOrderTypeId!
          }
    );
  }
}
