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
import type { TaxIcpDeclarationsApi } from './TaxIcpDeclarationsApi';
import { NoYes } from './NoYes';
import { Listcode } from './Listcode';
import { Timezone } from './Timezone';
import { TaxEvatStatus } from './TaxEvatStatus';
import { ContactPersonType } from './ContactPersonType';

/**
 * This class represents the entity "TaxICPDeclarations" of service "d365_metadata".
 */
export class TaxIcpDeclarations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxIcpDeclarationsType<T>
{
  /**
   * Technical entity name for TaxIcpDeclarations.
   */
  static override _entityName = 'TaxICPDeclarations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxIcpDeclarations entity.
   */
  static _keys = ['dataAreaId', 'ID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Correction Use Zip Plus 4.
   * @nullable
   */
  declare correctionUseZipPlus4?: NoYes | null;
  /**
   * Contact Initials.
   * @nullable
   */
  declare contactInitials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Triangular Trade.
   * @nullable
   */
  declare triangularTrade?: Listcode | null;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Time Zone.
   * @nullable
   */
  declare correctionTimeZone?: Timezone | null;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: TaxEvatStatus | null;
  /**
   * Use Zip Plus 4.
   * @nullable
   */
  declare useZipPlus4?: NoYes | null;
  /**
   * Correction Parent Country Region.
   * @nullable
   */
  declare correctionParentCountryRegion?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Correction Country Region Id.
   * @nullable
   */
  declare correctionCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Intra Comm Table Nl.
   */
  declare taxIntraCommTableNl: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Date Of Creation.
   * @nullable
   */
  declare dateOfCreation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Name.
   * @nullable
   */
  declare shortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Tax Period.
   */
  declare correctionTaxPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Amount.
   */
  declare correctionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Correction Tax Intra Comm Table Nl.
   */
  declare correctionTaxIntraCommTableNl: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Correction Service Amount.
   */
  declare correctionServiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * Correction Short Name.
   * @nullable
   */
  declare correctionShortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version.
   * @nullable
   */
  declare version?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Format.
   * @nullable
   */
  declare addressFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Triangular Trade.
   * @nullable
   */
  declare correctionTriangularTrade?: Listcode | null;
  /**
   * Correction Vat Num.
   * @nullable
   */
  declare correctionVatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Routing Number.
   * @nullable
   */
  declare routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Num.
   * @nullable
   */
  declare vatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Id.
   * @nullable
   */
  declare contactId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Language Id.
   * @nullable
   */
  declare correctionLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Tax Id.
   * @nullable
   */
  declare companyTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message.
   * @nullable
   */
  declare message?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Type.
   * @nullable
   */
  declare contactType?: ContactPersonType | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Country Region.
   * @nullable
   */
  declare parentCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Is Ocode.
   * @nullable
   */
  declare correctionIsOcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Prefix.
   * @nullable
   */
  declare contactPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Ocode.
   * @nullable
   */
  declare isOcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Country Region.
   * @nullable
   */
  declare correctionCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Amount.
   */
  declare serviceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Address Format.
   * @nullable
   */
  declare correctionAddressFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Long Name.
   * @nullable
   */
  declare longName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Year.
   */
  declare year: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Correction Long Name.
   * @nullable
   */
  declare correctionLongName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Group.
   * @nullable
   */
  declare fiscalGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Currency Code.
   * @nullable
   */
  declare correctionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Id.
   * @nullable
   */
  declare messageId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxIcpDeclarationsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxIcpDeclarationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  correctionUseZipPlus4?: NoYes | null;
  contactInitials?: DeserializedType<T, 'Edm.String'> | null;
  triangularTrade?: Listcode | null;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
  correctionTimeZone?: Timezone | null;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  status?: TaxEvatStatus | null;
  useZipPlus4?: NoYes | null;
  correctionParentCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  correctionCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  taxIntraCommTableNl: DeserializedType<T, 'Edm.Int64'>;
  dateOfCreation?: DeserializedType<T, 'Edm.String'> | null;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  correctionTaxPeriod: DeserializedType<T, 'Edm.Int32'>;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  correctionAmount: DeserializedType<T, 'Edm.Decimal'>;
  correctionTaxIntraCommTableNl: DeserializedType<T, 'Edm.Int64'>;
  correctionServiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: Timezone | null;
  correctionShortName?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.String'> | null;
  addressFormat?: DeserializedType<T, 'Edm.String'> | null;
  correctionTriangularTrade?: Listcode | null;
  correctionVatNum?: DeserializedType<T, 'Edm.String'> | null;
  routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  contactId?: DeserializedType<T, 'Edm.String'> | null;
  correctionLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  companyTaxId?: DeserializedType<T, 'Edm.String'> | null;
  message?: DeserializedType<T, 'Edm.String'> | null;
  contactType?: ContactPersonType | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  parentCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  correctionIsOcode?: DeserializedType<T, 'Edm.String'> | null;
  contactPrefix?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  isOcode?: DeserializedType<T, 'Edm.String'> | null;
  correctionCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  serviceAmount: DeserializedType<T, 'Edm.Decimal'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  correctionAddressFormat?: DeserializedType<T, 'Edm.String'> | null;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  longName?: DeserializedType<T, 'Edm.String'> | null;
  year: DeserializedType<T, 'Edm.Int32'>;
  period: DeserializedType<T, 'Edm.Int32'>;
  correctionLongName?: DeserializedType<T, 'Edm.String'> | null;
  fiscalGroup?: DeserializedType<T, 'Edm.String'> | null;
  correctionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  messageId?: DeserializedType<T, 'Edm.String'> | null;
}
