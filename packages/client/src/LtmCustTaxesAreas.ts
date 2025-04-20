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
import type { LtmCustTaxesAreasApi } from './LtmCustTaxesAreasApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMCustTaxesAreas" of service "d365_metadata".
 */
export class LtmCustTaxesAreas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmCustTaxesAreasType<T>
{
  /**
   * Technical entity name for LtmCustTaxesAreas.
   */
  static override _entityName = 'LTMCustTaxesAreas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmCustTaxesAreas entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountNum',
    'CountryRegionId',
    'StateId',
    'CountyId',
    'TaxGroup'
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
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * County Id.
   */
  declare countyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group.
   */
  declare taxGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Free Zone.
   * @nullable
   */
  declare taxFreeZone?: NoYes | null;

  constructor(_entityApi: LtmCustTaxesAreasApi<T>) {
    super(_entityApi);
  }
}

export interface LtmCustTaxesAreasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountNum: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countyId: DeserializedType<T, 'Edm.String'>;
  taxGroup: DeserializedType<T, 'Edm.String'>;
  taxFreeZone?: NoYes | null;
}
