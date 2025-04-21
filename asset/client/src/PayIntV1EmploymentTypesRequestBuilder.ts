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
import { PayIntV1EmploymentTypes } from './PayIntV1EmploymentTypes';

/**
 * Request builder class for operations supported on the {@link PayIntV1EmploymentTypes} entity.
 */
export class PayIntV1EmploymentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1EmploymentTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1EmploymentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1EmploymentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1EmploymentTypes<T>, T> {
    return new GetAllRequestBuilder<PayIntV1EmploymentTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1EmploymentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1EmploymentTypes`.
   */
  create(
    entity: PayIntV1EmploymentTypes<T>
  ): CreateRequestBuilder<PayIntV1EmploymentTypes<T>, T> {
    return new CreateRequestBuilder<PayIntV1EmploymentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1EmploymentTypes` entity based on its keys.
   * @param employmentTypeId Key property. See {@link PayIntV1EmploymentTypes.employmentTypeId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1EmploymentTypes` entity based on its keys.
   */
  getByKey(
    employmentTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1EmploymentTypes<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1EmploymentTypes<T>, T>(
      this.entityApi,
      { EmploymentTypeId: employmentTypeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1EmploymentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1EmploymentTypes`.
   */
  update(
    entity: PayIntV1EmploymentTypes<T>
  ): UpdateRequestBuilder<PayIntV1EmploymentTypes<T>, T> {
    return new UpdateRequestBuilder<PayIntV1EmploymentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmploymentTypes`.
   * @param employmentTypeId Key property. See {@link PayIntV1EmploymentTypes.employmentTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmploymentTypes`.
   */
  delete(
    employmentTypeId: string
  ): DeleteRequestBuilder<PayIntV1EmploymentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmploymentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmploymentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1EmploymentTypes<T>
  ): DeleteRequestBuilder<PayIntV1EmploymentTypes<T>, T>;
  delete(
    employmentTypeIdOrEntity: any
  ): DeleteRequestBuilder<PayIntV1EmploymentTypes<T>, T> {
    return new DeleteRequestBuilder<PayIntV1EmploymentTypes<T>, T>(
      this.entityApi,
      employmentTypeIdOrEntity instanceof PayIntV1EmploymentTypes
        ? employmentTypeIdOrEntity
        : { EmploymentTypeId: employmentTypeIdOrEntity! }
    );
  }
}
