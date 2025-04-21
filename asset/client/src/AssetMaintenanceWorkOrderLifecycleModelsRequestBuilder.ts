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
import { AssetMaintenanceWorkOrderLifecycleModels } from './AssetMaintenanceWorkOrderLifecycleModels';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLifecycleModels} entity.
 */
export class AssetMaintenanceWorkOrderLifecycleModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLifecycleModels<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLifecycleModels` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLifecycleModels` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderLifecycleModels<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModels<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLifecycleModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLifecycleModels`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLifecycleModels<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLifecycleModels<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLifecycleModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModels.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModels.lifecycleModelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLifecycleModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLifecycleModels<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModels<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleModelId: lifecycleModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLifecycleModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLifecycleModels`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLifecycleModels<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLifecycleModels<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLifecycleModels`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModels.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceWorkOrderLifecycleModels.lifecycleModelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLifecycleModels`.
   */
  delete(
    dataAreaId: string,
    lifecycleModelId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLifecycleModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLifecycleModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLifecycleModels` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLifecycleModels<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLifecycleModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleModelId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLifecycleModels<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLifecycleModels<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLifecycleModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleModelId: lifecycleModelId!
          }
    );
  }
}
