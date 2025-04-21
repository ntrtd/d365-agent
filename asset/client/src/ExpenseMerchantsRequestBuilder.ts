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
import { ExpenseMerchants } from './ExpenseMerchants';

/**
 * Request builder class for operations supported on the {@link ExpenseMerchants} entity.
 */
export class ExpenseMerchantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseMerchants<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseMerchants` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseMerchants` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseMerchants<T>, T> {
    return new GetAllRequestBuilder<ExpenseMerchants<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseMerchants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseMerchants`.
   */
  create(
    entity: ExpenseMerchants<T>
  ): CreateRequestBuilder<ExpenseMerchants<T>, T> {
    return new CreateRequestBuilder<ExpenseMerchants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseMerchants` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseMerchants.dataAreaId}.
   * @param merchantId Key property. See {@link ExpenseMerchants.merchantId}.
   * @returns A request builder for creating requests to retrieve one `ExpenseMerchants` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    merchantId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseMerchants<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseMerchants<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MerchantId: merchantId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseMerchants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseMerchants`.
   */
  update(
    entity: ExpenseMerchants<T>
  ): UpdateRequestBuilder<ExpenseMerchants<T>, T> {
    return new UpdateRequestBuilder<ExpenseMerchants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseMerchants`.
   * @param dataAreaId Key property. See {@link ExpenseMerchants.dataAreaId}.
   * @param merchantId Key property. See {@link ExpenseMerchants.merchantId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseMerchants`.
   */
  delete(
    dataAreaId: string,
    merchantId: string
  ): DeleteRequestBuilder<ExpenseMerchants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseMerchants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseMerchants` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseMerchants<T>
  ): DeleteRequestBuilder<ExpenseMerchants<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    merchantId?: string
  ): DeleteRequestBuilder<ExpenseMerchants<T>, T> {
    return new DeleteRequestBuilder<ExpenseMerchants<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseMerchants
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MerchantId: merchantId!
          }
    );
  }
}
