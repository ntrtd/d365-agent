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
import { LedgerAdvancedRuleStructureConstraints } from './LedgerAdvancedRuleStructureConstraints';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';

/**
 * Request builder class for operations supported on the {@link LedgerAdvancedRuleStructureConstraints} entity.
 */
export class LedgerAdvancedRuleStructureConstraintsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerAdvancedRuleStructureConstraints<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerAdvancedRuleStructureConstraints` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerAdvancedRuleStructureConstraints` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerAdvancedRuleStructureConstraints<T>, T> {
    return new GetAllRequestBuilder<
      LedgerAdvancedRuleStructureConstraints<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerAdvancedRuleStructureConstraints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerAdvancedRuleStructureConstraints`.
   */
  create(
    entity: LedgerAdvancedRuleStructureConstraints<T>
  ): CreateRequestBuilder<LedgerAdvancedRuleStructureConstraints<T>, T> {
    return new CreateRequestBuilder<
      LedgerAdvancedRuleStructureConstraints<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LedgerAdvancedRuleStructureConstraints` entity based on its keys.
   * @param advancedRuleStructure Key property. See {@link LedgerAdvancedRuleStructureConstraints.advancedRuleStructure}.
   * @param status Key property. See {@link LedgerAdvancedRuleStructureConstraints.status}.
   * @param position Key property. See {@link LedgerAdvancedRuleStructureConstraints.position}.
   * @returns A request builder for creating requests to retrieve one `LedgerAdvancedRuleStructureConstraints` entity based on its keys.
   */
  getByKey(
    advancedRuleStructure: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DimensionHierarchyConstraintStatus'
    >,
    position: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LedgerAdvancedRuleStructureConstraints<T>, T> {
    return new GetByKeyRequestBuilder<
      LedgerAdvancedRuleStructureConstraints<T>,
      T
    >(this.entityApi, {
      AdvancedRuleStructure: advancedRuleStructure,
      Status: status,
      Position: position
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerAdvancedRuleStructureConstraints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerAdvancedRuleStructureConstraints`.
   */
  update(
    entity: LedgerAdvancedRuleStructureConstraints<T>
  ): UpdateRequestBuilder<LedgerAdvancedRuleStructureConstraints<T>, T> {
    return new UpdateRequestBuilder<
      LedgerAdvancedRuleStructureConstraints<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerAdvancedRuleStructureConstraints`.
   * @param advancedRuleStructure Key property. See {@link LedgerAdvancedRuleStructureConstraints.advancedRuleStructure}.
   * @param status Key property. See {@link LedgerAdvancedRuleStructureConstraints.status}.
   * @param position Key property. See {@link LedgerAdvancedRuleStructureConstraints.position}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAdvancedRuleStructureConstraints`.
   */
  delete(
    advancedRuleStructure: string,
    status: DimensionHierarchyConstraintStatus,
    position: number
  ): DeleteRequestBuilder<LedgerAdvancedRuleStructureConstraints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerAdvancedRuleStructureConstraints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAdvancedRuleStructureConstraints` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerAdvancedRuleStructureConstraints<T>
  ): DeleteRequestBuilder<LedgerAdvancedRuleStructureConstraints<T>, T>;
  delete(
    advancedRuleStructureOrEntity: any,
    status?: DimensionHierarchyConstraintStatus,
    position?: number
  ): DeleteRequestBuilder<LedgerAdvancedRuleStructureConstraints<T>, T> {
    return new DeleteRequestBuilder<
      LedgerAdvancedRuleStructureConstraints<T>,
      T
    >(
      this.entityApi,
      advancedRuleStructureOrEntity instanceof
      LedgerAdvancedRuleStructureConstraints
        ? advancedRuleStructureOrEntity
        : {
            AdvancedRuleStructure: advancedRuleStructureOrEntity!,
            Status: status!,
            Position: position!
          }
    );
  }
}
