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
import type { SubBillDeferralAccountTablesApi } from './SubBillDeferralAccountTablesApi';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "SubBillDeferralAccountTables" of service "d365_metadata".
 */
export class SubBillDeferralAccountTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralAccountTablesType<T>
{
  /**
   * Technical entity name for SubBillDeferralAccountTables.
   */
  static override _entityName = 'SubBillDeferralAccountTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralAccountTables entity.
   */
  static _keys = [
    'dataAreaId',
    'TransactionType',
    'AccountCode',
    'AccountRelation',
    'DeferralAccountDisplayValue'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: SubBillDeferralTransactionType | null;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Deferral Account Display Value.
   */
  declare deferralAccountDisplayValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Straight Line Template.
   * @nullable
   */
  declare straightLineTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognition Offset Account.
   * @nullable
   */
  declare recognitionOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Event Based Template.
   * @nullable
   */
  declare eventBasedTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognition Account Display Value.
   * @nullable
   */
  declare recognitionAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Short Term Account.
   * @nullable
   */
  declare shortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initial Recognition Account.
   * @nullable
   */
  declare initialRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SubBillDeferralAccountTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralAccountTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionType?: SubBillDeferralTransactionType | null;
  accountCode?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  deferralAccountDisplayValue: DeserializedType<T, 'Edm.String'>;
  straightLineTemplate?: DeserializedType<T, 'Edm.String'> | null;
  recognitionOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  eventBasedTemplate?: DeserializedType<T, 'Edm.String'> | null;
  recognitionAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  shortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  initialRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
}
