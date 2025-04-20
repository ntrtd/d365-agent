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
import { RetailBuyersPushes } from './RetailBuyersPushes';

/**
 * Request builder class for operations supported on the {@link RetailBuyersPushes} entity.
 */
export class RetailBuyersPushesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailBuyersPushes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailBuyersPushes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailBuyersPushes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailBuyersPushes<T>, T> {
    return new GetAllRequestBuilder<RetailBuyersPushes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailBuyersPushes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailBuyersPushes`.
   */
  create(
    entity: RetailBuyersPushes<T>
  ): CreateRequestBuilder<RetailBuyersPushes<T>, T> {
    return new CreateRequestBuilder<RetailBuyersPushes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailBuyersPushes` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailBuyersPushes.dataAreaId}.
   * @param buyersPushId Key property. See {@link RetailBuyersPushes.buyersPushId}.
   * @returns A request builder for creating requests to retrieve one `RetailBuyersPushes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    buyersPushId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailBuyersPushes<T>, T> {
    return new GetByKeyRequestBuilder<RetailBuyersPushes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BuyersPushId: buyersPushId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailBuyersPushes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailBuyersPushes`.
   */
  update(
    entity: RetailBuyersPushes<T>
  ): UpdateRequestBuilder<RetailBuyersPushes<T>, T> {
    return new UpdateRequestBuilder<RetailBuyersPushes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailBuyersPushes`.
   * @param dataAreaId Key property. See {@link RetailBuyersPushes.dataAreaId}.
   * @param buyersPushId Key property. See {@link RetailBuyersPushes.buyersPushId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailBuyersPushes`.
   */
  delete(
    dataAreaId: string,
    buyersPushId: string
  ): DeleteRequestBuilder<RetailBuyersPushes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailBuyersPushes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailBuyersPushes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailBuyersPushes<T>
  ): DeleteRequestBuilder<RetailBuyersPushes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    buyersPushId?: string
  ): DeleteRequestBuilder<RetailBuyersPushes<T>, T> {
    return new DeleteRequestBuilder<RetailBuyersPushes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailBuyersPushes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BuyersPushId: buyersPushId!
          }
    );
  }
}
