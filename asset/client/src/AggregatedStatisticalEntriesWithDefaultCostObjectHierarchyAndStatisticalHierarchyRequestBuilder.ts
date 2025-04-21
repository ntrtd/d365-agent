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
import { AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy } from './AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy';

/**
 * Request builder class for operations supported on the {@link AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy} entity.
 */
export class AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy` entities.
   * @returns A request builder for creating requests to retrieve all `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy` entities.
   */
  getAll(): GetAllRequestBuilder<
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy`.
   */
  create(
    entity: AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>
  ): CreateRequestBuilder<
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new CreateRequestBuilder<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy` entity based on its keys.
   * @param costAccountingDate Key property. See {@link AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy.costAccountingDate}.
   * @param costAccountingLedgerName Key property. See {@link AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy.costAccountingLedgerName}.
   * @param costControlUnitName Key property. See {@link AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy.costControlUnitName}.
   * @returns A request builder for creating requests to retrieve one `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy` entity based on its keys.
   */
  getByKey(
    costAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    costAccountingLedgerName: DeserializedType<T, 'Edm.String'>,
    costControlUnitName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(this.entityApi, {
      CostAccountingDate: costAccountingDate,
      CostAccountingLedgerName: costAccountingLedgerName,
      CostControlUnitName: costControlUnitName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy`.
   */
  update(
    entity: AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>
  ): UpdateRequestBuilder<
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy`.
   * @param costAccountingDate Key property. See {@link AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy.costAccountingDate}.
   * @param costAccountingLedgerName Key property. See {@link AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy.costAccountingLedgerName}.
   * @param costControlUnitName Key property. See {@link AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy.costControlUnitName}.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy`.
   */
  delete(
    costAccountingDate: Moment,
    costAccountingLedgerName: string,
    costControlUnitName: string
  ): DeleteRequestBuilder<
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy` by taking the entity as a parameter.
   */
  delete(
    entity: AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>
  ): DeleteRequestBuilder<
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  >;
  delete(
    costAccountingDateOrEntity: any,
    costAccountingLedgerName?: string,
    costControlUnitName?: string
  ): DeleteRequestBuilder<
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(
      this.entityApi,
      costAccountingDateOrEntity instanceof
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy
        ? costAccountingDateOrEntity
        : {
            CostAccountingDate: costAccountingDateOrEntity!,
            CostAccountingLedgerName: costAccountingLedgerName!,
            CostControlUnitName: costControlUnitName!
          }
    );
  }
}
