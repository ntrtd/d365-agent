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
import { InventorySitesForAi } from './InventorySitesForAi';

/**
 * Request builder class for operations supported on the {@link InventorySitesForAi} entity.
 */
export class InventorySitesForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventorySitesForAi<T>, T> {
  /**
   * Returns a request builder for querying all `InventorySitesForAi` entities.
   * @returns A request builder for creating requests to retrieve all `InventorySitesForAi` entities.
   */
  getAll(): GetAllRequestBuilder<InventorySitesForAi<T>, T> {
    return new GetAllRequestBuilder<InventorySitesForAi<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventorySitesForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventorySitesForAi`.
   */
  create(
    entity: InventorySitesForAi<T>
  ): CreateRequestBuilder<InventorySitesForAi<T>, T> {
    return new CreateRequestBuilder<InventorySitesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventorySitesForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventorySitesForAi.dataAreaId}.
   * @param siteId Key property. See {@link InventorySitesForAi.siteId}.
   * @returns A request builder for creating requests to retrieve one `InventorySitesForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    siteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventorySitesForAi<T>, T> {
    return new GetByKeyRequestBuilder<InventorySitesForAi<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SiteId: siteId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventorySitesForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventorySitesForAi`.
   */
  update(
    entity: InventorySitesForAi<T>
  ): UpdateRequestBuilder<InventorySitesForAi<T>, T> {
    return new UpdateRequestBuilder<InventorySitesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventorySitesForAi`.
   * @param dataAreaId Key property. See {@link InventorySitesForAi.dataAreaId}.
   * @param siteId Key property. See {@link InventorySitesForAi.siteId}.
   * @returns A request builder for creating requests that delete an entity of type `InventorySitesForAi`.
   */
  delete(
    dataAreaId: string,
    siteId: string
  ): DeleteRequestBuilder<InventorySitesForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventorySitesForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventorySitesForAi` by taking the entity as a parameter.
   */
  delete(
    entity: InventorySitesForAi<T>
  ): DeleteRequestBuilder<InventorySitesForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    siteId?: string
  ): DeleteRequestBuilder<InventorySitesForAi<T>, T> {
    return new DeleteRequestBuilder<InventorySitesForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventorySitesForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SiteId: siteId!
          }
    );
  }
}
