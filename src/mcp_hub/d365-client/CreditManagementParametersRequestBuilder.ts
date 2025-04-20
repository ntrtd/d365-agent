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
import { CreditManagementParameters } from './CreditManagementParameters';

/**
 * Request builder class for operations supported on the {@link CreditManagementParameters} entity.
 */
export class CreditManagementParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementParameters<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementParameters` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementParameters` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementParameters<T>, T> {
    return new GetAllRequestBuilder<CreditManagementParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditManagementParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementParameters`.
   */
  create(
    entity: CreditManagementParameters<T>
  ): CreateRequestBuilder<CreditManagementParameters<T>, T> {
    return new CreateRequestBuilder<CreditManagementParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementParameters<T>, T> {
    return new GetByKeyRequestBuilder<CreditManagementParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementParameters`.
   */
  update(
    entity: CreditManagementParameters<T>
  ): UpdateRequestBuilder<CreditManagementParameters<T>, T> {
    return new UpdateRequestBuilder<CreditManagementParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementParameters`.
   * @param dataAreaId Key property. See {@link CreditManagementParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementParameters`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<CreditManagementParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementParameters` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementParameters<T>
  ): DeleteRequestBuilder<CreditManagementParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<CreditManagementParameters<T>, T> {
    return new DeleteRequestBuilder<CreditManagementParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
