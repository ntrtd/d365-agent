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
import { AssetMaintenanceFunctionalLocationAllowedByObjectTypes } from './AssetMaintenanceFunctionalLocationAllowedByObjectTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationAllowedByObjectTypes} entity.
 */
export class AssetMaintenanceFunctionalLocationAllowedByObjectTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationAllowedByObjectTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationAllowedByObjectTypes` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationAllowedByObjectTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationAllowedByObjectTypes`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationAllowedByObjectTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationAllowedByObjectTypes.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAllowedByObjectTypes.functionalLocationTypeId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAllowedByObjectTypes.maintenanceAssetTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationAllowedByObjectTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationTypeId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationTypeId: functionalLocationTypeId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationAllowedByObjectTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationAllowedByObjectTypes`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationAllowedByObjectTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationAllowedByObjectTypes.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAllowedByObjectTypes.functionalLocationTypeId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAllowedByObjectTypes.maintenanceAssetTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationAllowedByObjectTypes`.
   */
  delete(
    dataAreaId: string,
    functionalLocationTypeId: string,
    maintenanceAssetTypeId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationAllowedByObjectTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationAllowedByObjectTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationTypeId?: string,
    maintenanceAssetTypeId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationTypeId: functionalLocationTypeId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!
          }
    );
  }
}
