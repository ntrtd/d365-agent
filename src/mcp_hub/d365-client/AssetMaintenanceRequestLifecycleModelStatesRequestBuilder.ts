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
import { AssetMaintenanceRequestLifecycleModelStates } from './AssetMaintenanceRequestLifecycleModelStates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequestLifecycleModelStates} entity.
 */
export class AssetMaintenanceRequestLifecycleModelStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRequestLifecycleModelStates<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequestLifecycleModelStates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequestLifecycleModelStates` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequestLifecycleModelStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequestLifecycleModelStates`.
   */
  create(
    entity: AssetMaintenanceRequestLifecycleModelStates<T>
  ): CreateRequestBuilder<AssetMaintenanceRequestLifecycleModelStates<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequestLifecycleModelStates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleModelStates.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStates.lifecycleStateId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStates.lifecycleModelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequestLifecycleModelStates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRequestLifecycleModelStates<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleStateId: lifecycleStateId,
      LifecycleModelId: lifecycleModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequestLifecycleModelStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequestLifecycleModelStates`.
   */
  update(
    entity: AssetMaintenanceRequestLifecycleModelStates<T>
  ): UpdateRequestBuilder<AssetMaintenanceRequestLifecycleModelStates<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleModelStates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleModelStates.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStates.lifecycleStateId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStates.lifecycleModelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleModelStates`.
   */
  delete(
    dataAreaId: string,
    lifecycleStateId: string,
    lifecycleModelId: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestLifecycleModelStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleModelStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleModelStates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequestLifecycleModelStates<T>
  ): DeleteRequestBuilder<AssetMaintenanceRequestLifecycleModelStates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleStateId?: string,
    lifecycleModelId?: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestLifecycleModelStates<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRequestLifecycleModelStates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleStateId: lifecycleStateId!,
            LifecycleModelId: lifecycleModelId!
          }
    );
  }
}
