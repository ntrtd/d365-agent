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
import { EmploymentTypes } from './EmploymentTypes';

/**
 * Request builder class for operations supported on the {@link EmploymentTypes} entity.
 */
export class EmploymentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentTypes<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentTypes<T>, T> {
    return new GetAllRequestBuilder<EmploymentTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmploymentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentTypes`.
   */
  create(
    entity: EmploymentTypes<T>
  ): CreateRequestBuilder<EmploymentTypes<T>, T> {
    return new CreateRequestBuilder<EmploymentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentTypes` entity based on its keys.
   * @param employmentTypeId Key property. See {@link EmploymentTypes.employmentTypeId}.
   * @returns A request builder for creating requests to retrieve one `EmploymentTypes` entity based on its keys.
   */
  getByKey(
    employmentTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmploymentTypes<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentTypes<T>, T>(this.entityApi, {
      EmploymentTypeId: employmentTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentTypes`.
   */
  update(
    entity: EmploymentTypes<T>
  ): UpdateRequestBuilder<EmploymentTypes<T>, T> {
    return new UpdateRequestBuilder<EmploymentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentTypes`.
   * @param employmentTypeId Key property. See {@link EmploymentTypes.employmentTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentTypes`.
   */
  delete(employmentTypeId: string): DeleteRequestBuilder<EmploymentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentTypes<T>
  ): DeleteRequestBuilder<EmploymentTypes<T>, T>;
  delete(
    employmentTypeIdOrEntity: any
  ): DeleteRequestBuilder<EmploymentTypes<T>, T> {
    return new DeleteRequestBuilder<EmploymentTypes<T>, T>(
      this.entityApi,
      employmentTypeIdOrEntity instanceof EmploymentTypes
        ? employmentTypeIdOrEntity
        : { EmploymentTypeId: employmentTypeIdOrEntity! }
    );
  }
}
