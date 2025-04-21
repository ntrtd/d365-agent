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
import { CashBalances } from './CashBalances';

/**
 * Request builder class for operations supported on the {@link CashBalances} entity.
 */
export class CashBalancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashBalances<T>, T> {
  /**
   * Returns a request builder for querying all `CashBalances` entities.
   * @returns A request builder for creating requests to retrieve all `CashBalances` entities.
   */
  getAll(): GetAllRequestBuilder<CashBalances<T>, T> {
    return new GetAllRequestBuilder<CashBalances<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashBalances`.
   */
  create(entity: CashBalances<T>): CreateRequestBuilder<CashBalances<T>, T> {
    return new CreateRequestBuilder<CashBalances<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CashBalances` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashBalances.dataAreaId}.
   * @param cash Key property. See {@link CashBalances.cash}.
   * @param currency Key property. See {@link CashBalances.currency}.
   * @returns A request builder for creating requests to retrieve one `CashBalances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cash: DeserializedType<T, 'Edm.String'>,
    currency: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashBalances<T>, T> {
    return new GetByKeyRequestBuilder<CashBalances<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Cash: cash,
      Currency: currency
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashBalances`.
   */
  update(entity: CashBalances<T>): UpdateRequestBuilder<CashBalances<T>, T> {
    return new UpdateRequestBuilder<CashBalances<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CashBalances`.
   * @param dataAreaId Key property. See {@link CashBalances.dataAreaId}.
   * @param cash Key property. See {@link CashBalances.cash}.
   * @param currency Key property. See {@link CashBalances.currency}.
   * @returns A request builder for creating requests that delete an entity of type `CashBalances`.
   */
  delete(
    dataAreaId: string,
    cash: string,
    currency: string
  ): DeleteRequestBuilder<CashBalances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashBalances` by taking the entity as a parameter.
   */
  delete(entity: CashBalances<T>): DeleteRequestBuilder<CashBalances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cash?: string,
    currency?: string
  ): DeleteRequestBuilder<CashBalances<T>, T> {
    return new DeleteRequestBuilder<CashBalances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashBalances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Cash: cash!,
            Currency: currency!
          }
    );
  }
}
