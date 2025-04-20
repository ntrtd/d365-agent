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
import { RetailTransactionLoyaltyRewardPointTransBiEntities } from './RetailTransactionLoyaltyRewardPointTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionLoyaltyRewardPointTransBiEntities} entity.
 */
export class RetailTransactionLoyaltyRewardPointTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailTransactionLoyaltyRewardPointTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionLoyaltyRewardPointTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionLoyaltyRewardPointTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionLoyaltyRewardPointTransBiEntities`.
   */
  create(
    entity: RetailTransactionLoyaltyRewardPointTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionLoyaltyRewardPointTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionLoyaltyRewardPointTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      storeId: storeId,
      terminalId: terminalId,
      transactionId: transactionId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionLoyaltyRewardPointTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionLoyaltyRewardPointTransBiEntities`.
   */
  update(
    entity: RetailTransactionLoyaltyRewardPointTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionLoyaltyRewardPointTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionLoyaltyRewardPointTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionLoyaltyRewardPointTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<
    RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionLoyaltyRewardPointTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionLoyaltyRewardPointTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionLoyaltyRewardPointTransBiEntities<T>
  ): DeleteRequestBuilder<
    RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<
    RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailTransactionLoyaltyRewardPointTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailTransactionLoyaltyRewardPointTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            storeId: storeId!,
            terminalId: terminalId!,
            transactionId: transactionId!,
            LineNum: lineNum!
          }
    );
  }
}
