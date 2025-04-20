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
import { AssetMaintenanceRequestLifecycleModelStateNexts } from './AssetMaintenanceRequestLifecycleModelStateNexts';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequestLifecycleModelStateNexts} entity.
 */
export class AssetMaintenanceRequestLifecycleModelStateNextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceRequestLifecycleModelStateNexts<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequestLifecycleModelStateNexts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequestLifecycleModelStateNexts` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNexts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNexts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequestLifecycleModelStateNexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequestLifecycleModelStateNexts`.
   */
  create(
    entity: AssetMaintenanceRequestLifecycleModelStateNexts<T>
  ): CreateRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNexts<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNexts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequestLifecycleModelStateNexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.lifecycleStateId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.lifecycleModelId}.
   * @param nextLifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.nextLifecycleStateId}.
   * @param nextLifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.nextLifecycleModelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequestLifecycleModelStateNexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>,
    nextLifecycleStateId: DeserializedType<T, 'Edm.String'>,
    nextLifecycleModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNexts<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNexts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleStateId: lifecycleStateId,
      LifecycleModelId: lifecycleModelId,
      NextLifecycleStateId: nextLifecycleStateId,
      NextLifecycleModelId: nextLifecycleModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequestLifecycleModelStateNexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequestLifecycleModelStateNexts`.
   */
  update(
    entity: AssetMaintenanceRequestLifecycleModelStateNexts<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNexts<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNexts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleModelStateNexts`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.lifecycleStateId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.lifecycleModelId}.
   * @param nextLifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.nextLifecycleStateId}.
   * @param nextLifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNexts.nextLifecycleModelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleModelStateNexts`.
   */
  delete(
    dataAreaId: string,
    lifecycleStateId: string,
    lifecycleModelId: string,
    nextLifecycleStateId: string,
    nextLifecycleModelId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNexts<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleModelStateNexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleModelStateNexts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequestLifecycleModelStateNexts<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNexts<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleStateId?: string,
    lifecycleModelId?: string,
    nextLifecycleStateId?: string,
    nextLifecycleModelId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNexts<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNexts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceRequestLifecycleModelStateNexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleStateId: lifecycleStateId!,
            LifecycleModelId: lifecycleModelId!,
            NextLifecycleStateId: nextLifecycleStateId!,
            NextLifecycleModelId: nextLifecycleModelId!
          }
    );
  }
}
