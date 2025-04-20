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
import { RetailCategoryPriceRuleGroups } from './RetailCategoryPriceRuleGroups';

/**
 * Request builder class for operations supported on the {@link RetailCategoryPriceRuleGroups} entity.
 */
export class RetailCategoryPriceRuleGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCategoryPriceRuleGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCategoryPriceRuleGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCategoryPriceRuleGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCategoryPriceRuleGroups<T>, T> {
    return new GetAllRequestBuilder<RetailCategoryPriceRuleGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCategoryPriceRuleGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCategoryPriceRuleGroups`.
   */
  create(
    entity: RetailCategoryPriceRuleGroups<T>
  ): CreateRequestBuilder<RetailCategoryPriceRuleGroups<T>, T> {
    return new CreateRequestBuilder<RetailCategoryPriceRuleGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCategoryPriceRuleGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailCategoryPriceRuleGroups.dataAreaId}.
   * @param code Key property. See {@link RetailCategoryPriceRuleGroups.code}.
   * @returns A request builder for creating requests to retrieve one `RetailCategoryPriceRuleGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCategoryPriceRuleGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailCategoryPriceRuleGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCategoryPriceRuleGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCategoryPriceRuleGroups`.
   */
  update(
    entity: RetailCategoryPriceRuleGroups<T>
  ): UpdateRequestBuilder<RetailCategoryPriceRuleGroups<T>, T> {
    return new UpdateRequestBuilder<RetailCategoryPriceRuleGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCategoryPriceRuleGroups`.
   * @param dataAreaId Key property. See {@link RetailCategoryPriceRuleGroups.dataAreaId}.
   * @param code Key property. See {@link RetailCategoryPriceRuleGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCategoryPriceRuleGroups`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<RetailCategoryPriceRuleGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCategoryPriceRuleGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCategoryPriceRuleGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCategoryPriceRuleGroups<T>
  ): DeleteRequestBuilder<RetailCategoryPriceRuleGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<RetailCategoryPriceRuleGroups<T>, T> {
    return new DeleteRequestBuilder<RetailCategoryPriceRuleGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailCategoryPriceRuleGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
