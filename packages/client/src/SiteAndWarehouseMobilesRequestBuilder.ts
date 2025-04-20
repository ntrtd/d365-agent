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
import { SiteAndWarehouseMobiles } from './SiteAndWarehouseMobiles';

/**
 * Request builder class for operations supported on the {@link SiteAndWarehouseMobiles} entity.
 */
export class SiteAndWarehouseMobilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SiteAndWarehouseMobiles<T>, T> {
  /**
   * Returns a request builder for querying all `SiteAndWarehouseMobiles` entities.
   * @returns A request builder for creating requests to retrieve all `SiteAndWarehouseMobiles` entities.
   */
  getAll(): GetAllRequestBuilder<SiteAndWarehouseMobiles<T>, T> {
    return new GetAllRequestBuilder<SiteAndWarehouseMobiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SiteAndWarehouseMobiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SiteAndWarehouseMobiles`.
   */
  create(
    entity: SiteAndWarehouseMobiles<T>
  ): CreateRequestBuilder<SiteAndWarehouseMobiles<T>, T> {
    return new CreateRequestBuilder<SiteAndWarehouseMobiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SiteAndWarehouseMobiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link SiteAndWarehouseMobiles.dataAreaId}.
   * @param inventLocationId Key property. See {@link SiteAndWarehouseMobiles.inventLocationId}.
   * @returns A request builder for creating requests to retrieve one `SiteAndWarehouseMobiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SiteAndWarehouseMobiles<T>, T> {
    return new GetByKeyRequestBuilder<SiteAndWarehouseMobiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventLocationId: inventLocationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SiteAndWarehouseMobiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SiteAndWarehouseMobiles`.
   */
  update(
    entity: SiteAndWarehouseMobiles<T>
  ): UpdateRequestBuilder<SiteAndWarehouseMobiles<T>, T> {
    return new UpdateRequestBuilder<SiteAndWarehouseMobiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SiteAndWarehouseMobiles`.
   * @param dataAreaId Key property. See {@link SiteAndWarehouseMobiles.dataAreaId}.
   * @param inventLocationId Key property. See {@link SiteAndWarehouseMobiles.inventLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `SiteAndWarehouseMobiles`.
   */
  delete(
    dataAreaId: string,
    inventLocationId: string
  ): DeleteRequestBuilder<SiteAndWarehouseMobiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SiteAndWarehouseMobiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SiteAndWarehouseMobiles` by taking the entity as a parameter.
   */
  delete(
    entity: SiteAndWarehouseMobiles<T>
  ): DeleteRequestBuilder<SiteAndWarehouseMobiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventLocationId?: string
  ): DeleteRequestBuilder<SiteAndWarehouseMobiles<T>, T> {
    return new DeleteRequestBuilder<SiteAndWarehouseMobiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SiteAndWarehouseMobiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventLocationId: inventLocationId!
          }
    );
  }
}
