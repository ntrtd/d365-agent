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
import { AssetMaintenanceWorkOrderPoolRelations } from './AssetMaintenanceWorkOrderPoolRelations';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderPoolRelations} entity.
 */
export class AssetMaintenanceWorkOrderPoolRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderPoolRelations<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderPoolRelations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderPoolRelations` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderPoolRelations<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderPoolRelations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderPoolRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderPoolRelations`.
   */
  create(
    entity: AssetMaintenanceWorkOrderPoolRelations<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderPoolRelations<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderPoolRelations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderPoolRelations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderPoolRelations.dataAreaId}.
   * @param workOrderPoolId Key property. See {@link AssetMaintenanceWorkOrderPoolRelations.workOrderPoolId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderPoolRelations.workOrderId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderPoolRelations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderPoolId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderPoolRelations<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderPoolRelations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderPoolId: workOrderPoolId,
      WorkOrderId: workOrderId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderPoolRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderPoolRelations`.
   */
  update(
    entity: AssetMaintenanceWorkOrderPoolRelations<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderPoolRelations<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderPoolRelations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderPoolRelations`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderPoolRelations.dataAreaId}.
   * @param workOrderPoolId Key property. See {@link AssetMaintenanceWorkOrderPoolRelations.workOrderPoolId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderPoolRelations.workOrderId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderPoolRelations`.
   */
  delete(
    dataAreaId: string,
    workOrderPoolId: string,
    workOrderId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderPoolRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderPoolRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderPoolRelations` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderPoolRelations<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderPoolRelations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderPoolId?: string,
    workOrderId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderPoolRelations<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderPoolRelations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderPoolRelations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderPoolId: workOrderPoolId!,
            WorkOrderId: workOrderId!
          }
    );
  }
}
