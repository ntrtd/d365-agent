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
import { CostStatementEntries } from './CostStatementEntries';
import { CostStatementType } from './CostStatementType';
import { CostStatementLineCategoryLevel1 } from './CostStatementLineCategoryLevel1';
import { CostStatementLineCategoryLevel2 } from './CostStatementLineCategoryLevel2';
import { CostStatementLineCategoryLevel3 } from './CostStatementLineCategoryLevel3';
import { InventValueReportResourceType } from './InventValueReportResourceType';

/**
 * Request builder class for operations supported on the {@link CostStatementEntries} entity.
 */
export class CostStatementEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostStatementEntries<T>, T> {
  /**
   * Returns a request builder for querying all `CostStatementEntries` entities.
   * @returns A request builder for creating requests to retrieve all `CostStatementEntries` entities.
   */
  getAll(): GetAllRequestBuilder<CostStatementEntries<T>, T> {
    return new GetAllRequestBuilder<CostStatementEntries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostStatementEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostStatementEntries`.
   */
  create(
    entity: CostStatementEntries<T>
  ): CreateRequestBuilder<CostStatementEntries<T>, T> {
    return new CreateRequestBuilder<CostStatementEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostStatementEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostStatementEntries.dataAreaId}.
   * @param costStatementType Key property. See {@link CostStatementEntries.costStatementType}.
   * @param accountingDate Key property. See {@link CostStatementEntries.accountingDate}.
   * @param levelOneCostStatementLineCategoryName Key property. See {@link CostStatementEntries.levelOneCostStatementLineCategoryName}.
   * @param levelTwoCostStatementLineCategoryName Key property. See {@link CostStatementEntries.levelTwoCostStatementLineCategoryName}.
   * @param levelThreeCostStatementLineCategoryName Key property. See {@link CostStatementEntries.levelThreeCostStatementLineCategoryName}.
   * @param operationalSiteId Key property. See {@link CostStatementEntries.operationalSiteId}.
   * @param costResourceType Key property. See {@link CostStatementEntries.costResourceType}.
   * @param costResourceId Key property. See {@link CostStatementEntries.costResourceId}.
   * @param productConfigurationId Key property. See {@link CostStatementEntries.productConfigurationId}.
   * @param productColorId Key property. See {@link CostStatementEntries.productColorId}.
   * @param productSizeId Key property. See {@link CostStatementEntries.productSizeId}.
   * @param productStyleId Key property. See {@link CostStatementEntries.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `CostStatementEntries` entity based on its keys.
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
    operationalSiteId: DeserializedType<T, 'Edm.String'>,
    costResourceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventValueReportResourceType'
    >,
    costResourceId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostStatementEntries<T>, T> {
    return new GetByKeyRequestBuilder<CostStatementEntries<T>, T>(
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
        OperationalSiteId: operationalSiteId,
        CostResourceType: costResourceType,
        CostResourceId: costResourceId,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostStatementEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostStatementEntries`.
   */
  update(
    entity: CostStatementEntries<T>
  ): UpdateRequestBuilder<CostStatementEntries<T>, T> {
    return new UpdateRequestBuilder<CostStatementEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostStatementEntries`.
   * @param dataAreaId Key property. See {@link CostStatementEntries.dataAreaId}.
   * @param costStatementType Key property. See {@link CostStatementEntries.costStatementType}.
   * @param accountingDate Key property. See {@link CostStatementEntries.accountingDate}.
   * @param levelOneCostStatementLineCategoryName Key property. See {@link CostStatementEntries.levelOneCostStatementLineCategoryName}.
   * @param levelTwoCostStatementLineCategoryName Key property. See {@link CostStatementEntries.levelTwoCostStatementLineCategoryName}.
   * @param levelThreeCostStatementLineCategoryName Key property. See {@link CostStatementEntries.levelThreeCostStatementLineCategoryName}.
   * @param operationalSiteId Key property. See {@link CostStatementEntries.operationalSiteId}.
   * @param costResourceType Key property. See {@link CostStatementEntries.costResourceType}.
   * @param costResourceId Key property. See {@link CostStatementEntries.costResourceId}.
   * @param productConfigurationId Key property. See {@link CostStatementEntries.productConfigurationId}.
   * @param productColorId Key property. See {@link CostStatementEntries.productColorId}.
   * @param productSizeId Key property. See {@link CostStatementEntries.productSizeId}.
   * @param productStyleId Key property. See {@link CostStatementEntries.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `CostStatementEntries`.
   */
  delete(
    dataAreaId: string,
    costStatementType: CostStatementType,
    accountingDate: Moment,
    levelOneCostStatementLineCategoryName: CostStatementLineCategoryLevel1,
    levelTwoCostStatementLineCategoryName: CostStatementLineCategoryLevel2,
    levelThreeCostStatementLineCategoryName: CostStatementLineCategoryLevel3,
    operationalSiteId: string,
    costResourceType: InventValueReportResourceType,
    costResourceId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string
  ): DeleteRequestBuilder<CostStatementEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostStatementEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostStatementEntries` by taking the entity as a parameter.
   */
  delete(
    entity: CostStatementEntries<T>
  ): DeleteRequestBuilder<CostStatementEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    costStatementType?: CostStatementType,
    accountingDate?: Moment,
    levelOneCostStatementLineCategoryName?: CostStatementLineCategoryLevel1,
    levelTwoCostStatementLineCategoryName?: CostStatementLineCategoryLevel2,
    levelThreeCostStatementLineCategoryName?: CostStatementLineCategoryLevel3,
    operationalSiteId?: string,
    costResourceType?: InventValueReportResourceType,
    costResourceId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<CostStatementEntries<T>, T> {
    return new DeleteRequestBuilder<CostStatementEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostStatementEntries
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
            OperationalSiteId: operationalSiteId!,
            CostResourceType: costResourceType!,
            CostResourceId: costResourceId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
