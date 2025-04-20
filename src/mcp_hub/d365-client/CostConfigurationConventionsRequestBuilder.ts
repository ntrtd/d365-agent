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
import { CostConfigurationConventions } from './CostConfigurationConventions';

/**
 * Request builder class for operations supported on the {@link CostConfigurationConventions} entity.
 */
export class CostConfigurationConventionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostConfigurationConventions<T>, T> {
  /**
   * Returns a request builder for querying all `CostConfigurationConventions` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationConventions` entities.
   */
  getAll(): GetAllRequestBuilder<CostConfigurationConventions<T>, T> {
    return new GetAllRequestBuilder<CostConfigurationConventions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostConfigurationConventions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationConventions`.
   */
  create(
    entity: CostConfigurationConventions<T>
  ): CreateRequestBuilder<CostConfigurationConventions<T>, T> {
    return new CreateRequestBuilder<CostConfigurationConventions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationConventions` entity based on its keys.
   * @param conventionName Key property. See {@link CostConfigurationConventions.conventionName}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationConventions` entity based on its keys.
   */
  getByKey(
    conventionName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostConfigurationConventions<T>, T> {
    return new GetByKeyRequestBuilder<CostConfigurationConventions<T>, T>(
      this.entityApi,
      { ConventionName: conventionName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationConventions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationConventions`.
   */
  update(
    entity: CostConfigurationConventions<T>
  ): UpdateRequestBuilder<CostConfigurationConventions<T>, T> {
    return new UpdateRequestBuilder<CostConfigurationConventions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationConventions`.
   * @param conventionName Key property. See {@link CostConfigurationConventions.conventionName}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationConventions`.
   */
  delete(
    conventionName: string
  ): DeleteRequestBuilder<CostConfigurationConventions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationConventions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationConventions` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationConventions<T>
  ): DeleteRequestBuilder<CostConfigurationConventions<T>, T>;
  delete(
    conventionNameOrEntity: any
  ): DeleteRequestBuilder<CostConfigurationConventions<T>, T> {
    return new DeleteRequestBuilder<CostConfigurationConventions<T>, T>(
      this.entityApi,
      conventionNameOrEntity instanceof CostConfigurationConventions
        ? conventionNameOrEntity
        : { ConventionName: conventionNameOrEntity! }
    );
  }
}
