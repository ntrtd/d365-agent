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
import { AssetMaintenanceMobileAppUserSettings } from './AssetMaintenanceMobileAppUserSettings';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceMobileAppUserSettings} entity.
 */
export class AssetMaintenanceMobileAppUserSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceMobileAppUserSettings<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceMobileAppUserSettings` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceMobileAppUserSettings` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceMobileAppUserSettings<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceMobileAppUserSettings<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceMobileAppUserSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceMobileAppUserSettings`.
   */
  create(
    entity: AssetMaintenanceMobileAppUserSettings<T>
  ): CreateRequestBuilder<AssetMaintenanceMobileAppUserSettings<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceMobileAppUserSettings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceMobileAppUserSettings` entity based on its keys.
   * @param workerUserId Key property. See {@link AssetMaintenanceMobileAppUserSettings.workerUserId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceMobileAppUserSettings` entity based on its keys.
   */
  getByKey(
    workerUserId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceMobileAppUserSettings<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceMobileAppUserSettings<T>,
      T
    >(this.entityApi, { WorkerUserId: workerUserId });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceMobileAppUserSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceMobileAppUserSettings`.
   */
  update(
    entity: AssetMaintenanceMobileAppUserSettings<T>
  ): UpdateRequestBuilder<AssetMaintenanceMobileAppUserSettings<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceMobileAppUserSettings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceMobileAppUserSettings`.
   * @param workerUserId Key property. See {@link AssetMaintenanceMobileAppUserSettings.workerUserId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceMobileAppUserSettings`.
   */
  delete(
    workerUserId: string
  ): DeleteRequestBuilder<AssetMaintenanceMobileAppUserSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceMobileAppUserSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceMobileAppUserSettings` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceMobileAppUserSettings<T>
  ): DeleteRequestBuilder<AssetMaintenanceMobileAppUserSettings<T>, T>;
  delete(
    workerUserIdOrEntity: any
  ): DeleteRequestBuilder<AssetMaintenanceMobileAppUserSettings<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceMobileAppUserSettings<T>,
      T
    >(
      this.entityApi,
      workerUserIdOrEntity instanceof AssetMaintenanceMobileAppUserSettings
        ? workerUserIdOrEntity
        : { WorkerUserId: workerUserIdOrEntity! }
    );
  }
}
