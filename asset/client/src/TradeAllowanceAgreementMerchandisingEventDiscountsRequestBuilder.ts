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
import { TradeAllowanceAgreementMerchandisingEventDiscounts } from './TradeAllowanceAgreementMerchandisingEventDiscounts';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementMerchandisingEventDiscounts} entity.
 */
export class TradeAllowanceAgreementMerchandisingEventDiscountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
  T
> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementMerchandisingEventDiscounts` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementMerchandisingEventDiscounts` entities.
   */
  getAll(): GetAllRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementMerchandisingEventDiscounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementMerchandisingEventDiscounts`.
   */
  create(
    entity: TradeAllowanceAgreementMerchandisingEventDiscounts<T>
  ): CreateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
    T
  > {
    return new CreateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementMerchandisingEventDiscounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.tradeAllowanceAgreementMerchandisingEventId}.
   * @param discountLineNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.discountLineNumber}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementMerchandisingEventDiscounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
      T,
      'Edm.String'
    >,
    discountLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAllowanceAgreementId: tradeAllowanceAgreementId,
      CustomerAccountNumber: customerAccountNumber,
      TradeAllowanceAgreementMerchandisingEventId:
        tradeAllowanceAgreementMerchandisingEventId,
      DiscountLineNumber: discountLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementMerchandisingEventDiscounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementMerchandisingEventDiscounts`.
   */
  update(
    entity: TradeAllowanceAgreementMerchandisingEventDiscounts<T>
  ): UpdateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventDiscounts`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.tradeAllowanceAgreementMerchandisingEventId}.
   * @param discountLineNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventDiscounts.discountLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventDiscounts`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementId: string,
    customerAccountNumber: string,
    tradeAllowanceAgreementMerchandisingEventId: string,
    discountLineNumber: BigNumber
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventDiscounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventDiscounts` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementMerchandisingEventDiscounts<T>
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementId?: string,
    customerAccountNumber?: string,
    tradeAllowanceAgreementMerchandisingEventId?: string,
    discountLineNumber?: BigNumber
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventDiscounts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TradeAllowanceAgreementMerchandisingEventDiscounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
            CustomerAccountNumber: customerAccountNumber!,
            TradeAllowanceAgreementMerchandisingEventId:
              tradeAllowanceAgreementMerchandisingEventId!,
            DiscountLineNumber: discountLineNumber!
          }
    );
  }
}
