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
import { SiteGateEntryHeaders } from './SiteGateEntryHeaders';

/**
 * Request builder class for operations supported on the {@link SiteGateEntryHeaders} entity.
 */
export class SiteGateEntryHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SiteGateEntryHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SiteGateEntryHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SiteGateEntryHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SiteGateEntryHeaders<T>, T> {
    return new GetAllRequestBuilder<SiteGateEntryHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SiteGateEntryHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SiteGateEntryHeaders`.
   */
  create(
    entity: SiteGateEntryHeaders<T>
  ): CreateRequestBuilder<SiteGateEntryHeaders<T>, T> {
    return new CreateRequestBuilder<SiteGateEntryHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SiteGateEntryHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SiteGateEntryHeaders.dataAreaId}.
   * @param gateEntry Key property. See {@link SiteGateEntryHeaders.gateEntry}.
   * @returns A request builder for creating requests to retrieve one `SiteGateEntryHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    gateEntry: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SiteGateEntryHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SiteGateEntryHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GateEntry: gateEntry
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SiteGateEntryHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SiteGateEntryHeaders`.
   */
  update(
    entity: SiteGateEntryHeaders<T>
  ): UpdateRequestBuilder<SiteGateEntryHeaders<T>, T> {
    return new UpdateRequestBuilder<SiteGateEntryHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SiteGateEntryHeaders`.
   * @param dataAreaId Key property. See {@link SiteGateEntryHeaders.dataAreaId}.
   * @param gateEntry Key property. See {@link SiteGateEntryHeaders.gateEntry}.
   * @returns A request builder for creating requests that delete an entity of type `SiteGateEntryHeaders`.
   */
  delete(
    dataAreaId: string,
    gateEntry: string
  ): DeleteRequestBuilder<SiteGateEntryHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SiteGateEntryHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SiteGateEntryHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SiteGateEntryHeaders<T>
  ): DeleteRequestBuilder<SiteGateEntryHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    gateEntry?: string
  ): DeleteRequestBuilder<SiteGateEntryHeaders<T>, T> {
    return new DeleteRequestBuilder<SiteGateEntryHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SiteGateEntryHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GateEntry: gateEntry!
          }
    );
  }
}
