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
import { InboundLoadHeaders } from './InboundLoadHeaders';

/**
 * Request builder class for operations supported on the {@link InboundLoadHeaders} entity.
 */
export class InboundLoadHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadHeaders<T>, T> {
    return new GetAllRequestBuilder<InboundLoadHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InboundLoadHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadHeaders`.
   */
  create(
    entity: InboundLoadHeaders<T>
  ): CreateRequestBuilder<InboundLoadHeaders<T>, T> {
    return new CreateRequestBuilder<InboundLoadHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadHeaders.dataAreaId}.
   * @param loadId Key property. See {@link InboundLoadHeaders.loadId}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    loadId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundLoadHeaders<T>, T> {
    return new GetByKeyRequestBuilder<InboundLoadHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LoadId: loadId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadHeaders`.
   */
  update(
    entity: InboundLoadHeaders<T>
  ): UpdateRequestBuilder<InboundLoadHeaders<T>, T> {
    return new UpdateRequestBuilder<InboundLoadHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadHeaders`.
   * @param dataAreaId Key property. See {@link InboundLoadHeaders.dataAreaId}.
   * @param loadId Key property. See {@link InboundLoadHeaders.loadId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadHeaders`.
   */
  delete(
    dataAreaId: string,
    loadId: string
  ): DeleteRequestBuilder<InboundLoadHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadHeaders<T>
  ): DeleteRequestBuilder<InboundLoadHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    loadId?: string
  ): DeleteRequestBuilder<InboundLoadHeaders<T>, T> {
    return new DeleteRequestBuilder<InboundLoadHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LoadId: loadId!
          }
    );
  }
}
