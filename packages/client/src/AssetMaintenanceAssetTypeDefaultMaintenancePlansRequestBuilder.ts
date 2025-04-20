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
import { AssetMaintenanceAssetTypeDefaultMaintenancePlans } from './AssetMaintenanceAssetTypeDefaultMaintenancePlans';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans} entity.
 */
export class AssetMaintenanceAssetTypeDefaultMaintenancePlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeDefaultMaintenancePlans` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeDefaultMaintenancePlans` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeDefaultMaintenancePlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeDefaultMaintenancePlans`.
   */
  create(
    entity: AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>
  ): CreateRequestBuilder<
    AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeDefaultMaintenancePlans` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.modelProductId}.
   * @param maintenanceAssetTypeSetupModelId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.maintenanceAssetTypeSetupModelId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.maintenancePlanId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeDefaultMaintenancePlans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeSetupModelId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      ProductId: productId,
      ModelProductId: modelProductId,
      MaintenanceAssetTypeSetupModelId: maintenanceAssetTypeSetupModelId,
      MaintenancePlanId: maintenancePlanId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeDefaultMaintenancePlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeDefaultMaintenancePlans`.
   */
  update(
    entity: AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeDefaultMaintenancePlans`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.modelProductId}.
   * @param maintenanceAssetTypeSetupModelId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.maintenanceAssetTypeSetupModelId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceAssetTypeDefaultMaintenancePlans.maintenancePlanId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeDefaultMaintenancePlans`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    productId: string,
    modelProductId: string,
    maintenanceAssetTypeSetupModelId: string,
    maintenancePlanId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeDefaultMaintenancePlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeDefaultMaintenancePlans` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    productId?: string,
    modelProductId?: string,
    maintenanceAssetTypeSetupModelId?: string,
    maintenancePlanId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceAssetTypeDefaultMaintenancePlans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ProductId: productId!,
            ModelProductId: modelProductId!,
            MaintenanceAssetTypeSetupModelId: maintenanceAssetTypeSetupModelId!,
            MaintenancePlanId: maintenancePlanId!
          }
    );
  }
}
