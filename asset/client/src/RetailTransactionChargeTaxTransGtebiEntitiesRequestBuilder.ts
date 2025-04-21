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
import { RetailTransactionChargeTaxTransGtebiEntities } from './RetailTransactionChargeTaxTransGtebiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionChargeTaxTransGtebiEntities} entity.
 */
export class RetailTransactionChargeTaxTransGtebiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionChargeTaxTransGtebiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionChargeTaxTransGtebiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionChargeTaxTransGtebiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionChargeTaxTransGtebiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionChargeTaxTransGtebiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionChargeTaxTransGtebiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionChargeTaxTransGtebiEntities`.
   */
  create(
    entity: RetailTransactionChargeTaxTransGtebiEntities<T>
  ): CreateRequestBuilder<RetailTransactionChargeTaxTransGtebiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionChargeTaxTransGtebiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionChargeTaxTransGtebiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.saleLineNum}.
   * @param markupLineNum Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.markupLineNum}.
   * @param taxComponent Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.taxComponent}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionChargeTaxTransGtebiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    markupLineNum: DeserializedType<T, 'Edm.Decimal'>,
    taxComponent: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailTransactionChargeTaxTransGtebiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionChargeTaxTransGtebiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      TransactionId: transactionId,
      SaleLineNum: saleLineNum,
      MarkupLineNum: markupLineNum,
      TaxComponent: taxComponent
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionChargeTaxTransGtebiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionChargeTaxTransGtebiEntities`.
   */
  update(
    entity: RetailTransactionChargeTaxTransGtebiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionChargeTaxTransGtebiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionChargeTaxTransGtebiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionChargeTaxTransGtebiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.saleLineNum}.
   * @param markupLineNum Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.markupLineNum}.
   * @param taxComponent Key property. See {@link RetailTransactionChargeTaxTransGtebiEntities.taxComponent}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionChargeTaxTransGtebiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    saleLineNum: BigNumber,
    markupLineNum: BigNumber,
    taxComponent: string
  ): DeleteRequestBuilder<RetailTransactionChargeTaxTransGtebiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionChargeTaxTransGtebiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionChargeTaxTransGtebiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionChargeTaxTransGtebiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionChargeTaxTransGtebiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    saleLineNum?: BigNumber,
    markupLineNum?: BigNumber,
    taxComponent?: string
  ): DeleteRequestBuilder<RetailTransactionChargeTaxTransGtebiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionChargeTaxTransGtebiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionChargeTaxTransGtebiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            SaleLineNum: saleLineNum!,
            MarkupLineNum: markupLineNum!,
            TaxComponent: taxComponent!
          }
    );
  }
}
