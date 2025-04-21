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
import type { PayrollTaxGroupsApi } from './PayrollTaxGroupsApi';
import { BenefitTaxRulesUs, BenefitTaxRulesUsType } from './BenefitTaxRulesUs';
import {
  PayrollTaxGroupCodes,
  PayrollTaxGroupCodesType
} from './PayrollTaxGroupCodes';

/**
 * This class represents the entity "PayrollTaxGroups" of service "d365_metadata".
 */
export class PayrollTaxGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayrollTaxGroupsType<T>
{
  /**
   * Technical entity name for PayrollTaxGroups.
   */
  static override _entityName = 'PayrollTaxGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollTaxGroups entity.
   */
  static _keys = ['GroupId'];
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
   * One-to-many navigation property to the {@link BenefitTaxRulesUs} entity.
   */
  declare benefitTaxRuleUs: BenefitTaxRulesUs<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollTaxGroupCodes} entity.
   */
  declare taxGroupCodes: PayrollTaxGroupCodes<T>[];

  constructor(_entityApi: PayrollTaxGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollTaxGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  benefitTaxRuleUs: BenefitTaxRulesUsType<T>[];
  taxGroupCodes: PayrollTaxGroupCodesType<T>[];
}
