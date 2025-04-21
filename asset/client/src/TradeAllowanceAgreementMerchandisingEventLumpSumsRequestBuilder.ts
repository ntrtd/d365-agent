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
import { TradeAllowanceAgreementMerchandisingEventLumpSums } from './TradeAllowanceAgreementMerchandisingEventLumpSums';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementMerchandisingEventLumpSums} entity.
 */
export class TradeAllowanceAgreementMerchandisingEventLumpSumsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
  T
> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementMerchandisingEventLumpSums` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementMerchandisingEventLumpSums` entities.
   */
  getAll(): GetAllRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementMerchandisingEventLumpSums` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementMerchandisingEventLumpSums`.
   */
  create(
    entity: TradeAllowanceAgreementMerchandisingEventLumpSums<T>
  ): CreateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
    T
  > {
    return new CreateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementMerchandisingEventLumpSums` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.tradeAllowanceAgreementMerchandisingEventId}.
   * @param lumpSumId Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.lumpSumId}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementMerchandisingEventLumpSums` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
      T,
      'Edm.String'
    >,
    lumpSumId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAllowanceAgreementId: tradeAllowanceAgreementId,
      CustomerAccountNumber: customerAccountNumber,
      TradeAllowanceAgreementMerchandisingEventId:
        tradeAllowanceAgreementMerchandisingEventId,
      LumpSumId: lumpSumId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementMerchandisingEventLumpSums`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementMerchandisingEventLumpSums`.
   */
  update(
    entity: TradeAllowanceAgreementMerchandisingEventLumpSums<T>
  ): UpdateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventLumpSums`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.tradeAllowanceAgreementMerchandisingEventId}.
   * @param lumpSumId Key property. See {@link TradeAllowanceAgreementMerchandisingEventLumpSums.lumpSumId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventLumpSums`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementId: string,
    customerAccountNumber: string,
    tradeAllowanceAgreementMerchandisingEventId: string,
    lumpSumId: BigNumber
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventLumpSums`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventLumpSums` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementMerchandisingEventLumpSums<T>
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementId?: string,
    customerAccountNumber?: string,
    tradeAllowanceAgreementMerchandisingEventId?: string,
    lumpSumId?: BigNumber
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventLumpSums<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TradeAllowanceAgreementMerchandisingEventLumpSums
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
            CustomerAccountNumber: customerAccountNumber!,
            TradeAllowanceAgreementMerchandisingEventId:
              tradeAllowanceAgreementMerchandisingEventId!,
            LumpSumId: lumpSumId!
          }
    );
  }
}
