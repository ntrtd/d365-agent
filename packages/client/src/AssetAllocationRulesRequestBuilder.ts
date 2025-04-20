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
import { AssetAllocationRules } from './AssetAllocationRules';

/**
 * Request builder class for operations supported on the {@link AssetAllocationRules} entity.
 */
export class AssetAllocationRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetAllocationRules<T>, T> {
  /**
   * Returns a request builder for querying all `AssetAllocationRules` entities.
   * @returns A request builder for creating requests to retrieve all `AssetAllocationRules` entities.
   */
  getAll(): GetAllRequestBuilder<AssetAllocationRules<T>, T> {
    return new GetAllRequestBuilder<AssetAllocationRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetAllocationRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetAllocationRules`.
   */
  create(
    entity: AssetAllocationRules<T>
  ): CreateRequestBuilder<AssetAllocationRules<T>, T> {
    return new CreateRequestBuilder<AssetAllocationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetAllocationRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetAllocationRules.dataAreaId}.
   * @param ruleId Key property. See {@link AssetAllocationRules.ruleId}.
   * @returns A request builder for creating requests to retrieve one `AssetAllocationRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetAllocationRules<T>, T> {
    return new GetByKeyRequestBuilder<AssetAllocationRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleId: ruleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetAllocationRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetAllocationRules`.
   */
  update(
    entity: AssetAllocationRules<T>
  ): UpdateRequestBuilder<AssetAllocationRules<T>, T> {
    return new UpdateRequestBuilder<AssetAllocationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetAllocationRules`.
   * @param dataAreaId Key property. See {@link AssetAllocationRules.dataAreaId}.
   * @param ruleId Key property. See {@link AssetAllocationRules.ruleId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetAllocationRules`.
   */
  delete(
    dataAreaId: string,
    ruleId: string
  ): DeleteRequestBuilder<AssetAllocationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetAllocationRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetAllocationRules` by taking the entity as a parameter.
   */
  delete(
    entity: AssetAllocationRules<T>
  ): DeleteRequestBuilder<AssetAllocationRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleId?: string
  ): DeleteRequestBuilder<AssetAllocationRules<T>, T> {
    return new DeleteRequestBuilder<AssetAllocationRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetAllocationRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleId: ruleId!
          }
    );
  }
}
