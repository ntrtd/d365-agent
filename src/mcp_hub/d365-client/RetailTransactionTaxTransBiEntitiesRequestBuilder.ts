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
import { RetailTransactionTaxTransBiEntities } from './RetailTransactionTaxTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionTaxTransBiEntities} entity.
 */
export class RetailTransactionTaxTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionTaxTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionTaxTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionTaxTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionTaxTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionTaxTransBiEntities`.
   */
  create(
    entity: RetailTransactionTaxTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionTaxTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxTransBiEntities.dataAreaId}.
   * @param terminalId Key property. See {@link RetailTransactionTaxTransBiEntities.terminalId}.
   * @param storeId Key property. See {@link RetailTransactionTaxTransBiEntities.storeId}.
   * @param transactionId Key property. See {@link RetailTransactionTaxTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxTransBiEntities.saleLineNum}.
   * @param taxCode Key property. See {@link RetailTransactionTaxTransBiEntities.taxCode}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionTaxTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionTaxTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TerminalId: terminalId,
      StoreId: storeId,
      TransactionId: transactionId,
      SaleLineNum: saleLineNum,
      TaxCode: taxCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionTaxTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionTaxTransBiEntities`.
   */
  update(
    entity: RetailTransactionTaxTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxTransBiEntities.dataAreaId}.
   * @param terminalId Key property. See {@link RetailTransactionTaxTransBiEntities.terminalId}.
   * @param storeId Key property. See {@link RetailTransactionTaxTransBiEntities.storeId}.
   * @param transactionId Key property. See {@link RetailTransactionTaxTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxTransBiEntities.saleLineNum}.
   * @param taxCode Key property. See {@link RetailTransactionTaxTransBiEntities.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    terminalId: string,
    storeId: string,
    transactionId: string,
    saleLineNum: BigNumber,
    taxCode: string
  ): DeleteRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionTaxTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminalId?: string,
    storeId?: string,
    transactionId?: string,
    saleLineNum?: BigNumber,
    taxCode?: string
  ): DeleteRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionTaxTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionTaxTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TerminalId: terminalId!,
            StoreId: storeId!,
            TransactionId: transactionId!,
            SaleLineNum: saleLineNum!,
            TaxCode: taxCode!
          }
    );
  }
}
