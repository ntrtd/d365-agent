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
import { RetailTransactionMarkupTransBiEntities } from './RetailTransactionMarkupTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionMarkupTransBiEntities} entity.
 */
export class RetailTransactionMarkupTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionMarkupTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionMarkupTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionMarkupTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionMarkupTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionMarkupTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionMarkupTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionMarkupTransBiEntities`.
   */
  create(
    entity: RetailTransactionMarkupTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionMarkupTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionMarkupTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionMarkupTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionMarkupTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionMarkupTransBiEntities.store}.
   * @param terminalId Key property. See {@link RetailTransactionMarkupTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionMarkupTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionMarkupTransBiEntities.saleLineNum}.
   * @param markupLineNum Key property. See {@link RetailTransactionMarkupTransBiEntities.markupLineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionMarkupTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    markupLineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionMarkupTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionMarkupTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      store: store,
      terminalId: terminalId,
      transactionId: transactionId,
      saleLineNum: saleLineNum,
      markupLineNum: markupLineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionMarkupTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionMarkupTransBiEntities`.
   */
  update(
    entity: RetailTransactionMarkupTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionMarkupTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionMarkupTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionMarkupTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionMarkupTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionMarkupTransBiEntities.store}.
   * @param terminalId Key property. See {@link RetailTransactionMarkupTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionMarkupTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionMarkupTransBiEntities.saleLineNum}.
   * @param markupLineNum Key property. See {@link RetailTransactionMarkupTransBiEntities.markupLineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionMarkupTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminalId: string,
    transactionId: string,
    saleLineNum: BigNumber,
    markupLineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionMarkupTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionMarkupTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionMarkupTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionMarkupTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionMarkupTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminalId?: string,
    transactionId?: string,
    saleLineNum?: BigNumber,
    markupLineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionMarkupTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionMarkupTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionMarkupTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminalId: terminalId!,
            transactionId: transactionId!,
            saleLineNum: saleLineNum!,
            markupLineNum: markupLineNum!
          }
    );
  }
}
