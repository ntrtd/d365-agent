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
import { MarginComponentPriceAdjustments } from './MarginComponentPriceAdjustments';

/**
 * Request builder class for operations supported on the {@link MarginComponentPriceAdjustments} entity.
 */
export class MarginComponentPriceAdjustmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MarginComponentPriceAdjustments<T>, T> {
  /**
   * Returns a request builder for querying all `MarginComponentPriceAdjustments` entities.
   * @returns A request builder for creating requests to retrieve all `MarginComponentPriceAdjustments` entities.
   */
  getAll(): GetAllRequestBuilder<MarginComponentPriceAdjustments<T>, T> {
    return new GetAllRequestBuilder<MarginComponentPriceAdjustments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MarginComponentPriceAdjustments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MarginComponentPriceAdjustments`.
   */
  create(
    entity: MarginComponentPriceAdjustments<T>
  ): CreateRequestBuilder<MarginComponentPriceAdjustments<T>, T> {
    return new CreateRequestBuilder<MarginComponentPriceAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MarginComponentPriceAdjustments` entity based on its keys.
   * @param dataAreaId Key property. See {@link MarginComponentPriceAdjustments.dataAreaId}.
   * @param offerId Key property. See {@link MarginComponentPriceAdjustments.offerId}.
   * @returns A request builder for creating requests to retrieve one `MarginComponentPriceAdjustments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MarginComponentPriceAdjustments<T>, T> {
    return new GetByKeyRequestBuilder<MarginComponentPriceAdjustments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MarginComponentPriceAdjustments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MarginComponentPriceAdjustments`.
   */
  update(
    entity: MarginComponentPriceAdjustments<T>
  ): UpdateRequestBuilder<MarginComponentPriceAdjustments<T>, T> {
    return new UpdateRequestBuilder<MarginComponentPriceAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MarginComponentPriceAdjustments`.
   * @param dataAreaId Key property. See {@link MarginComponentPriceAdjustments.dataAreaId}.
   * @param offerId Key property. See {@link MarginComponentPriceAdjustments.offerId}.
   * @returns A request builder for creating requests that delete an entity of type `MarginComponentPriceAdjustments`.
   */
  delete(
    dataAreaId: string,
    offerId: string
  ): DeleteRequestBuilder<MarginComponentPriceAdjustments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MarginComponentPriceAdjustments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MarginComponentPriceAdjustments` by taking the entity as a parameter.
   */
  delete(
    entity: MarginComponentPriceAdjustments<T>
  ): DeleteRequestBuilder<MarginComponentPriceAdjustments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string
  ): DeleteRequestBuilder<MarginComponentPriceAdjustments<T>, T> {
    return new DeleteRequestBuilder<MarginComponentPriceAdjustments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MarginComponentPriceAdjustments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!
          }
    );
  }
}
