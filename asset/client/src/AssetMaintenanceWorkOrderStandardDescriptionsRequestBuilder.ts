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
import { AssetMaintenanceWorkOrderStandardDescriptions } from './AssetMaintenanceWorkOrderStandardDescriptions';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderStandardDescriptions} entity.
 */
export class AssetMaintenanceWorkOrderStandardDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderStandardDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderStandardDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderStandardDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderStandardDescriptions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderStandardDescriptions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderStandardDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderStandardDescriptions`.
   */
  create(
    entity: AssetMaintenanceWorkOrderStandardDescriptions<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderStandardDescriptions<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderStandardDescriptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderStandardDescriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderStandardDescriptions.dataAreaId}.
   * @param description Key property. See {@link AssetMaintenanceWorkOrderStandardDescriptions.description}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderStandardDescriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceWorkOrderStandardDescriptions<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderStandardDescriptions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Description: description
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderStandardDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderStandardDescriptions`.
   */
  update(
    entity: AssetMaintenanceWorkOrderStandardDescriptions<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderStandardDescriptions<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderStandardDescriptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderStandardDescriptions`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderStandardDescriptions.dataAreaId}.
   * @param description Key property. See {@link AssetMaintenanceWorkOrderStandardDescriptions.description}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderStandardDescriptions`.
   */
  delete(
    dataAreaId: string,
    description: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderStandardDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderStandardDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderStandardDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderStandardDescriptions<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderStandardDescriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    description?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderStandardDescriptions<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderStandardDescriptions<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceWorkOrderStandardDescriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Description: description!
          }
    );
  }
}
