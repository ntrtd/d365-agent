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
import { AdvancedRuleCriteria } from './AdvancedRuleCriteria';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';

/**
 * Request builder class for operations supported on the {@link AdvancedRuleCriteria} entity.
 */
export class AdvancedRuleCriteriaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdvancedRuleCriteria<T>, T> {
  /**
   * Returns a request builder for querying all `AdvancedRuleCriteria` entities.
   * @returns A request builder for creating requests to retrieve all `AdvancedRuleCriteria` entities.
   */
  getAll(): GetAllRequestBuilder<AdvancedRuleCriteria<T>, T> {
    return new GetAllRequestBuilder<AdvancedRuleCriteria<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdvancedRuleCriteria` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdvancedRuleCriteria`.
   */
  create(
    entity: AdvancedRuleCriteria<T>
  ): CreateRequestBuilder<AdvancedRuleCriteria<T>, T> {
    return new CreateRequestBuilder<AdvancedRuleCriteria<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdvancedRuleCriteria` entity based on its keys.
   * @param accountStructure Key property. See {@link AdvancedRuleCriteria.accountStructure}.
   * @param advancedRule Key property. See {@link AdvancedRuleCriteria.advancedRule}.
   * @param status Key property. See {@link AdvancedRuleCriteria.status}.
   * @param segmentName Key property. See {@link AdvancedRuleCriteria.segmentName}.
   * @returns A request builder for creating requests to retrieve one `AdvancedRuleCriteria` entity based on its keys.
   */
  getByKey(
    accountStructure: DeserializedType<T, 'Edm.String'>,
    advancedRule: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DimensionHierarchyConstraintStatus'
    >,
    segmentName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AdvancedRuleCriteria<T>, T> {
    return new GetByKeyRequestBuilder<AdvancedRuleCriteria<T>, T>(
      this.entityApi,
      {
        AccountStructure: accountStructure,
        AdvancedRule: advancedRule,
        Status: status,
        SegmentName: segmentName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AdvancedRuleCriteria`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdvancedRuleCriteria`.
   */
  update(
    entity: AdvancedRuleCriteria<T>
  ): UpdateRequestBuilder<AdvancedRuleCriteria<T>, T> {
    return new UpdateRequestBuilder<AdvancedRuleCriteria<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdvancedRuleCriteria`.
   * @param accountStructure Key property. See {@link AdvancedRuleCriteria.accountStructure}.
   * @param advancedRule Key property. See {@link AdvancedRuleCriteria.advancedRule}.
   * @param status Key property. See {@link AdvancedRuleCriteria.status}.
   * @param segmentName Key property. See {@link AdvancedRuleCriteria.segmentName}.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedRuleCriteria`.
   */
  delete(
    accountStructure: string,
    advancedRule: string,
    status: DimensionHierarchyConstraintStatus,
    segmentName: string
  ): DeleteRequestBuilder<AdvancedRuleCriteria<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdvancedRuleCriteria`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedRuleCriteria` by taking the entity as a parameter.
   */
  delete(
    entity: AdvancedRuleCriteria<T>
  ): DeleteRequestBuilder<AdvancedRuleCriteria<T>, T>;
  delete(
    accountStructureOrEntity: any,
    advancedRule?: string,
    status?: DimensionHierarchyConstraintStatus,
    segmentName?: string
  ): DeleteRequestBuilder<AdvancedRuleCriteria<T>, T> {
    return new DeleteRequestBuilder<AdvancedRuleCriteria<T>, T>(
      this.entityApi,
      accountStructureOrEntity instanceof AdvancedRuleCriteria
        ? accountStructureOrEntity
        : {
            AccountStructure: accountStructureOrEntity!,
            AdvancedRule: advancedRule!,
            Status: status!,
            SegmentName: segmentName!
          }
    );
  }
}
