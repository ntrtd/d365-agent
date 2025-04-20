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
import { ReturnOrderHeadersV2 } from './ReturnOrderHeadersV2';

/**
 * Request builder class for operations supported on the {@link ReturnOrderHeadersV2} entity.
 */
export class ReturnOrderHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnOrderHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnOrderHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnOrderHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnOrderHeadersV2<T>, T> {
    return new GetAllRequestBuilder<ReturnOrderHeadersV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnOrderHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnOrderHeadersV2`.
   */
  create(
    entity: ReturnOrderHeadersV2<T>
  ): CreateRequestBuilder<ReturnOrderHeadersV2<T>, T> {
    return new CreateRequestBuilder<ReturnOrderHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnOrderHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnOrderHeadersV2.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link ReturnOrderHeadersV2.returnOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `ReturnOrderHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    returnOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnOrderHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<ReturnOrderHeadersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReturnOrderNumber: returnOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnOrderHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnOrderHeadersV2`.
   */
  update(
    entity: ReturnOrderHeadersV2<T>
  ): UpdateRequestBuilder<ReturnOrderHeadersV2<T>, T> {
    return new UpdateRequestBuilder<ReturnOrderHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderHeadersV2`.
   * @param dataAreaId Key property. See {@link ReturnOrderHeadersV2.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link ReturnOrderHeadersV2.returnOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderHeadersV2`.
   */
  delete(
    dataAreaId: string,
    returnOrderNumber: string
  ): DeleteRequestBuilder<ReturnOrderHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnOrderHeadersV2<T>
  ): DeleteRequestBuilder<ReturnOrderHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    returnOrderNumber?: string
  ): DeleteRequestBuilder<ReturnOrderHeadersV2<T>, T> {
    return new DeleteRequestBuilder<ReturnOrderHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnOrderHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReturnOrderNumber: returnOrderNumber!
          }
    );
  }
}
