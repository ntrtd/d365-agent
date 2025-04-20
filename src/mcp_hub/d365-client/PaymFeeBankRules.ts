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
import type { PaymFeeBankRulesApi } from './PaymFeeBankRulesApi';
import { BankReconciliationMatchOperatorType } from './BankReconciliationMatchOperatorType';

/**
 * This class represents the entity "PaymFeeBankRules" of service "d365_metadata".
 */
export class PaymFeeBankRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymFeeBankRulesType<T>
{
  /**
   * Technical entity name for PaymFeeBankRules.
   */
  static override _entityName = 'PaymFeeBankRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymFeeBankRules entity.
   */
  static _keys = ['ID', 'LineId'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Bank Group.
   * @nullable
   */
  declare companyBankGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Bank Group.
   * @nullable
   */
  declare thirdPartyBankGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relation.
   * @nullable
   */
  declare relation?: BankReconciliationMatchOperatorType | null;

  constructor(_entityApi: PaymFeeBankRulesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymFeeBankRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  companyBankGroup?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyBankGroup?: DeserializedType<T, 'Edm.String'> | null;
  relation?: BankReconciliationMatchOperatorType | null;
}
