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
import { ValidationProjects } from './ValidationProjects';

/**
 * Request builder class for operations supported on the {@link ValidationProjects} entity.
 */
export class ValidationProjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValidationProjects<T>, T> {
  /**
   * Returns a request builder for querying all `ValidationProjects` entities.
   * @returns A request builder for creating requests to retrieve all `ValidationProjects` entities.
   */
  getAll(): GetAllRequestBuilder<ValidationProjects<T>, T> {
    return new GetAllRequestBuilder<ValidationProjects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ValidationProjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValidationProjects`.
   */
  create(
    entity: ValidationProjects<T>
  ): CreateRequestBuilder<ValidationProjects<T>, T> {
    return new CreateRequestBuilder<ValidationProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValidationProjects` entity based on its keys.
   * @param name Key property. See {@link ValidationProjects.name}.
   * @param legalEntity Key property. See {@link ValidationProjects.legalEntity}.
   * @returns A request builder for creating requests to retrieve one `ValidationProjects` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValidationProjects<T>, T> {
    return new GetByKeyRequestBuilder<ValidationProjects<T>, T>(
      this.entityApi,
      {
        Name: name,
        LegalEntity: legalEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ValidationProjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValidationProjects`.
   */
  update(
    entity: ValidationProjects<T>
  ): UpdateRequestBuilder<ValidationProjects<T>, T> {
    return new UpdateRequestBuilder<ValidationProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValidationProjects`.
   * @param name Key property. See {@link ValidationProjects.name}.
   * @param legalEntity Key property. See {@link ValidationProjects.legalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `ValidationProjects`.
   */
  delete(
    name: string,
    legalEntity: string
  ): DeleteRequestBuilder<ValidationProjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValidationProjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValidationProjects` by taking the entity as a parameter.
   */
  delete(
    entity: ValidationProjects<T>
  ): DeleteRequestBuilder<ValidationProjects<T>, T>;
  delete(
    nameOrEntity: any,
    legalEntity?: string
  ): DeleteRequestBuilder<ValidationProjects<T>, T> {
    return new DeleteRequestBuilder<ValidationProjects<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ValidationProjects
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            LegalEntity: legalEntity!
          }
    );
  }
}
