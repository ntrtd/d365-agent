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
import { AssetMaintenanceUnplannedWorkOrderLines } from './AssetMaintenanceUnplannedWorkOrderLines';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
 */
export class AssetMaintenanceUnplannedWorkOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceUnplannedWorkOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceUnplannedWorkOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceUnplannedWorkOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceUnplannedWorkOrderLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceUnplannedWorkOrderLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceUnplannedWorkOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceUnplannedWorkOrderLines`.
   */
  create(
    entity: AssetMaintenanceUnplannedWorkOrderLines<T>
  ): CreateRequestBuilder<AssetMaintenanceUnplannedWorkOrderLines<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceUnplannedWorkOrderLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceUnplannedWorkOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceUnplannedWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceUnplannedWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceUnplannedWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceUnplannedWorkOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenanceUnplannedWorkOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceUnplannedWorkOrderLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderId: workOrderId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceUnplannedWorkOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceUnplannedWorkOrderLines`.
   */
  update(
    entity: AssetMaintenanceUnplannedWorkOrderLines<T>
  ): UpdateRequestBuilder<AssetMaintenanceUnplannedWorkOrderLines<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceUnplannedWorkOrderLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceUnplannedWorkOrderLines`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceUnplannedWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceUnplannedWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceUnplannedWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceUnplannedWorkOrderLines`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceUnplannedWorkOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceUnplannedWorkOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceUnplannedWorkOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceUnplannedWorkOrderLines<T>
  ): DeleteRequestBuilder<AssetMaintenanceUnplannedWorkOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceUnplannedWorkOrderLines<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceUnplannedWorkOrderLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceUnplannedWorkOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            LineNumber: lineNumber!
          }
    );
  }
}
