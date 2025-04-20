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
import { AssetMaintenanceAssetPrioritiesV2 } from './AssetMaintenanceAssetPrioritiesV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetPrioritiesV2} entity.
 */
export class AssetMaintenanceAssetPrioritiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetPrioritiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetPrioritiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetPrioritiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetPrioritiesV2`.
   */
  create(
    entity: AssetMaintenanceAssetPrioritiesV2<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetPrioritiesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.maintenanceAssetId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.workOrderTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetPrioritiesV2` entity based on its keys.
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
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T>(
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
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetPrioritiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetPrioritiesV2`.
   */
  update(
    entity: AssetMaintenanceAssetPrioritiesV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetPrioritiesV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.maintenanceAssetId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceAssetPrioritiesV2.workOrderTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetPrioritiesV2`.
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
  ): DeleteRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetPrioritiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetPrioritiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetPrioritiesV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    maintenanceAssetTypeId?: string,
    productId?: string,
    modelProductId?: string,
    modelId?: string,
    maintenanceAssetId?: string,
    workOrderTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetPrioritiesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetPrioritiesV2
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
