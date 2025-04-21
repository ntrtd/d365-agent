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
import { TransactionBankedTenderTrans } from './TransactionBankedTenderTrans';

/**
 * Request builder class for operations supported on the {@link TransactionBankedTenderTrans} entity.
 */
export class TransactionBankedTenderTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionBankedTenderTrans<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionBankedTenderTrans` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionBankedTenderTrans` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionBankedTenderTrans<T>, T> {
    return new GetAllRequestBuilder<TransactionBankedTenderTrans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionBankedTenderTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionBankedTenderTrans`.
   */
  create(
    entity: TransactionBankedTenderTrans<T>
  ): CreateRequestBuilder<TransactionBankedTenderTrans<T>, T> {
    return new CreateRequestBuilder<TransactionBankedTenderTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionBankedTenderTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionBankedTenderTrans.dataAreaId}.
   * @param retailChannelId Key property. See {@link TransactionBankedTenderTrans.retailChannelId}.
   * @param storeNumber Key property. See {@link TransactionBankedTenderTrans.storeNumber}.
   * @param terminal Key property. See {@link TransactionBankedTenderTrans.terminal}.
   * @param transactionNumber Key property. See {@link TransactionBankedTenderTrans.transactionNumber}.
   * @param lineNumber Key property. See {@link TransactionBankedTenderTrans.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `TransactionBankedTenderTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TransactionBankedTenderTrans<T>, T> {
    return new GetByKeyRequestBuilder<TransactionBankedTenderTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RetailChannelId: retailChannelId,
        StoreNumber: storeNumber,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionBankedTenderTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionBankedTenderTrans`.
   */
  update(
    entity: TransactionBankedTenderTrans<T>
  ): UpdateRequestBuilder<TransactionBankedTenderTrans<T>, T> {
    return new UpdateRequestBuilder<TransactionBankedTenderTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionBankedTenderTrans`.
   * @param dataAreaId Key property. See {@link TransactionBankedTenderTrans.dataAreaId}.
   * @param retailChannelId Key property. See {@link TransactionBankedTenderTrans.retailChannelId}.
   * @param storeNumber Key property. See {@link TransactionBankedTenderTrans.storeNumber}.
   * @param terminal Key property. See {@link TransactionBankedTenderTrans.terminal}.
   * @param transactionNumber Key property. See {@link TransactionBankedTenderTrans.transactionNumber}.
   * @param lineNumber Key property. See {@link TransactionBankedTenderTrans.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionBankedTenderTrans`.
   */
  delete(
    dataAreaId: string,
    retailChannelId: string,
    storeNumber: string,
    terminal: string,
    transactionNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<TransactionBankedTenderTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionBankedTenderTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionBankedTenderTrans` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionBankedTenderTrans<T>
  ): DeleteRequestBuilder<TransactionBankedTenderTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retailChannelId?: string,
    storeNumber?: string,
    terminal?: string,
    transactionNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<TransactionBankedTenderTrans<T>, T> {
    return new DeleteRequestBuilder<TransactionBankedTenderTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionBankedTenderTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetailChannelId: retailChannelId!,
            StoreNumber: storeNumber!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
