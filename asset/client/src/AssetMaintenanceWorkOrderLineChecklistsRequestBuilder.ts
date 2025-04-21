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
import { AssetMaintenanceWorkOrderLineChecklists } from './AssetMaintenanceWorkOrderLineChecklists';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLineChecklists} entity.
 */
export class AssetMaintenanceWorkOrderLineChecklistsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLineChecklists<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLineChecklists` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLineChecklists` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderLineChecklists<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklists<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLineChecklists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLineChecklists`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLineChecklists<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLineChecklists<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklists<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLineChecklists` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineChecklists.dataAreaId}.
   * @param externalLineNum Key property. See {@link AssetMaintenanceWorkOrderLineChecklists.externalLineNum}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineChecklists.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineChecklists.workOrderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLineChecklists` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    externalLineNum: DeserializedType<T, 'Edm.Decimal'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLineChecklists<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklists<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ExternalLineNum: externalLineNum,
      WorkOrderId: workOrderId,
      WorkOrderLineNumber: workOrderLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLineChecklists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLineChecklists`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLineChecklists<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLineChecklists<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklists<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineChecklists`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineChecklists.dataAreaId}.
   * @param externalLineNum Key property. See {@link AssetMaintenanceWorkOrderLineChecklists.externalLineNum}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineChecklists.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineChecklists.workOrderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineChecklists`.
   */
  delete(
    dataAreaId: string,
    externalLineNum: BigNumber,
    workOrderId: string,
    workOrderLineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineChecklists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineChecklists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineChecklists` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLineChecklists<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineChecklists<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    externalLineNum?: BigNumber,
    workOrderId?: string,
    workOrderLineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineChecklists<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLineChecklists<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLineChecklists
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExternalLineNum: externalLineNum!,
            WorkOrderId: workOrderId!,
            WorkOrderLineNumber: workOrderLineNumber!
          }
    );
  }
}
