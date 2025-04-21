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
import { AssetMaintenanceWorkOrderLifecycleModelStates } from './AssetMaintenanceWorkOrderLifecycleModelStates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLifecycleModelStates} entity.
 */
export class AssetMaintenanceWorkOrderLifecycleModelStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLifecycleModelStates<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLifecycleModelStates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLifecycleModelStates` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModelStates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLifecycleModelStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLifecycleModelStates`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLifecycleModelStates<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLifecycleModelStates<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLifecycleModelStates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStates.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStates.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStates.lifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLifecycleModelStates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModelStates<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleModelId: lifecycleModelId,
      LifecycleStateId: lifecycleStateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLifecycleModelStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLifecycleModelStates`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLifecycleModelStates<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLifecycleModelStates<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLifecycleModelStates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStates.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStates.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStates.lifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLifecycleModelStates`.
   */
  delete(
    dataAreaId: string,
    lifecycleModelId: string,
    lifecycleStateId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLifecycleModelStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLifecycleModelStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLifecycleModelStates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLifecycleModelStates<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLifecycleModelStates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleModelId?: string,
    lifecycleStateId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLifecycleModelStates<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceWorkOrderLifecycleModelStates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleModelId: lifecycleModelId!,
            LifecycleStateId: lifecycleStateId!
          }
    );
  }
}
