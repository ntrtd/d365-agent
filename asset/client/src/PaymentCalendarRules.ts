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
import type { PaymentCalendarRulesApi } from './PaymentCalendarRulesApi';
import { PaymCalendarModuleType } from './PaymCalendarModuleType';
import { PaymCalendarRuleType } from './PaymCalendarRuleType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PaymentCalendarRules" of service "d365_metadata".
 */
export class PaymentCalendarRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PaymentCalendarRulesType<T>
{
  /**
   * Technical entity name for PaymentCalendarRules.
   */
  static override _entityName = 'PaymentCalendarRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentCalendarRules entity.
   */
  static _keys = ['dataAreaId', 'ModuleType', 'Priority'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Module Type.
   * @nullable
   */
  declare moduleType?: PaymCalendarModuleType | null;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Document Address Priority.
   */
  declare thirdPartyDocumentAddressPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Specific Payment Terms.
   * @nullable
   */
  declare specificPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Specific Vendor Payment Method.
   * @nullable
   */
  declare specificVendorPaymentMethod?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Third Party Primary Address Priority.
   */
  declare thirdPartyPrimaryAddressPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Rule Type.
   * @nullable
   */
  declare ruleType?: PaymCalendarRuleType | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Specific Payment Calendar Name.
   * @nullable
   */
  declare specificPaymentCalendarName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Specific Customer Payment Method.
   * @nullable
   */
  declare specificCustomerPaymentMethod?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Document Bank Address Priority.
   */
  declare thirdPartyDocumentBankAddressPriority: DeserializedType<
    T,
    'Edm.Int32'
  >;

  constructor(_entityApi: PaymentCalendarRulesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentCalendarRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  moduleType?: PaymCalendarModuleType | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyDocumentAddressPriority: DeserializedType<T, 'Edm.Int32'>;
  specificPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  specificVendorPaymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyPrimaryAddressPriority: DeserializedType<T, 'Edm.Int32'>;
  ruleType?: PaymCalendarRuleType | null;
  isActive?: NoYes | null;
  specificPaymentCalendarName?: DeserializedType<T, 'Edm.String'> | null;
  specificCustomerPaymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyDocumentBankAddressPriority: DeserializedType<T, 'Edm.Int32'>;
}
