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
import { AssetMaintenanceWorkOrderLifecycleModelStateNexts } from './AssetMaintenanceWorkOrderLifecycleModelStateNexts';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts} entity.
 */
export class AssetMaintenanceWorkOrderLifecycleModelStateNextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLifecycleModelStateNexts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLifecycleModelStateNexts` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLifecycleModelStateNexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLifecycleModelStateNexts`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>
  ): CreateRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLifecycleModelStateNexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.lifecycleStateId}.
   * @param nextLifecycleModelId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.nextLifecycleModelId}.
   * @param nextLifecycleStateId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.nextLifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLifecycleModelStateNexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>,
    nextLifecycleModelId: DeserializedType<T, 'Edm.String'>,
    nextLifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleModelId: lifecycleModelId,
      LifecycleStateId: lifecycleStateId,
      NextLifecycleModelId: nextLifecycleModelId,
      NextLifecycleStateId: nextLifecycleStateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLifecycleModelStateNexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLifecycleModelStateNexts`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLifecycleModelStateNexts`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.lifecycleStateId}.
   * @param nextLifecycleModelId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.nextLifecycleModelId}.
   * @param nextLifecycleStateId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModelStateNexts.nextLifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLifecycleModelStateNexts`.
   */
  delete(
    dataAreaId: string,
    lifecycleModelId: string,
    lifecycleStateId: string,
    nextLifecycleModelId: string,
    nextLifecycleStateId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLifecycleModelStateNexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLifecycleModelStateNexts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleModelId?: string,
    lifecycleStateId?: string,
    nextLifecycleModelId?: string,
    nextLifecycleStateId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceWorkOrderLifecycleModelStateNexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleModelId: lifecycleModelId!,
            LifecycleStateId: lifecycleStateId!,
            NextLifecycleModelId: nextLifecycleModelId!,
            NextLifecycleStateId: nextLifecycleStateId!
          }
    );
  }
}
