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
import { BusinessDocumentDocumentParameters } from './BusinessDocumentDocumentParameters';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentDocumentParameters} entity.
 */
export class BusinessDocumentDocumentParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentDocumentParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentDocumentParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentDocumentParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessDocumentDocumentParameters<T>, T> {
    return new GetAllRequestBuilder<BusinessDocumentDocumentParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentDocumentParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentDocumentParameters`.
   */
  create(
    entity: BusinessDocumentDocumentParameters<T>
  ): CreateRequestBuilder<BusinessDocumentDocumentParameters<T>, T> {
    return new CreateRequestBuilder<BusinessDocumentDocumentParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentDocumentParameters` entity based on its keys.
   * @param environmentName Key property. See {@link BusinessDocumentDocumentParameters.environmentName}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentDocumentParameters` entity based on its keys.
   */
  getByKey(
    environmentName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessDocumentDocumentParameters<T>, T> {
    return new GetByKeyRequestBuilder<BusinessDocumentDocumentParameters<T>, T>(
      this.entityApi,
      { EnvironmentName: environmentName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentDocumentParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentDocumentParameters`.
   */
  update(
    entity: BusinessDocumentDocumentParameters<T>
  ): UpdateRequestBuilder<BusinessDocumentDocumentParameters<T>, T> {
    return new UpdateRequestBuilder<BusinessDocumentDocumentParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentDocumentParameters`.
   * @param environmentName Key property. See {@link BusinessDocumentDocumentParameters.environmentName}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentDocumentParameters`.
   */
  delete(
    environmentName: string
  ): DeleteRequestBuilder<BusinessDocumentDocumentParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentDocumentParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentDocumentParameters` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentDocumentParameters<T>
  ): DeleteRequestBuilder<BusinessDocumentDocumentParameters<T>, T>;
  delete(
    environmentNameOrEntity: any
  ): DeleteRequestBuilder<BusinessDocumentDocumentParameters<T>, T> {
    return new DeleteRequestBuilder<BusinessDocumentDocumentParameters<T>, T>(
      this.entityApi,
      environmentNameOrEntity instanceof BusinessDocumentDocumentParameters
        ? environmentNameOrEntity
        : { EnvironmentName: environmentNameOrEntity! }
    );
  }
}
