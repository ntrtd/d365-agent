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
import { TradeAllowanceAgreementMerchandisingEventBillBackLines } from './TradeAllowanceAgreementMerchandisingEventBillBackLines';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementMerchandisingEventBillBackLines} entity.
 */
export class TradeAllowanceAgreementMerchandisingEventBillBackLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
  T
> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementMerchandisingEventBillBackLines` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementMerchandisingEventBillBackLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementMerchandisingEventBillBackLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementMerchandisingEventBillBackLines`.
   */
  create(
    entity: TradeAllowanceAgreementMerchandisingEventBillBackLines<T>
  ): CreateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
    T
  > {
    return new CreateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementMerchandisingEventBillBackLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.tradeAllowanceAgreementMerchandisingEventId}.
   * @param tradeAllowanceAgreementMerchandisingEventBillBackId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.tradeAllowanceAgreementMerchandisingEventBillBackId}.
   * @param lineNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementMerchandisingEventBillBackLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
      T,
      'Edm.String'
    >,
    tradeAllowanceAgreementMerchandisingEventBillBackId: DeserializedType<
      T,
      'Edm.String'
    >,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAllowanceAgreementId: tradeAllowanceAgreementId,
      CustomerAccountNumber: customerAccountNumber,
      TradeAllowanceAgreementMerchandisingEventId:
        tradeAllowanceAgreementMerchandisingEventId,
      TradeAllowanceAgreementMerchandisingEventBillBackId:
        tradeAllowanceAgreementMerchandisingEventBillBackId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementMerchandisingEventBillBackLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementMerchandisingEventBillBackLines`.
   */
  update(
    entity: TradeAllowanceAgreementMerchandisingEventBillBackLines<T>
  ): UpdateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventBillBackLines`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.tradeAllowanceAgreementMerchandisingEventId}.
   * @param tradeAllowanceAgreementMerchandisingEventBillBackId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.tradeAllowanceAgreementMerchandisingEventBillBackId}.
   * @param lineNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBackLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventBillBackLines`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementId: string,
    customerAccountNumber: string,
    tradeAllowanceAgreementMerchandisingEventId: string,
    tradeAllowanceAgreementMerchandisingEventBillBackId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventBillBackLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventBillBackLines` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementMerchandisingEventBillBackLines<T>
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementId?: string,
    customerAccountNumber?: string,
    tradeAllowanceAgreementMerchandisingEventId?: string,
    tradeAllowanceAgreementMerchandisingEventBillBackId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TradeAllowanceAgreementMerchandisingEventBillBackLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
            CustomerAccountNumber: customerAccountNumber!,
            TradeAllowanceAgreementMerchandisingEventId:
              tradeAllowanceAgreementMerchandisingEventId!,
            TradeAllowanceAgreementMerchandisingEventBillBackId:
              tradeAllowanceAgreementMerchandisingEventBillBackId!,
            LineNumber: lineNumber!
          }
    );
  }
}
