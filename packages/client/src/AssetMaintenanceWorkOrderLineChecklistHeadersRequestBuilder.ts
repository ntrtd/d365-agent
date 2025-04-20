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
import { AssetMaintenanceWorkOrderLineChecklistHeaders } from './AssetMaintenanceWorkOrderLineChecklistHeaders';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLineChecklistHeaders} entity.
 */
export class AssetMaintenanceWorkOrderLineChecklistHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLineChecklistHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLineChecklistHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLineChecklistHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderLineChecklistHeaders<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklistHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLineChecklistHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLineChecklistHeaders`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLineChecklistHeaders<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLineChecklistHeaders<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklistHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLineChecklistHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineChecklistHeaders.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineChecklistHeaders.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineChecklistHeaders.workOrderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLineChecklistHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceWorkOrderLineChecklistHeaders<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklistHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderId: workOrderId,
      WorkOrderLineNumber: workOrderLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLineChecklistHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLineChecklistHeaders`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLineChecklistHeaders<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLineChecklistHeaders<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklistHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineChecklistHeaders`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineChecklistHeaders.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineChecklistHeaders.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineChecklistHeaders.workOrderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineChecklistHeaders`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    workOrderLineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineChecklistHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineChecklistHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineChecklistHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLineChecklistHeaders<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineChecklistHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    workOrderLineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineChecklistHeaders<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklistHeaders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceWorkOrderLineChecklistHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            WorkOrderLineNumber: workOrderLineNumber!
          }
    );
  }
}
