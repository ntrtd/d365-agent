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
import type { SubBillBillingScheduleGroupsApi } from './SubBillBillingScheduleGroupsApi';
import { SubBillFrequency } from './SubBillFrequency';
import { NoYes } from './NoYes';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';
import { SubBillItemType } from './SubBillItemType';
import { SubBillPricingMethod } from './SubBillPricingMethod';

/**
 * This class represents the entity "SubBillBillingScheduleGroupsCollection" of service "d365_metadata".
 */
export class SubBillBillingScheduleGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillBillingScheduleGroupsType<T>
{
  /**
   * Technical entity name for SubBillBillingScheduleGroups.
   */
  static override _entityName = 'SubBillBillingScheduleGroupsCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillBillingScheduleGroups entity.
   */
  static _keys = ['dataAreaId', 'BillingScheduleGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Schedule Group.
   */
  declare billingScheduleGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Milestone Template.
   * @nullable
   */
  declare milestoneTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lines To Add Per Renewal.
   */
  declare linesToAddPerRenewal: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Billing Frequency.
   * @nullable
   */
  declare billingFrequency?: SubBillFrequency | null;
  /**
   * Auto Renew.
   * @nullable
   */
  declare autoRenew?: NoYes | null;
  /**
   * Usage Reading Option.
   * @nullable
   */
  declare usageReadingOption?: SubBillUsageReadingOption | null;
  /**
   * Billing Interval.
   */
  declare billingInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Type.
   * @nullable
   */
  declare itemType?: SubBillItemType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Escalation.
   * @nullable
   */
  declare escalation?: NoYes | null;
  /**
   * Invoice Separately.
   * @nullable
   */
  declare invoiceSeparately?: NoYes | null;
  /**
   * Pricing Method.
   * @nullable
   */
  declare pricingMethod?: SubBillPricingMethod | null;

  constructor(_entityApi: SubBillBillingScheduleGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillBillingScheduleGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  billingScheduleGroup: DeserializedType<T, 'Edm.String'>;
  milestoneTemplate?: DeserializedType<T, 'Edm.String'> | null;
  linesToAddPerRenewal: DeserializedType<T, 'Edm.Int32'>;
  billingFrequency?: SubBillFrequency | null;
  autoRenew?: NoYes | null;
  usageReadingOption?: SubBillUsageReadingOption | null;
  billingInterval: DeserializedType<T, 'Edm.Int32'>;
  itemType?: SubBillItemType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  escalation?: NoYes | null;
  invoiceSeparately?: NoYes | null;
  pricingMethod?: SubBillPricingMethod | null;
}
