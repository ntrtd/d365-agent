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
import { AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy } from './AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy';
import { CamCostBehaviorClassificationType } from './CamCostBehaviorClassificationType';

/**
 * Request builder class for operations supported on the {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy} entity.
 */
export class AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy` entities.
   * @returns A request builder for creating requests to retrieve all `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy` entities.
   */
  getAll(): GetAllRequestBuilder<
    AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy`.
   */
  create(
    entity: AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>
  ): CreateRequestBuilder<
    AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new CreateRequestBuilder<
      AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy` entity based on its keys.
   * @param costControlUnitName Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costControlUnitName}.
   * @param costAccountingLedgerName Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costAccountingLedgerName}.
   * @param costAccountingDate Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costAccountingDate}.
   * @param costElementDimensionMemberName Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costElementDimensionMemberName}.
   * @param costObjectDimensionMemberName Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costObjectDimensionMemberName}.
   * @param costBehavior Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costBehavior}.
   * @returns A request builder for creating requests to retrieve one `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy` entity based on its keys.
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
    AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
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
   * Returns a request builder for updating an entity of type `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy`.
   */
  update(
    entity: AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>
  ): UpdateRequestBuilder<
    AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy`.
   * @param costControlUnitName Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costControlUnitName}.
   * @param costAccountingLedgerName Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costAccountingLedgerName}.
   * @param costAccountingDate Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costAccountingDate}.
   * @param costElementDimensionMemberName Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costElementDimensionMemberName}.
   * @param costObjectDimensionMemberName Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costObjectDimensionMemberName}.
   * @param costBehavior Key property. See {@link AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy.costBehavior}.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy`.
   */
  delete(
    costControlUnitName: string,
    costAccountingLedgerName: string,
    costAccountingDate: Moment,
    costElementDimensionMemberName: string,
    costObjectDimensionMemberName: string,
    costBehavior: CamCostBehaviorClassificationType
  ): DeleteRequestBuilder<
    AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy` by taking the entity as a parameter.
   */
  delete(
    entity: AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>
  ): DeleteRequestBuilder<
    AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
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
    AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy<T>,
      T
    >(
      this.entityApi,
      costControlUnitNameOrEntity instanceof
      AggregatedCostEntriesWithCostObjectHierarchyAndCostElementHierarchy
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
