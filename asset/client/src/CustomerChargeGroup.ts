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
import type { CustomerChargeGroupApi } from './CustomerChargeGroupApi';
import {
  SalesAutomaticSalesDocumentHeaderTaxCharges,
  SalesAutomaticSalesDocumentHeaderTaxChargesType
} from './SalesAutomaticSalesDocumentHeaderTaxCharges';
import { BankAccounts, BankAccountsType } from './BankAccounts';

/**
 * This class represents the entity "CustomerChargeGroup" of service "d365_metadata".
 */
export class CustomerChargeGroup<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerChargeGroupType<T>
{
  /**
   * Technical entity name for CustomerChargeGroup.
   */
  static override _entityName = 'CustomerChargeGroup';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerChargeGroup entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SalesAutomaticSalesDocumentHeaderTaxCharges} entity.
   */
  declare salesChargeCustomerGroups: SalesAutomaticSalesDocumentHeaderTaxCharges<T>[];
  /**
   * One-to-many navigation property to the {@link BankAccounts} entity.
   */
  declare bankAccount: BankAccounts<T>[];

  constructor(_entityApi: CustomerChargeGroupApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerChargeGroupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  salesChargeCustomerGroups: SalesAutomaticSalesDocumentHeaderTaxChargesType<T>[];
  bankAccount: BankAccountsType<T>[];
}
