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
import { DisposableIncomeEarnings } from './DisposableIncomeEarnings';

/**
 * Request builder class for operations supported on the {@link DisposableIncomeEarnings} entity.
 */
export class DisposableIncomeEarningsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DisposableIncomeEarnings<T>, T> {
  /**
   * Returns a request builder for querying all `DisposableIncomeEarnings` entities.
   * @returns A request builder for creating requests to retrieve all `DisposableIncomeEarnings` entities.
   */
  getAll(): GetAllRequestBuilder<DisposableIncomeEarnings<T>, T> {
    return new GetAllRequestBuilder<DisposableIncomeEarnings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DisposableIncomeEarnings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DisposableIncomeEarnings`.
   */
  create(
    entity: DisposableIncomeEarnings<T>
  ): CreateRequestBuilder<DisposableIncomeEarnings<T>, T> {
    return new CreateRequestBuilder<DisposableIncomeEarnings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DisposableIncomeEarnings` entity based on its keys.
   * @param earningCodeId Key property. See {@link DisposableIncomeEarnings.earningCodeId}.
   * @param name Key property. See {@link DisposableIncomeEarnings.name}.
   * @returns A request builder for creating requests to retrieve one `DisposableIncomeEarnings` entity based on its keys.
   */
  getByKey(
    earningCodeId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DisposableIncomeEarnings<T>, T> {
    return new GetByKeyRequestBuilder<DisposableIncomeEarnings<T>, T>(
      this.entityApi,
      {
        EarningCodeId: earningCodeId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DisposableIncomeEarnings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DisposableIncomeEarnings`.
   */
  update(
    entity: DisposableIncomeEarnings<T>
  ): UpdateRequestBuilder<DisposableIncomeEarnings<T>, T> {
    return new UpdateRequestBuilder<DisposableIncomeEarnings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DisposableIncomeEarnings`.
   * @param earningCodeId Key property. See {@link DisposableIncomeEarnings.earningCodeId}.
   * @param name Key property. See {@link DisposableIncomeEarnings.name}.
   * @returns A request builder for creating requests that delete an entity of type `DisposableIncomeEarnings`.
   */
  delete(
    earningCodeId: string,
    name: string
  ): DeleteRequestBuilder<DisposableIncomeEarnings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DisposableIncomeEarnings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DisposableIncomeEarnings` by taking the entity as a parameter.
   */
  delete(
    entity: DisposableIncomeEarnings<T>
  ): DeleteRequestBuilder<DisposableIncomeEarnings<T>, T>;
  delete(
    earningCodeIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<DisposableIncomeEarnings<T>, T> {
    return new DeleteRequestBuilder<DisposableIncomeEarnings<T>, T>(
      this.entityApi,
      earningCodeIdOrEntity instanceof DisposableIncomeEarnings
        ? earningCodeIdOrEntity
        : {
            EarningCodeId: earningCodeIdOrEntity!,
            Name: name!
          }
    );
  }
}
