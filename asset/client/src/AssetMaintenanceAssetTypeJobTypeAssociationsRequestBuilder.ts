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
import { AssetMaintenanceAssetTypeJobTypeAssociations } from './AssetMaintenanceAssetTypeJobTypeAssociations';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeJobTypeAssociations} entity.
 */
export class AssetMaintenanceAssetTypeJobTypeAssociationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeJobTypeAssociations<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeJobTypeAssociations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeJobTypeAssociations` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceAssetTypeJobTypeAssociations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetTypeJobTypeAssociations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeJobTypeAssociations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeJobTypeAssociations`.
   */
  create(
    entity: AssetMaintenanceAssetTypeJobTypeAssociations<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeJobTypeAssociations<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetTypeJobTypeAssociations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeJobTypeAssociations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeJobTypeAssociations.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeJobTypeAssociations.maintenanceAssetTypeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceAssetTypeJobTypeAssociations.jobTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeJobTypeAssociations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceAssetTypeJobTypeAssociations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeJobTypeAssociations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      JobTypeId: jobTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeJobTypeAssociations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeJobTypeAssociations`.
   */
  update(
    entity: AssetMaintenanceAssetTypeJobTypeAssociations<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeJobTypeAssociations<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetTypeJobTypeAssociations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeJobTypeAssociations`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeJobTypeAssociations.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeJobTypeAssociations.maintenanceAssetTypeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceAssetTypeJobTypeAssociations.jobTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeJobTypeAssociations`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    jobTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeJobTypeAssociations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeJobTypeAssociations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeJobTypeAssociations` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeJobTypeAssociations<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeJobTypeAssociations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    jobTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeJobTypeAssociations<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetTypeJobTypeAssociations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeJobTypeAssociations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            JobTypeId: jobTypeId!
          }
    );
  }
}
