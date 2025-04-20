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
import type { SubBillDeferralEventTemplateLinesApi } from './SubBillDeferralEventTemplateLinesApi';
import { NoYes } from './NoYes';
import {
  SubBillDeferralEventTemplateTables,
  SubBillDeferralEventTemplateTablesType
} from './SubBillDeferralEventTemplateTables';

/**
 * This class represents the entity "SubBillDeferralEventTemplateLines" of service "d365_metadata".
 */
export class SubBillDeferralEventTemplateLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralEventTemplateLinesType<T>
{
  /**
   * Technical entity name for SubBillDeferralEventTemplateLines.
   */
  static override _entityName = 'SubBillDeferralEventTemplateLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralEventTemplateLines entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognition Account Display Value.
   * @nullable
   */
  declare recognitionAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Months To Expiration.
   */
  declare monthsToExpiration: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Recognize On Post.
   * @nullable
   */
  declare recognizeOnPost?: NoYes | null;
  /**
   * Allocation Percentage.
   */
  declare allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link SubBillDeferralEventTemplateTables} entity.
   */
  declare subBillDeferralEventTemplateTableEntity?: SubBillDeferralEventTemplateTables<T> | null;

  constructor(_entityApi: SubBillDeferralEventTemplateLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralEventTemplateLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  template: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  recognitionAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  monthsToExpiration: DeserializedType<T, 'Edm.Int32'>;
  recognizeOnPost?: NoYes | null;
  allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralEventTemplateTableEntity?: SubBillDeferralEventTemplateTablesType<T> | null;
}
