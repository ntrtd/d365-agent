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
import { ShippingThresholdDiscounts } from './ShippingThresholdDiscounts';

/**
 * Request builder class for operations supported on the {@link ShippingThresholdDiscounts} entity.
 */
export class ShippingThresholdDiscountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingThresholdDiscounts<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingThresholdDiscounts` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingThresholdDiscounts` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingThresholdDiscounts<T>, T> {
    return new GetAllRequestBuilder<ShippingThresholdDiscounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingThresholdDiscounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingThresholdDiscounts`.
   */
  create(
    entity: ShippingThresholdDiscounts<T>
  ): CreateRequestBuilder<ShippingThresholdDiscounts<T>, T> {
    return new CreateRequestBuilder<ShippingThresholdDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingThresholdDiscounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingThresholdDiscounts.dataAreaId}.
   * @param offerId Key property. See {@link ShippingThresholdDiscounts.offerId}.
   * @returns A request builder for creating requests to retrieve one `ShippingThresholdDiscounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingThresholdDiscounts<T>, T> {
    return new GetByKeyRequestBuilder<ShippingThresholdDiscounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingThresholdDiscounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingThresholdDiscounts`.
   */
  update(
    entity: ShippingThresholdDiscounts<T>
  ): UpdateRequestBuilder<ShippingThresholdDiscounts<T>, T> {
    return new UpdateRequestBuilder<ShippingThresholdDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingThresholdDiscounts`.
   * @param dataAreaId Key property. See {@link ShippingThresholdDiscounts.dataAreaId}.
   * @param offerId Key property. See {@link ShippingThresholdDiscounts.offerId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingThresholdDiscounts`.
   */
  delete(
    dataAreaId: string,
    offerId: string
  ): DeleteRequestBuilder<ShippingThresholdDiscounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingThresholdDiscounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingThresholdDiscounts` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingThresholdDiscounts<T>
  ): DeleteRequestBuilder<ShippingThresholdDiscounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string
  ): DeleteRequestBuilder<ShippingThresholdDiscounts<T>, T> {
    return new DeleteRequestBuilder<ShippingThresholdDiscounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingThresholdDiscounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!
          }
    );
  }
}
