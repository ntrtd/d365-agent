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
import { AssetMaintenanceAssetTypeFaultSymptoms } from './AssetMaintenanceAssetTypeFaultSymptoms';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeFaultSymptoms} entity.
 */
export class AssetMaintenanceAssetTypeFaultSymptomsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeFaultSymptoms<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeFaultSymptoms` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeFaultSymptoms` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetTypeFaultSymptoms<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetTypeFaultSymptoms<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeFaultSymptoms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeFaultSymptoms`.
   */
  create(
    entity: AssetMaintenanceAssetTypeFaultSymptoms<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeFaultSymptoms<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetTypeFaultSymptoms<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeFaultSymptoms` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultSymptoms.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeFaultSymptoms.maintenanceAssetTypeId}.
   * @param faultSymptomId Key property. See {@link AssetMaintenanceAssetTypeFaultSymptoms.faultSymptomId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeFaultSymptoms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    faultSymptomId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetTypeFaultSymptoms<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeFaultSymptoms<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      FaultSymptomId: faultSymptomId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeFaultSymptoms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeFaultSymptoms`.
   */
  update(
    entity: AssetMaintenanceAssetTypeFaultSymptoms<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeFaultSymptoms<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetTypeFaultSymptoms<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeFaultSymptoms`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeFaultSymptoms.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeFaultSymptoms.maintenanceAssetTypeId}.
   * @param faultSymptomId Key property. See {@link AssetMaintenanceAssetTypeFaultSymptoms.faultSymptomId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeFaultSymptoms`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    faultSymptomId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultSymptoms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeFaultSymptoms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeFaultSymptoms` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeFaultSymptoms<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultSymptoms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    faultSymptomId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeFaultSymptoms<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetTypeFaultSymptoms<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeFaultSymptoms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            FaultSymptomId: faultSymptomId!
          }
    );
  }
}
