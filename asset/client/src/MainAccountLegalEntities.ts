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
import type { MainAccountLegalEntitiesApi } from './MainAccountLegalEntitiesApi';
import { NoYes } from './NoYes';
import { FieldControl } from './FieldControl';
import { SalesPurch } from './SalesPurch';
import { ExchangeRateTypes, ExchangeRateTypesType } from './ExchangeRateTypes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "MainAccountLegalEntities" of service "d365_metadata".
 */
export class MainAccountLegalEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MainAccountLegalEntitiesType<T>
{
  /**
   * Technical entity name for MainAccountLegalEntities.
   */
  static override _entityName = 'MainAccountLegalEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MainAccountLegalEntities entity.
   */
  static _keys = ['MainAccountId', 'ChartOfAccounts', 'LegalEntityId'];
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Chart Of Accounts.
   */
  declare chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Active To.
   */
  declare activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Exempt.
   * @nullable
   */
  declare isExempt?: NoYes | null;
  /**
   * Is Suspended.
   * @nullable
   */
  declare isSuspended?: NoYes | null;
  /**
   * Validate Sales Tax.
   * @nullable
   */
  declare validateSalesTax?: FieldControl | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Do Not Allow Manual Entry.
   * @nullable
   */
  declare doNotAllowManualEntry?: NoYes | null;
  /**
   * Exchange Adjustment Rate Type.
   * @nullable
   */
  declare exchangeAdjustmentRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Table Legal Entity.
   * @nullable
   */
  declare taxTableLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Allocate.
   * @nullable
   */
  declare autoAllocate?: NoYes | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Dimensions Display Value.
   * @nullable
   */
  declare fixedDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Direction.
   * @nullable
   */
  declare salesTaxDirection?: SalesPurch | null;
  /**
   * Item Sales Tax Group Heading Legal Entity.
   * @nullable
   */
  declare itemSalesTaxGroupHeadingLegalEntity?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reporting Exchange Adjustment Rate Type.
   * @nullable
   */
  declare reportingExchangeAdjustmentRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link ExchangeRateTypes} entity.
   */
  declare exchangeRateType?: ExchangeRateTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: MainAccountLegalEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface MainAccountLegalEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isExempt?: NoYes | null;
  isSuspended?: NoYes | null;
  validateSalesTax?: FieldControl | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  doNotAllowManualEntry?: NoYes | null;
  exchangeAdjustmentRateType?: DeserializedType<T, 'Edm.String'> | null;
  taxTableLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  autoAllocate?: NoYes | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedDimensionsDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxDirection?: SalesPurch | null;
  itemSalesTaxGroupHeadingLegalEntity?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  reportingExchangeAdjustmentRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  exchangeRateType?: ExchangeRateTypesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
