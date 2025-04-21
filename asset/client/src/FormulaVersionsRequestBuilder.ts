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
import { FormulaVersions } from './FormulaVersions';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link FormulaVersions} entity.
 */
export class FormulaVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FormulaVersions<T>, T> {
  /**
   * Returns a request builder for querying all `FormulaVersions` entities.
   * @returns A request builder for creating requests to retrieve all `FormulaVersions` entities.
   */
  getAll(): GetAllRequestBuilder<FormulaVersions<T>, T> {
    return new GetAllRequestBuilder<FormulaVersions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FormulaVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormulaVersions`.
   */
  create(
    entity: FormulaVersions<T>
  ): CreateRequestBuilder<FormulaVersions<T>, T> {
    return new CreateRequestBuilder<FormulaVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FormulaVersions` entity based on its keys.
   * @param dataAreaId Key property. See {@link FormulaVersions.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link FormulaVersions.manufacturedItemNumber}.
   * @param formulaId Key property. See {@link FormulaVersions.formulaId}.
   * @param productionSiteId Key property. See {@link FormulaVersions.productionSiteId}.
   * @param productConfigurationId Key property. See {@link FormulaVersions.productConfigurationId}.
   * @param productColorId Key property. See {@link FormulaVersions.productColorId}.
   * @param productSizeId Key property. See {@link FormulaVersions.productSizeId}.
   * @param productStyleId Key property. See {@link FormulaVersions.productStyleId}.
   * @param isActive Key property. See {@link FormulaVersions.isActive}.
   * @param validFromDate Key property. See {@link FormulaVersions.validFromDate}.
   * @param fromQuantity Key property. See {@link FormulaVersions.fromQuantity}.
   * @returns A request builder for creating requests to retrieve one `FormulaVersions` entity based on its keys.
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
    isActive: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fromQuantity: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<FormulaVersions<T>, T> {
    return new GetByKeyRequestBuilder<FormulaVersions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ManufacturedItemNumber: manufacturedItemNumber,
      FormulaId: formulaId,
      ProductionSiteId: productionSiteId,
      ProductConfigurationId: productConfigurationId,
      ProductColorId: productColorId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      IsActive: isActive,
      ValidFromDate: validFromDate,
      FromQuantity: fromQuantity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FormulaVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormulaVersions`.
   */
  update(
    entity: FormulaVersions<T>
  ): UpdateRequestBuilder<FormulaVersions<T>, T> {
    return new UpdateRequestBuilder<FormulaVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FormulaVersions`.
   * @param dataAreaId Key property. See {@link FormulaVersions.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link FormulaVersions.manufacturedItemNumber}.
   * @param formulaId Key property. See {@link FormulaVersions.formulaId}.
   * @param productionSiteId Key property. See {@link FormulaVersions.productionSiteId}.
   * @param productConfigurationId Key property. See {@link FormulaVersions.productConfigurationId}.
   * @param productColorId Key property. See {@link FormulaVersions.productColorId}.
   * @param productSizeId Key property. See {@link FormulaVersions.productSizeId}.
   * @param productStyleId Key property. See {@link FormulaVersions.productStyleId}.
   * @param isActive Key property. See {@link FormulaVersions.isActive}.
   * @param validFromDate Key property. See {@link FormulaVersions.validFromDate}.
   * @param fromQuantity Key property. See {@link FormulaVersions.fromQuantity}.
   * @returns A request builder for creating requests that delete an entity of type `FormulaVersions`.
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
    isActive: NoYes,
    validFromDate: Moment,
    fromQuantity: BigNumber
  ): DeleteRequestBuilder<FormulaVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FormulaVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormulaVersions` by taking the entity as a parameter.
   */
  delete(
    entity: FormulaVersions<T>
  ): DeleteRequestBuilder<FormulaVersions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    manufacturedItemNumber?: string,
    formulaId?: string,
    productionSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    isActive?: NoYes,
    validFromDate?: Moment,
    fromQuantity?: BigNumber
  ): DeleteRequestBuilder<FormulaVersions<T>, T> {
    return new DeleteRequestBuilder<FormulaVersions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FormulaVersions
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
            IsActive: isActive!,
            ValidFromDate: validFromDate!,
            FromQuantity: fromQuantity!
          }
    );
  }
}
