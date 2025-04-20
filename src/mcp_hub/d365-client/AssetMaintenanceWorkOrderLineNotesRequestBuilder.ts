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
import { AssetMaintenanceWorkOrderLineNotes } from './AssetMaintenanceWorkOrderLineNotes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLineNotes} entity.
 */
export class AssetMaintenanceWorkOrderLineNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLineNotes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLineNotes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLineNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLineNotes`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLineNotes<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLineNotes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineNotes.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineNotes.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineNotes.workOrderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLineNotes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkOrderId: workOrderId,
        WorkOrderLineNumber: workOrderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLineNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLineNotes`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLineNotes<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineNotes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineNotes.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineNotes.workOrderId}.
   * @param workOrderLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineNotes.workOrderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineNotes`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    workOrderLineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineNotes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLineNotes<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    workOrderLineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkOrderLineNotes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLineNotes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            WorkOrderLineNumber: workOrderLineNumber!
          }
    );
  }
}
