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
import type { PeriodChargeRuleCustomersApi } from './PeriodChargeRuleCustomersApi';
import { TableAll } from './TableAll';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { Warehouses, WarehousesType } from './Warehouses';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  PeriodChargeRuleLineCustomers,
  PeriodChargeRuleLineCustomersType
} from './PeriodChargeRuleLineCustomers';

/**
 * This class represents the entity "PeriodChargeRuleCustomers" of service "d365_metadata".
 */
export class PeriodChargeRuleCustomers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PeriodChargeRuleCustomersType<T>
{
  /**
   * Technical entity name for PeriodChargeRuleCustomers.
   */
  static override _entityName = 'PeriodChargeRuleCustomers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PeriodChargeRuleCustomers entity.
   */
  static _keys = ['dataAreaId', 'RuleName', 'ValidFrom'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Name.
   */
  declare ruleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Account Code.
   * @nullable
   */
  declare customerAccountCode?: TableAll | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rule Description.
   * @nullable
   */
  declare ruleDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charging Customer Account Number.
   * @nullable
   */
  declare chargingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Site Id.
   * @nullable
   */
  declare siteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare site?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare salesChargeCustomer?: CustomersV3<T> | null;
  /**
   * One-to-many navigation property to the {@link PeriodChargeRuleLineCustomers} entity.
   */
  declare periodChargeRuleLineCustomers: PeriodChargeRuleLineCustomers<T>[];

  constructor(_entityApi: PeriodChargeRuleCustomersApi<T>) {
    super(_entityApi);
  }
}

export interface PeriodChargeRuleCustomersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleName: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerAccountCode?: TableAll | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  ruleDescription?: DeserializedType<T, 'Edm.String'> | null;
  chargingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  siteId?: DeserializedType<T, 'Edm.String'> | null;
  site?: OperationalSitesType<T> | null;
  warehouse?: WarehousesType<T> | null;
  salesChargeCustomer?: CustomersV3Type<T> | null;
  periodChargeRuleLineCustomers: PeriodChargeRuleLineCustomersType<T>[];
}
