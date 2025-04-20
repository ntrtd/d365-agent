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
import { AssetMaintenanceRequestLifecycleModels } from './AssetMaintenanceRequestLifecycleModels';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequestLifecycleModels} entity.
 */
export class AssetMaintenanceRequestLifecycleModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRequestLifecycleModels<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequestLifecycleModels` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequestLifecycleModels` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceRequestLifecycleModels<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceRequestLifecycleModels<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequestLifecycleModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequestLifecycleModels`.
   */
  create(
    entity: AssetMaintenanceRequestLifecycleModels<T>
  ): CreateRequestBuilder<AssetMaintenanceRequestLifecycleModels<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceRequestLifecycleModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequestLifecycleModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleModels.dataAreaId}.
   * @param requestLifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModels.requestLifecycleModelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequestLifecycleModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestLifecycleModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRequestLifecycleModels<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceRequestLifecycleModels<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RequestLifecycleModelId: requestLifecycleModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequestLifecycleModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequestLifecycleModels`.
   */
  update(
    entity: AssetMaintenanceRequestLifecycleModels<T>
  ): UpdateRequestBuilder<AssetMaintenanceRequestLifecycleModels<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceRequestLifecycleModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleModels`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleModels.dataAreaId}.
   * @param requestLifecycleModelId Key property. See {@link AssetMaintenanceRequestLifecycleModels.requestLifecycleModelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleModels`.
   */
  delete(
    dataAreaId: string,
    requestLifecycleModelId: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestLifecycleModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleModels` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequestLifecycleModels<T>
  ): DeleteRequestBuilder<AssetMaintenanceRequestLifecycleModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestLifecycleModelId?: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestLifecycleModels<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceRequestLifecycleModels<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRequestLifecycleModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestLifecycleModelId: requestLifecycleModelId!
          }
    );
  }
}
