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
import { AssetMaintenanceFunctionalLocationLifecycleModelStates } from './AssetMaintenanceFunctionalLocationLifecycleModelStates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationLifecycleModelStates} entity.
 */
export class AssetMaintenanceFunctionalLocationLifecycleModelStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationLifecycleModelStates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationLifecycleModelStates` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationLifecycleModelStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStates`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationLifecycleModelStates<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationLifecycleModelStates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStates.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStates.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStates.lifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationLifecycleModelStates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleModelId: lifecycleModelId,
      LifecycleStateId: lifecycleStateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStates`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationLifecycleModelStates<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStates.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStates.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModelStates.lifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStates`.
   */
  delete(
    dataAreaId: string,
    lifecycleModelId: string,
    lifecycleStateId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationLifecycleModelStates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationLifecycleModelStates<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleModelId?: string,
    lifecycleStateId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModelStates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationLifecycleModelStates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleModelId: lifecycleModelId!,
            LifecycleStateId: lifecycleStateId!
          }
    );
  }
}
