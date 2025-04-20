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
import { TransferOrderLineAutoCostHeaders } from './TransferOrderLineAutoCostHeaders';

/**
 * Request builder class for operations supported on the {@link TransferOrderLineAutoCostHeaders} entity.
 */
export class TransferOrderLineAutoCostHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransferOrderLineAutoCostHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `TransferOrderLineAutoCostHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `TransferOrderLineAutoCostHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T> {
    return new GetAllRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransferOrderLineAutoCostHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransferOrderLineAutoCostHeaders`.
   */
  create(
    entity: TransferOrderLineAutoCostHeaders<T>
  ): CreateRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T> {
    return new CreateRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransferOrderLineAutoCostHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransferOrderLineAutoCostHeaders.dataAreaId}.
   * @param transferOrderLineCostAutoNumber Key property. See {@link TransferOrderLineAutoCostHeaders.transferOrderLineCostAutoNumber}.
   * @returns A request builder for creating requests to retrieve one `TransferOrderLineAutoCostHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transferOrderLineCostAutoNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T> {
    return new GetByKeyRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransferOrderLineCostAutoNumber: transferOrderLineCostAutoNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransferOrderLineAutoCostHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransferOrderLineAutoCostHeaders`.
   */
  update(
    entity: TransferOrderLineAutoCostHeaders<T>
  ): UpdateRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T> {
    return new UpdateRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransferOrderLineAutoCostHeaders`.
   * @param dataAreaId Key property. See {@link TransferOrderLineAutoCostHeaders.dataAreaId}.
   * @param transferOrderLineCostAutoNumber Key property. See {@link TransferOrderLineAutoCostHeaders.transferOrderLineCostAutoNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderLineAutoCostHeaders`.
   */
  delete(
    dataAreaId: string,
    transferOrderLineCostAutoNumber: string
  ): DeleteRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransferOrderLineAutoCostHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderLineAutoCostHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: TransferOrderLineAutoCostHeaders<T>
  ): DeleteRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transferOrderLineCostAutoNumber?: string
  ): DeleteRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T> {
    return new DeleteRequestBuilder<TransferOrderLineAutoCostHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransferOrderLineAutoCostHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransferOrderLineCostAutoNumber: transferOrderLineCostAutoNumber!
          }
    );
  }
}
