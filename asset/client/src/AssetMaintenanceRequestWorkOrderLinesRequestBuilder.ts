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
import { AssetMaintenanceRequestWorkOrderLines } from './AssetMaintenanceRequestWorkOrderLines';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequestWorkOrderLines} entity.
 */
export class AssetMaintenanceRequestWorkOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRequestWorkOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequestWorkOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequestWorkOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceRequestWorkOrderLines<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceRequestWorkOrderLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequestWorkOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequestWorkOrderLines`.
   */
  create(
    entity: AssetMaintenanceRequestWorkOrderLines<T>
  ): CreateRequestBuilder<AssetMaintenanceRequestWorkOrderLines<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceRequestWorkOrderLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequestWorkOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceRequestWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceRequestWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequestWorkOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRequestWorkOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceRequestWorkOrderLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderId: workOrderId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequestWorkOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequestWorkOrderLines`.
   */
  update(
    entity: AssetMaintenanceRequestWorkOrderLines<T>
  ): UpdateRequestBuilder<AssetMaintenanceRequestWorkOrderLines<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceRequestWorkOrderLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestWorkOrderLines`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceRequestWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceRequestWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestWorkOrderLines`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceRequestWorkOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestWorkOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestWorkOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequestWorkOrderLines<T>
  ): DeleteRequestBuilder<AssetMaintenanceRequestWorkOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceRequestWorkOrderLines<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceRequestWorkOrderLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRequestWorkOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            LineNumber: lineNumber!
          }
    );
  }
}
