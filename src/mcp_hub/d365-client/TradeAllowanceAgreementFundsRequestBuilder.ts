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
import { TradeAllowanceAgreementFunds } from './TradeAllowanceAgreementFunds';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementFunds} entity.
 */
export class TradeAllowanceAgreementFundsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeAllowanceAgreementFunds<T>, T> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementFunds` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementFunds` entities.
   */
  getAll(): GetAllRequestBuilder<TradeAllowanceAgreementFunds<T>, T> {
    return new GetAllRequestBuilder<TradeAllowanceAgreementFunds<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementFunds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementFunds`.
   */
  create(
    entity: TradeAllowanceAgreementFunds<T>
  ): CreateRequestBuilder<TradeAllowanceAgreementFunds<T>, T> {
    return new CreateRequestBuilder<TradeAllowanceAgreementFunds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementFunds` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementFunds.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementFunds.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementFunds.customerAccountNumber}.
   * @param promotionFundId Key property. See {@link TradeAllowanceAgreementFunds.promotionFundId}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementFunds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    promotionFundId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeAllowanceAgreementFunds<T>, T> {
    return new GetByKeyRequestBuilder<TradeAllowanceAgreementFunds<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAllowanceAgreementId: tradeAllowanceAgreementId,
        CustomerAccountNumber: customerAccountNumber,
        PromotionFundId: promotionFundId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementFunds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementFunds`.
   */
  update(
    entity: TradeAllowanceAgreementFunds<T>
  ): UpdateRequestBuilder<TradeAllowanceAgreementFunds<T>, T> {
    return new UpdateRequestBuilder<TradeAllowanceAgreementFunds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementFunds`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementFunds.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementFunds.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementFunds.customerAccountNumber}.
   * @param promotionFundId Key property. See {@link TradeAllowanceAgreementFunds.promotionFundId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementFunds`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementId: string,
    customerAccountNumber: string,
    promotionFundId: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementFunds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementFunds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementFunds` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementFunds<T>
  ): DeleteRequestBuilder<TradeAllowanceAgreementFunds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementId?: string,
    customerAccountNumber?: string,
    promotionFundId?: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementFunds<T>, T> {
    return new DeleteRequestBuilder<TradeAllowanceAgreementFunds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TradeAllowanceAgreementFunds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
            CustomerAccountNumber: customerAccountNumber!,
            PromotionFundId: promotionFundId!
          }
    );
  }
}
