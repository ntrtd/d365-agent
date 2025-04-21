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
import { AssetMaintenanceAssetMaintenancePlans } from './AssetMaintenanceAssetMaintenancePlans';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetMaintenancePlans} entity.
 */
export class AssetMaintenanceAssetMaintenancePlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetMaintenancePlans<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetMaintenancePlans` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetMaintenancePlans` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetMaintenancePlans<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetMaintenancePlans<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetMaintenancePlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetMaintenancePlans`.
   */
  create(
    entity: AssetMaintenanceAssetMaintenancePlans<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetMaintenancePlans<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetMaintenancePlans<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetMaintenancePlans` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetMaintenancePlans.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetMaintenancePlans.maintenanceAssetId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceAssetMaintenancePlans.maintenancePlanId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetMaintenancePlans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetMaintenancePlans<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetMaintenancePlans<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetId: maintenanceAssetId,
      MaintenancePlanId: maintenancePlanId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetMaintenancePlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetMaintenancePlans`.
   */
  update(
    entity: AssetMaintenanceAssetMaintenancePlans<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetMaintenancePlans<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetMaintenancePlans<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetMaintenancePlans`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetMaintenancePlans.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetMaintenancePlans.maintenanceAssetId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceAssetMaintenancePlans.maintenancePlanId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetMaintenancePlans`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string,
    maintenancePlanId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetMaintenancePlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetMaintenancePlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetMaintenancePlans` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetMaintenancePlans<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetMaintenancePlans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string,
    maintenancePlanId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetMaintenancePlans<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetMaintenancePlans<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetMaintenancePlans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!,
            MaintenancePlanId: maintenancePlanId!
          }
    );
  }
}
