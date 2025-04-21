/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AssetMaintenanceWorkOrderParentProjects } from './AssetMaintenanceWorkOrderParentProjects';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderParentProjects} entity.
 */
export class AssetMaintenanceWorkOrderParentProjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderParentProjects<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderParentProjects` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderParentProjects` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderParentProjects<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderParentProjects<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderParentProjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderParentProjects`.
   */
  create(
    entity: AssetMaintenanceWorkOrderParentProjects<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderParentProjects<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderParentProjects<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderParentProjects` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.workOrderTypeId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.maintenanceAssetTypeId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.maintenanceAssetId}.
   * @param validFrom Key property. See {@link AssetMaintenanceWorkOrderParentProjects.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceWorkOrderParentProjects.validTo}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderParentProjects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderTypeId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderParentProjects<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderParentProjects<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderTypeId: workOrderTypeId,
      FunctionalLocationId: functionalLocationId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      MaintenanceAssetId: maintenanceAssetId,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderParentProjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderParentProjects`.
   */
  update(
    entity: AssetMaintenanceWorkOrderParentProjects<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderParentProjects<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderParentProjects<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderParentProjects`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.workOrderTypeId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.maintenanceAssetTypeId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkOrderParentProjects.maintenanceAssetId}.
   * @param validFrom Key property. See {@link AssetMaintenanceWorkOrderParentProjects.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceWorkOrderParentProjects.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderParentProjects`.
   */
  delete(
    dataAreaId: string,
    workOrderTypeId: string,
    functionalLocationId: string,
    maintenanceAssetTypeId: string,
    maintenanceAssetId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderParentProjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderParentProjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderParentProjects` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderParentProjects<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderParentProjects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderTypeId?: string,
    functionalLocationId?: string,
    maintenanceAssetTypeId?: string,
    maintenanceAssetId?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderParentProjects<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderParentProjects<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderParentProjects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderTypeId: workOrderTypeId!,
            FunctionalLocationId: functionalLocationId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            MaintenanceAssetId: maintenanceAssetId!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
