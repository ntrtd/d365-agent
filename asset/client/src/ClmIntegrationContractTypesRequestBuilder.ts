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
import { ClmIntegrationContractTypes } from './ClmIntegrationContractTypes';

/**
 * Request builder class for operations supported on the {@link ClmIntegrationContractTypes} entity.
 */
export class ClmIntegrationContractTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClmIntegrationContractTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ClmIntegrationContractTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ClmIntegrationContractTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ClmIntegrationContractTypes<T>, T> {
    return new GetAllRequestBuilder<ClmIntegrationContractTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ClmIntegrationContractTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClmIntegrationContractTypes`.
   */
  create(
    entity: ClmIntegrationContractTypes<T>
  ): CreateRequestBuilder<ClmIntegrationContractTypes<T>, T> {
    return new CreateRequestBuilder<ClmIntegrationContractTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClmIntegrationContractTypes` entity based on its keys.
   * @param name Key property. See {@link ClmIntegrationContractTypes.name}.
   * @returns A request builder for creating requests to retrieve one `ClmIntegrationContractTypes` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ClmIntegrationContractTypes<T>, T> {
    return new GetByKeyRequestBuilder<ClmIntegrationContractTypes<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ClmIntegrationContractTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClmIntegrationContractTypes`.
   */
  update(
    entity: ClmIntegrationContractTypes<T>
  ): UpdateRequestBuilder<ClmIntegrationContractTypes<T>, T> {
    return new UpdateRequestBuilder<ClmIntegrationContractTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationContractTypes`.
   * @param name Key property. See {@link ClmIntegrationContractTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationContractTypes`.
   */
  delete(name: string): DeleteRequestBuilder<ClmIntegrationContractTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationContractTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationContractTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ClmIntegrationContractTypes<T>
  ): DeleteRequestBuilder<ClmIntegrationContractTypes<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<ClmIntegrationContractTypes<T>, T> {
    return new DeleteRequestBuilder<ClmIntegrationContractTypes<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ClmIntegrationContractTypes
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
