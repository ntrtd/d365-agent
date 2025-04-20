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
import { RetailTransactionCustomerAccountDepositTransBiEntities } from './RetailTransactionCustomerAccountDepositTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionCustomerAccountDepositTransBiEntities} entity.
 */
export class RetailTransactionCustomerAccountDepositTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailTransactionCustomerAccountDepositTransBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailTransactionCustomerAccountDepositTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionCustomerAccountDepositTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionCustomerAccountDepositTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionCustomerAccountDepositTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionCustomerAccountDepositTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionCustomerAccountDepositTransBiEntities`.
   */
  create(
    entity: RetailTransactionCustomerAccountDepositTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailTransactionCustomerAccountDepositTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailTransactionCustomerAccountDepositTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionCustomerAccountDepositTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionCustomerAccountDepositTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    RetailTransactionCustomerAccountDepositTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionCustomerAccountDepositTransBiEntities<T>,
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
   * Returns a request builder for updating an entity of type `RetailTransactionCustomerAccountDepositTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionCustomerAccountDepositTransBiEntities`.
   */
  update(
    entity: RetailTransactionCustomerAccountDepositTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailTransactionCustomerAccountDepositTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailTransactionCustomerAccountDepositTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionCustomerAccountDepositTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionCustomerAccountDepositTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionCustomerAccountDepositTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<
    RetailTransactionCustomerAccountDepositTransBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionCustomerAccountDepositTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionCustomerAccountDepositTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionCustomerAccountDepositTransBiEntities<T>
  ): DeleteRequestBuilder<
    RetailTransactionCustomerAccountDepositTransBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<
    RetailTransactionCustomerAccountDepositTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailTransactionCustomerAccountDepositTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailTransactionCustomerAccountDepositTransBiEntities
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
