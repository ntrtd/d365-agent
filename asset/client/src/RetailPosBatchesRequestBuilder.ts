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
import { RetailPosBatches } from './RetailPosBatches';

/**
 * Request builder class for operations supported on the {@link RetailPosBatches} entity.
 */
export class RetailPosBatchesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPosBatches<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPosBatches` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPosBatches` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPosBatches<T>, T> {
    return new GetAllRequestBuilder<RetailPosBatches<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailPosBatches` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPosBatches`.
   */
  create(
    entity: RetailPosBatches<T>
  ): CreateRequestBuilder<RetailPosBatches<T>, T> {
    return new CreateRequestBuilder<RetailPosBatches<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPosBatches` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailPosBatches.dataAreaId}.
   * @param operationUnitNumber Key property. See {@link RetailPosBatches.operationUnitNumber}.
   * @param terminal Key property. See {@link RetailPosBatches.terminal}.
   * @param batchShiftId Key property. See {@link RetailPosBatches.batchShiftId}.
   * @returns A request builder for creating requests to retrieve one `RetailPosBatches` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operationUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    batchShiftId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailPosBatches<T>, T> {
    return new GetByKeyRequestBuilder<RetailPosBatches<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      OperationUnitNumber: operationUnitNumber,
      Terminal: terminal,
      BatchShiftId: batchShiftId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPosBatches`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPosBatches`.
   */
  update(
    entity: RetailPosBatches<T>
  ): UpdateRequestBuilder<RetailPosBatches<T>, T> {
    return new UpdateRequestBuilder<RetailPosBatches<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPosBatches`.
   * @param dataAreaId Key property. See {@link RetailPosBatches.dataAreaId}.
   * @param operationUnitNumber Key property. See {@link RetailPosBatches.operationUnitNumber}.
   * @param terminal Key property. See {@link RetailPosBatches.terminal}.
   * @param batchShiftId Key property. See {@link RetailPosBatches.batchShiftId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosBatches`.
   */
  delete(
    dataAreaId: string,
    operationUnitNumber: string,
    terminal: string,
    batchShiftId: BigNumber
  ): DeleteRequestBuilder<RetailPosBatches<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPosBatches`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosBatches` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPosBatches<T>
  ): DeleteRequestBuilder<RetailPosBatches<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operationUnitNumber?: string,
    terminal?: string,
    batchShiftId?: BigNumber
  ): DeleteRequestBuilder<RetailPosBatches<T>, T> {
    return new DeleteRequestBuilder<RetailPosBatches<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailPosBatches
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperationUnitNumber: operationUnitNumber!,
            Terminal: terminal!,
            BatchShiftId: batchShiftId!
          }
    );
  }
}
