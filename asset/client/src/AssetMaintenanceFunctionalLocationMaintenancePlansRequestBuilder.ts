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
import { AssetMaintenanceFunctionalLocationMaintenancePlans } from './AssetMaintenanceFunctionalLocationMaintenancePlans';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationMaintenancePlans} entity.
 */
export class AssetMaintenanceFunctionalLocationMaintenancePlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationMaintenancePlans` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationMaintenancePlans` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationMaintenancePlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationMaintenancePlans`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationMaintenancePlans<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationMaintenancePlans` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.maintenanceAssetTypeId}.
   * @param modelId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.modelId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.maintenancePlanId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationMaintenancePlans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationId: functionalLocationId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      ModelId: modelId,
      MaintenancePlanId: maintenancePlanId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationMaintenancePlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationMaintenancePlans`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationMaintenancePlans<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationMaintenancePlans`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.maintenanceAssetTypeId}.
   * @param modelId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.modelId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceFunctionalLocationMaintenancePlans.maintenancePlanId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationMaintenancePlans`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string,
    maintenanceAssetTypeId: string,
    modelId: string,
    maintenancePlanId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationMaintenancePlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationMaintenancePlans` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationMaintenancePlans<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    maintenanceAssetTypeId?: string,
    modelId?: string,
    maintenancePlanId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationMaintenancePlans<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationMaintenancePlans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ModelId: modelId!,
            MaintenancePlanId: maintenancePlanId!
          }
    );
  }
}
