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
import { CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers } from './CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers} entity.
 */
export class CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers`.
   */
  create(
    entity: CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>
  ): CreateRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorDataTransferSurrogateKey Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorDataTransferSurrogateKey}.
   * @param dataConnectorStatisticalMeasurePeriodStartDate Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorStatisticalMeasurePeriodStartDate}.
   * @param dataConnectorStatisticalMeasurePeriodEndDate Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorStatisticalMeasurePeriodEndDate}.
   * @param dataConnectorStatisticalMeasureName Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorStatisticalMeasureName}.
   * @param dataConnectorStatisticalMeasureSourceIdentifier Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorStatisticalMeasureSourceIdentifier}.
   * @param dataConnectorCostObjectDimensionName Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorCostObjectDimensionName}.
   * @param costObjectDimensionMemberName Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.costObjectDimensionMemberName}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    dataConnectorDataTransferSurrogateKey: DeserializedType<T, 'Edm.String'>,
    dataConnectorStatisticalMeasurePeriodStartDate: DeserializedType<
      T,
      'Edm.DateTimeOffset'
    >,
    dataConnectorStatisticalMeasurePeriodEndDate: DeserializedType<
      T,
      'Edm.DateTimeOffset'
    >,
    dataConnectorStatisticalMeasureName: DeserializedType<T, 'Edm.String'>,
    dataConnectorStatisticalMeasureSourceIdentifier: DeserializedType<
      T,
      'Edm.String'
    >,
    dataConnectorCostObjectDimensionName: DeserializedType<T, 'Edm.String'>,
    costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      DataConnectorDataTransferSurrogateKey:
        dataConnectorDataTransferSurrogateKey,
      DataConnectorStatisticalMeasurePeriodStartDate:
        dataConnectorStatisticalMeasurePeriodStartDate,
      DataConnectorStatisticalMeasurePeriodEndDate:
        dataConnectorStatisticalMeasurePeriodEndDate,
      DataConnectorStatisticalMeasureName: dataConnectorStatisticalMeasureName,
      DataConnectorStatisticalMeasureSourceIdentifier:
        dataConnectorStatisticalMeasureSourceIdentifier,
      DataConnectorCostObjectDimensionName:
        dataConnectorCostObjectDimensionName,
      CostObjectDimensionMemberName: costObjectDimensionMemberName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers`.
   */
  update(
    entity: CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>
  ): UpdateRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorDataTransferSurrogateKey Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorDataTransferSurrogateKey}.
   * @param dataConnectorStatisticalMeasurePeriodStartDate Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorStatisticalMeasurePeriodStartDate}.
   * @param dataConnectorStatisticalMeasurePeriodEndDate Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorStatisticalMeasurePeriodEndDate}.
   * @param dataConnectorStatisticalMeasureName Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorStatisticalMeasureName}.
   * @param dataConnectorStatisticalMeasureSourceIdentifier Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorStatisticalMeasureSourceIdentifier}.
   * @param dataConnectorCostObjectDimensionName Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.dataConnectorCostObjectDimensionName}.
   * @param costObjectDimensionMemberName Key property. See {@link CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.costObjectDimensionMemberName}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    dataConnectorDataTransferSurrogateKey: string,
    dataConnectorStatisticalMeasurePeriodStartDate: Moment,
    dataConnectorStatisticalMeasurePeriodEndDate: Moment,
    dataConnectorStatisticalMeasureName: string,
    dataConnectorStatisticalMeasureSourceIdentifier: string,
    dataConnectorCostObjectDimensionName: string,
    costObjectDimensionMemberName: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
    T
  >;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    dataConnectorDataTransferSurrogateKey?: string,
    dataConnectorStatisticalMeasurePeriodStartDate?: Moment,
    dataConnectorStatisticalMeasurePeriodEndDate?: Moment,
    dataConnectorStatisticalMeasureName?: string,
    dataConnectorStatisticalMeasureSourceIdentifier?: string,
    dataConnectorCostObjectDimensionName?: string,
    costObjectDimensionMemberName?: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            DataConnectorDataTransferSurrogateKey:
              dataConnectorDataTransferSurrogateKey!,
            DataConnectorStatisticalMeasurePeriodStartDate:
              dataConnectorStatisticalMeasurePeriodStartDate!,
            DataConnectorStatisticalMeasurePeriodEndDate:
              dataConnectorStatisticalMeasurePeriodEndDate!,
            DataConnectorStatisticalMeasureName:
              dataConnectorStatisticalMeasureName!,
            DataConnectorStatisticalMeasureSourceIdentifier:
              dataConnectorStatisticalMeasureSourceIdentifier!,
            DataConnectorCostObjectDimensionName:
              dataConnectorCostObjectDimensionName!,
            CostObjectDimensionMemberName: costObjectDimensionMemberName!
          }
    );
  }
}
