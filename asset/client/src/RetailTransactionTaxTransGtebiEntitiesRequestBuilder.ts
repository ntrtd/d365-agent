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
import { RetailTransactionTaxTransGtebiEntities } from './RetailTransactionTaxTransGtebiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionTaxTransGtebiEntities} entity.
 */
export class RetailTransactionTaxTransGtebiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionTaxTransGtebiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionTaxTransGtebiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionTaxTransGtebiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionTaxTransGtebiEntities<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionTaxTransGtebiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionTaxTransGtebiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionTaxTransGtebiEntities`.
   */
  create(
    entity: RetailTransactionTaxTransGtebiEntities<T>
  ): CreateRequestBuilder<RetailTransactionTaxTransGtebiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionTaxTransGtebiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionTaxTransGtebiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxTransGtebiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionTaxTransGtebiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionTaxTransGtebiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionTaxTransGtebiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxTransGtebiEntities.saleLineNum}.
   * @param taxComponent Key property. See {@link RetailTransactionTaxTransGtebiEntities.taxComponent}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionTaxTransGtebiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    taxComponent: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionTaxTransGtebiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionTaxTransGtebiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      TransactionId: transactionId,
      SaleLineNum: saleLineNum,
      TaxComponent: taxComponent
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionTaxTransGtebiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionTaxTransGtebiEntities`.
   */
  update(
    entity: RetailTransactionTaxTransGtebiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionTaxTransGtebiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionTaxTransGtebiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxTransGtebiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxTransGtebiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionTaxTransGtebiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionTaxTransGtebiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionTaxTransGtebiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxTransGtebiEntities.saleLineNum}.
   * @param taxComponent Key property. See {@link RetailTransactionTaxTransGtebiEntities.taxComponent}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxTransGtebiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    saleLineNum: BigNumber,
    taxComponent: string
  ): DeleteRequestBuilder<RetailTransactionTaxTransGtebiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxTransGtebiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxTransGtebiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionTaxTransGtebiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionTaxTransGtebiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    saleLineNum?: BigNumber,
    taxComponent?: string
  ): DeleteRequestBuilder<RetailTransactionTaxTransGtebiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionTaxTransGtebiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionTaxTransGtebiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            SaleLineNum: saleLineNum!,
            TaxComponent: taxComponent!
          }
    );
  }
}
