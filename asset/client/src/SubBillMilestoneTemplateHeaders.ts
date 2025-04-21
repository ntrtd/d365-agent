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
import type { SubBillMilestoneTemplateHeadersApi } from './SubBillMilestoneTemplateHeadersApi';
import { SubBillAllocationMethod } from './SubBillAllocationMethod';
import {
  SubBillMilestoneTemplateLines,
  SubBillMilestoneTemplateLinesType
} from './SubBillMilestoneTemplateLines';

/**
 * This class represents the entity "SubBillMilestoneTemplateHeaders" of service "d365_metadata".
 */
export class SubBillMilestoneTemplateHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillMilestoneTemplateHeadersType<T>
{
  /**
   * Technical entity name for SubBillMilestoneTemplateHeaders.
   */
  static override _entityName = 'SubBillMilestoneTemplateHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillMilestoneTemplateHeaders entity.
   */
  static _keys = ['dataAreaId', 'MilestoneTemplate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Milestone Template.
   */
  declare milestoneTemplate: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation Method.
   * @nullable
   */
  declare allocationMethod?: SubBillAllocationMethod | null;
  /**
   * Total Amount.
   */
  declare totalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SubBillMilestoneTemplateLines} entity.
   */
  declare relatedToSubBillMilestoneTemplateHeaderEntity: SubBillMilestoneTemplateLines<T>[];

  constructor(_entityApi: SubBillMilestoneTemplateHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillMilestoneTemplateHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  milestoneTemplate: DeserializedType<T, 'Edm.String'>;
  allocationMethod?: SubBillAllocationMethod | null;
  totalAmount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  relatedToSubBillMilestoneTemplateHeaderEntity: SubBillMilestoneTemplateLinesType<T>[];
}
