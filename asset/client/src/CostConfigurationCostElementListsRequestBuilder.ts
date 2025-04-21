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
import { CostConfigurationCostElementLists } from './CostConfigurationCostElementLists';

/**
 * Request builder class for operations supported on the {@link CostConfigurationCostElementLists} entity.
 */
export class CostConfigurationCostElementListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostConfigurationCostElementLists<T>, T> {
  /**
   * Returns a request builder for querying all `CostConfigurationCostElementLists` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationCostElementLists` entities.
   */
  getAll(): GetAllRequestBuilder<CostConfigurationCostElementLists<T>, T> {
    return new GetAllRequestBuilder<CostConfigurationCostElementLists<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostConfigurationCostElementLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationCostElementLists`.
   */
  create(
    entity: CostConfigurationCostElementLists<T>
  ): CreateRequestBuilder<CostConfigurationCostElementLists<T>, T> {
    return new CreateRequestBuilder<CostConfigurationCostElementLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationCostElementLists` entity based on its keys.
   * @param name Key property. See {@link CostConfigurationCostElementLists.name}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationCostElementLists` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostConfigurationCostElementLists<T>, T> {
    return new GetByKeyRequestBuilder<CostConfigurationCostElementLists<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationCostElementLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationCostElementLists`.
   */
  update(
    entity: CostConfigurationCostElementLists<T>
  ): UpdateRequestBuilder<CostConfigurationCostElementLists<T>, T> {
    return new UpdateRequestBuilder<CostConfigurationCostElementLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElementLists`.
   * @param name Key property. See {@link CostConfigurationCostElementLists.name}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElementLists`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<CostConfigurationCostElementLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElementLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElementLists` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationCostElementLists<T>
  ): DeleteRequestBuilder<CostConfigurationCostElementLists<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<CostConfigurationCostElementLists<T>, T> {
    return new DeleteRequestBuilder<CostConfigurationCostElementLists<T>, T>(
      this.entityApi,
      nameOrEntity instanceof CostConfigurationCostElementLists
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
