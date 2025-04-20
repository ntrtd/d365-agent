/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { FormulaVersionsV2 } from './FormulaVersionsV2';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link FormulaVersionsV2} entity.
 */
export class FormulaVersionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FormulaVersionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `FormulaVersionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `FormulaVersionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<FormulaVersionsV2<T>, T> {
    return new GetAllRequestBuilder<FormulaVersionsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FormulaVersionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormulaVersionsV2`.
   */
  create(
    entity: FormulaVersionsV2<T>
  ): CreateRequestBuilder<FormulaVersionsV2<T>, T> {
    return new CreateRequestBuilder<FormulaVersionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FormulaVersionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link FormulaVersionsV2.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link FormulaVersionsV2.manufacturedItemNumber}.
   * @param formulaId Key property. See {@link FormulaVersionsV2.formulaId}.
   * @param productionSiteId Key property. See {@link FormulaVersionsV2.productionSiteId}.
   * @param productConfigurationId Key property. See {@link FormulaVersionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link FormulaVersionsV2.productColorId}.
   * @param productSizeId Key property. See {@link FormulaVersionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link FormulaVersionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link FormulaVersionsV2.productVersionId}.
   * @param isActive Key property. See {@link FormulaVersionsV2.isActive}.
   * @param validFromDate Key property. See {@link FormulaVersionsV2.validFromDate}.
   * @param fromQuantity Key property. See {@link FormulaVersionsV2.fromQuantity}.
   * @returns A request builder for creating requests to retrieve one `FormulaVersionsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    manufacturedItemNumber: DeserializedType<T, 'Edm.String'>,
    formulaId: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    isActive: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fromQuantity: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<FormulaVersionsV2<T>, T> {
    return new GetByKeyRequestBuilder<FormulaVersionsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ManufacturedItemNumber: manufacturedItemNumber,
      FormulaId: formulaId,
      ProductionSiteId: productionSiteId,
      ProductConfigurationId: productConfigurationId,
      ProductColorId: productColorId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId,
      IsActive: isActive,
      ValidFromDate: validFromDate,
      FromQuantity: fromQuantity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FormulaVersionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormulaVersionsV2`.
   */
  update(
    entity: FormulaVersionsV2<T>
  ): UpdateRequestBuilder<FormulaVersionsV2<T>, T> {
    return new UpdateRequestBuilder<FormulaVersionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FormulaVersionsV2`.
   * @param dataAreaId Key property. See {@link FormulaVersionsV2.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link FormulaVersionsV2.manufacturedItemNumber}.
   * @param formulaId Key property. See {@link FormulaVersionsV2.formulaId}.
   * @param productionSiteId Key property. See {@link FormulaVersionsV2.productionSiteId}.
   * @param productConfigurationId Key property. See {@link FormulaVersionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link FormulaVersionsV2.productColorId}.
   * @param productSizeId Key property. See {@link FormulaVersionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link FormulaVersionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link FormulaVersionsV2.productVersionId}.
   * @param isActive Key property. See {@link FormulaVersionsV2.isActive}.
   * @param validFromDate Key property. See {@link FormulaVersionsV2.validFromDate}.
   * @param fromQuantity Key property. See {@link FormulaVersionsV2.fromQuantity}.
   * @returns A request builder for creating requests that delete an entity of type `FormulaVersionsV2`.
   */
  delete(
    dataAreaId: string,
    manufacturedItemNumber: string,
    formulaId: string,
    productionSiteId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    isActive: NoYes,
    validFromDate: Moment,
    fromQuantity: BigNumber
  ): DeleteRequestBuilder<FormulaVersionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FormulaVersionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormulaVersionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: FormulaVersionsV2<T>
  ): DeleteRequestBuilder<FormulaVersionsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    manufacturedItemNumber?: string,
    formulaId?: string,
    productionSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    isActive?: NoYes,
    validFromDate?: Moment,
    fromQuantity?: BigNumber
  ): DeleteRequestBuilder<FormulaVersionsV2<T>, T> {
    return new DeleteRequestBuilder<FormulaVersionsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FormulaVersionsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ManufacturedItemNumber: manufacturedItemNumber!,
            FormulaId: formulaId!,
            ProductionSiteId: productionSiteId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            IsActive: isActive!,
            ValidFromDate: validFromDate!,
            FromQuantity: fromQuantity!
          }
    );
  }
}
