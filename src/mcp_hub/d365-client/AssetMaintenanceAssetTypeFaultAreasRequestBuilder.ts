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
import { AssetMaintenanceAssetTypeFaultAreas } from './AssetMaintenanceAssetTypeFaultAreas';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeFaultAreas} entity.
 */
export class AssetMaintenanceAssetTypeFaultAreasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeFaultAreas` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeFaultAreas` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeFaultAreas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeFaultAreas`.
   */
  create(
    entity: AssetMaintenanceAssetTypeFaultAreas<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeFaultAreas` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultAreas.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeFaultAreas.maintenanceAssetTypeId}.
   * @param faultAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultAreas.faultAreaId}.
   * @param faultSymptomId Key property. See {@link AssetMaintenanceAssetTypeFaultAreas.faultSymptomId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeFaultAreas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    faultAreaId: DeserializedType<T, 'Edm.String'>,
    faultSymptomId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeFaultAreas<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      FaultAreaId: faultAreaId,
      FaultSymptomId: faultSymptomId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeFaultAreas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeFaultAreas`.
   */
  update(
    entity: AssetMaintenanceAssetTypeFaultAreas<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeFaultAreas`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultAreas.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeFaultAreas.maintenanceAssetTypeId}.
   * @param faultAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultAreas.faultAreaId}.
   * @param faultSymptomId Key property. See {@link AssetMaintenanceAssetTypeFaultAreas.faultSymptomId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeFaultAreas`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    faultAreaId: string,
    faultSymptomId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeFaultAreas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeFaultAreas` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeFaultAreas<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    faultAreaId?: string,
    faultSymptomId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultAreas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeFaultAreas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            FaultAreaId: faultAreaId!,
            FaultSymptomId: faultSymptomId!
          }
    );
  }
}
