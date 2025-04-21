/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { RebateAndDeductionsAgreementDateSetupCriterionItems } from './RebateAndDeductionsAgreementDateSetupCriterionItems';
import { TamRebateMethod } from './TamRebateMethod';

/**
 * Request builder class for operations supported on the {@link RebateAndDeductionsAgreementDateSetupCriterionItems} entity.
 */
export class RebateAndDeductionsAgreementDateSetupCriterionItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RebateAndDeductionsAgreementDateSetupCriterionItems` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAndDeductionsAgreementDateSetupCriterionItems` entities.
   */
  getAll(): GetAllRequestBuilder<
    RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RebateAndDeductionsAgreementDateSetupCriterionItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAndDeductionsAgreementDateSetupCriterionItems`.
   */
  create(
    entity: RebateAndDeductionsAgreementDateSetupCriterionItems<T>
  ): CreateRequestBuilder<
    RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
    T
  > {
    return new CreateRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RebateAndDeductionsAgreementDateSetupCriterionItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.dataAreaId}.
   * @param agreementNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.agreementNumber}.
   * @param agreementLineNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.agreementLineNumber}.
   * @param rebateValidFromQuantityAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.rebateValidFromQuantityAmount}.
   * @param rebateValidToQuantityAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.rebateValidToQuantityAmount}.
   * @param rebateAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.rebateAmount}.
   * @param rebateCalculationMethod Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.rebateCalculationMethod}.
   * @param itemNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.itemNumber}.
   * @param productConfigurationId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.productConfigurationId}.
   * @param productColorId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.productColorId}.
   * @param productSizeId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.productSizeId}.
   * @param productStyleId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `RebateAndDeductionsAgreementDateSetupCriterionItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agreementNumber: DeserializedType<T, 'Edm.String'>,
    agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    rebateValidFromQuantityAmount: DeserializedType<T, 'Edm.Decimal'>,
    rebateValidToQuantityAmount: DeserializedType<T, 'Edm.Decimal'>,
    rebateAmount: DeserializedType<T, 'Edm.Decimal'>,
    rebateCalculationMethod: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TAMRebateMethod'
    >,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AgreementNumber: agreementNumber,
      AgreementLineNumber: agreementLineNumber,
      RebateValidFromQuantityAmount: rebateValidFromQuantityAmount,
      RebateValidToQuantityAmount: rebateValidToQuantityAmount,
      RebateAmount: rebateAmount,
      RebateCalculationMethod: rebateCalculationMethod,
      ItemNumber: itemNumber,
      ProductConfigurationId: productConfigurationId,
      ProductColorId: productColorId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAndDeductionsAgreementDateSetupCriterionItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAndDeductionsAgreementDateSetupCriterionItems`.
   */
  update(
    entity: RebateAndDeductionsAgreementDateSetupCriterionItems<T>
  ): UpdateRequestBuilder<
    RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsAgreementDateSetupCriterionItems`.
   * @param dataAreaId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.dataAreaId}.
   * @param agreementNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.agreementNumber}.
   * @param agreementLineNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.agreementLineNumber}.
   * @param rebateValidFromQuantityAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.rebateValidFromQuantityAmount}.
   * @param rebateValidToQuantityAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.rebateValidToQuantityAmount}.
   * @param rebateAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.rebateAmount}.
   * @param rebateCalculationMethod Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.rebateCalculationMethod}.
   * @param itemNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.itemNumber}.
   * @param productConfigurationId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.productConfigurationId}.
   * @param productColorId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.productColorId}.
   * @param productSizeId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.productSizeId}.
   * @param productStyleId Key property. See {@link RebateAndDeductionsAgreementDateSetupCriterionItems.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsAgreementDateSetupCriterionItems`.
   */
  delete(
    dataAreaId: string,
    agreementNumber: string,
    agreementLineNumber: BigNumber,
    rebateValidFromQuantityAmount: BigNumber,
    rebateValidToQuantityAmount: BigNumber,
    rebateAmount: BigNumber,
    rebateCalculationMethod: TamRebateMethod,
    itemNumber: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string
  ): DeleteRequestBuilder<
    RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsAgreementDateSetupCriterionItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsAgreementDateSetupCriterionItems` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAndDeductionsAgreementDateSetupCriterionItems<T>
  ): DeleteRequestBuilder<
    RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    agreementNumber?: string,
    agreementLineNumber?: BigNumber,
    rebateValidFromQuantityAmount?: BigNumber,
    rebateValidToQuantityAmount?: BigNumber,
    rebateAmount?: BigNumber,
    rebateCalculationMethod?: TamRebateMethod,
    itemNumber?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<
    RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriterionItems<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RebateAndDeductionsAgreementDateSetupCriterionItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgreementNumber: agreementNumber!,
            AgreementLineNumber: agreementLineNumber!,
            RebateValidFromQuantityAmount: rebateValidFromQuantityAmount!,
            RebateValidToQuantityAmount: rebateValidToQuantityAmount!,
            RebateAmount: rebateAmount!,
            RebateCalculationMethod: rebateCalculationMethod!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
