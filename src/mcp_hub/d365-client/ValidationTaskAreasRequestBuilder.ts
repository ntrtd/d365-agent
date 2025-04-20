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
import { ValidationTaskAreas } from './ValidationTaskAreas';

/**
 * Request builder class for operations supported on the {@link ValidationTaskAreas} entity.
 */
export class ValidationTaskAreasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValidationTaskAreas<T>, T> {
  /**
   * Returns a request builder for querying all `ValidationTaskAreas` entities.
   * @returns A request builder for creating requests to retrieve all `ValidationTaskAreas` entities.
   */
  getAll(): GetAllRequestBuilder<ValidationTaskAreas<T>, T> {
    return new GetAllRequestBuilder<ValidationTaskAreas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ValidationTaskAreas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValidationTaskAreas`.
   */
  create(
    entity: ValidationTaskAreas<T>
  ): CreateRequestBuilder<ValidationTaskAreas<T>, T> {
    return new CreateRequestBuilder<ValidationTaskAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValidationTaskAreas` entity based on its keys.
   * @param name Key property. See {@link ValidationTaskAreas.name}.
   * @returns A request builder for creating requests to retrieve one `ValidationTaskAreas` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValidationTaskAreas<T>, T> {
    return new GetByKeyRequestBuilder<ValidationTaskAreas<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ValidationTaskAreas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValidationTaskAreas`.
   */
  update(
    entity: ValidationTaskAreas<T>
  ): UpdateRequestBuilder<ValidationTaskAreas<T>, T> {
    return new UpdateRequestBuilder<ValidationTaskAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValidationTaskAreas`.
   * @param name Key property. See {@link ValidationTaskAreas.name}.
   * @returns A request builder for creating requests that delete an entity of type `ValidationTaskAreas`.
   */
  delete(name: string): DeleteRequestBuilder<ValidationTaskAreas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValidationTaskAreas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValidationTaskAreas` by taking the entity as a parameter.
   */
  delete(
    entity: ValidationTaskAreas<T>
  ): DeleteRequestBuilder<ValidationTaskAreas<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<ValidationTaskAreas<T>, T> {
    return new DeleteRequestBuilder<ValidationTaskAreas<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ValidationTaskAreas
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
