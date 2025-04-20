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
import { ExpMobileExpenses } from './ExpMobileExpenses';

/**
 * Request builder class for operations supported on the {@link ExpMobileExpenses} entity.
 */
export class ExpMobileExpensesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileExpenses<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileExpenses` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileExpenses` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileExpenses<T>, T> {
    return new GetAllRequestBuilder<ExpMobileExpenses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpMobileExpenses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileExpenses`.
   */
  create(
    entity: ExpMobileExpenses<T>
  ): CreateRequestBuilder<ExpMobileExpenses<T>, T> {
    return new CreateRequestBuilder<ExpMobileExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileExpenses` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpMobileExpenses.dataAreaId}.
   * @param expTransNumber Key property. See {@link ExpMobileExpenses.expTransNumber}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileExpenses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expTransNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpMobileExpenses<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileExpenses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpTransNumber: expTransNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileExpenses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileExpenses`.
   */
  update(
    entity: ExpMobileExpenses<T>
  ): UpdateRequestBuilder<ExpMobileExpenses<T>, T> {
    return new UpdateRequestBuilder<ExpMobileExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileExpenses`.
   * @param dataAreaId Key property. See {@link ExpMobileExpenses.dataAreaId}.
   * @param expTransNumber Key property. See {@link ExpMobileExpenses.expTransNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileExpenses`.
   */
  delete(
    dataAreaId: string,
    expTransNumber: string
  ): DeleteRequestBuilder<ExpMobileExpenses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileExpenses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileExpenses` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileExpenses<T>
  ): DeleteRequestBuilder<ExpMobileExpenses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expTransNumber?: string
  ): DeleteRequestBuilder<ExpMobileExpenses<T>, T> {
    return new DeleteRequestBuilder<ExpMobileExpenses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpMobileExpenses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpTransNumber: expTransNumber!
          }
    );
  }
}
