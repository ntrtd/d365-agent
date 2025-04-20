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
import type { LtmCustTaxesAreaDetailsApi } from './LtmCustTaxesAreaDetailsApi';
import { NoYes } from './NoYes';
import { LtmTaxesFilter } from './LtmTaxesFilter';
import { LtmTaxOperationType } from './LtmTaxOperationType';

/**
 * This class represents the entity "LTMCustTaxesAreaDetails" of service "d365_metadata".
 */
export class LtmCustTaxesAreaDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmCustTaxesAreaDetailsType<T>
{
  /**
   * Technical entity name for LtmCustTaxesAreaDetails.
   */
  static override _entityName = 'LTMCustTaxesAreaDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmCustTaxesAreaDetails entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountNum',
    'CountyId',
    'StateId',
    'CountryRegionId',
    'TaxCode',
    'ToDate',
    'FromDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Num.
   */
  declare accountNum: DeserializedType<T, 'Edm.String'>;
  /**
   * County Id.
   */
  declare countyId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Value.
   */
  declare taxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher Selection.
   * @nullable
   */
  declare voucherSelection?: NoYes | null;
  /**
   * Publication Date.
   */
  declare publicationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Taxes Filter.
   * @nullable
   */
  declare taxesFilter?: LtmTaxesFilter | null;
  /**
   * Enable Reduction.
   * @nullable
   */
  declare enableReduction?: NoYes | null;
  /**
   * Tax Reduction.
   */
  declare taxReduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Enable Value.
   * @nullable
   */
  declare enableValue?: NoYes | null;
  /**
   * Operation Type.
   * @nullable
   */
  declare operationType?: LtmTaxOperationType | null;

  constructor(_entityApi: LtmCustTaxesAreaDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmCustTaxesAreaDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountNum: DeserializedType<T, 'Edm.String'>;
  countyId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxValue: DeserializedType<T, 'Edm.Decimal'>;
  voucherSelection?: NoYes | null;
  publicationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxesFilter?: LtmTaxesFilter | null;
  enableReduction?: NoYes | null;
  taxReduction: DeserializedType<T, 'Edm.Decimal'>;
  enableValue?: NoYes | null;
  operationType?: LtmTaxOperationType | null;
}
