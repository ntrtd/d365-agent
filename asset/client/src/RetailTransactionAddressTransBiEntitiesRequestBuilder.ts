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
import { RetailTransactionAddressTransBiEntities } from './RetailTransactionAddressTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAddressTransBiEntities} entity.
 */
export class RetailTransactionAddressTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAddressTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAddressTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAddressTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionAddressTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionAddressTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAddressTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAddressTransBiEntities`.
   */
  create(
    entity: RetailTransactionAddressTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionAddressTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAddressTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAddressTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAddressTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionAddressTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionAddressTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionAddressTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionAddressTransBiEntities.saleLineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAddressTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAddressTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAddressTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      store: store,
      terminal: terminal,
      transactionId: transactionId,
      SaleLineNum: saleLineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAddressTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAddressTransBiEntities`.
   */
  update(
    entity: RetailTransactionAddressTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionAddressTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAddressTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAddressTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionAddressTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionAddressTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionAddressTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionAddressTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionAddressTransBiEntities.saleLineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAddressTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    saleLineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAddressTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAddressTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAddressTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAddressTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionAddressTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    saleLineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAddressTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAddressTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAddressTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminal: terminal!,
            transactionId: transactionId!,
            SaleLineNum: saleLineNum!
          }
    );
  }
}
