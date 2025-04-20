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
import { RetailTransactionPaymentTransBiEntities } from './RetailTransactionPaymentTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionPaymentTransBiEntities} entity.
 */
export class RetailTransactionPaymentTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionPaymentTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionPaymentTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionPaymentTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionPaymentTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionPaymentTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionPaymentTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionPaymentTransBiEntities`.
   */
  create(
    entity: RetailTransactionPaymentTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionPaymentTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionPaymentTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionPaymentTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionPaymentTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionPaymentTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionPaymentTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionPaymentTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionPaymentTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionPaymentTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionPaymentTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      store: store,
      terminal: terminal,
      transactionId: transactionId,
      lineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionPaymentTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionPaymentTransBiEntities`.
   */
  update(
    entity: RetailTransactionPaymentTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionPaymentTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionPaymentTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionPaymentTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionPaymentTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionPaymentTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionPaymentTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionPaymentTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionPaymentTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionPaymentTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionPaymentTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionPaymentTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionPaymentTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminal: terminal!,
            transactionId: transactionId!,
            lineNum: lineNum!
          }
    );
  }
}
