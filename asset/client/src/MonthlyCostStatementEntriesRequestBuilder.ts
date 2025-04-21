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
import { MonthlyCostStatementEntries } from './MonthlyCostStatementEntries';
import { CostStatementType } from './CostStatementType';
import { CostStatementLineCategoryLevel1 } from './CostStatementLineCategoryLevel1';
import { CostStatementLineCategoryLevel2 } from './CostStatementLineCategoryLevel2';
import { CostStatementLineCategoryLevel3 } from './CostStatementLineCategoryLevel3';
import { InventValueReportResourceType } from './InventValueReportResourceType';

/**
 * Request builder class for operations supported on the {@link MonthlyCostStatementEntries} entity.
 */
export class MonthlyCostStatementEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MonthlyCostStatementEntries<T>, T> {
  /**
   * Returns a request builder for querying all `MonthlyCostStatementEntries` entities.
   * @returns A request builder for creating requests to retrieve all `MonthlyCostStatementEntries` entities.
   */
  getAll(): GetAllRequestBuilder<MonthlyCostStatementEntries<T>, T> {
    return new GetAllRequestBuilder<MonthlyCostStatementEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MonthlyCostStatementEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MonthlyCostStatementEntries`.
   */
  create(
    entity: MonthlyCostStatementEntries<T>
  ): CreateRequestBuilder<MonthlyCostStatementEntries<T>, T> {
    return new CreateRequestBuilder<MonthlyCostStatementEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MonthlyCostStatementEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link MonthlyCostStatementEntries.dataAreaId}.
   * @param costStatementType Key property. See {@link MonthlyCostStatementEntries.costStatementType}.
   * @param accountingMonthStartDate Key property. See {@link MonthlyCostStatementEntries.accountingMonthStartDate}.
   * @param levelOneCostStatementLineCategoryName Key property. See {@link MonthlyCostStatementEntries.levelOneCostStatementLineCategoryName}.
   * @param levelTwoCostStatementLineCategoryName Key property. See {@link MonthlyCostStatementEntries.levelTwoCostStatementLineCategoryName}.
   * @param levelThreeCostStatementLineCategoryName Key property. See {@link MonthlyCostStatementEntries.levelThreeCostStatementLineCategoryName}.
   * @param operationalSiteId Key property. See {@link MonthlyCostStatementEntries.operationalSiteId}.
   * @param costResourceType Key property. See {@link MonthlyCostStatementEntries.costResourceType}.
   * @param costResourceNumber Key property. See {@link MonthlyCostStatementEntries.costResourceNumber}.
   * @param productConfigurationId Key property. See {@link MonthlyCostStatementEntries.productConfigurationId}.
   * @param productColorId Key property. See {@link MonthlyCostStatementEntries.productColorId}.
   * @param productSizeId Key property. See {@link MonthlyCostStatementEntries.productSizeId}.
   * @param productStyleId Key property. See {@link MonthlyCostStatementEntries.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `MonthlyCostStatementEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    costStatementType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CostStatementType'
    >,
    accountingMonthStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
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
    operationalSiteId: DeserializedType<T, 'Edm.String'>,
    costResourceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventValueReportResourceType'
    >,
    costResourceNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MonthlyCostStatementEntries<T>, T> {
    return new GetByKeyRequestBuilder<MonthlyCostStatementEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CostStatementType: costStatementType,
        AccountingMonthStartDate: accountingMonthStartDate,
        LevelOneCostStatementLineCategoryName:
          levelOneCostStatementLineCategoryName,
        LevelTwoCostStatementLineCategoryName:
          levelTwoCostStatementLineCategoryName,
        LevelThreeCostStatementLineCategoryName:
          levelThreeCostStatementLineCategoryName,
        OperationalSiteId: operationalSiteId,
        CostResourceType: costResourceType,
        CostResourceNumber: costResourceNumber,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MonthlyCostStatementEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MonthlyCostStatementEntries`.
   */
  update(
    entity: MonthlyCostStatementEntries<T>
  ): UpdateRequestBuilder<MonthlyCostStatementEntries<T>, T> {
    return new UpdateRequestBuilder<MonthlyCostStatementEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MonthlyCostStatementEntries`.
   * @param dataAreaId Key property. See {@link MonthlyCostStatementEntries.dataAreaId}.
   * @param costStatementType Key property. See {@link MonthlyCostStatementEntries.costStatementType}.
   * @param accountingMonthStartDate Key property. See {@link MonthlyCostStatementEntries.accountingMonthStartDate}.
   * @param levelOneCostStatementLineCategoryName Key property. See {@link MonthlyCostStatementEntries.levelOneCostStatementLineCategoryName}.
   * @param levelTwoCostStatementLineCategoryName Key property. See {@link MonthlyCostStatementEntries.levelTwoCostStatementLineCategoryName}.
   * @param levelThreeCostStatementLineCategoryName Key property. See {@link MonthlyCostStatementEntries.levelThreeCostStatementLineCategoryName}.
   * @param operationalSiteId Key property. See {@link MonthlyCostStatementEntries.operationalSiteId}.
   * @param costResourceType Key property. See {@link MonthlyCostStatementEntries.costResourceType}.
   * @param costResourceNumber Key property. See {@link MonthlyCostStatementEntries.costResourceNumber}.
   * @param productConfigurationId Key property. See {@link MonthlyCostStatementEntries.productConfigurationId}.
   * @param productColorId Key property. See {@link MonthlyCostStatementEntries.productColorId}.
   * @param productSizeId Key property. See {@link MonthlyCostStatementEntries.productSizeId}.
   * @param productStyleId Key property. See {@link MonthlyCostStatementEntries.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `MonthlyCostStatementEntries`.
   */
  delete(
    dataAreaId: string,
    costStatementType: CostStatementType,
    accountingMonthStartDate: Moment,
    levelOneCostStatementLineCategoryName: CostStatementLineCategoryLevel1,
    levelTwoCostStatementLineCategoryName: CostStatementLineCategoryLevel2,
    levelThreeCostStatementLineCategoryName: CostStatementLineCategoryLevel3,
    operationalSiteId: string,
    costResourceType: InventValueReportResourceType,
    costResourceNumber: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string
  ): DeleteRequestBuilder<MonthlyCostStatementEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MonthlyCostStatementEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MonthlyCostStatementEntries` by taking the entity as a parameter.
   */
  delete(
    entity: MonthlyCostStatementEntries<T>
  ): DeleteRequestBuilder<MonthlyCostStatementEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    costStatementType?: CostStatementType,
    accountingMonthStartDate?: Moment,
    levelOneCostStatementLineCategoryName?: CostStatementLineCategoryLevel1,
    levelTwoCostStatementLineCategoryName?: CostStatementLineCategoryLevel2,
    levelThreeCostStatementLineCategoryName?: CostStatementLineCategoryLevel3,
    operationalSiteId?: string,
    costResourceType?: InventValueReportResourceType,
    costResourceNumber?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<MonthlyCostStatementEntries<T>, T> {
    return new DeleteRequestBuilder<MonthlyCostStatementEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MonthlyCostStatementEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CostStatementType: costStatementType!,
            AccountingMonthStartDate: accountingMonthStartDate!,
            LevelOneCostStatementLineCategoryName:
              levelOneCostStatementLineCategoryName!,
            LevelTwoCostStatementLineCategoryName:
              levelTwoCostStatementLineCategoryName!,
            LevelThreeCostStatementLineCategoryName:
              levelThreeCostStatementLineCategoryName!,
            OperationalSiteId: operationalSiteId!,
            CostResourceType: costResourceType!,
            CostResourceNumber: costResourceNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
