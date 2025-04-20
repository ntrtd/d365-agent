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
import { AssetMaintenanceFunctionalLocationTypes } from './AssetMaintenanceFunctionalLocationTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationTypes} entity.
 */
export class AssetMaintenanceFunctionalLocationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFunctionalLocationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationTypes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationTypes`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceFunctionalLocationTypes<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationTypes.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypes.functionalLocationTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFunctionalLocationTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationTypes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationTypeId: functionalLocationTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationTypes`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceFunctionalLocationTypes<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationTypes.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypes.functionalLocationTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationTypes`.
   */
  delete(
    dataAreaId: string,
    functionalLocationTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationTypes<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationTypes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFunctionalLocationTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationTypeId: functionalLocationTypeId!
          }
    );
  }
}
