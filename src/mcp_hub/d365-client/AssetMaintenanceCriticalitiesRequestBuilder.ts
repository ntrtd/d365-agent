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
import { AssetMaintenanceCriticalities } from './AssetMaintenanceCriticalities';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceCriticalities} entity.
 */
export class AssetMaintenanceCriticalitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceCriticalities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceCriticalities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceCriticalities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceCriticalities<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceCriticalities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceCriticalities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceCriticalities`.
   */
  create(
    entity: AssetMaintenanceCriticalities<T>
  ): CreateRequestBuilder<AssetMaintenanceCriticalities<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceCriticalities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceCriticalities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceCriticalities.dataAreaId}.
   * @param criticality Key property. See {@link AssetMaintenanceCriticalities.criticality}.
   * @param name Key property. See {@link AssetMaintenanceCriticalities.name}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceCriticalities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    criticality: DeserializedType<T, 'Edm.Int32'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceCriticalities<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceCriticalities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Criticality: criticality,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceCriticalities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceCriticalities`.
   */
  update(
    entity: AssetMaintenanceCriticalities<T>
  ): UpdateRequestBuilder<AssetMaintenanceCriticalities<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceCriticalities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceCriticalities`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceCriticalities.dataAreaId}.
   * @param criticality Key property. See {@link AssetMaintenanceCriticalities.criticality}.
   * @param name Key property. See {@link AssetMaintenanceCriticalities.name}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceCriticalities`.
   */
  delete(
    dataAreaId: string,
    criticality: number,
    name: string
  ): DeleteRequestBuilder<AssetMaintenanceCriticalities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceCriticalities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceCriticalities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceCriticalities<T>
  ): DeleteRequestBuilder<AssetMaintenanceCriticalities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    criticality?: number,
    name?: string
  ): DeleteRequestBuilder<AssetMaintenanceCriticalities<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceCriticalities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceCriticalities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Criticality: criticality!,
            Name: name!
          }
    );
  }
}
