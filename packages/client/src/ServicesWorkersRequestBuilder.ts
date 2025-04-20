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
import { ServicesWorkers } from './ServicesWorkers';

/**
 * Request builder class for operations supported on the {@link ServicesWorkers} entity.
 */
export class ServicesWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServicesWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `ServicesWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `ServicesWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<ServicesWorkers<T>, T> {
    return new GetAllRequestBuilder<ServicesWorkers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServicesWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServicesWorkers`.
   */
  create(
    entity: ServicesWorkers<T>
  ): CreateRequestBuilder<ServicesWorkers<T>, T> {
    return new CreateRequestBuilder<ServicesWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServicesWorkers` entity based on its keys.
   * @param email Key property. See {@link ServicesWorkers.email}.
   * @returns A request builder for creating requests to retrieve one `ServicesWorkers` entity based on its keys.
   */
  getByKey(
    email: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServicesWorkers<T>, T> {
    return new GetByKeyRequestBuilder<ServicesWorkers<T>, T>(this.entityApi, {
      Email: email
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ServicesWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServicesWorkers`.
   */
  update(
    entity: ServicesWorkers<T>
  ): UpdateRequestBuilder<ServicesWorkers<T>, T> {
    return new UpdateRequestBuilder<ServicesWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServicesWorkers`.
   * @param email Key property. See {@link ServicesWorkers.email}.
   * @returns A request builder for creating requests that delete an entity of type `ServicesWorkers`.
   */
  delete(email: string): DeleteRequestBuilder<ServicesWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServicesWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServicesWorkers` by taking the entity as a parameter.
   */
  delete(
    entity: ServicesWorkers<T>
  ): DeleteRequestBuilder<ServicesWorkers<T>, T>;
  delete(emailOrEntity: any): DeleteRequestBuilder<ServicesWorkers<T>, T> {
    return new DeleteRequestBuilder<ServicesWorkers<T>, T>(
      this.entityApi,
      emailOrEntity instanceof ServicesWorkers
        ? emailOrEntity
        : { Email: emailOrEntity! }
    );
  }
}
