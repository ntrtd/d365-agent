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
import { InventSiteBiEntities } from './InventSiteBiEntities';

/**
 * Request builder class for operations supported on the {@link InventSiteBiEntities} entity.
 */
export class InventSiteBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventSiteBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventSiteBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventSiteBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventSiteBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventSiteBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventSiteBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventSiteBiEntities`.
   */
  create(
    entity: InventSiteBiEntities<T>
  ): CreateRequestBuilder<InventSiteBiEntities<T>, T> {
    return new CreateRequestBuilder<InventSiteBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventSiteBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventSiteBiEntities.dataAreaId}.
   * @param siteId Key property. See {@link InventSiteBiEntities.siteId}.
   * @returns A request builder for creating requests to retrieve one `InventSiteBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    siteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventSiteBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventSiteBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SiteId: siteId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventSiteBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventSiteBiEntities`.
   */
  update(
    entity: InventSiteBiEntities<T>
  ): UpdateRequestBuilder<InventSiteBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventSiteBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventSiteBiEntities`.
   * @param dataAreaId Key property. See {@link InventSiteBiEntities.dataAreaId}.
   * @param siteId Key property. See {@link InventSiteBiEntities.siteId}.
   * @returns A request builder for creating requests that delete an entity of type `InventSiteBiEntities`.
   */
  delete(
    dataAreaId: string,
    siteId: string
  ): DeleteRequestBuilder<InventSiteBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventSiteBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventSiteBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventSiteBiEntities<T>
  ): DeleteRequestBuilder<InventSiteBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    siteId?: string
  ): DeleteRequestBuilder<InventSiteBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventSiteBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventSiteBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SiteId: siteId!
          }
    );
  }
}
