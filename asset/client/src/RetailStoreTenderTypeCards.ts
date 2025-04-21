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
import type { RetailStoreTenderTypeCardsApi } from './RetailStoreTenderTypeCardsApi';
import { NoYes } from './NoYes';
import { RetailLedgerBank } from './RetailLedgerBank';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "RetailStoreTenderTypeCards" of service "d365_metadata".
 */
export class RetailStoreTenderTypeCards<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreTenderTypeCardsType<T>
{
  /**
   * Technical entity name for RetailStoreTenderTypeCards.
   */
  static override _entityName = 'RetailStoreTenderTypeCards';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreTenderTypeCards entity.
   */
  static _keys = [
    'dataAreaId',
    'TenderTypeId',
    'CardTypeId',
    'OMOperatingUnitNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tender Type Id.
   */
  declare tenderTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Type Id.
   */
  declare cardTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Fee Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare cardFeeOffsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Card Fee Max.
   */
  declare cardFeeMax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Back Limit.
   */
  declare cashBackLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Card Inquiry Fee.
   */
  declare cardInquiryFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Same Card Allowed.
   * @nullable
   */
  declare sameCardAllowed?: NoYes | null;
  /**
   * Is Pin Required.
   * @nullable
   */
  declare isPinRequired?: NoYes | null;
  /**
   * Manual Authorization.
   * @nullable
   */
  declare manualAuthorization?: NoYes | null;
  /**
   * Broker Id.
   * @nullable
   */
  declare brokerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Locally.
   * @nullable
   */
  declare processLocally?: NoYes | null;
  /**
   * Card Fee Ledger Dimension Display Value.
   * @nullable
   */
  declare cardFeeLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Max Normal Difference Amount.
   */
  declare maxNormalDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Enter Fleet Info.
   * @nullable
   */
  declare enterFleetInfo?: NoYes | null;
  /**
   * Check Modulus.
   * @nullable
   */
  declare checkModulus?: NoYes | null;
  /**
   * Difference Acc Ledger Dimension Display Value.
   * @nullable
   */
  declare differenceAccLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Expiration Date Required.
   * @nullable
   */
  declare isExpirationDateRequired?: NoYes | null;
  /**
   * Card Fee.
   */
  declare cardFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Card Fee Min.
   */
  declare cardFeeMin: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Card Number Swiped.
   * @nullable
   */
  declare cardNumberSwiped?: NoYes | null;
  /**
   * Preapproval Duration Days.
   */
  declare preapprovalDurationDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Diff Acc Big Diff Ledger Dimension Display Value.
   * @nullable
   */
  declare diffAccBigDiffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Allow Manual Input.
   * @nullable
   */
  declare allowManualInput?: NoYes | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: RetailLedgerBank | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Counting Required.
   * @nullable
   */
  declare countingRequired?: NoYes | null;
  /**
   * Check Expired Date.
   * @nullable
   */
  declare checkExpiredDate?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: RetailStoreTenderTypeCardsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreTenderTypeCardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tenderTypeId: DeserializedType<T, 'Edm.String'>;
  cardTypeId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  cardFeeOffsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  cardFeeMax: DeserializedType<T, 'Edm.Decimal'>;
  cashBackLimit: DeserializedType<T, 'Edm.Decimal'>;
  cardInquiryFee: DeserializedType<T, 'Edm.Decimal'>;
  sameCardAllowed?: NoYes | null;
  isPinRequired?: NoYes | null;
  manualAuthorization?: NoYes | null;
  brokerId?: DeserializedType<T, 'Edm.String'> | null;
  processLocally?: NoYes | null;
  cardFeeLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  maxNormalDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  enterFleetInfo?: NoYes | null;
  checkModulus?: NoYes | null;
  differenceAccLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isExpirationDateRequired?: NoYes | null;
  cardFee: DeserializedType<T, 'Edm.Decimal'>;
  cardFeeMin: DeserializedType<T, 'Edm.Decimal'>;
  cardNumberSwiped?: NoYes | null;
  preapprovalDurationDays: DeserializedType<T, 'Edm.Int32'>;
  diffAccBigDiffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  allowManualInput?: NoYes | null;
  accountType?: RetailLedgerBank | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  countingRequired?: NoYes | null;
  checkExpiredDate?: NoYes | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
