/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RebateAndDeductionsAgreementDateSetupCriterionItemsApi } from './RebateAndDeductionsAgreementDateSetupCriterionItemsApi';
import { TamRebateMethod } from './TamRebateMethod';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { ProductColors, ProductColorsType } from './ProductColors';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  RebateAndDeductionsAgreementDateSetupCriteria,
  RebateAndDeductionsAgreementDateSetupCriteriaType
} from './RebateAndDeductionsAgreementDateSetupCriteria';

/**
 * This class represents the entity "RebateAndDeductionsAgreementDateSetupCriterionItems" of service "d365_metadata".
 */
export class RebateAndDeductionsAgreementDateSetupCriterionItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAndDeductionsAgreementDateSetupCriterionItemsType<T>
{
  /**
   * Technical entity name for RebateAndDeductionsAgreementDateSetupCriterionItems.
   */
  static override _entityName =
    'RebateAndDeductionsAgreementDateSetupCriterionItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAndDeductionsAgreementDateSetupCriterionItems entity.
   */
  static _keys = [
    'dataAreaId',
    'AgreementNumber',
    'AgreementLineNumber',
    'RebateValidFromQuantityAmount',
    'RebateValidToQuantityAmount',
    'RebateAmount',
    'RebateCalculationMethod',
    'ItemNumber',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Number.
   */
  declare agreementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Line Number.
   */
  declare agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Valid From Quantity Amount.
   */
  declare rebateValidFromQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Valid To Quantity Amount.
   */
  declare rebateValidToQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Amount.
   */
  declare rebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Calculation Method.
   * @nullable
   */
  declare rebateCalculationMethod?: TamRebateMethod | null;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiple.
   */
  declare multiple: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link RebateAndDeductionsAgreementDateSetupCriteria} entity.
   */
  declare rebateAndDeductionsAgreementDateSetupCriterion?: RebateAndDeductionsAgreementDateSetupCriteria<T> | null;

  constructor(
    _entityApi: RebateAndDeductionsAgreementDateSetupCriterionItemsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RebateAndDeductionsAgreementDateSetupCriterionItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agreementNumber: DeserializedType<T, 'Edm.String'>;
  agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  rebateValidFromQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateValidToQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateCalculationMethod?: TamRebateMethod | null;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  multiple: DeserializedType<T, 'Edm.Decimal'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  productStyle?: ProductStylesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  unitOfMeasure?: UnitsOfMeasureType<T> | null;
  productSize?: ProductSizesType<T> | null;
  rebateAndDeductionsAgreementDateSetupCriterion?: RebateAndDeductionsAgreementDateSetupCriteriaType<T> | null;
}
