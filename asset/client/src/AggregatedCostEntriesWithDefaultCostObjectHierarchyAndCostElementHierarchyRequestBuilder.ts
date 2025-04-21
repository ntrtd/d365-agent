/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy } from './AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy';
import { CamCostBehaviorClassificationType } from './CamCostBehaviorClassificationType';

/**
 * Request builder class for operations supported on the {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy} entity.
 */
export class AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy` entities.
   * @returns A request builder for creating requests to retrieve all `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy` entities.
   */
  getAll(): GetAllRequestBuilder<
    AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy`.
   */
  create(
    entity: AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>
  ): CreateRequestBuilder<
    AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new CreateRequestBuilder<
      AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy` entity based on its keys.
   * @param costControlUnitName Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costControlUnitName}.
   * @param costAccountingLedgerName Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costAccountingLedgerName}.
   * @param costAccountingDate Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costAccountingDate}.
   * @param costElementDimensionMemberName Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costElementDimensionMemberName}.
   * @param costObjectDimensionMemberName Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costObjectDimensionMemberName}.
   * @param costBehavior Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costBehavior}.
   * @returns A request builder for creating requests to retrieve one `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy` entity based on its keys.
   */
  getByKey(
    costControlUnitName: DeserializedType<T, 'Edm.String'>,
    costAccountingLedgerName: DeserializedType<T, 'Edm.String'>,
    costAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    costElementDimensionMemberName: DeserializedType<T, 'Edm.String'>,
    costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>,
    costBehavior: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CAMCostBehaviorClassificationType'
    >
  ): GetByKeyRequestBuilder<
    AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
      T
    >(this.entityApi, {
      CostControlUnitName: costControlUnitName,
      CostAccountingLedgerName: costAccountingLedgerName,
      CostAccountingDate: costAccountingDate,
      CostElementDimensionMemberName: costElementDimensionMemberName,
      CostObjectDimensionMemberName: costObjectDimensionMemberName,
      CostBehavior: costBehavior
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy`.
   */
  update(
    entity: AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>
  ): UpdateRequestBuilder<
    AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy`.
   * @param costControlUnitName Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costControlUnitName}.
   * @param costAccountingLedgerName Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costAccountingLedgerName}.
   * @param costAccountingDate Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costAccountingDate}.
   * @param costElementDimensionMemberName Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costElementDimensionMemberName}.
   * @param costObjectDimensionMemberName Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costObjectDimensionMemberName}.
   * @param costBehavior Key property. See {@link AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.costBehavior}.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy`.
   */
  delete(
    costControlUnitName: string,
    costAccountingLedgerName: string,
    costAccountingDate: Moment,
    costElementDimensionMemberName: string,
    costObjectDimensionMemberName: string,
    costBehavior: CamCostBehaviorClassificationType
  ): DeleteRequestBuilder<
    AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy` by taking the entity as a parameter.
   */
  delete(
    entity: AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>
  ): DeleteRequestBuilder<
    AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  >;
  delete(
    costControlUnitNameOrEntity: any,
    costAccountingLedgerName?: string,
    costAccountingDate?: Moment,
    costElementDimensionMemberName?: string,
    costObjectDimensionMemberName?: string,
    costBehavior?: CamCostBehaviorClassificationType
  ): DeleteRequestBuilder<
    AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<T>,
      T
    >(
      this.entityApi,
      costControlUnitNameOrEntity instanceof
      AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy
        ? costControlUnitNameOrEntity
        : {
            CostControlUnitName: costControlUnitNameOrEntity!,
            CostAccountingLedgerName: costAccountingLedgerName!,
            CostAccountingDate: costAccountingDate!,
            CostElementDimensionMemberName: costElementDimensionMemberName!,
            CostObjectDimensionMemberName: costObjectDimensionMemberName!,
            CostBehavior: costBehavior!
          }
    );
  }
}
