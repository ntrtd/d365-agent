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
import { AdvancedRules } from './AdvancedRules';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';

/**
 * Request builder class for operations supported on the {@link AdvancedRules} entity.
 */
export class AdvancedRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdvancedRules<T>, T> {
  /**
   * Returns a request builder for querying all `AdvancedRules` entities.
   * @returns A request builder for creating requests to retrieve all `AdvancedRules` entities.
   */
  getAll(): GetAllRequestBuilder<AdvancedRules<T>, T> {
    return new GetAllRequestBuilder<AdvancedRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdvancedRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdvancedRules`.
   */
  create(entity: AdvancedRules<T>): CreateRequestBuilder<AdvancedRules<T>, T> {
    return new CreateRequestBuilder<AdvancedRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdvancedRules` entity based on its keys.
   * @param accountStructure Key property. See {@link AdvancedRules.accountStructure}.
   * @param advancedRuleName Key property. See {@link AdvancedRules.advancedRuleName}.
   * @param status Key property. See {@link AdvancedRules.status}.
   * @returns A request builder for creating requests to retrieve one `AdvancedRules` entity based on its keys.
   */
  getByKey(
    accountStructure: DeserializedType<T, 'Edm.String'>,
    advancedRuleName: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DimensionHierarchyConstraintStatus'
    >
  ): GetByKeyRequestBuilder<AdvancedRules<T>, T> {
    return new GetByKeyRequestBuilder<AdvancedRules<T>, T>(this.entityApi, {
      AccountStructure: accountStructure,
      AdvancedRuleName: advancedRuleName,
      Status: status
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AdvancedRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdvancedRules`.
   */
  update(entity: AdvancedRules<T>): UpdateRequestBuilder<AdvancedRules<T>, T> {
    return new UpdateRequestBuilder<AdvancedRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdvancedRules`.
   * @param accountStructure Key property. See {@link AdvancedRules.accountStructure}.
   * @param advancedRuleName Key property. See {@link AdvancedRules.advancedRuleName}.
   * @param status Key property. See {@link AdvancedRules.status}.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedRules`.
   */
  delete(
    accountStructure: string,
    advancedRuleName: string,
    status: DimensionHierarchyConstraintStatus
  ): DeleteRequestBuilder<AdvancedRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdvancedRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedRules` by taking the entity as a parameter.
   */
  delete(entity: AdvancedRules<T>): DeleteRequestBuilder<AdvancedRules<T>, T>;
  delete(
    accountStructureOrEntity: any,
    advancedRuleName?: string,
    status?: DimensionHierarchyConstraintStatus
  ): DeleteRequestBuilder<AdvancedRules<T>, T> {
    return new DeleteRequestBuilder<AdvancedRules<T>, T>(
      this.entityApi,
      accountStructureOrEntity instanceof AdvancedRules
        ? accountStructureOrEntity
        : {
            AccountStructure: accountStructureOrEntity!,
            AdvancedRuleName: advancedRuleName!,
            Status: status!
          }
    );
  }
}
