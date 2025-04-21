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
import { AssetMaintenanceWorkOrderLifecycleStates } from './AssetMaintenanceWorkOrderLifecycleStates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLifecycleStates} entity.
 */
export class AssetMaintenanceWorkOrderLifecycleStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLifecycleStates<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLifecycleStates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLifecycleStates` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleStates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleStates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLifecycleStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLifecycleStates`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLifecycleStates<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLifecycleStates<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLifecycleStates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLifecycleStates.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceWorkOrderLifecycleStates.lifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLifecycleStates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLifecycleStates<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleStates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleStateId: lifecycleStateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLifecycleStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLifecycleStates`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLifecycleStates<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLifecycleStates<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLifecycleStates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLifecycleStates.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceWorkOrderLifecycleStates.lifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLifecycleStates`.
   */
  delete(
    dataAreaId: string,
    lifecycleStateId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLifecycleStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLifecycleStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLifecycleStates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLifecycleStates<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLifecycleStates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleStateId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLifecycleStates<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleStates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLifecycleStates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleStateId: lifecycleStateId!
          }
    );
  }
}
