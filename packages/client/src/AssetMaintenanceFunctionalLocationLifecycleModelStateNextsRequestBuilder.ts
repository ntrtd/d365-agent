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
import { AssetMaintenanceFunctionalLocationLifecycleModelStateNexts } from './AssetMaintenanceFunctionalLocationLifecycleModelStateNexts';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts} entity.
 */
export class AssetMaintenanceFunctionalLocationLifecycleModelStateNextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.lifecycleStateId}.
   * @param nextLifecycleModelId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.nextLifecycleModelId}.
   * @param nextLifecycleStateId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.nextLifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>,
    nextLifecycleModelId: DeserializedType<T, 'Edm.String'>,
    nextLifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
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
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.lifecycleStateId}.
   * @param nextLifecycleModelId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.nextLifecycleModelId}.
   * @param nextLifecycleStateId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.nextLifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts`.
   */
  delete(
    dataAreaId: string,
    lifecycleModelId: string,
    lifecycleStateId: string,
    nextLifecycleModelId: string,
    nextLifecycleStateId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStateNexts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleModelId?: string,
    lifecycleStateId?: string,
    nextLifecycleModelId?: string,
    nextLifecycleStateId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationLifecycleModelStateNexts
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
