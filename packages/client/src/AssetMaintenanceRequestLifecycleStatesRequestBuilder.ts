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
import { AssetMaintenanceRequestLifecycleStates } from './AssetMaintenanceRequestLifecycleStates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequestLifecycleStates} entity.
 */
export class AssetMaintenanceRequestLifecycleStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRequestLifecycleStates<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequestLifecycleStates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequestLifecycleStates` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceRequestLifecycleStates<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceRequestLifecycleStates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequestLifecycleStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequestLifecycleStates`.
   */
  create(
    entity: AssetMaintenanceRequestLifecycleStates<T>
  ): CreateRequestBuilder<AssetMaintenanceRequestLifecycleStates<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceRequestLifecycleStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequestLifecycleStates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleStates.dataAreaId}.
   * @param requestLifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleStates.requestLifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequestLifecycleStates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestLifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRequestLifecycleStates<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceRequestLifecycleStates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RequestLifecycleStateId: requestLifecycleStateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequestLifecycleStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequestLifecycleStates`.
   */
  update(
    entity: AssetMaintenanceRequestLifecycleStates<T>
  ): UpdateRequestBuilder<AssetMaintenanceRequestLifecycleStates<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceRequestLifecycleStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleStates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestLifecycleStates.dataAreaId}.
   * @param requestLifecycleStateId Key property. See {@link AssetMaintenanceRequestLifecycleStates.requestLifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleStates`.
   */
  delete(
    dataAreaId: string,
    requestLifecycleStateId: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestLifecycleStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestLifecycleStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestLifecycleStates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequestLifecycleStates<T>
  ): DeleteRequestBuilder<AssetMaintenanceRequestLifecycleStates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestLifecycleStateId?: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestLifecycleStates<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceRequestLifecycleStates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRequestLifecycleStates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestLifecycleStateId: requestLifecycleStateId!
          }
    );
  }
}
