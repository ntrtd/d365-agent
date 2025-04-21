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
import { AssetMaintenanceRequestLifecycleModelStateNextsV2 } from './AssetMaintenanceRequestLifecycleModelStateNextsV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequestLifecycleModelStateNextsV2} entity.
 */
export class AssetMaintenanceRequestLifecycleModelStateNextsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequestLifecycleModelStateNextsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequestLifecycleModelStateNextsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequestLifecycleModelStateNextsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequestLifecycleModelStateNextsV2`.
   */
  create(
    entity: AssetMaintenanceRequestLifecycleModelStateNextsV2<T>
  ): CreateRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequestLifecycleModelStateNextsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.lifecycleStateId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.lifecycleModelId}.
   * @param nextLifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.nextLifecycleStateId}.
   * @param nextLifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.nextLifecycleModelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequestLifecycleModelStateNextsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>,
    nextLifecycleStateId: DeserializedType<T, 'Edm.String'>,
    nextLifecycleModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
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
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequestLifecycleModelStateNextsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequestLifecycleModelStateNextsV2`.
   */
  update(
    entity: AssetMaintenanceRequestLifecycleModelStateNextsV2<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleModelStateNextsV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.lifecycleStateId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.lifecycleModelId}.
   * @param nextLifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.nextLifecycleStateId}.
   * @param nextLifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModelStateNextsV2.nextLifecycleModelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleModelStateNextsV2`.
   */
  delete(
    dataAreaId: string,
    lifecycleStateId: string,
    lifecycleModelId: string,
    nextLifecycleStateId: string,
    nextLifecycleModelId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleModelStateNextsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleModelStateNextsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequestLifecycleModelStateNextsV2<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleStateId?: string,
    lifecycleModelId?: string,
    nextLifecycleStateId?: string,
    nextLifecycleModelId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceRequestLifecycleModelStateNextsV2
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
