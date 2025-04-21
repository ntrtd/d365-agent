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
import type { RoyaltyAgreementLinesApi } from './RoyaltyAgreementLinesApi';
import { McrTradeCustCalcDates } from './McrTradeCustCalcDates';
import {
  RoyaltyAgreementLineProductSelections,
  RoyaltyAgreementLineProductSelectionsType
} from './RoyaltyAgreementLineProductSelections';
import {
  RoyaltyAgreementLineAmounts,
  RoyaltyAgreementLineAmountsType
} from './RoyaltyAgreementLineAmounts';
import {
  RoyaltyAgreementLineProductSelectionsV2,
  RoyaltyAgreementLineProductSelectionsV2Type
} from './RoyaltyAgreementLineProductSelectionsV2';
import {
  RoyaltyAgreementHeaders,
  RoyaltyAgreementHeadersType
} from './RoyaltyAgreementHeaders';

/**
 * This class represents the entity "RoyaltyAgreementLines" of service "d365_metadata".
 */
export class RoyaltyAgreementLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RoyaltyAgreementLinesType<T>
{
  /**
   * Technical entity name for RoyaltyAgreementLines.
   */
  static override _entityName = 'RoyaltyAgreementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RoyaltyAgreementLines entity.
   */
  static _keys = ['dataAreaId', 'RoyaltyAgreementLineId', 'RoyaltyAgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Royalty Agreement Line Id.
   */
  declare royaltyAgreementLineId: DeserializedType<T, 'Edm.String'>;
  /**
   * Royalty Agreement Id.
   */
  declare royaltyAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Agreement Line Notes.
   * @nullable
   */
  declare agreementLineNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Agreement Line Description.
   * @nullable
   */
  declare agreementLineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Search Date Type.
   * @nullable
   */
  declare calculationSearchDateType?: McrTradeCustCalcDates | null;
  /**
   * One-to-many navigation property to the {@link RoyaltyAgreementLineProductSelections} entity.
   */
  declare royaltyAgreementLineProductSelections: RoyaltyAgreementLineProductSelections<T>[];
  /**
   * One-to-many navigation property to the {@link RoyaltyAgreementLineAmounts} entity.
   */
  declare royaltyAgreementLineAmounts: RoyaltyAgreementLineAmounts<T>[];
  /**
   * One-to-many navigation property to the {@link RoyaltyAgreementLineProductSelectionsV2} entity.
   */
  declare royaltyAgreementLineProductSelectionsV2: RoyaltyAgreementLineProductSelectionsV2<T>[];
  /**
   * One-to-one navigation property to the {@link RoyaltyAgreementHeaders} entity.
   */
  declare royaltyAgreementHeader?: RoyaltyAgreementHeaders<T> | null;

  constructor(_entityApi: RoyaltyAgreementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RoyaltyAgreementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  royaltyAgreementLineId: DeserializedType<T, 'Edm.String'>;
  royaltyAgreementId: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agreementLineNotes?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agreementLineDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  calculationSearchDateType?: McrTradeCustCalcDates | null;
  royaltyAgreementLineProductSelections: RoyaltyAgreementLineProductSelectionsType<T>[];
  royaltyAgreementLineAmounts: RoyaltyAgreementLineAmountsType<T>[];
  royaltyAgreementLineProductSelectionsV2: RoyaltyAgreementLineProductSelectionsV2Type<T>[];
  royaltyAgreementHeader?: RoyaltyAgreementHeadersType<T> | null;
}
