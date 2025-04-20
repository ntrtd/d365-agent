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
import type { SubBillDeferralEventTemplateTablesApi } from './SubBillDeferralEventTemplateTablesApi';
import { NoYes } from './NoYes';
import { SubBillDeferralEventAllocationType } from './SubBillDeferralEventAllocationType';
import {
  SubBillDeferralEventTemplateLines,
  SubBillDeferralEventTemplateLinesType
} from './SubBillDeferralEventTemplateLines';

/**
 * This class represents the entity "SubBillDeferralEventTemplateTables" of service "d365_metadata".
 */
export class SubBillDeferralEventTemplateTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralEventTemplateTablesType<T>
{
  /**
   * Technical entity name for SubBillDeferralEventTemplateTables.
   */
  static override _entityName = 'SubBillDeferralEventTemplateTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralEventTemplateTables entity.
   */
  static _keys = ['dataAreaId', 'Template'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Template.
   */
  declare template: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Account Display Value.
   * @nullable
   */
  declare expirationAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Separate Events Per Unit.
   * @nullable
   */
  declare separateEventsPerUnit?: NoYes | null;
  /**
   * Allocation Type.
   * @nullable
   */
  declare allocationType?: SubBillDeferralEventAllocationType | null;
  /**
   * One-to-many navigation property to the {@link SubBillDeferralEventTemplateLines} entity.
   */
  declare relatedToSubBillDeferralEventTemplateTableEntity: SubBillDeferralEventTemplateLines<T>[];

  constructor(_entityApi: SubBillDeferralEventTemplateTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralEventTemplateTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  template: DeserializedType<T, 'Edm.String'>;
  expirationAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  separateEventsPerUnit?: NoYes | null;
  allocationType?: SubBillDeferralEventAllocationType | null;
  relatedToSubBillDeferralEventTemplateTableEntity: SubBillDeferralEventTemplateLinesType<T>[];
}
