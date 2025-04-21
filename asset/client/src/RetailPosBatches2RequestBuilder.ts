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
import { RetailPosBatches2 } from './RetailPosBatches2';

/**
 * Request builder class for operations supported on the {@link RetailPosBatches2} entity.
 */
export class RetailPosBatches2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPosBatches2<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPosBatches2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPosBatches2` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPosBatches2<T>, T> {
    return new GetAllRequestBuilder<RetailPosBatches2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailPosBatches2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPosBatches2`.
   */
  create(
    entity: RetailPosBatches2<T>
  ): CreateRequestBuilder<RetailPosBatches2<T>, T> {
    return new CreateRequestBuilder<RetailPosBatches2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPosBatches2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailPosBatches2.dataAreaId}.
   * @param storeNumber Key property. See {@link RetailPosBatches2.storeNumber}.
   * @param terminal Key property. See {@link RetailPosBatches2.terminal}.
   * @param batchShiftId Key property. See {@link RetailPosBatches2.batchShiftId}.
   * @returns A request builder for creating requests to retrieve one `RetailPosBatches2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    batchShiftId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailPosBatches2<T>, T> {
    return new GetByKeyRequestBuilder<RetailPosBatches2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreNumber: storeNumber,
      Terminal: terminal,
      BatchShiftId: batchShiftId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPosBatches2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPosBatches2`.
   */
  update(
    entity: RetailPosBatches2<T>
  ): UpdateRequestBuilder<RetailPosBatches2<T>, T> {
    return new UpdateRequestBuilder<RetailPosBatches2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPosBatches2`.
   * @param dataAreaId Key property. See {@link RetailPosBatches2.dataAreaId}.
   * @param storeNumber Key property. See {@link RetailPosBatches2.storeNumber}.
   * @param terminal Key property. See {@link RetailPosBatches2.terminal}.
   * @param batchShiftId Key property. See {@link RetailPosBatches2.batchShiftId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosBatches2`.
   */
  delete(
    dataAreaId: string,
    storeNumber: string,
    terminal: string,
    batchShiftId: BigNumber
  ): DeleteRequestBuilder<RetailPosBatches2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPosBatches2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosBatches2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPosBatches2<T>
  ): DeleteRequestBuilder<RetailPosBatches2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeNumber?: string,
    terminal?: string,
    batchShiftId?: BigNumber
  ): DeleteRequestBuilder<RetailPosBatches2<T>, T> {
    return new DeleteRequestBuilder<RetailPosBatches2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailPosBatches2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreNumber: storeNumber!,
            Terminal: terminal!,
            BatchShiftId: batchShiftId!
          }
    );
  }
}
