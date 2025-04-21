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
import { TransactionSafeTenderTrans } from './TransactionSafeTenderTrans';

/**
 * Request builder class for operations supported on the {@link TransactionSafeTenderTrans} entity.
 */
export class TransactionSafeTenderTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionSafeTenderTrans<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionSafeTenderTrans` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionSafeTenderTrans` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionSafeTenderTrans<T>, T> {
    return new GetAllRequestBuilder<TransactionSafeTenderTrans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionSafeTenderTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionSafeTenderTrans`.
   */
  create(
    entity: TransactionSafeTenderTrans<T>
  ): CreateRequestBuilder<TransactionSafeTenderTrans<T>, T> {
    return new CreateRequestBuilder<TransactionSafeTenderTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionSafeTenderTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionSafeTenderTrans.dataAreaId}.
   * @param retailChannelId Key property. See {@link TransactionSafeTenderTrans.retailChannelId}.
   * @param storeNumber Key property. See {@link TransactionSafeTenderTrans.storeNumber}.
   * @param terminal Key property. See {@link TransactionSafeTenderTrans.terminal}.
   * @param transactionNumber Key property. See {@link TransactionSafeTenderTrans.transactionNumber}.
   * @param statementId Key property. See {@link TransactionSafeTenderTrans.statementId}.
   * @param lineNumber Key property. See {@link TransactionSafeTenderTrans.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `TransactionSafeTenderTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TransactionSafeTenderTrans<T>, T> {
    return new GetByKeyRequestBuilder<TransactionSafeTenderTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RetailChannelId: retailChannelId,
        StoreNumber: storeNumber,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        StatementId: statementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionSafeTenderTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionSafeTenderTrans`.
   */
  update(
    entity: TransactionSafeTenderTrans<T>
  ): UpdateRequestBuilder<TransactionSafeTenderTrans<T>, T> {
    return new UpdateRequestBuilder<TransactionSafeTenderTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionSafeTenderTrans`.
   * @param dataAreaId Key property. See {@link TransactionSafeTenderTrans.dataAreaId}.
   * @param retailChannelId Key property. See {@link TransactionSafeTenderTrans.retailChannelId}.
   * @param storeNumber Key property. See {@link TransactionSafeTenderTrans.storeNumber}.
   * @param terminal Key property. See {@link TransactionSafeTenderTrans.terminal}.
   * @param transactionNumber Key property. See {@link TransactionSafeTenderTrans.transactionNumber}.
   * @param statementId Key property. See {@link TransactionSafeTenderTrans.statementId}.
   * @param lineNumber Key property. See {@link TransactionSafeTenderTrans.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionSafeTenderTrans`.
   */
  delete(
    dataAreaId: string,
    retailChannelId: string,
    storeNumber: string,
    terminal: string,
    transactionNumber: string,
    statementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<TransactionSafeTenderTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionSafeTenderTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionSafeTenderTrans` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionSafeTenderTrans<T>
  ): DeleteRequestBuilder<TransactionSafeTenderTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retailChannelId?: string,
    storeNumber?: string,
    terminal?: string,
    transactionNumber?: string,
    statementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<TransactionSafeTenderTrans<T>, T> {
    return new DeleteRequestBuilder<TransactionSafeTenderTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionSafeTenderTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetailChannelId: retailChannelId!,
            StoreNumber: storeNumber!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            StatementId: statementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
