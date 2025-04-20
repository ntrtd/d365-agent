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
import type { AutoNumberingTablesApi } from './AutoNumberingTablesApi';
import { LtInvoiceAllGroupUser } from './LtInvoiceAllGroupUser';
import { DocNumberingModuleW } from './DocNumberingModuleW';
import { NoYes } from './NoYes';
import { LtInvoiceAutoNumberingType } from './LtInvoiceAutoNumberingType';

/**
 * This class represents the entity "AutoNumberingTables" of service "d365_metadata".
 */
export class AutoNumberingTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AutoNumberingTablesType<T>
{
  /**
   * Technical entity name for AutoNumberingTables.
   */
  static override _entityName = 'AutoNumberingTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AutoNumberingTables entity.
   */
  static _keys = ['dataAreaId', 'Numbering'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Numbering.
   */
  declare numbering: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: LtInvoiceAllGroupUser | null;
  /**
   * Module.
   * @nullable
   */
  declare module?: DocNumberingModuleW | null;
  /**
   * Continue.
   * @nullable
   */
  declare continue?: NoYes | null;
  /**
   * Retail.
   * @nullable
   */
  declare retail?: NoYes | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LtInvoiceAutoNumberingType | null;
  /**
   * Code.
   * @nullable
   */
  declare code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Date.
   */
  declare lastDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: AutoNumberingTablesApi<T>) {
    super(_entityApi);
  }
}

export interface AutoNumberingTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  numbering: DeserializedType<T, 'Edm.String'>;
  accountCode?: LtInvoiceAllGroupUser | null;
  module?: DocNumberingModuleW | null;
  continue?: NoYes | null;
  retail?: NoYes | null;
  type?: LtInvoiceAutoNumberingType | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  lastDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
