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
import type { PovertyFundSetupsApi } from './PovertyFundSetupsApi';
import { CustVendTypeBr } from './CustVendTypeBr';
import { NoYes } from './NoYes';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "PovertyFundSetups" of service "d365_metadata".
 */
export class PovertyFundSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PovertyFundSetupsType<T>
{
  /**
   * Technical entity name for PovertyFundSetups.
   */
  static override _entityName = 'PovertyFundSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PovertyFundSetups entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountRelation',
    'ItemRelation',
    'TaxFromDate',
    'TaxToDate',
    'StateId',
    'CountryRegionId',
    'CustVendType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax From Date.
   */
  declare taxFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax To Date.
   */
  declare taxToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Vend Type.
   * @nullable
   */
  declare custVendType?: CustVendTypeBr | null;
  /**
   * Only Final User Trans.
   * @nullable
   */
  declare onlyFinalUserTrans?: NoYes | null;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Tax Percentage.
   */
  declare taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Code.
   * @nullable
   */
  declare itemCode?: TableGroupAll | null;

  constructor(_entityApi: PovertyFundSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface PovertyFundSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  taxFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  custVendType?: CustVendTypeBr | null;
  onlyFinalUserTrans?: NoYes | null;
  accountCode?: TableGroupAll | null;
  taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  itemCode?: TableGroupAll | null;
}
