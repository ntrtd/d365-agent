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
import { AssetMaintenanceWorkersResponsible } from './AssetMaintenanceWorkersResponsible';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkersResponsible} entity.
 */
export class AssetMaintenanceWorkersResponsibleRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkersResponsible<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkersResponsible` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkersResponsible` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkersResponsible` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkersResponsible`.
   */
  create(
    entity: AssetMaintenanceWorkersResponsible<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkersResponsible` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkersResponsible.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceWorkersResponsible.maintenanceAssetTypeId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkersResponsible.maintenanceAssetId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceWorkersResponsible.jobGroupId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceWorkersResponsible.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceWorkersResponsible.jobVariantId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceWorkersResponsible.jobTradeId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceWorkersResponsible.functionalLocationId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkersResponsible` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    jobGroupId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>,
    jobVariantId: DeserializedType<T, 'Edm.String'>,
    jobTradeId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceAssetTypeId: maintenanceAssetTypeId,
        MaintenanceAssetId: maintenanceAssetId,
        JobGroupId: jobGroupId,
        JobTypeId: jobTypeId,
        JobVariantId: jobVariantId,
        JobTradeId: jobTradeId,
        FunctionalLocationId: functionalLocationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkersResponsible`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkersResponsible`.
   */
  update(
    entity: AssetMaintenanceWorkersResponsible<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkersResponsible`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkersResponsible.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceWorkersResponsible.maintenanceAssetTypeId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkersResponsible.maintenanceAssetId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceWorkersResponsible.jobGroupId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceWorkersResponsible.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceWorkersResponsible.jobVariantId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceWorkersResponsible.jobTradeId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceWorkersResponsible.functionalLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkersResponsible`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    maintenanceAssetId: string,
    jobGroupId: string,
    jobTypeId: string,
    jobVariantId: string,
    jobTradeId: string,
    functionalLocationId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkersResponsible`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkersResponsible` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkersResponsible<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    maintenanceAssetId?: string,
    jobGroupId?: string,
    jobTypeId?: string,
    jobVariantId?: string,
    jobTradeId?: string,
    functionalLocationId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkersResponsible<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkersResponsible
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            MaintenanceAssetId: maintenanceAssetId!,
            JobGroupId: jobGroupId!,
            JobTypeId: jobTypeId!,
            JobVariantId: jobVariantId!,
            JobTradeId: jobTradeId!,
            FunctionalLocationId: functionalLocationId!
          }
    );
  }
}
