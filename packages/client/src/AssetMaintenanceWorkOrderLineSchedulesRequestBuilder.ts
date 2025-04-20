/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { AssetMaintenanceWorkOrderLineSchedules } from './AssetMaintenanceWorkOrderLineSchedules';
import { EntAssetScheduleType } from './EntAssetScheduleType';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLineSchedules} entity.
 */
export class AssetMaintenanceWorkOrderLineSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLineSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLineSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLineSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderLineSchedules<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLineSchedules<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLineSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLineSchedules`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLineSchedules<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLineSchedules<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLineSchedules<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLineSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.workOrderLineNumber}.
   * @param scheduleType Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.scheduleType}.
   * @param workerPersonnelNumber Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.workerPersonnelNumber}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.maintenanceAssetId}.
   * @param wrkCtrId Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.wrkCtrId}.
   * @param scheduledStartDateTime Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.scheduledStartDateTime}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLineSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>,
    scheduleType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EntAssetScheduleType'
    >,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    wrkCtrId: DeserializedType<T, 'Edm.String'>,
    scheduledStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLineSchedules<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLineSchedules<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderId: workOrderId,
      WorkOrderLineNumber: workOrderLineNumber,
      ScheduleType: scheduleType,
      WorkerPersonnelNumber: workerPersonnelNumber,
      MaintenanceAssetId: maintenanceAssetId,
      WrkCtrId: wrkCtrId,
      ScheduledStartDateTime: scheduledStartDateTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLineSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLineSchedules`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLineSchedules<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLineSchedules<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLineSchedules<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineSchedules`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.workOrderLineNumber}.
   * @param scheduleType Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.scheduleType}.
   * @param workerPersonnelNumber Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.workerPersonnelNumber}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.maintenanceAssetId}.
   * @param wrkCtrId Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.wrkCtrId}.
   * @param scheduledStartDateTime Key property. See {@link AssetMaintenanceWorkOrderLineSchedules.scheduledStartDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineSchedules`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    workOrderLineNumber: BigNumber,
    scheduleType: EntAssetScheduleType,
    workerPersonnelNumber: string,
    maintenanceAssetId: string,
    wrkCtrId: string,
    scheduledStartDateTime: Moment
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLineSchedules<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    workOrderLineNumber?: BigNumber,
    scheduleType?: EntAssetScheduleType,
    workerPersonnelNumber?: string,
    maintenanceAssetId?: string,
    wrkCtrId?: string,
    scheduledStartDateTime?: Moment
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineSchedules<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLineSchedules<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLineSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            WorkOrderLineNumber: workOrderLineNumber!,
            ScheduleType: scheduleType!,
            WorkerPersonnelNumber: workerPersonnelNumber!,
            MaintenanceAssetId: maintenanceAssetId!,
            WrkCtrId: wrkCtrId!,
            ScheduledStartDateTime: scheduledStartDateTime!
          }
    );
  }
}
