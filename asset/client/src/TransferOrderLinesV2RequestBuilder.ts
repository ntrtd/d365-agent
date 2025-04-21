/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { TransferOrderLinesV2 } from './TransferOrderLinesV2';

/**
 * Request builder class for operations supported on the {@link TransferOrderLinesV2} entity.
 */
export class TransferOrderLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransferOrderLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `TransferOrderLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `TransferOrderLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<TransferOrderLinesV2<T>, T> {
    return new GetAllRequestBuilder<TransferOrderLinesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransferOrderLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransferOrderLinesV2`.
   */
  create(
    entity: TransferOrderLinesV2<T>
  ): CreateRequestBuilder<TransferOrderLinesV2<T>, T> {
    return new CreateRequestBuilder<TransferOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransferOrderLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransferOrderLinesV2.dataAreaId}.
   * @param transferOrderNumber Key property. See {@link TransferOrderLinesV2.transferOrderNumber}.
   * @param lineNumber Key property. See {@link TransferOrderLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `TransferOrderLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transferOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TransferOrderLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<TransferOrderLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransferOrderNumber: transferOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransferOrderLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransferOrderLinesV2`.
   */
  update(
    entity: TransferOrderLinesV2<T>
  ): UpdateRequestBuilder<TransferOrderLinesV2<T>, T> {
    return new UpdateRequestBuilder<TransferOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransferOrderLinesV2`.
   * @param dataAreaId Key property. See {@link TransferOrderLinesV2.dataAreaId}.
   * @param transferOrderNumber Key property. See {@link TransferOrderLinesV2.transferOrderNumber}.
   * @param lineNumber Key property. See {@link TransferOrderLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderLinesV2`.
   */
  delete(
    dataAreaId: string,
    transferOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<TransferOrderLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransferOrderLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: TransferOrderLinesV2<T>
  ): DeleteRequestBuilder<TransferOrderLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transferOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<TransferOrderLinesV2<T>, T> {
    return new DeleteRequestBuilder<TransferOrderLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransferOrderLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransferOrderNumber: transferOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
