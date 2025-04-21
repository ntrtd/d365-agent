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
import type { PsnCashPositionColumnSetupApi } from './PsnCashPositionColumnSetupApi';

/**
 * This class represents the entity "PSNCashPositionColumnSetup" of service "d365_metadata".
 */
export class PsnCashPositionColumnSetup<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PsnCashPositionColumnSetupType<T>
{
  /**
   * Technical entity name for PsnCashPositionColumnSetup.
   */
  static override _entityName = 'PSNCashPositionColumnSetup';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PsnCashPositionColumnSetup entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Column Three Label.
   * @nullable
   */
  declare columnThreeLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Four Range.
   * @nullable
   */
  declare columnFourRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Five Label.
   * @nullable
   */
  declare columnFiveLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Seven Label.
   * @nullable
   */
  declare columnSevenLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Eight Label.
   * @nullable
   */
  declare columnEightLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Two Range.
   * @nullable
   */
  declare columnTwoRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Four Debit Range.
   * @nullable
   */
  declare columnFourDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Two Debit Range.
   * @nullable
   */
  declare columnTwoDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column One Range.
   * @nullable
   */
  declare columnOneRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Three Credit Range.
   * @nullable
   */
  declare columnThreeCreditRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Six Debit Range.
   * @nullable
   */
  declare columnSixDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Four Credit Range.
   * @nullable
   */
  declare columnFourCreditRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Six Range.
   * @nullable
   */
  declare columnSixRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Six Credit Range.
   * @nullable
   */
  declare columnSixCreditRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Three Debit Range.
   * @nullable
   */
  declare columnThreeDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Six Label.
   * @nullable
   */
  declare columnSixLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Four Label.
   * @nullable
   */
  declare columnFourLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column One Label.
   * @nullable
   */
  declare columnOneLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Seven Range.
   * @nullable
   */
  declare columnSevenRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Three Range.
   * @nullable
   */
  declare columnThreeRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Two Label.
   * @nullable
   */
  declare columnTwoLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Seven Debit Range.
   * @nullable
   */
  declare columnSevenDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Two Credit Range.
   * @nullable
   */
  declare columnTwoCreditRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Seven Credit Range.
   * @nullable
   */
  declare columnSevenCreditRange?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PsnCashPositionColumnSetupApi<T>) {
    super(_entityApi);
  }
}

export interface PsnCashPositionColumnSetupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  columnThreeLabel?: DeserializedType<T, 'Edm.String'> | null;
  columnFourRange?: DeserializedType<T, 'Edm.String'> | null;
  columnFiveLabel?: DeserializedType<T, 'Edm.String'> | null;
  columnSevenLabel?: DeserializedType<T, 'Edm.String'> | null;
  columnEightLabel?: DeserializedType<T, 'Edm.String'> | null;
  columnTwoRange?: DeserializedType<T, 'Edm.String'> | null;
  columnFourDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  columnTwoDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  columnOneRange?: DeserializedType<T, 'Edm.String'> | null;
  columnThreeCreditRange?: DeserializedType<T, 'Edm.String'> | null;
  columnSixDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  columnFourCreditRange?: DeserializedType<T, 'Edm.String'> | null;
  columnSixRange?: DeserializedType<T, 'Edm.String'> | null;
  columnSixCreditRange?: DeserializedType<T, 'Edm.String'> | null;
  columnThreeDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  columnSixLabel?: DeserializedType<T, 'Edm.String'> | null;
  columnFourLabel?: DeserializedType<T, 'Edm.String'> | null;
  columnOneLabel?: DeserializedType<T, 'Edm.String'> | null;
  columnSevenRange?: DeserializedType<T, 'Edm.String'> | null;
  columnThreeRange?: DeserializedType<T, 'Edm.String'> | null;
  columnTwoLabel?: DeserializedType<T, 'Edm.String'> | null;
  columnSevenDebitRange?: DeserializedType<T, 'Edm.String'> | null;
  columnTwoCreditRange?: DeserializedType<T, 'Edm.String'> | null;
  columnSevenCreditRange?: DeserializedType<T, 'Edm.String'> | null;
}
