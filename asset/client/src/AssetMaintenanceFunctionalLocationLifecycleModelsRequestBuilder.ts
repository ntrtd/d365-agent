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
import { AssetMaintenanceFunctionalLocationLifecycleModels } from './AssetMaintenanceFunctionalLocationLifecycleModels';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationLifecycleModels} entity.
 */
export class AssetMaintenanceFunctionalLocationLifecycleModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationLifecycleModels<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationLifecycleModels` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationLifecycleModels` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModels<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModels<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationLifecycleModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationLifecycleModels`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationLifecycleModels<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModels<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationLifecycleModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModels.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModels.lifecycleModelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationLifecycleModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModels<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModels<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleModelId: lifecycleModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationLifecycleModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationLifecycleModels`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationLifecycleModels<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModels<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationLifecycleModels`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModels.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceFunctionalLocationLifecycleModels.lifecycleModelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationLifecycleModels`.
   */
  delete(
    dataAreaId: string,
    lifecycleModelId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModels<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationLifecycleModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationLifecycleModels` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationLifecycleModels<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModels<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleModelId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationLifecycleModels<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationLifecycleModels<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationLifecycleModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleModelId: lifecycleModelId!
          }
    );
  }
}
