/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { TradeAllowanceAgreementMerchandisingEventFunds } from './TradeAllowanceAgreementMerchandisingEventFunds';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementMerchandisingEventFunds} entity.
 */
export class TradeAllowanceAgreementMerchandisingEventFundsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeAllowanceAgreementMerchandisingEventFunds<T>, T> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementMerchandisingEventFunds` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementMerchandisingEventFunds` entities.
   */
  getAll(): GetAllRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventFunds<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventFunds<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementMerchandisingEventFunds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementMerchandisingEventFunds`.
   */
  create(
    entity: TradeAllowanceAgreementMerchandisingEventFunds<T>
  ): CreateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventFunds<T>,
    T
  > {
    return new CreateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventFunds<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementMerchandisingEventFunds` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.tradeAllowanceAgreementMerchandisingEventId}.
   * @param promotionFundId Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.promotionFundId}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementMerchandisingEventFunds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
      T,
      'Edm.String'
    >,
    promotionFundId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventFunds<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventFunds<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAllowanceAgreementId: tradeAllowanceAgreementId,
      CustomerAccountNumber: customerAccountNumber,
      TradeAllowanceAgreementMerchandisingEventId:
        tradeAllowanceAgreementMerchandisingEventId,
      PromotionFundId: promotionFundId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementMerchandisingEventFunds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementMerchandisingEventFunds`.
   */
  update(
    entity: TradeAllowanceAgreementMerchandisingEventFunds<T>
  ): UpdateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventFunds<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventFunds<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventFunds`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.tradeAllowanceAgreementMerchandisingEventId}.
   * @param promotionFundId Key property. See {@link TradeAllowanceAgreementMerchandisingEventFunds.promotionFundId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventFunds`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementId: string,
    customerAccountNumber: string,
    tradeAllowanceAgreementMerchandisingEventId: string,
    promotionFundId: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementMerchandisingEventFunds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventFunds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventFunds` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementMerchandisingEventFunds<T>
  ): DeleteRequestBuilder<TradeAllowanceAgreementMerchandisingEventFunds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementId?: string,
    customerAccountNumber?: string,
    tradeAllowanceAgreementMerchandisingEventId?: string,
    promotionFundId?: string
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventFunds<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventFunds<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TradeAllowanceAgreementMerchandisingEventFunds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
            CustomerAccountNumber: customerAccountNumber!,
            TradeAllowanceAgreementMerchandisingEventId:
              tradeAllowanceAgreementMerchandisingEventId!,
            PromotionFundId: promotionFundId!
          }
    );
  }
}
