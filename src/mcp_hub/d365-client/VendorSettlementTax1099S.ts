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
import type { VendorSettlementTax1099SApi } from './VendorSettlementTax1099SApi';
import { Tax1099Type } from './Tax1099Type';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "VendorSettlementTax1099s" of service "d365_metadata".
 */
export class VendorSettlementTax1099S<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorSettlementTax1099SType<T>
{
  /**
   * Technical entity name for VendorSettlementTax1099S.
   */
  static override _entityName = 'VendorSettlementTax1099s';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorSettlementTax1099S entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * G 10 A State.
   * @nullable
   */
  declare g10AState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * S 3 Address Or Legal Description.
   * @nullable
   */
  declare s3AddressOrLegalDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax 1099 Type.
   * @nullable
   */
  declare tax1099Type?: Tax1099Type | null;
  /**
   * S 1 Date Of Closing.
   */
  declare s1DateOfClosing: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Settled State 1099.
   */
  declare settledState1099: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * G 8 Trade Or Business Income.
   * @nullable
   */
  declare g8TradeOrBusinessIncome?: NoYes | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * S 4 Transferor Recieved Property.
   * @nullable
   */
  declare s4TransferorRecievedProperty?: NoYes | null;
  /**
   * Settled Federal 1099.
   */
  declare settledFederal1099: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 Box Id.
   * @nullable
   */
  declare tax1099BoxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * G 11 State Income Tax Withheld.
   */
  declare g11StateIncomeTaxWithheld: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * G 3 Tax Year.
   */
  declare g3TaxYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * S 5 Buyer Part Of Real Estate Tax.
   */
  declare s5BuyerPartOfRealEstateTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * G 10 B State Id Number.
   * @nullable
   */
  declare g10BStateIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psn Tax 1099 By Main Account.
   * @nullable
   */
  declare psnTax1099ByMainAccount?: NoYes | null;

  constructor(_entityApi: VendorSettlementTax1099SApi<T>) {
    super(_entityApi);
  }
}

export interface VendorSettlementTax1099SType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  g10AState?: DeserializedType<T, 'Edm.String'> | null;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  s3AddressOrLegalDescription?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Type?: Tax1099Type | null;
  s1DateOfClosing: DeserializedType<T, 'Edm.DateTimeOffset'>;
  settledState1099: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  g8TradeOrBusinessIncome?: NoYes | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  s4TransferorRecievedProperty?: NoYes | null;
  settledFederal1099: DeserializedType<T, 'Edm.Decimal'>;
  tax1099BoxId?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  g11StateIncomeTaxWithheld: DeserializedType<T, 'Edm.Decimal'>;
  g3TaxYear: DeserializedType<T, 'Edm.Int32'>;
  s5BuyerPartOfRealEstateTax: DeserializedType<T, 'Edm.Decimal'>;
  g10BStateIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  psnTax1099ByMainAccount?: NoYes | null;
}
