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
import { RetailReplenishmentRules } from './RetailReplenishmentRules';

/**
 * Request builder class for operations supported on the {@link RetailReplenishmentRules} entity.
 */
export class RetailReplenishmentRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailReplenishmentRules<T>, T> {
  /**
   * Returns a request builder for querying all `RetailReplenishmentRules` entities.
   * @returns A request builder for creating requests to retrieve all `RetailReplenishmentRules` entities.
   */
  getAll(): GetAllRequestBuilder<RetailReplenishmentRules<T>, T> {
    return new GetAllRequestBuilder<RetailReplenishmentRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailReplenishmentRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailReplenishmentRules`.
   */
  create(
    entity: RetailReplenishmentRules<T>
  ): CreateRequestBuilder<RetailReplenishmentRules<T>, T> {
    return new CreateRequestBuilder<RetailReplenishmentRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailReplenishmentRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailReplenishmentRules.dataAreaId}.
   * @param replenishmentRule Key property. See {@link RetailReplenishmentRules.replenishmentRule}.
   * @returns A request builder for creating requests to retrieve one `RetailReplenishmentRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    replenishmentRule: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailReplenishmentRules<T>, T> {
    return new GetByKeyRequestBuilder<RetailReplenishmentRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReplenishmentRule: replenishmentRule
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailReplenishmentRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailReplenishmentRules`.
   */
  update(
    entity: RetailReplenishmentRules<T>
  ): UpdateRequestBuilder<RetailReplenishmentRules<T>, T> {
    return new UpdateRequestBuilder<RetailReplenishmentRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailReplenishmentRules`.
   * @param dataAreaId Key property. See {@link RetailReplenishmentRules.dataAreaId}.
   * @param replenishmentRule Key property. See {@link RetailReplenishmentRules.replenishmentRule}.
   * @returns A request builder for creating requests that delete an entity of type `RetailReplenishmentRules`.
   */
  delete(
    dataAreaId: string,
    replenishmentRule: string
  ): DeleteRequestBuilder<RetailReplenishmentRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailReplenishmentRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailReplenishmentRules` by taking the entity as a parameter.
   */
  delete(
    entity: RetailReplenishmentRules<T>
  ): DeleteRequestBuilder<RetailReplenishmentRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    replenishmentRule?: string
  ): DeleteRequestBuilder<RetailReplenishmentRules<T>, T> {
    return new DeleteRequestBuilder<RetailReplenishmentRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailReplenishmentRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReplenishmentRule: replenishmentRule!
          }
    );
  }
}
