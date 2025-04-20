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
import { AssetMaintenanceFunctionalLocationLifecycleStates } from './AssetMaintenanceFunctionalLocationLifecycleStates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationLifecycleStates} entity.
 */
export class AssetMaintenanceFunctionalLocationLifecycleStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationLifecycleStates<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationLifecycleStates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationLifecycleStates` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleStates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleStates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationLifecycleStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationLifecycleStates`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationLifecycleStates<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleStates<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationLifecycleStates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleStates.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleStates.lifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationLifecycleStates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleStates<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleStates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleStateId: lifecycleStateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationLifecycleStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationLifecycleStates`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationLifecycleStates<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleStates<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationLifecycleStates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleStates.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleStates.lifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationLifecycleStates`.
   */
  delete(
    dataAreaId: string,
    lifecycleStateId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleStates<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationLifecycleStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationLifecycleStates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationLifecycleStates<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleStates<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleStateId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleStates<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleStates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationLifecycleStates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleStateId: lifecycleStateId!
          }
    );
  }
}
