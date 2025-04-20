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
import { AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy } from './AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy';

/**
 * Request builder class for operations supported on the {@link AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy} entity.
 */
export class AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy` entities.
   * @returns A request builder for creating requests to retrieve all `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy` entities.
   */
  getAll(): GetAllRequestBuilder<
    AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy`.
   */
  create(
    entity: AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>
  ): CreateRequestBuilder<
    AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new CreateRequestBuilder<
      AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy` entity based on its keys.
   * @param costControlUnitName Key property. See {@link AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy.costControlUnitName}.
   * @param costAccountingLedgerName Key property. See {@link AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy.costAccountingLedgerName}.
   * @param costAccountingDate Key property. See {@link AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy.costAccountingDate}.
   * @returns A request builder for creating requests to retrieve one `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy` entity based on its keys.
   */
  getByKey(
    costControlUnitName: DeserializedType<T, 'Edm.String'>,
    costAccountingLedgerName: DeserializedType<T, 'Edm.String'>,
    costAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<
    AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(this.entityApi, {
      CostControlUnitName: costControlUnitName,
      CostAccountingLedgerName: costAccountingLedgerName,
      CostAccountingDate: costAccountingDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy`.
   */
  update(
    entity: AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>
  ): UpdateRequestBuilder<
    AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy`.
   * @param costControlUnitName Key property. See {@link AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy.costControlUnitName}.
   * @param costAccountingLedgerName Key property. See {@link AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy.costAccountingLedgerName}.
   * @param costAccountingDate Key property. See {@link AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy.costAccountingDate}.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy`.
   */
  delete(
    costControlUnitName: string,
    costAccountingLedgerName: string,
    costAccountingDate: Moment
  ): DeleteRequestBuilder<
    AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy` by taking the entity as a parameter.
   */
  delete(
    entity: AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>
  ): DeleteRequestBuilder<
    AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  >;
  delete(
    costControlUnitNameOrEntity: any,
    costAccountingLedgerName?: string,
    costAccountingDate?: Moment
  ): DeleteRequestBuilder<
    AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<T>,
      T
    >(
      this.entityApi,
      costControlUnitNameOrEntity instanceof
      AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy
        ? costControlUnitNameOrEntity
        : {
            CostControlUnitName: costControlUnitNameOrEntity!,
            CostAccountingLedgerName: costAccountingLedgerName!,
            CostAccountingDate: costAccountingDate!
          }
    );
  }
}
