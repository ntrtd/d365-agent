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
import type { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { NoYes } from './NoYes';
import { TaxWithholdBaseType } from './TaxWithholdBaseType';
import { TaxWithholdCodeTypeIn } from './TaxWithholdCodeTypeIn';
import { TaxWithholdTypeBr } from './TaxWithholdTypeBr';
import { RoundOffType } from './RoundOffType';
import {
  WithholdingTaxCodeLimits,
  WithholdingTaxCodeLimitsType
} from './WithholdingTaxCodeLimits';
import {
  WithholdingTaxCodeValues,
  WithholdingTaxCodeValuesType
} from './WithholdingTaxCodeValues';
import {
  WithholdingGroupDatas,
  WithholdingGroupDatasType
} from './WithholdingGroupDatas';
import {
  WithholdLedgerAccountGroups,
  WithholdLedgerAccountGroupsType
} from './WithholdLedgerAccountGroups';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  WithholdingPeriods,
  WithholdingPeriodsType
} from './WithholdingPeriods';

/**
 * This class represents the entity "WithholdingTaxCodes" of service "d365_metadata".
 */
export class WithholdingTaxCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdingTaxCodesType<T>
{
  /**
   * Technical entity name for WithholdingTaxCodes.
   */
  static override _entityName = 'WithholdingTaxCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingTaxCodes entity.
   */
  static _keys = ['dataAreaId', 'WithholdingCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding Code.
   */
  declare withholdingCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Apply Threshold.
   * @nullable
   */
  declare applyThreshold?: NoYes | null;
  /**
   * Withholding Tax Base.
   * @nullable
   */
  declare withholdingTaxBase?: TaxWithholdBaseType | null;
  /**
   * Withholding Tax Name.
   * @nullable
   */
  declare withholdingTaxName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Component.
   * @nullable
   */
  declare withholdingTaxComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code Id.
   * @nullable
   */
  declare currencyCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Account Display Value.
   * @nullable
   */
  declare settlementAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receivable Account Display Value.
   * @nullable
   */
  declare receivableAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Component Group.
   * @nullable
   */
  declare withholdingComponentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxWithholdCodeTypeIn | null;
  /**
   * Brazilian Tax Withhold Period.
   * @nullable
   */
  declare brazilianTaxWithholdPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Account Group.
   * @nullable
   */
  declare taxWithholdAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Round Off.
   */
  declare withholdingTaxRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Brazilian Tax Withhold Type.
   * @nullable
   */
  declare brazilianTaxWithholdType?: TaxWithholdTypeBr | null;
  /**
   * Tax Withhold Period.
   * @nullable
   */
  declare taxWithholdPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Round Off Type.
   * @nullable
   */
  declare withholdingTaxRoundOffType?: RoundOffType | null;
  /**
   * Settlement Period.
   * @nullable
   */
  declare settlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Receivable Display Value.
   * @nullable
   */
  declare withholdingTaxReceivableDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodeLimits} entity.
   */
  declare withholdingTaxCodeLimit: WithholdingTaxCodeLimits<T>[];
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodeValues} entity.
   */
  declare withholdingTaxCodeValue: WithholdingTaxCodeValues<T>[];
  /**
   * One-to-many navigation property to the {@link WithholdingGroupDatas} entity.
   */
  declare withholdingGroupData: WithholdingGroupDatas<T>[];
  /**
   * One-to-one navigation property to the {@link WithholdLedgerAccountGroups} entity.
   */
  declare withholdLedgerAccountGroup?: WithholdLedgerAccountGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link WithholdingPeriods} entity.
   */
  declare withholdingPeriod?: WithholdingPeriods<T> | null;

  constructor(_entityApi: WithholdingTaxCodesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdingTaxCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  withholdingCode: DeserializedType<T, 'Edm.String'>;
  applyThreshold?: NoYes | null;
  withholdingTaxBase?: TaxWithholdBaseType | null;
  withholdingTaxName?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxComponent?: DeserializedType<T, 'Edm.String'> | null;
  currencyCodeId?: DeserializedType<T, 'Edm.String'> | null;
  settlementAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  receivableAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  withholdingComponentGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxType?: TaxWithholdCodeTypeIn | null;
  brazilianTaxWithholdPeriod?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  brazilianTaxWithholdType?: TaxWithholdTypeBr | null;
  taxWithholdPeriod?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxRoundOffType?: RoundOffType | null;
  settlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxReceivableDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  withholdingTaxCodeLimit: WithholdingTaxCodeLimitsType<T>[];
  withholdingTaxCodeValue: WithholdingTaxCodeValuesType<T>[];
  withholdingGroupData: WithholdingGroupDatasType<T>[];
  withholdLedgerAccountGroup?: WithholdLedgerAccountGroupsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  withholdingPeriod?: WithholdingPeriodsType<T> | null;
}
