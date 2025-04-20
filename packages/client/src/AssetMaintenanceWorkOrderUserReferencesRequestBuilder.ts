/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { AssetMaintenanceWorkOrderUserReferences } from './AssetMaintenanceWorkOrderUserReferences';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderUserReferences} entity.
 */
export class AssetMaintenanceWorkOrderUserReferencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderUserReferences<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderUserReferences` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderUserReferences` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderUserReferences<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderUserReferences<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderUserReferences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderUserReferences`.
   */
  create(
    entity: AssetMaintenanceWorkOrderUserReferences<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderUserReferences<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderUserReferences<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderUserReferences` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderUserReferences.dataAreaId}.
   * @param jobScheduledToWorkerPersonnelNumber Key property. See {@link AssetMaintenanceWorkOrderUserReferences.jobScheduledToWorkerPersonnelNumber}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderUserReferences.workOrderId}.
   * @param jobLineNumber Key property. See {@link AssetMaintenanceWorkOrderUserReferences.jobLineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderUserReferences` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jobScheduledToWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    jobLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderUserReferences<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderUserReferences<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JobScheduledToWorkerPersonnelNumber: jobScheduledToWorkerPersonnelNumber,
      WorkOrderId: workOrderId,
      JobLineNumber: jobLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderUserReferences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderUserReferences`.
   */
  update(
    entity: AssetMaintenanceWorkOrderUserReferences<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderUserReferences<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderUserReferences<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderUserReferences`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderUserReferences.dataAreaId}.
   * @param jobScheduledToWorkerPersonnelNumber Key property. See {@link AssetMaintenanceWorkOrderUserReferences.jobScheduledToWorkerPersonnelNumber}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderUserReferences.workOrderId}.
   * @param jobLineNumber Key property. See {@link AssetMaintenanceWorkOrderUserReferences.jobLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderUserReferences`.
   */
  delete(
    dataAreaId: string,
    jobScheduledToWorkerPersonnelNumber: string,
    workOrderId: string,
    jobLineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderUserReferences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderUserReferences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderUserReferences` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderUserReferences<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderUserReferences<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jobScheduledToWorkerPersonnelNumber?: string,
    workOrderId?: string,
    jobLineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderUserReferences<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderUserReferences<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderUserReferences
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JobScheduledToWorkerPersonnelNumber:
              jobScheduledToWorkerPersonnelNumber!,
            WorkOrderId: workOrderId!,
            JobLineNumber: jobLineNumber!
          }
    );
  }
}
