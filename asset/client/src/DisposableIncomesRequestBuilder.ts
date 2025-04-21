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
import { DisposableIncomes } from './DisposableIncomes';

/**
 * Request builder class for operations supported on the {@link DisposableIncomes} entity.
 */
export class DisposableIncomesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DisposableIncomes<T>, T> {
  /**
   * Returns a request builder for querying all `DisposableIncomes` entities.
   * @returns A request builder for creating requests to retrieve all `DisposableIncomes` entities.
   */
  getAll(): GetAllRequestBuilder<DisposableIncomes<T>, T> {
    return new GetAllRequestBuilder<DisposableIncomes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DisposableIncomes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DisposableIncomes`.
   */
  create(
    entity: DisposableIncomes<T>
  ): CreateRequestBuilder<DisposableIncomes<T>, T> {
    return new CreateRequestBuilder<DisposableIncomes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DisposableIncomes` entity based on its keys.
   * @param name Key property. See {@link DisposableIncomes.name}.
   * @returns A request builder for creating requests to retrieve one `DisposableIncomes` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DisposableIncomes<T>, T> {
    return new GetByKeyRequestBuilder<DisposableIncomes<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DisposableIncomes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DisposableIncomes`.
   */
  update(
    entity: DisposableIncomes<T>
  ): UpdateRequestBuilder<DisposableIncomes<T>, T> {
    return new UpdateRequestBuilder<DisposableIncomes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DisposableIncomes`.
   * @param name Key property. See {@link DisposableIncomes.name}.
   * @returns A request builder for creating requests that delete an entity of type `DisposableIncomes`.
   */
  delete(name: string): DeleteRequestBuilder<DisposableIncomes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DisposableIncomes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DisposableIncomes` by taking the entity as a parameter.
   */
  delete(
    entity: DisposableIncomes<T>
  ): DeleteRequestBuilder<DisposableIncomes<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<DisposableIncomes<T>, T> {
    return new DeleteRequestBuilder<DisposableIncomes<T>, T>(
      this.entityApi,
      nameOrEntity instanceof DisposableIncomes
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
