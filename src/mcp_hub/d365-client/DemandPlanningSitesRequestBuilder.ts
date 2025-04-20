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
import { DemandPlanningSites } from './DemandPlanningSites';

/**
 * Request builder class for operations supported on the {@link DemandPlanningSites} entity.
 */
export class DemandPlanningSitesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DemandPlanningSites<T>, T> {
  /**
   * Returns a request builder for querying all `DemandPlanningSites` entities.
   * @returns A request builder for creating requests to retrieve all `DemandPlanningSites` entities.
   */
  getAll(): GetAllRequestBuilder<DemandPlanningSites<T>, T> {
    return new GetAllRequestBuilder<DemandPlanningSites<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DemandPlanningSites` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DemandPlanningSites`.
   */
  create(
    entity: DemandPlanningSites<T>
  ): CreateRequestBuilder<DemandPlanningSites<T>, T> {
    return new CreateRequestBuilder<DemandPlanningSites<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DemandPlanningSites` entity based on its keys.
   * @param siteId Key property. See {@link DemandPlanningSites.siteId}.
   * @param dataAreaPartyId Key property. See {@link DemandPlanningSites.dataAreaPartyId}.
   * @returns A request builder for creating requests to retrieve one `DemandPlanningSites` entity based on its keys.
   */
  getByKey(
    siteId: DeserializedType<T, 'Edm.String'>,
    dataAreaPartyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DemandPlanningSites<T>, T> {
    return new GetByKeyRequestBuilder<DemandPlanningSites<T>, T>(
      this.entityApi,
      {
        SiteId: siteId,
        DataAreaPartyId: dataAreaPartyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DemandPlanningSites`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DemandPlanningSites`.
   */
  update(
    entity: DemandPlanningSites<T>
  ): UpdateRequestBuilder<DemandPlanningSites<T>, T> {
    return new UpdateRequestBuilder<DemandPlanningSites<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DemandPlanningSites`.
   * @param siteId Key property. See {@link DemandPlanningSites.siteId}.
   * @param dataAreaPartyId Key property. See {@link DemandPlanningSites.dataAreaPartyId}.
   * @returns A request builder for creating requests that delete an entity of type `DemandPlanningSites`.
   */
  delete(
    siteId: string,
    dataAreaPartyId: string
  ): DeleteRequestBuilder<DemandPlanningSites<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DemandPlanningSites`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DemandPlanningSites` by taking the entity as a parameter.
   */
  delete(
    entity: DemandPlanningSites<T>
  ): DeleteRequestBuilder<DemandPlanningSites<T>, T>;
  delete(
    siteIdOrEntity: any,
    dataAreaPartyId?: string
  ): DeleteRequestBuilder<DemandPlanningSites<T>, T> {
    return new DeleteRequestBuilder<DemandPlanningSites<T>, T>(
      this.entityApi,
      siteIdOrEntity instanceof DemandPlanningSites
        ? siteIdOrEntity
        : {
            SiteId: siteIdOrEntity!,
            DataAreaPartyId: dataAreaPartyId!
          }
    );
  }
}
