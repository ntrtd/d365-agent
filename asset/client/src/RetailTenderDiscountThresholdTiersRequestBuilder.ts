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
import { RetailTenderDiscountThresholdTiers } from './RetailTenderDiscountThresholdTiers';

/**
 * Request builder class for operations supported on the {@link RetailTenderDiscountThresholdTiers} entity.
 */
export class RetailTenderDiscountThresholdTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTenderDiscountThresholdTiers<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTenderDiscountThresholdTiers` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTenderDiscountThresholdTiers` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T> {
    return new GetAllRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTenderDiscountThresholdTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTenderDiscountThresholdTiers`.
   */
  create(
    entity: RetailTenderDiscountThresholdTiers<T>
  ): CreateRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T> {
    return new CreateRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTenderDiscountThresholdTiers` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTenderDiscountThresholdTiers.dataAreaId}.
   * @param offerId Key property. See {@link RetailTenderDiscountThresholdTiers.offerId}.
   * @param amountThreshold Key property. See {@link RetailTenderDiscountThresholdTiers.amountThreshold}.
   * @returns A request builder for creating requests to retrieve one `RetailTenderDiscountThresholdTiers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    amountThreshold: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T> {
    return new GetByKeyRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId,
        AmountThreshold: amountThreshold
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTenderDiscountThresholdTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTenderDiscountThresholdTiers`.
   */
  update(
    entity: RetailTenderDiscountThresholdTiers<T>
  ): UpdateRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T> {
    return new UpdateRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTenderDiscountThresholdTiers`.
   * @param dataAreaId Key property. See {@link RetailTenderDiscountThresholdTiers.dataAreaId}.
   * @param offerId Key property. See {@link RetailTenderDiscountThresholdTiers.offerId}.
   * @param amountThreshold Key property. See {@link RetailTenderDiscountThresholdTiers.amountThreshold}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderDiscountThresholdTiers`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    amountThreshold: BigNumber
  ): DeleteRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTenderDiscountThresholdTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderDiscountThresholdTiers` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTenderDiscountThresholdTiers<T>
  ): DeleteRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    amountThreshold?: BigNumber
  ): DeleteRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T> {
    return new DeleteRequestBuilder<RetailTenderDiscountThresholdTiers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTenderDiscountThresholdTiers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            AmountThreshold: amountThreshold!
          }
    );
  }
}
