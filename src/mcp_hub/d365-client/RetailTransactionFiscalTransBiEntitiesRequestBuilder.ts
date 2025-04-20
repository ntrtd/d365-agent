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
import { RetailTransactionFiscalTransBiEntities } from './RetailTransactionFiscalTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionFiscalTransBiEntities} entity.
 */
export class RetailTransactionFiscalTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionFiscalTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionFiscalTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionFiscalTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionFiscalTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionFiscalTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionFiscalTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionFiscalTransBiEntities`.
   */
  create(
    entity: RetailTransactionFiscalTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionFiscalTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionFiscalTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionFiscalTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionFiscalTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionFiscalTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionFiscalTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionFiscalTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionFiscalTransBiEntities.lineNum}.
   * @param recordGuid Key property. See {@link RetailTransactionFiscalTransBiEntities.recordGuid}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionFiscalTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    recordGuid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RetailTransactionFiscalTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionFiscalTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId,
      LineNum: lineNum,
      RecordGuid: recordGuid
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionFiscalTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionFiscalTransBiEntities`.
   */
  update(
    entity: RetailTransactionFiscalTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionFiscalTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionFiscalTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionFiscalTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionFiscalTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionFiscalTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionFiscalTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionFiscalTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionFiscalTransBiEntities.lineNum}.
   * @param recordGuid Key property. See {@link RetailTransactionFiscalTransBiEntities.recordGuid}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionFiscalTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber,
    recordGuid: string
  ): DeleteRequestBuilder<RetailTransactionFiscalTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionFiscalTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionFiscalTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionFiscalTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionFiscalTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber,
    recordGuid?: string
  ): DeleteRequestBuilder<RetailTransactionFiscalTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionFiscalTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionFiscalTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            LineNum: lineNum!,
            RecordGuid: recordGuid!
          }
    );
  }
}
