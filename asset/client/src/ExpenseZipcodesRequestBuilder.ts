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
import { ExpenseZipcodes } from './ExpenseZipcodes';

/**
 * Request builder class for operations supported on the {@link ExpenseZipcodes} entity.
 */
export class ExpenseZipcodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseZipcodes<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseZipcodes` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseZipcodes` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseZipcodes<T>, T> {
    return new GetAllRequestBuilder<ExpenseZipcodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseZipcodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseZipcodes`.
   */
  create(
    entity: ExpenseZipcodes<T>
  ): CreateRequestBuilder<ExpenseZipcodes<T>, T> {
    return new CreateRequestBuilder<ExpenseZipcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseZipcodes` entity based on its keys.
   * @param zipCode Key property. See {@link ExpenseZipcodes.zipCode}.
   * @returns A request builder for creating requests to retrieve one `ExpenseZipcodes` entity based on its keys.
   */
  getByKey(
    zipCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseZipcodes<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseZipcodes<T>, T>(this.entityApi, {
      ZipCode: zipCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseZipcodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseZipcodes`.
   */
  update(
    entity: ExpenseZipcodes<T>
  ): UpdateRequestBuilder<ExpenseZipcodes<T>, T> {
    return new UpdateRequestBuilder<ExpenseZipcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseZipcodes`.
   * @param zipCode Key property. See {@link ExpenseZipcodes.zipCode}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseZipcodes`.
   */
  delete(zipCode: string): DeleteRequestBuilder<ExpenseZipcodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseZipcodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseZipcodes` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseZipcodes<T>
  ): DeleteRequestBuilder<ExpenseZipcodes<T>, T>;
  delete(zipCodeOrEntity: any): DeleteRequestBuilder<ExpenseZipcodes<T>, T> {
    return new DeleteRequestBuilder<ExpenseZipcodes<T>, T>(
      this.entityApi,
      zipCodeOrEntity instanceof ExpenseZipcodes
        ? zipCodeOrEntity
        : { ZipCode: zipCodeOrEntity! }
    );
  }
}
