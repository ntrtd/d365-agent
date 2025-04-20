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
import type { SubBillDeferralTemplateLinesApi } from './SubBillDeferralTemplateLinesApi';
import { SubBillDeferralPeriodType } from './SubBillDeferralPeriodType';
import {
  SubBillDeferralTemplateTables,
  SubBillDeferralTemplateTablesType
} from './SubBillDeferralTemplateTables';

/**
 * This class represents the entity "SubBillDeferralTemplateLines" of service "d365_metadata".
 */
export class SubBillDeferralTemplateLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralTemplateLinesType<T>
{
  /**
   * Technical entity name for SubBillDeferralTemplateLines.
   */
  static override _entityName = 'SubBillDeferralTemplateLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralTemplateLines entity.
   */
  static _keys = ['dataAreaId', 'Template', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Template.
   */
  declare template: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period Type.
   * @nullable
   */
  declare periodType?: SubBillDeferralPeriodType | null;
  /**
   * Length.
   */
  declare length: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link SubBillDeferralTemplateTables} entity.
   */
  declare subBillDeferralTemplateTableEntity?: SubBillDeferralTemplateTables<T> | null;

  constructor(_entityApi: SubBillDeferralTemplateLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralTemplateLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  template: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  periodType?: SubBillDeferralPeriodType | null;
  length: DeserializedType<T, 'Edm.Int32'>;
  subBillDeferralTemplateTableEntity?: SubBillDeferralTemplateTablesType<T> | null;
}
