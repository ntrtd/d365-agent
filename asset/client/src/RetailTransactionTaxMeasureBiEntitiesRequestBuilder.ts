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
import { RetailTransactionTaxMeasureBiEntities } from './RetailTransactionTaxMeasureBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionTaxMeasureBiEntities} entity.
 */
export class RetailTransactionTaxMeasureBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionTaxMeasureBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionTaxMeasureBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionTaxMeasureBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionTaxMeasureBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionTaxMeasureBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionTaxMeasureBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionTaxMeasureBiEntities`.
   */
  create(
    entity: RetailTransactionTaxMeasureBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionTaxMeasureBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionTaxMeasureBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionTaxMeasureBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxMeasureBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionTaxMeasureBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionTaxMeasureBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionTaxMeasureBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxMeasureBiEntities.saleLineNum}.
   * @param path Key property. See {@link RetailTransactionTaxMeasureBiEntities.path}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionTaxMeasureBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    path: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionTaxMeasureBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionTaxMeasureBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      TransactionId: transactionId,
      SaleLineNum: saleLineNum,
      Path: path
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionTaxMeasureBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionTaxMeasureBiEntities`.
   */
  update(
    entity: RetailTransactionTaxMeasureBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionTaxMeasureBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionTaxMeasureBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxMeasureBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxMeasureBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionTaxMeasureBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionTaxMeasureBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionTaxMeasureBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxMeasureBiEntities.saleLineNum}.
   * @param path Key property. See {@link RetailTransactionTaxMeasureBiEntities.path}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxMeasureBiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    saleLineNum: BigNumber,
    path: string
  ): DeleteRequestBuilder<RetailTransactionTaxMeasureBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxMeasureBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxMeasureBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionTaxMeasureBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionTaxMeasureBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    saleLineNum?: BigNumber,
    path?: string
  ): DeleteRequestBuilder<RetailTransactionTaxMeasureBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionTaxMeasureBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionTaxMeasureBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            SaleLineNum: saleLineNum!,
            Path: path!
          }
    );
  }
}
