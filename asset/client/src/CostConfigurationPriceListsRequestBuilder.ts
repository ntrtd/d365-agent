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
import { CostConfigurationPriceLists } from './CostConfigurationPriceLists';

/**
 * Request builder class for operations supported on the {@link CostConfigurationPriceLists} entity.
 */
export class CostConfigurationPriceListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostConfigurationPriceLists<T>, T> {
  /**
   * Returns a request builder for querying all `CostConfigurationPriceLists` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationPriceLists` entities.
   */
  getAll(): GetAllRequestBuilder<CostConfigurationPriceLists<T>, T> {
    return new GetAllRequestBuilder<CostConfigurationPriceLists<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostConfigurationPriceLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationPriceLists`.
   */
  create(
    entity: CostConfigurationPriceLists<T>
  ): CreateRequestBuilder<CostConfigurationPriceLists<T>, T> {
    return new CreateRequestBuilder<CostConfigurationPriceLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationPriceLists` entity based on its keys.
   * @param name Key property. See {@link CostConfigurationPriceLists.name}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationPriceLists` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostConfigurationPriceLists<T>, T> {
    return new GetByKeyRequestBuilder<CostConfigurationPriceLists<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationPriceLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationPriceLists`.
   */
  update(
    entity: CostConfigurationPriceLists<T>
  ): UpdateRequestBuilder<CostConfigurationPriceLists<T>, T> {
    return new UpdateRequestBuilder<CostConfigurationPriceLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationPriceLists`.
   * @param name Key property. See {@link CostConfigurationPriceLists.name}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationPriceLists`.
   */
  delete(name: string): DeleteRequestBuilder<CostConfigurationPriceLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationPriceLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationPriceLists` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationPriceLists<T>
  ): DeleteRequestBuilder<CostConfigurationPriceLists<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<CostConfigurationPriceLists<T>, T> {
    return new DeleteRequestBuilder<CostConfigurationPriceLists<T>, T>(
      this.entityApi,
      nameOrEntity instanceof CostConfigurationPriceLists
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
