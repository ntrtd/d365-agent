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
import { RetailDiscountMultibuyTiers } from './RetailDiscountMultibuyTiers';

/**
 * Request builder class for operations supported on the {@link RetailDiscountMultibuyTiers} entity.
 */
export class RetailDiscountMultibuyTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDiscountMultibuyTiers<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDiscountMultibuyTiers` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDiscountMultibuyTiers` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDiscountMultibuyTiers<T>, T> {
    return new GetAllRequestBuilder<RetailDiscountMultibuyTiers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDiscountMultibuyTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDiscountMultibuyTiers`.
   */
  create(
    entity: RetailDiscountMultibuyTiers<T>
  ): CreateRequestBuilder<RetailDiscountMultibuyTiers<T>, T> {
    return new CreateRequestBuilder<RetailDiscountMultibuyTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDiscountMultibuyTiers` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDiscountMultibuyTiers.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountMultibuyTiers.offerId}.
   * @param quantityLowest Key property. See {@link RetailDiscountMultibuyTiers.quantityLowest}.
   * @returns A request builder for creating requests to retrieve one `RetailDiscountMultibuyTiers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    quantityLowest: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailDiscountMultibuyTiers<T>, T> {
    return new GetByKeyRequestBuilder<RetailDiscountMultibuyTiers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId,
        QuantityLowest: quantityLowest
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDiscountMultibuyTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDiscountMultibuyTiers`.
   */
  update(
    entity: RetailDiscountMultibuyTiers<T>
  ): UpdateRequestBuilder<RetailDiscountMultibuyTiers<T>, T> {
    return new UpdateRequestBuilder<RetailDiscountMultibuyTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountMultibuyTiers`.
   * @param dataAreaId Key property. See {@link RetailDiscountMultibuyTiers.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountMultibuyTiers.offerId}.
   * @param quantityLowest Key property. See {@link RetailDiscountMultibuyTiers.quantityLowest}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountMultibuyTiers`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    quantityLowest: BigNumber
  ): DeleteRequestBuilder<RetailDiscountMultibuyTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountMultibuyTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountMultibuyTiers` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDiscountMultibuyTiers<T>
  ): DeleteRequestBuilder<RetailDiscountMultibuyTiers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    quantityLowest?: BigNumber
  ): DeleteRequestBuilder<RetailDiscountMultibuyTiers<T>, T> {
    return new DeleteRequestBuilder<RetailDiscountMultibuyTiers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDiscountMultibuyTiers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            QuantityLowest: quantityLowest!
          }
    );
  }
}
