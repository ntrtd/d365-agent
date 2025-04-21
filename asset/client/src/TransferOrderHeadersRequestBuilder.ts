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
import { TransferOrderHeaders } from './TransferOrderHeaders';

/**
 * Request builder class for operations supported on the {@link TransferOrderHeaders} entity.
 */
export class TransferOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransferOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `TransferOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `TransferOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<TransferOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<TransferOrderHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransferOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransferOrderHeaders`.
   */
  create(
    entity: TransferOrderHeaders<T>
  ): CreateRequestBuilder<TransferOrderHeaders<T>, T> {
    return new CreateRequestBuilder<TransferOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransferOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransferOrderHeaders.dataAreaId}.
   * @param transferOrderNumber Key property. See {@link TransferOrderHeaders.transferOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `TransferOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transferOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransferOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<TransferOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransferOrderNumber: transferOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransferOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransferOrderHeaders`.
   */
  update(
    entity: TransferOrderHeaders<T>
  ): UpdateRequestBuilder<TransferOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<TransferOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransferOrderHeaders`.
   * @param dataAreaId Key property. See {@link TransferOrderHeaders.dataAreaId}.
   * @param transferOrderNumber Key property. See {@link TransferOrderHeaders.transferOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    transferOrderNumber: string
  ): DeleteRequestBuilder<TransferOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransferOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: TransferOrderHeaders<T>
  ): DeleteRequestBuilder<TransferOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transferOrderNumber?: string
  ): DeleteRequestBuilder<TransferOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<TransferOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransferOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransferOrderNumber: transferOrderNumber!
          }
    );
  }
}
