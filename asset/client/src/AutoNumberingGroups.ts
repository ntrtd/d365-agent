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
import type { AutoNumberingGroupsApi } from './AutoNumberingGroupsApi';
import { DocNumberingModuleW } from './DocNumberingModuleW';
import { LtInvoiceAllGroup } from './LtInvoiceAllGroup';
import { LtInvoiceAutoNumberingType } from './LtInvoiceAutoNumberingType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AutoNumberingGroups" of service "d365_metadata".
 */
export class AutoNumberingGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AutoNumberingGroupsType<T>
{
  /**
   * Technical entity name for AutoNumberingGroups.
   */
  static override _entityName = 'AutoNumberingGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AutoNumberingGroups entity.
   */
  static _keys = ['dataAreaId', 'Module', 'AccountCode', 'Code', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Module.
   * @nullable
   */
  declare module?: DocNumberingModuleW | null;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: LtInvoiceAllGroup | null;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: LtInvoiceAutoNumberingType | null;
  /**
   * Auto Numbering.
   * @nullable
   */
  declare autoNumbering?: NoYes | null;

  constructor(_entityApi: AutoNumberingGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AutoNumberingGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  module?: DocNumberingModuleW | null;
  accountCode?: LtInvoiceAllGroup | null;
  code: DeserializedType<T, 'Edm.String'>;
  type?: LtInvoiceAutoNumberingType | null;
  autoNumbering?: NoYes | null;
}
