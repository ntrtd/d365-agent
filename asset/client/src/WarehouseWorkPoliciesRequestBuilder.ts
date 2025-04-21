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
import { WarehouseWorkPolicies } from './WarehouseWorkPolicies';

/**
 * Request builder class for operations supported on the {@link WarehouseWorkPolicies} entity.
 */
export class WarehouseWorkPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseWorkPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseWorkPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseWorkPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseWorkPolicies<T>, T> {
    return new GetAllRequestBuilder<WarehouseWorkPolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseWorkPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseWorkPolicies`.
   */
  create(
    entity: WarehouseWorkPolicies<T>
  ): CreateRequestBuilder<WarehouseWorkPolicies<T>, T> {
    return new CreateRequestBuilder<WarehouseWorkPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseWorkPolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseWorkPolicies.dataAreaId}.
   * @param name Key property. See {@link WarehouseWorkPolicies.name}.
   * @returns A request builder for creating requests to retrieve one `WarehouseWorkPolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseWorkPolicies<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseWorkPolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseWorkPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseWorkPolicies`.
   */
  update(
    entity: WarehouseWorkPolicies<T>
  ): UpdateRequestBuilder<WarehouseWorkPolicies<T>, T> {
    return new UpdateRequestBuilder<WarehouseWorkPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkPolicies`.
   * @param dataAreaId Key property. See {@link WarehouseWorkPolicies.dataAreaId}.
   * @param name Key property. See {@link WarehouseWorkPolicies.name}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkPolicies`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<WarehouseWorkPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseWorkPolicies<T>
  ): DeleteRequestBuilder<WarehouseWorkPolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<WarehouseWorkPolicies<T>, T> {
    return new DeleteRequestBuilder<WarehouseWorkPolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseWorkPolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
