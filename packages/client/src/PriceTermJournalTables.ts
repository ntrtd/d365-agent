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
import type { PriceTermJournalTablesApi } from './PriceTermJournalTablesApi';
import { TableGroupAll } from './TableGroupAll';
import { GupVendCust } from './GupVendCust';
import { GupDisabledEnabled } from './GupDisabledEnabled';
import {
  PriceTermJournalTrans,
  PriceTermJournalTransType
} from './PriceTermJournalTrans';

/**
 * This class represents the entity "PriceTermJournalTables" of service "d365_metadata".
 */
export class PriceTermJournalTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceTermJournalTablesType<T>
{
  /**
   * Technical entity name for PriceTermJournalTables.
   */
  static override _entityName = 'PriceTermJournalTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceTermJournalTables entity.
   */
  static _keys = ['dataAreaId', 'AgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Id.
   */
  declare agreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Relation.
   * @nullable
   */
  declare accountRelation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Cust.
   * @nullable
   */
  declare vendCust?: GupVendCust | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: GupDisabledEnabled | null;
  /**
   * One-to-many navigation property to the {@link PriceTermJournalTrans} entity.
   */
  declare gupPriceTermJournalTrans: PriceTermJournalTrans<T>[];

  constructor(_entityApi: PriceTermJournalTablesApi<T>) {
    super(_entityApi);
  }
}

export interface PriceTermJournalTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agreementId: DeserializedType<T, 'Edm.String'>;
  accountRelation?: DeserializedType<T, 'Edm.String'> | null;
  accountCode?: TableGroupAll | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendCust?: GupVendCust | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  status?: GupDisabledEnabled | null;
  gupPriceTermJournalTrans: PriceTermJournalTransType<T>[];
}
