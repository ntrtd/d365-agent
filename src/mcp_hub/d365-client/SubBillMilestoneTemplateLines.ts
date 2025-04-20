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
import type { SubBillMilestoneTemplateLinesApi } from './SubBillMilestoneTemplateLinesApi';
import {
  SubBillMilestoneTemplateHeaders,
  SubBillMilestoneTemplateHeadersType
} from './SubBillMilestoneTemplateHeaders';

/**
 * This class represents the entity "SubBillMilestoneTemplateLines" of service "d365_metadata".
 */
export class SubBillMilestoneTemplateLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillMilestoneTemplateLinesType<T>
{
  /**
   * Technical entity name for SubBillMilestoneTemplateLines.
   */
  static override _entityName = 'SubBillMilestoneTemplateLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillMilestoneTemplateLines entity.
   */
  static _keys = ['dataAreaId', 'MilestoneTemplate', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Milestone Template.
   */
  declare milestoneTemplate: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link SubBillMilestoneTemplateHeaders} entity.
   */
  declare subBillMilestoneTemplateHeaderEntity?: SubBillMilestoneTemplateHeaders<T> | null;

  constructor(_entityApi: SubBillMilestoneTemplateLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillMilestoneTemplateLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  milestoneTemplate: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  subBillMilestoneTemplateHeaderEntity?: SubBillMilestoneTemplateHeadersType<T> | null;
}
