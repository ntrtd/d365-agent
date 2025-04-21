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
import { AssetMaintenanceAssetTypeFaultTypes } from './AssetMaintenanceAssetTypeFaultTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeFaultTypes} entity.
 */
export class AssetMaintenanceAssetTypeFaultTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeFaultTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeFaultTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeFaultTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeFaultTypes`.
   */
  create(
    entity: AssetMaintenanceAssetTypeFaultTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeFaultTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.maintenanceAssetTypeId}.
   * @param faultSymptomId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.faultSymptomId}.
   * @param faultAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.faultAreaId}.
   * @param faultTypeId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.faultTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeFaultTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    faultSymptomId: DeserializedType<T, 'Edm.String'>,
    faultAreaId: DeserializedType<T, 'Edm.String'>,
    faultTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeFaultTypes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      FaultSymptomId: faultSymptomId,
      FaultAreaId: faultAreaId,
      FaultTypeId: faultTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeFaultTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeFaultTypes`.
   */
  update(
    entity: AssetMaintenanceAssetTypeFaultTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeFaultTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.maintenanceAssetTypeId}.
   * @param faultSymptomId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.faultSymptomId}.
   * @param faultAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.faultAreaId}.
   * @param faultTypeId Key property. See {@link AssetMaintenanceAssetTypeFaultTypes.faultTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeFaultTypes`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    faultSymptomId: string,
    faultAreaId: string,
    faultTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeFaultTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeFaultTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeFaultTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    faultSymptomId?: string,
    faultAreaId?: string,
    faultTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeFaultTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            FaultSymptomId: faultSymptomId!,
            FaultAreaId: faultAreaId!,
            FaultTypeId: faultTypeId!
          }
    );
  }
}
