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
import type { CustomerSearchFieldsApi } from './CustomerSearchFieldsApi';
import { RetailCustomerSearchFieldEnum } from './RetailCustomerSearchFieldEnum';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CustomerSearchFields" of service "d365_metadata".
 */
export class CustomerSearchFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerSearchFieldsType<T>
{
  /**
   * Technical entity name for CustomerSearchFields.
   */
  static override _entityName = 'CustomerSearchFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerSearchFields entity.
   */
  static _keys = ['RetailCustomerSearchFieldEnumLabel'];
  /**
   * Retail Customer Search Field Enum Label.
   */
  declare retailCustomerSearchFieldEnumLabel: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Customer Search Field Enum Value.
   * @nullable
   */
  declare retailCustomerSearchFieldEnumValue?: RetailCustomerSearchFieldEnum | null;
  /**
   * Can Be Refined.
   * @nullable
   */
  declare canBeRefined?: NoYes | null;
  /**
   * Is Shortcut.
   * @nullable
   */
  declare isShortcut?: NoYes | null;

  constructor(_entityApi: CustomerSearchFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerSearchFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailCustomerSearchFieldEnumLabel: DeserializedType<T, 'Edm.String'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  retailCustomerSearchFieldEnumValue?: RetailCustomerSearchFieldEnum | null;
  canBeRefined?: NoYes | null;
  isShortcut?: NoYes | null;
}
