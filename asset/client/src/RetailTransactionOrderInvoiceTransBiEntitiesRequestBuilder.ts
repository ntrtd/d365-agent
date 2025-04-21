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
import { RetailTransactionOrderInvoiceTransBiEntities } from './RetailTransactionOrderInvoiceTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionOrderInvoiceTransBiEntities} entity.
 */
export class RetailTransactionOrderInvoiceTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionOrderInvoiceTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionOrderInvoiceTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionOrderInvoiceTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionOrderInvoiceTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionOrderInvoiceTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionOrderInvoiceTransBiEntities`.
   */
  create(
    entity: RetailTransactionOrderInvoiceTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionOrderInvoiceTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionOrderInvoiceTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionOrderInvoiceTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    RetailTransactionOrderInvoiceTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      storeId: storeId,
      terminalId: terminalId,
      transactionId: transactionId,
      lineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionOrderInvoiceTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionOrderInvoiceTransBiEntities`.
   */
  update(
    entity: RetailTransactionOrderInvoiceTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionOrderInvoiceTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionOrderInvoiceTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionOrderInvoiceTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionOrderInvoiceTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionOrderInvoiceTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionOrderInvoiceTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionOrderInvoiceTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionOrderInvoiceTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionOrderInvoiceTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionOrderInvoiceTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionOrderInvoiceTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            storeId: storeId!,
            terminalId: terminalId!,
            transactionId: transactionId!,
            lineNum: lineNum!
          }
    );
  }
}
