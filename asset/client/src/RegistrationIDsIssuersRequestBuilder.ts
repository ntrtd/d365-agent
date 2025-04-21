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
import { RegistrationIDsIssuers } from './RegistrationIDsIssuers';

/**
 * Request builder class for operations supported on the {@link RegistrationIDsIssuers} entity.
 */
export class RegistrationIDsIssuersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegistrationIDsIssuers<T>, T> {
  /**
   * Returns a request builder for querying all `RegistrationIDsIssuers` entities.
   * @returns A request builder for creating requests to retrieve all `RegistrationIDsIssuers` entities.
   */
  getAll(): GetAllRequestBuilder<RegistrationIDsIssuers<T>, T> {
    return new GetAllRequestBuilder<RegistrationIDsIssuers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RegistrationIDsIssuers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegistrationIDsIssuers`.
   */
  create(
    entity: RegistrationIDsIssuers<T>
  ): CreateRequestBuilder<RegistrationIDsIssuers<T>, T> {
    return new CreateRequestBuilder<RegistrationIDsIssuers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegistrationIDsIssuers` entity based on its keys.
   * @param name Key property. See {@link RegistrationIDsIssuers.name}.
   * @returns A request builder for creating requests to retrieve one `RegistrationIDsIssuers` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegistrationIDsIssuers<T>, T> {
    return new GetByKeyRequestBuilder<RegistrationIDsIssuers<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RegistrationIDsIssuers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegistrationIDsIssuers`.
   */
  update(
    entity: RegistrationIDsIssuers<T>
  ): UpdateRequestBuilder<RegistrationIDsIssuers<T>, T> {
    return new UpdateRequestBuilder<RegistrationIDsIssuers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegistrationIDsIssuers`.
   * @param name Key property. See {@link RegistrationIDsIssuers.name}.
   * @returns A request builder for creating requests that delete an entity of type `RegistrationIDsIssuers`.
   */
  delete(name: string): DeleteRequestBuilder<RegistrationIDsIssuers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegistrationIDsIssuers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegistrationIDsIssuers` by taking the entity as a parameter.
   */
  delete(
    entity: RegistrationIDsIssuers<T>
  ): DeleteRequestBuilder<RegistrationIDsIssuers<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<RegistrationIDsIssuers<T>, T> {
    return new DeleteRequestBuilder<RegistrationIDsIssuers<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RegistrationIDsIssuers
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
