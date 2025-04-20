/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { RetailCategoryPriceRules } from './RetailCategoryPriceRules';

/**
 * Request builder class for operations supported on the {@link RetailCategoryPriceRules} entity.
 */
export class RetailCategoryPriceRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCategoryPriceRules<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCategoryPriceRules` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCategoryPriceRules` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCategoryPriceRules<T>, T> {
    return new GetAllRequestBuilder<RetailCategoryPriceRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCategoryPriceRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCategoryPriceRules`.
   */
  create(
    entity: RetailCategoryPriceRules<T>
  ): CreateRequestBuilder<RetailCategoryPriceRules<T>, T> {
    return new CreateRequestBuilder<RetailCategoryPriceRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCategoryPriceRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailCategoryPriceRules.dataAreaId}.
   * @param lineNumber Key property. See {@link RetailCategoryPriceRules.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailCategoryPriceRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailCategoryPriceRules<T>, T> {
    return new GetByKeyRequestBuilder<RetailCategoryPriceRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCategoryPriceRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCategoryPriceRules`.
   */
  update(
    entity: RetailCategoryPriceRules<T>
  ): UpdateRequestBuilder<RetailCategoryPriceRules<T>, T> {
    return new UpdateRequestBuilder<RetailCategoryPriceRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCategoryPriceRules`.
   * @param dataAreaId Key property. See {@link RetailCategoryPriceRules.dataAreaId}.
   * @param lineNumber Key property. See {@link RetailCategoryPriceRules.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCategoryPriceRules`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailCategoryPriceRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCategoryPriceRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCategoryPriceRules` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCategoryPriceRules<T>
  ): DeleteRequestBuilder<RetailCategoryPriceRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailCategoryPriceRules<T>, T> {
    return new DeleteRequestBuilder<RetailCategoryPriceRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailCategoryPriceRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
