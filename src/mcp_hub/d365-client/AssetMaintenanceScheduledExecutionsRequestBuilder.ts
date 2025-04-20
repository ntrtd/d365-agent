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
import { AssetMaintenanceScheduledExecutions } from './AssetMaintenanceScheduledExecutions';
import { EntAssetScheduledExecutionTimePeriod } from './EntAssetScheduledExecutionTimePeriod';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceScheduledExecutions} entity.
 */
export class AssetMaintenanceScheduledExecutionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceScheduledExecutions<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceScheduledExecutions` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceScheduledExecutions` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceScheduledExecutions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceScheduledExecutions`.
   */
  create(
    entity: AssetMaintenanceScheduledExecutions<T>
  ): CreateRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceScheduledExecutions` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceScheduledExecutions.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceScheduledExecutions.workOrderTypeId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceScheduledExecutions.maintenanceAssetTypeId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceScheduledExecutions.jobGroupId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceScheduledExecutions.jobTypeId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceScheduledExecutions.jobTradeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceScheduledExecutions.jobVariantId}.
   * @param serviceLevel Key property. See {@link AssetMaintenanceScheduledExecutions.serviceLevel}.
   * @param scheduledExecution Key property. See {@link AssetMaintenanceScheduledExecutions.scheduledExecution}.
   * @param modelId Key property. See {@link AssetMaintenanceScheduledExecutions.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceScheduledExecutions.modelProductId}.
   * @param productId Key property. See {@link AssetMaintenanceScheduledExecutions.productId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceScheduledExecutions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderTypeId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    jobGroupId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>,
    jobTradeId: DeserializedType<T, 'Edm.String'>,
    jobVariantId: DeserializedType<T, 'Edm.String'>,
    serviceLevel: DeserializedType<T, 'Edm.Int32'>,
    scheduledExecution: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EntAssetScheduledExecutionTimePeriod'
    >,
    modelId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceScheduledExecutions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderTypeId: workOrderTypeId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      JobGroupId: jobGroupId,
      JobTypeId: jobTypeId,
      JobTradeId: jobTradeId,
      JobVariantId: jobVariantId,
      ServiceLevel: serviceLevel,
      ScheduledExecution: scheduledExecution,
      ModelId: modelId,
      ModelProductId: modelProductId,
      ProductId: productId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceScheduledExecutions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceScheduledExecutions`.
   */
  update(
    entity: AssetMaintenanceScheduledExecutions<T>
  ): UpdateRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceScheduledExecutions`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceScheduledExecutions.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceScheduledExecutions.workOrderTypeId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceScheduledExecutions.maintenanceAssetTypeId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceScheduledExecutions.jobGroupId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceScheduledExecutions.jobTypeId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceScheduledExecutions.jobTradeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceScheduledExecutions.jobVariantId}.
   * @param serviceLevel Key property. See {@link AssetMaintenanceScheduledExecutions.serviceLevel}.
   * @param scheduledExecution Key property. See {@link AssetMaintenanceScheduledExecutions.scheduledExecution}.
   * @param modelId Key property. See {@link AssetMaintenanceScheduledExecutions.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceScheduledExecutions.modelProductId}.
   * @param productId Key property. See {@link AssetMaintenanceScheduledExecutions.productId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceScheduledExecutions`.
   */
  delete(
    dataAreaId: string,
    workOrderTypeId: string,
    maintenanceAssetTypeId: string,
    jobGroupId: string,
    jobTypeId: string,
    jobTradeId: string,
    jobVariantId: string,
    serviceLevel: number,
    scheduledExecution: EntAssetScheduledExecutionTimePeriod,
    modelId: string,
    modelProductId: string,
    productId: string
  ): DeleteRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceScheduledExecutions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceScheduledExecutions` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceScheduledExecutions<T>
  ): DeleteRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderTypeId?: string,
    maintenanceAssetTypeId?: string,
    jobGroupId?: string,
    jobTypeId?: string,
    jobTradeId?: string,
    jobVariantId?: string,
    serviceLevel?: number,
    scheduledExecution?: EntAssetScheduledExecutionTimePeriod,
    modelId?: string,
    modelProductId?: string,
    productId?: string
  ): DeleteRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceScheduledExecutions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceScheduledExecutions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderTypeId: workOrderTypeId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            JobGroupId: jobGroupId!,
            JobTypeId: jobTypeId!,
            JobTradeId: jobTradeId!,
            JobVariantId: jobVariantId!,
            ServiceLevel: serviceLevel!,
            ScheduledExecution: scheduledExecution!,
            ModelId: modelId!,
            ModelProductId: modelProductId!,
            ProductId: productId!
          }
    );
  }
}
