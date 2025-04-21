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
import { AssetMaintenanceWorkerGroupMembers } from './AssetMaintenanceWorkerGroupMembers';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkerGroupMembers} entity.
 */
export class AssetMaintenanceWorkerGroupMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkerGroupMembers` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkerGroupMembers` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkerGroupMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkerGroupMembers`.
   */
  create(
    entity: AssetMaintenanceWorkerGroupMembers<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkerGroupMembers` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkerGroupMembers.dataAreaId}.
   * @param workerGroupId Key property. See {@link AssetMaintenanceWorkerGroupMembers.workerGroupId}.
   * @param workerPersonnelNumber Key property. See {@link AssetMaintenanceWorkerGroupMembers.workerPersonnelNumber}.
   * @param validFrom Key property. See {@link AssetMaintenanceWorkerGroupMembers.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceWorkerGroupMembers.validTo}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkerGroupMembers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workerGroupId: DeserializedType<T, 'Edm.String'>,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkerGroupId: workerGroupId,
        WorkerPersonnelNumber: workerPersonnelNumber,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkerGroupMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkerGroupMembers`.
   */
  update(
    entity: AssetMaintenanceWorkerGroupMembers<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkerGroupMembers`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkerGroupMembers.dataAreaId}.
   * @param workerGroupId Key property. See {@link AssetMaintenanceWorkerGroupMembers.workerGroupId}.
   * @param workerPersonnelNumber Key property. See {@link AssetMaintenanceWorkerGroupMembers.workerPersonnelNumber}.
   * @param validFrom Key property. See {@link AssetMaintenanceWorkerGroupMembers.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceWorkerGroupMembers.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkerGroupMembers`.
   */
  delete(
    dataAreaId: string,
    workerGroupId: string,
    workerPersonnelNumber: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkerGroupMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkerGroupMembers` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkerGroupMembers<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workerGroupId?: string,
    workerPersonnelNumber?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkerGroupMembers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkerGroupMembers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkerGroupId: workerGroupId!,
            WorkerPersonnelNumber: workerPersonnelNumber!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
