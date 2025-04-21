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
import { OperationalSitesV2 } from './OperationalSitesV2';

/**
 * Request builder class for operations supported on the {@link OperationalSitesV2} entity.
 */
export class OperationalSitesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperationalSitesV2<T>, T> {
  /**
   * Returns a request builder for querying all `OperationalSitesV2` entities.
   * @returns A request builder for creating requests to retrieve all `OperationalSitesV2` entities.
   */
  getAll(): GetAllRequestBuilder<OperationalSitesV2<T>, T> {
    return new GetAllRequestBuilder<OperationalSitesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OperationalSitesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OperationalSitesV2`.
   */
  create(
    entity: OperationalSitesV2<T>
  ): CreateRequestBuilder<OperationalSitesV2<T>, T> {
    return new CreateRequestBuilder<OperationalSitesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OperationalSitesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link OperationalSitesV2.dataAreaId}.
   * @param siteId Key property. See {@link OperationalSitesV2.siteId}.
   * @returns A request builder for creating requests to retrieve one `OperationalSitesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    siteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OperationalSitesV2<T>, T> {
    return new GetByKeyRequestBuilder<OperationalSitesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SiteId: siteId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OperationalSitesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OperationalSitesV2`.
   */
  update(
    entity: OperationalSitesV2<T>
  ): UpdateRequestBuilder<OperationalSitesV2<T>, T> {
    return new UpdateRequestBuilder<OperationalSitesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OperationalSitesV2`.
   * @param dataAreaId Key property. See {@link OperationalSitesV2.dataAreaId}.
   * @param siteId Key property. See {@link OperationalSitesV2.siteId}.
   * @returns A request builder for creating requests that delete an entity of type `OperationalSitesV2`.
   */
  delete(
    dataAreaId: string,
    siteId: string
  ): DeleteRequestBuilder<OperationalSitesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OperationalSitesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OperationalSitesV2` by taking the entity as a parameter.
   */
  delete(
    entity: OperationalSitesV2<T>
  ): DeleteRequestBuilder<OperationalSitesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    siteId?: string
  ): DeleteRequestBuilder<OperationalSitesV2<T>, T> {
    return new DeleteRequestBuilder<OperationalSitesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OperationalSitesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SiteId: siteId!
          }
    );
  }
}
