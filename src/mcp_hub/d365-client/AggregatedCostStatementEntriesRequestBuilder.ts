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
import { AggregatedCostStatementEntries } from './AggregatedCostStatementEntries';
import { CostStatementType } from './CostStatementType';
import { CostStatementLineCategoryLevel1 } from './CostStatementLineCategoryLevel1';
import { CostStatementLineCategoryLevel2 } from './CostStatementLineCategoryLevel2';
import { CostStatementLineCategoryLevel3 } from './CostStatementLineCategoryLevel3';

/**
 * Request builder class for operations supported on the {@link AggregatedCostStatementEntries} entity.
 */
export class AggregatedCostStatementEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AggregatedCostStatementEntries<T>, T> {
  /**
   * Returns a request builder for querying all `AggregatedCostStatementEntries` entities.
   * @returns A request builder for creating requests to retrieve all `AggregatedCostStatementEntries` entities.
   */
  getAll(): GetAllRequestBuilder<AggregatedCostStatementEntries<T>, T> {
    return new GetAllRequestBuilder<AggregatedCostStatementEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AggregatedCostStatementEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AggregatedCostStatementEntries`.
   */
  create(
    entity: AggregatedCostStatementEntries<T>
  ): CreateRequestBuilder<AggregatedCostStatementEntries<T>, T> {
    return new CreateRequestBuilder<AggregatedCostStatementEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AggregatedCostStatementEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link AggregatedCostStatementEntries.dataAreaId}.
   * @param costStatementType Key property. See {@link AggregatedCostStatementEntries.costStatementType}.
   * @param accountingDate Key property. See {@link AggregatedCostStatementEntries.accountingDate}.
   * @param levelOneCostStatementLineCategoryName Key property. See {@link AggregatedCostStatementEntries.levelOneCostStatementLineCategoryName}.
   * @param levelTwoCostStatementLineCategoryName Key property. See {@link AggregatedCostStatementEntries.levelTwoCostStatementLineCategoryName}.
   * @param levelThreeCostStatementLineCategoryName Key property. See {@link AggregatedCostStatementEntries.levelThreeCostStatementLineCategoryName}.
   * @param operationalSiteId Key property. See {@link AggregatedCostStatementEntries.operationalSiteId}.
   * @returns A request builder for creating requests to retrieve one `AggregatedCostStatementEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    costStatementType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CostStatementType'
    >,
    accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    levelOneCostStatementLineCategoryName: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CostStatementLineCategoryLevel1'
    >,
    levelTwoCostStatementLineCategoryName: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CostStatementLineCategoryLevel2'
    >,
    levelThreeCostStatementLineCategoryName: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CostStatementLineCategoryLevel3'
    >,
    operationalSiteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AggregatedCostStatementEntries<T>, T> {
    return new GetByKeyRequestBuilder<AggregatedCostStatementEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CostStatementType: costStatementType,
        AccountingDate: accountingDate,
        LevelOneCostStatementLineCategoryName:
          levelOneCostStatementLineCategoryName,
        LevelTwoCostStatementLineCategoryName:
          levelTwoCostStatementLineCategoryName,
        LevelThreeCostStatementLineCategoryName:
          levelThreeCostStatementLineCategoryName,
        OperationalSiteId: operationalSiteId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AggregatedCostStatementEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AggregatedCostStatementEntries`.
   */
  update(
    entity: AggregatedCostStatementEntries<T>
  ): UpdateRequestBuilder<AggregatedCostStatementEntries<T>, T> {
    return new UpdateRequestBuilder<AggregatedCostStatementEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AggregatedCostStatementEntries`.
   * @param dataAreaId Key property. See {@link AggregatedCostStatementEntries.dataAreaId}.
   * @param costStatementType Key property. See {@link AggregatedCostStatementEntries.costStatementType}.
   * @param accountingDate Key property. See {@link AggregatedCostStatementEntries.accountingDate}.
   * @param levelOneCostStatementLineCategoryName Key property. See {@link AggregatedCostStatementEntries.levelOneCostStatementLineCategoryName}.
   * @param levelTwoCostStatementLineCategoryName Key property. See {@link AggregatedCostStatementEntries.levelTwoCostStatementLineCategoryName}.
   * @param levelThreeCostStatementLineCategoryName Key property. See {@link AggregatedCostStatementEntries.levelThreeCostStatementLineCategoryName}.
   * @param operationalSiteId Key property. See {@link AggregatedCostStatementEntries.operationalSiteId}.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedCostStatementEntries`.
   */
  delete(
    dataAreaId: string,
    costStatementType: CostStatementType,
    accountingDate: Moment,
    levelOneCostStatementLineCategoryName: CostStatementLineCategoryLevel1,
    levelTwoCostStatementLineCategoryName: CostStatementLineCategoryLevel2,
    levelThreeCostStatementLineCategoryName: CostStatementLineCategoryLevel3,
    operationalSiteId: string
  ): DeleteRequestBuilder<AggregatedCostStatementEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AggregatedCostStatementEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedCostStatementEntries` by taking the entity as a parameter.
   */
  delete(
    entity: AggregatedCostStatementEntries<T>
  ): DeleteRequestBuilder<AggregatedCostStatementEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    costStatementType?: CostStatementType,
    accountingDate?: Moment,
    levelOneCostStatementLineCategoryName?: CostStatementLineCategoryLevel1,
    levelTwoCostStatementLineCategoryName?: CostStatementLineCategoryLevel2,
    levelThreeCostStatementLineCategoryName?: CostStatementLineCategoryLevel3,
    operationalSiteId?: string
  ): DeleteRequestBuilder<AggregatedCostStatementEntries<T>, T> {
    return new DeleteRequestBuilder<AggregatedCostStatementEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AggregatedCostStatementEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CostStatementType: costStatementType!,
            AccountingDate: accountingDate!,
            LevelOneCostStatementLineCategoryName:
              levelOneCostStatementLineCategoryName!,
            LevelTwoCostStatementLineCategoryName:
              levelTwoCostStatementLineCategoryName!,
            LevelThreeCostStatementLineCategoryName:
              levelThreeCostStatementLineCategoryName!,
            OperationalSiteId: operationalSiteId!
          }
    );
  }
}
