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
import { OperationalSites } from './OperationalSites';

/**
 * Request builder class for operations supported on the {@link OperationalSites} entity.
 */
export class OperationalSitesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperationalSites<T>, T> {
  /**
   * Returns a request builder for querying all `OperationalSites` entities.
   * @returns A request builder for creating requests to retrieve all `OperationalSites` entities.
   */
  getAll(): GetAllRequestBuilder<OperationalSites<T>, T> {
    return new GetAllRequestBuilder<OperationalSites<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OperationalSites` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OperationalSites`.
   */
  create(
    entity: OperationalSites<T>
  ): CreateRequestBuilder<OperationalSites<T>, T> {
    return new CreateRequestBuilder<OperationalSites<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OperationalSites` entity based on its keys.
   * @param dataAreaId Key property. See {@link OperationalSites.dataAreaId}.
   * @param siteId Key property. See {@link OperationalSites.siteId}.
   * @returns A request builder for creating requests to retrieve one `OperationalSites` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    siteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OperationalSites<T>, T> {
    return new GetByKeyRequestBuilder<OperationalSites<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SiteId: siteId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OperationalSites`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OperationalSites`.
   */
  update(
    entity: OperationalSites<T>
  ): UpdateRequestBuilder<OperationalSites<T>, T> {
    return new UpdateRequestBuilder<OperationalSites<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OperationalSites`.
   * @param dataAreaId Key property. See {@link OperationalSites.dataAreaId}.
   * @param siteId Key property. See {@link OperationalSites.siteId}.
   * @returns A request builder for creating requests that delete an entity of type `OperationalSites`.
   */
  delete(
    dataAreaId: string,
    siteId: string
  ): DeleteRequestBuilder<OperationalSites<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OperationalSites`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OperationalSites` by taking the entity as a parameter.
   */
  delete(
    entity: OperationalSites<T>
  ): DeleteRequestBuilder<OperationalSites<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    siteId?: string
  ): DeleteRequestBuilder<OperationalSites<T>, T> {
    return new DeleteRequestBuilder<OperationalSites<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OperationalSites
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SiteId: siteId!
          }
    );
  }
}
