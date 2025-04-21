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
import { RetailTransactionChargeTaxTransBiEntities } from './RetailTransactionChargeTaxTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionChargeTaxTransBiEntities} entity.
 */
export class RetailTransactionChargeTaxTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionChargeTaxTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionChargeTaxTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionChargeTaxTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionChargeTaxTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionChargeTaxTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionChargeTaxTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionChargeTaxTransBiEntities`.
   */
  create(
    entity: RetailTransactionChargeTaxTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionChargeTaxTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionChargeTaxTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionChargeTaxTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionChargeTaxTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionChargeTaxTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionChargeTaxTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionChargeTaxTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionChargeTaxTransBiEntities.saleLineNum}.
   * @param markupLineNum Key property. See {@link RetailTransactionChargeTaxTransBiEntities.markupLineNum}.
   * @param taxCode Key property. See {@link RetailTransactionChargeTaxTransBiEntities.taxCode}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionChargeTaxTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    markupLineNum: DeserializedType<T, 'Edm.Decimal'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionChargeTaxTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionChargeTaxTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      TransactionId: transactionId,
      SaleLineNum: saleLineNum,
      MarkupLineNum: markupLineNum,
      TaxCode: taxCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionChargeTaxTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionChargeTaxTransBiEntities`.
   */
  update(
    entity: RetailTransactionChargeTaxTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionChargeTaxTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionChargeTaxTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionChargeTaxTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionChargeTaxTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionChargeTaxTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionChargeTaxTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionChargeTaxTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionChargeTaxTransBiEntities.saleLineNum}.
   * @param markupLineNum Key property. See {@link RetailTransactionChargeTaxTransBiEntities.markupLineNum}.
   * @param taxCode Key property. See {@link RetailTransactionChargeTaxTransBiEntities.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionChargeTaxTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    saleLineNum: BigNumber,
    markupLineNum: BigNumber,
    taxCode: string
  ): DeleteRequestBuilder<RetailTransactionChargeTaxTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionChargeTaxTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionChargeTaxTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionChargeTaxTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionChargeTaxTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    saleLineNum?: BigNumber,
    markupLineNum?: BigNumber,
    taxCode?: string
  ): DeleteRequestBuilder<RetailTransactionChargeTaxTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionChargeTaxTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionChargeTaxTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            SaleLineNum: saleLineNum!,
            MarkupLineNum: markupLineNum!,
            TaxCode: taxCode!
          }
    );
  }
}
