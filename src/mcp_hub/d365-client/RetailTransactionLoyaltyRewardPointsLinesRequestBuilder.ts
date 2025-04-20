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
import { RetailTransactionLoyaltyRewardPointsLines } from './RetailTransactionLoyaltyRewardPointsLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionLoyaltyRewardPointsLines} entity.
 */
export class RetailTransactionLoyaltyRewardPointsLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionLoyaltyRewardPointsLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionLoyaltyRewardPointsLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionLoyaltyRewardPointsLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionLoyaltyRewardPointsLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionLoyaltyRewardPointsLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionLoyaltyRewardPointsLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionLoyaltyRewardPointsLines`.
   */
  create(
    entity: RetailTransactionLoyaltyRewardPointsLines<T>
  ): CreateRequestBuilder<RetailTransactionLoyaltyRewardPointsLines<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionLoyaltyRewardPointsLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionLoyaltyRewardPointsLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.operatingUnitNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.lineNumber}.
   * @param terminal Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.transactionNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionLoyaltyRewardPointsLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionLoyaltyRewardPointsLines<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionLoyaltyRewardPointsLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OperatingUnitNumber: operatingUnitNumber,
      LineNumber: lineNumber,
      Terminal: terminal,
      TransactionNumber: transactionNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionLoyaltyRewardPointsLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionLoyaltyRewardPointsLines`.
   */
  update(
    entity: RetailTransactionLoyaltyRewardPointsLines<T>
  ): UpdateRequestBuilder<RetailTransactionLoyaltyRewardPointsLines<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionLoyaltyRewardPointsLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionLoyaltyRewardPointsLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.operatingUnitNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.lineNumber}.
   * @param terminal Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionLoyaltyRewardPointsLines.transactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionLoyaltyRewardPointsLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    lineNumber: BigNumber,
    terminal: string,
    transactionNumber: string
  ): DeleteRequestBuilder<RetailTransactionLoyaltyRewardPointsLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionLoyaltyRewardPointsLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionLoyaltyRewardPointsLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionLoyaltyRewardPointsLines<T>
  ): DeleteRequestBuilder<RetailTransactionLoyaltyRewardPointsLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    lineNumber?: BigNumber,
    terminal?: string,
    transactionNumber?: string
  ): DeleteRequestBuilder<RetailTransactionLoyaltyRewardPointsLines<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionLoyaltyRewardPointsLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionLoyaltyRewardPointsLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            LineNumber: lineNumber!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!
          }
    );
  }
}
