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
import { RetailTransactionChargeTaxMeasureBiEntities } from './RetailTransactionChargeTaxMeasureBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionChargeTaxMeasureBiEntities} entity.
 */
export class RetailTransactionChargeTaxMeasureBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionChargeTaxMeasureBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionChargeTaxMeasureBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionChargeTaxMeasureBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionChargeTaxMeasureBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionChargeTaxMeasureBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionChargeTaxMeasureBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionChargeTaxMeasureBiEntities`.
   */
  create(
    entity: RetailTransactionChargeTaxMeasureBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionChargeTaxMeasureBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionChargeTaxMeasureBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionChargeTaxMeasureBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.saleLineNum}.
   * @param markupLineNum Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.markupLineNum}.
   * @param path Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.path}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionChargeTaxMeasureBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    markupLineNum: DeserializedType<T, 'Edm.Decimal'>,
    path: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionChargeTaxMeasureBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionChargeTaxMeasureBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      TransactionId: transactionId,
      SaleLineNum: saleLineNum,
      MarkupLineNum: markupLineNum,
      Path: path
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionChargeTaxMeasureBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionChargeTaxMeasureBiEntities`.
   */
  update(
    entity: RetailTransactionChargeTaxMeasureBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionChargeTaxMeasureBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionChargeTaxMeasureBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionChargeTaxMeasureBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.saleLineNum}.
   * @param markupLineNum Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.markupLineNum}.
   * @param path Key property. See {@link RetailTransactionChargeTaxMeasureBiEntities.path}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionChargeTaxMeasureBiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    saleLineNum: BigNumber,
    markupLineNum: BigNumber,
    path: string
  ): DeleteRequestBuilder<RetailTransactionChargeTaxMeasureBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionChargeTaxMeasureBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionChargeTaxMeasureBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionChargeTaxMeasureBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionChargeTaxMeasureBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    saleLineNum?: BigNumber,
    markupLineNum?: BigNumber,
    path?: string
  ): DeleteRequestBuilder<RetailTransactionChargeTaxMeasureBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionChargeTaxMeasureBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionChargeTaxMeasureBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            SaleLineNum: saleLineNum!,
            MarkupLineNum: markupLineNum!,
            Path: path!
          }
    );
  }
}
