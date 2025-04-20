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
import { TransferOrderLines } from './TransferOrderLines';

/**
 * Request builder class for operations supported on the {@link TransferOrderLines} entity.
 */
export class TransferOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransferOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `TransferOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `TransferOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<TransferOrderLines<T>, T> {
    return new GetAllRequestBuilder<TransferOrderLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransferOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransferOrderLines`.
   */
  create(
    entity: TransferOrderLines<T>
  ): CreateRequestBuilder<TransferOrderLines<T>, T> {
    return new CreateRequestBuilder<TransferOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransferOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransferOrderLines.dataAreaId}.
   * @param transferOrderNumber Key property. See {@link TransferOrderLines.transferOrderNumber}.
   * @param lineNumber Key property. See {@link TransferOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `TransferOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transferOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TransferOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<TransferOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransferOrderNumber: transferOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransferOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransferOrderLines`.
   */
  update(
    entity: TransferOrderLines<T>
  ): UpdateRequestBuilder<TransferOrderLines<T>, T> {
    return new UpdateRequestBuilder<TransferOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransferOrderLines`.
   * @param dataAreaId Key property. See {@link TransferOrderLines.dataAreaId}.
   * @param transferOrderNumber Key property. See {@link TransferOrderLines.transferOrderNumber}.
   * @param lineNumber Key property. See {@link TransferOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderLines`.
   */
  delete(
    dataAreaId: string,
    transferOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<TransferOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransferOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: TransferOrderLines<T>
  ): DeleteRequestBuilder<TransferOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transferOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<TransferOrderLines<T>, T> {
    return new DeleteRequestBuilder<TransferOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransferOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransferOrderNumber: transferOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
