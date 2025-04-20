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
import { RetailTenderDiscounts } from './RetailTenderDiscounts';

/**
 * Request builder class for operations supported on the {@link RetailTenderDiscounts} entity.
 */
export class RetailTenderDiscountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTenderDiscounts<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTenderDiscounts` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTenderDiscounts` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTenderDiscounts<T>, T> {
    return new GetAllRequestBuilder<RetailTenderDiscounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTenderDiscounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTenderDiscounts`.
   */
  create(
    entity: RetailTenderDiscounts<T>
  ): CreateRequestBuilder<RetailTenderDiscounts<T>, T> {
    return new CreateRequestBuilder<RetailTenderDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTenderDiscounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTenderDiscounts.dataAreaId}.
   * @param offerId Key property. See {@link RetailTenderDiscounts.offerId}.
   * @returns A request builder for creating requests to retrieve one `RetailTenderDiscounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTenderDiscounts<T>, T> {
    return new GetByKeyRequestBuilder<RetailTenderDiscounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTenderDiscounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTenderDiscounts`.
   */
  update(
    entity: RetailTenderDiscounts<T>
  ): UpdateRequestBuilder<RetailTenderDiscounts<T>, T> {
    return new UpdateRequestBuilder<RetailTenderDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTenderDiscounts`.
   * @param dataAreaId Key property. See {@link RetailTenderDiscounts.dataAreaId}.
   * @param offerId Key property. See {@link RetailTenderDiscounts.offerId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderDiscounts`.
   */
  delete(
    dataAreaId: string,
    offerId: string
  ): DeleteRequestBuilder<RetailTenderDiscounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTenderDiscounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderDiscounts` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTenderDiscounts<T>
  ): DeleteRequestBuilder<RetailTenderDiscounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string
  ): DeleteRequestBuilder<RetailTenderDiscounts<T>, T> {
    return new DeleteRequestBuilder<RetailTenderDiscounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTenderDiscounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!
          }
    );
  }
}
