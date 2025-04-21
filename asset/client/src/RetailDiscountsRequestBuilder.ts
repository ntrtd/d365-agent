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
import { RetailDiscounts } from './RetailDiscounts';

/**
 * Request builder class for operations supported on the {@link RetailDiscounts} entity.
 */
export class RetailDiscountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDiscounts<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDiscounts` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDiscounts` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDiscounts<T>, T> {
    return new GetAllRequestBuilder<RetailDiscounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailDiscounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDiscounts`.
   */
  create(
    entity: RetailDiscounts<T>
  ): CreateRequestBuilder<RetailDiscounts<T>, T> {
    return new CreateRequestBuilder<RetailDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDiscounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDiscounts.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscounts.offerId}.
   * @returns A request builder for creating requests to retrieve one `RetailDiscounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailDiscounts<T>, T> {
    return new GetByKeyRequestBuilder<RetailDiscounts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      OfferId: offerId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDiscounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDiscounts`.
   */
  update(
    entity: RetailDiscounts<T>
  ): UpdateRequestBuilder<RetailDiscounts<T>, T> {
    return new UpdateRequestBuilder<RetailDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDiscounts`.
   * @param dataAreaId Key property. See {@link RetailDiscounts.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscounts.offerId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscounts`.
   */
  delete(
    dataAreaId: string,
    offerId: string
  ): DeleteRequestBuilder<RetailDiscounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDiscounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscounts` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDiscounts<T>
  ): DeleteRequestBuilder<RetailDiscounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string
  ): DeleteRequestBuilder<RetailDiscounts<T>, T> {
    return new DeleteRequestBuilder<RetailDiscounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDiscounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!
          }
    );
  }
}
