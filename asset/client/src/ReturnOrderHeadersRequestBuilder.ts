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
import { ReturnOrderHeaders } from './ReturnOrderHeaders';

/**
 * Request builder class for operations supported on the {@link ReturnOrderHeaders} entity.
 */
export class ReturnOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<ReturnOrderHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnOrderHeaders`.
   */
  create(
    entity: ReturnOrderHeaders<T>
  ): CreateRequestBuilder<ReturnOrderHeaders<T>, T> {
    return new CreateRequestBuilder<ReturnOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnOrderHeaders.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link ReturnOrderHeaders.returnOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `ReturnOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    returnOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ReturnOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReturnOrderNumber: returnOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnOrderHeaders`.
   */
  update(
    entity: ReturnOrderHeaders<T>
  ): UpdateRequestBuilder<ReturnOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<ReturnOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderHeaders`.
   * @param dataAreaId Key property. See {@link ReturnOrderHeaders.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link ReturnOrderHeaders.returnOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    returnOrderNumber: string
  ): DeleteRequestBuilder<ReturnOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnOrderHeaders<T>
  ): DeleteRequestBuilder<ReturnOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    returnOrderNumber?: string
  ): DeleteRequestBuilder<ReturnOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<ReturnOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReturnOrderNumber: returnOrderNumber!
          }
    );
  }
}
