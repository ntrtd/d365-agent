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
import { RetailTransactionBankedTenderTransBiEntities } from './RetailTransactionBankedTenderTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionBankedTenderTransBiEntities} entity.
 */
export class RetailTransactionBankedTenderTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionBankedTenderTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionBankedTenderTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionBankedTenderTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionBankedTenderTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionBankedTenderTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionBankedTenderTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionBankedTenderTransBiEntities`.
   */
  create(
    entity: RetailTransactionBankedTenderTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionBankedTenderTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionBankedTenderTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionBankedTenderTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionBankedTenderTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionBankedTenderTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionBankedTenderTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionBankedTenderTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionBankedTenderTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionBankedTenderTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    RetailTransactionBankedTenderTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionBankedTenderTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionBankedTenderTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionBankedTenderTransBiEntities`.
   */
  update(
    entity: RetailTransactionBankedTenderTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionBankedTenderTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionBankedTenderTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionBankedTenderTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionBankedTenderTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionBankedTenderTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionBankedTenderTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionBankedTenderTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionBankedTenderTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionBankedTenderTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionBankedTenderTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionBankedTenderTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionBankedTenderTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionBankedTenderTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionBankedTenderTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionBankedTenderTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionBankedTenderTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionBankedTenderTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            LineNum: lineNum!
          }
    );
  }
}
