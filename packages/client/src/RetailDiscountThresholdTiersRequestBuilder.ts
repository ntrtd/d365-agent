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
import { RetailDiscountThresholdTiers } from './RetailDiscountThresholdTiers';

/**
 * Request builder class for operations supported on the {@link RetailDiscountThresholdTiers} entity.
 */
export class RetailDiscountThresholdTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDiscountThresholdTiers<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDiscountThresholdTiers` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDiscountThresholdTiers` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDiscountThresholdTiers<T>, T> {
    return new GetAllRequestBuilder<RetailDiscountThresholdTiers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDiscountThresholdTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDiscountThresholdTiers`.
   */
  create(
    entity: RetailDiscountThresholdTiers<T>
  ): CreateRequestBuilder<RetailDiscountThresholdTiers<T>, T> {
    return new CreateRequestBuilder<RetailDiscountThresholdTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDiscountThresholdTiers` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDiscountThresholdTiers.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountThresholdTiers.offerId}.
   * @param amountThreshold Key property. See {@link RetailDiscountThresholdTiers.amountThreshold}.
   * @returns A request builder for creating requests to retrieve one `RetailDiscountThresholdTiers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    amountThreshold: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailDiscountThresholdTiers<T>, T> {
    return new GetByKeyRequestBuilder<RetailDiscountThresholdTiers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId,
        AmountThreshold: amountThreshold
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDiscountThresholdTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDiscountThresholdTiers`.
   */
  update(
    entity: RetailDiscountThresholdTiers<T>
  ): UpdateRequestBuilder<RetailDiscountThresholdTiers<T>, T> {
    return new UpdateRequestBuilder<RetailDiscountThresholdTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountThresholdTiers`.
   * @param dataAreaId Key property. See {@link RetailDiscountThresholdTiers.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountThresholdTiers.offerId}.
   * @param amountThreshold Key property. See {@link RetailDiscountThresholdTiers.amountThreshold}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountThresholdTiers`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    amountThreshold: BigNumber
  ): DeleteRequestBuilder<RetailDiscountThresholdTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountThresholdTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountThresholdTiers` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDiscountThresholdTiers<T>
  ): DeleteRequestBuilder<RetailDiscountThresholdTiers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    amountThreshold?: BigNumber
  ): DeleteRequestBuilder<RetailDiscountThresholdTiers<T>, T> {
    return new DeleteRequestBuilder<RetailDiscountThresholdTiers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDiscountThresholdTiers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            AmountThreshold: amountThreshold!
          }
    );
  }
}
