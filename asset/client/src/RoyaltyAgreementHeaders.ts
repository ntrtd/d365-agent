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
import type { RoyaltyAgreementHeadersApi } from './RoyaltyAgreementHeadersApi';
import { McrRoyaltyLineBreakType } from './McrRoyaltyLineBreakType';
import { NoYes } from './NoYes';
import { McrRoyaltyUnitType } from './McrRoyaltyUnitType';
import { McrRoyaltyUomOption } from './McrRoyaltyUomOption';
import { McrRoyaltyCumulationPeriod } from './McrRoyaltyCumulationPeriod';
import { McrTradeCustCalcDates } from './McrTradeCustCalcDates';
import { McrRoyaltyTakenFrom } from './McrRoyaltyTakenFrom';
import {
  RoyaltyAgreementHeaderProductSelections,
  RoyaltyAgreementHeaderProductSelectionsType
} from './RoyaltyAgreementHeaderProductSelections';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  RoyaltyAgreementLines,
  RoyaltyAgreementLinesType
} from './RoyaltyAgreementLines';
import {
  RoyaltyAgreementHeaderProductSelectionsV2,
  RoyaltyAgreementHeaderProductSelectionsV2Type
} from './RoyaltyAgreementHeaderProductSelectionsV2';

/**
 * This class represents the entity "RoyaltyAgreementHeaders" of service "d365_metadata".
 */
export class RoyaltyAgreementHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RoyaltyAgreementHeadersType<T>
{
  /**
   * Technical entity name for RoyaltyAgreementHeaders.
   */
  static override _entityName = 'RoyaltyAgreementHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RoyaltyAgreementHeaders entity.
   */
  static _keys = ['dataAreaId', 'RoyaltyAgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Royalty Agreement Id.
   */
  declare royaltyAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Effective Date.
   */
  declare defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Agreement Description.
   * @nullable
   */
  declare agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Sales Unit Symbol.
   * @nullable
   */
  declare defaultSalesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Royalty Accrual Main Account Id Display Value.
   * @nullable
   */
  declare royaltyAccrualMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Cumulation Method Customized Period Type.
   * @nullable
   */
  declare salesCumulationMethodCustomizedPeriodType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Royalty Break Basis.
   * @nullable
   */
  declare royaltyBreakBasis?: McrRoyaltyLineBreakType | null;
  /**
   * Default Expiration Date.
   */
  declare defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Approval Required.
   * @nullable
   */
  declare isApprovalRequired?: NoYes | null;
  /**
   * Agreement Note.
   * @nullable
   */
  declare agreementNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Symbol Type.
   * @nullable
   */
  declare salesUnitSymbolType?: McrRoyaltyUnitType | null;
  /**
   * Is Validated.
   * @nullable
   */
  declare isValidated?: NoYes | null;
  /**
   * Sales Unit Symbol Option.
   * @nullable
   */
  declare salesUnitSymbolOption?: McrRoyaltyUomOption | null;
  /**
   * Sales Cumulation Method.
   * @nullable
   */
  declare salesCumulationMethod?: McrRoyaltyCumulationPeriod | null;
  /**
   * Royalty Expense Main Account Id Display Value.
   * @nullable
   */
  declare royaltyExpenseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Calculation Search Date Type.
   * @nullable
   */
  declare defaultCalculationSearchDateType?: McrTradeCustCalcDates | null;
  /**
   * Line Amount Basis.
   * @nullable
   */
  declare lineAmountBasis?: McrRoyaltyTakenFrom | null;
  /**
   * Default Vendor Account Number.
   * @nullable
   */
  declare defaultVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Currency Code.
   * @nullable
   */
  declare defaultCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validating Worker Personnel Number.
   * @nullable
   */
  declare validatingWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link RoyaltyAgreementHeaderProductSelections} entity.
   */
  declare royaltyAgreementHeaderProductSelections: RoyaltyAgreementHeaderProductSelections<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare expenseDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link RoyaltyAgreementLines} entity.
   */
  declare royaltyAgreementLines: RoyaltyAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link RoyaltyAgreementHeaderProductSelectionsV2} entity.
   */
  declare royaltyAgreementHeaderProductSelectionsV2: RoyaltyAgreementHeaderProductSelectionsV2<T>[];

  constructor(_entityApi: RoyaltyAgreementHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface RoyaltyAgreementHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  royaltyAgreementId: DeserializedType<T, 'Edm.String'>;
  defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  defaultSalesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  royaltyAccrualMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  salesCumulationMethodCustomizedPeriodType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  royaltyBreakBasis?: McrRoyaltyLineBreakType | null;
  defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isApprovalRequired?: NoYes | null;
  agreementNote?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitSymbolType?: McrRoyaltyUnitType | null;
  isValidated?: NoYes | null;
  salesUnitSymbolOption?: McrRoyaltyUomOption | null;
  salesCumulationMethod?: McrRoyaltyCumulationPeriod | null;
  royaltyExpenseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultCalculationSearchDateType?: McrTradeCustCalcDates | null;
  lineAmountBasis?: McrRoyaltyTakenFrom | null;
  defaultVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  validatingWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  royaltyAgreementHeaderProductSelections: RoyaltyAgreementHeaderProductSelectionsType<T>[];
  expenseDimensionCombination?: DimensionCombinationsType<T> | null;
  royaltyAgreementLines: RoyaltyAgreementLinesType<T>[];
  royaltyAgreementHeaderProductSelectionsV2: RoyaltyAgreementHeaderProductSelectionsV2Type<T>[];
}
