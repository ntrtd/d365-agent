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
import { OutboundLoadHeaders } from './OutboundLoadHeaders';

/**
 * Request builder class for operations supported on the {@link OutboundLoadHeaders} entity.
 */
export class OutboundLoadHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundLoadHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundLoadHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundLoadHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundLoadHeaders<T>, T> {
    return new GetAllRequestBuilder<OutboundLoadHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OutboundLoadHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundLoadHeaders`.
   */
  create(
    entity: OutboundLoadHeaders<T>
  ): CreateRequestBuilder<OutboundLoadHeaders<T>, T> {
    return new CreateRequestBuilder<OutboundLoadHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundLoadHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundLoadHeaders.dataAreaId}.
   * @param loadId Key property. See {@link OutboundLoadHeaders.loadId}.
   * @returns A request builder for creating requests to retrieve one `OutboundLoadHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    loadId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundLoadHeaders<T>, T> {
    return new GetByKeyRequestBuilder<OutboundLoadHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LoadId: loadId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundLoadHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundLoadHeaders`.
   */
  update(
    entity: OutboundLoadHeaders<T>
  ): UpdateRequestBuilder<OutboundLoadHeaders<T>, T> {
    return new UpdateRequestBuilder<OutboundLoadHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundLoadHeaders`.
   * @param dataAreaId Key property. See {@link OutboundLoadHeaders.dataAreaId}.
   * @param loadId Key property. See {@link OutboundLoadHeaders.loadId}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundLoadHeaders`.
   */
  delete(
    dataAreaId: string,
    loadId: string
  ): DeleteRequestBuilder<OutboundLoadHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundLoadHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundLoadHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundLoadHeaders<T>
  ): DeleteRequestBuilder<OutboundLoadHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    loadId?: string
  ): DeleteRequestBuilder<OutboundLoadHeaders<T>, T> {
    return new DeleteRequestBuilder<OutboundLoadHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundLoadHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LoadId: loadId!
          }
    );
  }
}
